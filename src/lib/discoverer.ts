import { chromium, type Browser } from "playwright";
import { getSeedsForRegion, getTopBrands } from "./seeds";
import { searchMirrors, REGION_SERPER } from "./searcher";

export interface ValidatedSite {
  url: string;
  domain: string;
  brand: string;
  confidence: number;
  signals: string[];
  foundVia: "seed" | "mirror" | "snowball" | "article";
}

export type DiscoverEvent =
  | { type: "status"; message: string }
  | { type: "site_found"; site: ValidatedSite }
  | { type: "complete"; sites: ValidatedSite[] };

const BLOCKED_DOMAINS = new Set([
  "google.com", "google.co.uk", "google.fr", "google.de", "google.es",
  "google.it", "google.com.br", "google.com.tr", "google.co.in",
  "google.ru", "google.pl", "google.com.ua", "google.co.il",
  "bing.com", "duckduckgo.com", "yahoo.com", "yandex.ru",
  "facebook.com", "twitter.com", "x.com", "instagram.com", "linkedin.com",
  "reddit.com", "pinterest.com", "tiktok.com", "t.me", "telegram.org",
  "vk.com", "ok.ru",
  "netflix.com", "hulu.com", "disneyplus.com", "disney.com", "hbomax.com",
  "max.com", "amazon.com", "primevideo.com", "apple.com", "spotify.com",
  "youtube.com", "youtu.be", "twitch.tv", "tubi.tv", "pluto.tv",
  "crunchyroll.com", "deezer.com", "soundcloud.com",
  "ivi.ru", "kinopoisk.ru", "okko.tv", "more.tv", "megogo.net",
  "shahid.mbc.net", "starzplay.com", "blutv.com", "hotstar.com",
  "zee5.com", "sonyliv.com", "jiocinema.com",
  "wikipedia.org", "fandom.com", "imdb.com", "rottentomatoes.com",
  "letterboxd.com", "justwatch.com", "themoviedb.org",
  "github.com", "gitlab.com", "stackoverflow.com", "medium.com",
  "wordpress.com", "blogger.com", "blogspot.com",
  "nordvpn.com", "expressvpn.com", "surfshark.com",
  "web.archive.org", "archive.org", "similarweb.com",
  "play.google.com", "apps.apple.com", "microsoft.com",
  "cloudflare.com", "vercel.com", "netlify.com",
  "quora.com", "vpnmentor.com", "comparitech.com",
  "technadu.com", "cybernews.com", "torrentfreak.com",
]);

const USER_AGENTS = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
];

function randomUA(): string {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

function isDomainBlocked(hostname: string): boolean {
  const lower = hostname.toLowerCase();
  for (const blocked of BLOCKED_DOMAINS) {
    if (lower === blocked || lower.endsWith("." + blocked)) return true;
  }
  return false;
}

// ============================================================
// HTTP alive check
// ============================================================

async function isAlive(url: string): Promise<boolean> {
  for (const method of ["HEAD", "GET"] as const) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 8000);
      const res = await fetch(url, {
        method,
        redirect: "follow",
        signal: controller.signal,
        headers: { "User-Agent": randomUA() },
      });
      clearTimeout(timer);
      if (res.status < 400 || res.status === 403) return true;
    } catch {
      if (method === "HEAD") continue;
      return false;
    }
  }
  return false;
}

// ============================================================
// Fingerprinting — resilient to navigation/redirects
// ============================================================

interface FingerprintResult {
  confidence: number;
  signals: string[];
}

async function fingerprintSite(url: string, browser: Browser): Promise<FingerprintResult> {
  let context;
  try {
    context = await browser.newContext({
      userAgent: randomUA(),
      viewport: { width: 1920, height: 1080 },
    });
    const page = await context.newPage();

    await page.route("**/*.{png,jpg,jpeg,gif,svg,webp,mp4,webm,ogg,mp3,woff,woff2,ttf,eot}", (route) =>
      route.abort()
    );

    try {
      await page.goto(url, { waitUntil: "commit", timeout: 12000 });
    } catch {
      // partial load is fine
    }

    // Wait for JS + handle potential redirects
    await page.waitForTimeout(2500);

    // Retry evaluate up to 2 times (page may navigate/redirect)
    let result: string[] = [];
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        result = await page.evaluate(() => {
          const html = document.documentElement.innerHTML.toLowerCase();
          const bodyText = document.body?.innerText?.toLowerCase() || "";
          const detected: string[] = [];

          // 1. Video player iframes
          const iframes = Array.from(document.querySelectorAll("iframe[src]"));
          const playerIframes = iframes.filter((f) => {
            const src = (f.getAttribute("src") || "").toLowerCase();
            return /player|embed|video|stream|watch|play/.test(src);
          });
          if (playerIframes.length > 0) detected.push("video_player_iframe");

          // 2. Video player scripts
          if (document.querySelectorAll("video").length > 0) detected.push("video_element");
          if (html.includes("jwplayer")) detected.push("jwplayer");
          if (html.includes("plyr")) detected.push("plyr_player");
          if (html.includes("videojs") || html.includes("video.js") || html.includes("video-js")) detected.push("videojs");
          if (html.includes("playerjs")) detected.push("playerjs");
          if (html.includes("clappr")) detected.push("clappr");

          // 3. Poster images / movie listings
          const posterImages = document.querySelectorAll(
            'img[src*="poster"], img[src*="thumb"], img.poster, img.thumbnail, .poster img, .movie-poster img, .film-poster img, .card-img img, img[alt*="film"], img[alt*="movie"], img[alt*="فيلم"]'
          );
          if (posterImages.length >= 3) detected.push("poster_images");

          // Rating/year patterns
          if (/\b(20[12]\d)\b/.test(bodyText) && /\b(rating|imdb|tmdb|تقييم|рейтинг)\b/i.test(bodyText)) {
            detected.push("rating_year_labels");
          }

          // Episode patterns
          if (/(episode|ep\.\s?\d|s\d{1,2}e\d{1,2}|сезон|серия|серія|حلقة|الحلقة|bolum|bölüm|الموسم)/i.test(bodyText)) {
            detected.push("episode_pattern");
          }

          // 4. Pirate ad networks
          const pirateNets = ["juicyads", "exoclick", "popads", "propellerads", "adsterra", "clickadu", "trafficstars", "hilltopads", "popcash", "trafficjunky", "pushground", "clickaine"];
          for (const net of pirateNets) {
            if (html.includes(net)) detected.push(`ad_network:${net}`);
          }

          // 5. DMCA page
          const links = Array.from(document.querySelectorAll("a"));
          if (links.some((a) => /dmca|copyright|правообладат|авторск|حقوق/.test(((a.getAttribute("href") || "") + " " + (a.textContent || "")).toLowerCase()))) {
            detected.push("dmca_page");
          }

          // 6. Multi-server options
          if (/(server\s*[1-9]|سيرفر|сервер|servidor|serveur)/i.test(bodyText)) detected.push("multi_server");

          // 7. Download buttons
          if (/(download\s*(720|1080|4k|hd|mp4)|скачать|تحميل|télécharger|descargar|scarica|pobierz|indir)/i.test(bodyText)) {
            detected.push("download_button");
          }

          // 8. Quality labels
          if (/(720p|1080p|2160p|4k|webrip|bdrip|hdrip|hdtv|bluray|camrip|dvdrip|webdl|web-dl)/i.test(bodyText)) {
            detected.push("quality_labels");
          }

          // 9. Genre + watch pattern
          if (/(action|comedy|drama|horror|thriller|أكشن|كوميدي|دراما|رعب|бойовик|комедія|драма|жахи)/i.test(bodyText) &&
              /(watch|stream|مشاهدة|смотреть|дивитися|regarder|ver |guardare|izle)/i.test(bodyText)) {
            detected.push("genre_watch_pattern");
          }

          // 10. "Watch now" / "Play" buttons
          if (/(watch now|play now|شاهد الآن|مشاهدة الآن|смотреть онлайн|дивитися онлайн|regarder maintenant)/i.test(bodyText)) {
            detected.push("watch_now_button");
          }

          return detected;
        });
        break; // success
      } catch {
        if (attempt === 0) {
          await page.waitForTimeout(2000); // wait for redirect to settle
        }
      }
    }

    // Score signals
    let score = 0;
    const highValue = ["video_player_iframe", "jwplayer", "plyr_player", "videojs", "playerjs", "clappr", "multi_server", "quality_labels"];
    const medValue = ["video_element", "poster_images", "episode_pattern", "download_button", "dmca_page", "genre_watch_pattern", "rating_year_labels", "watch_now_button"];

    for (const s of result) {
      if (s.startsWith("ad_network:")) score += 20;
      else if (highValue.includes(s)) score += 15;
      else if (medValue.includes(s)) score += 10;
      else score += 5;
    }

    return { confidence: Math.min(score, 100), signals: result };
  } catch (err) {
    console.error(`[Fingerprint] Error for ${url}:`, err instanceof Error ? err.message : err);
    return { confidence: 0, signals: [] };
  } finally {
    if (context) await context.close().catch(() => {});
  }
}

// ============================================================
// Snowball crawl
// ============================================================

async function snowballCrawl(url: string, browser: Browser): Promise<{ domain: string; url: string }[]> {
  const found: { domain: string; url: string }[] = [];
  const seenDomains = new Set<string>();
  let context;

  try {
    const baseDomain = new URL(url).hostname.toLowerCase();
    context = await browser.newContext({ userAgent: randomUA(), viewport: { width: 1920, height: 1080 } });
    const page = await context.newPage();

    await page.route("**/*.{png,jpg,jpeg,gif,svg,webp,mp4,webm,ogg,mp3,woff,woff2,ttf,eot}", (route) => route.abort());

    try {
      await page.goto(url, { waitUntil: "commit", timeout: 10000 });
    } catch { /* partial */ }
    await page.waitForTimeout(2000);

    let links: string[] = [];
    try {
      links = await page.evaluate(() =>
        Array.from(document.querySelectorAll("a[href]"))
          .map((a) => a.getAttribute("href") || "")
          .filter((h) => h.startsWith("http"))
      );
    } catch { /* navigation error */ }

    for (const link of links) {
      try {
        const u = new URL(link);
        const hostname = u.hostname.toLowerCase();
        if (hostname === baseDomain || hostname.endsWith("." + baseDomain)) continue;
        if (seenDomains.has(hostname)) continue;
        if (isDomainBlocked(hostname)) continue;
        seenDomains.add(hostname);
        found.push({ domain: hostname, url: `${u.protocol}//${hostname}` });
      } catch { /* invalid URL */ }
    }
  } catch {
    // error
  } finally {
    if (context) await context.close().catch(() => {});
  }

  return found;
}

// ============================================================
// Concurrent utility
// ============================================================

async function processConcurrently<T, R>(
  items: T[],
  concurrency: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = [];
  let index = 0;
  async function worker() {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => worker()));
  return results;
}

// ============================================================
// Candidate type
// ============================================================

interface Candidate {
  url: string;
  domain: string;
  brand: string;
  foundVia: "seed" | "mirror" | "snowball" | "article";
}

// ============================================================
// Main discovery engine
// ============================================================

export async function* discoverSites(
  regionId: string,
  contentType?: string,
): AsyncGenerator<DiscoverEvent> {
  const allValidated: ValidatedSite[] = [];
  const seenDomains = new Set<string>();
  const regionConf = REGION_SERPER[regionId] || REGION_SERPER.us;

  let browser: Browser | null = null;

  try {
    // === Strategy 1: Seeds ===
    yield { type: "status", message: "Loading seed database..." };
    const seeds = getSeedsForRegion(regionId, contentType);
    const candidates: Candidate[] = seeds.map((s) => ({
      url: `https://${s.domain}`,
      domain: s.domain,
      brand: s.brand,
      foundVia: "seed" as const,
    }));
    yield { type: "status", message: `${seeds.length} seeds loaded` };

    // === Strategy 2: Mirror search ===
    yield { type: "status", message: "Searching for mirrors..." };
    const topBrands = getTopBrands(regionId, contentType, 10);
    yield { type: "status", message: `Checking mirrors for: ${topBrands.join(", ")}` };

    for (let i = 0; i < topBrands.length; i += 2) {
      const batch = topBrands.slice(i, i + 2);
      const results = await Promise.all(
        batch.map((brand) => searchMirrors(brand, regionConf.gl, regionConf.hl))
      );
      for (const mirrors of results) {
        for (const m of mirrors) {
          if (!candidates.some((c) => c.domain === m.domain)) {
            candidates.push({ url: m.url, domain: m.domain, brand: m.brand, foundVia: "mirror" });
          }
        }
      }
      await new Promise((r) => setTimeout(r, 300));
    }

    yield { type: "status", message: `${candidates.length} total candidates. Checking alive...` };

    // === Alive check ===
    const aliveResults = await processConcurrently(candidates, 8, async (c) => ({
      ...c,
      alive: await isAlive(c.url),
    }));

    const aliveCandidates = aliveResults.filter((c) => c.alive);
    yield { type: "status", message: `${aliveCandidates.length} alive, ${aliveResults.length - aliveCandidates.length} dead` };

    if (aliveCandidates.length === 0) {
      yield { type: "complete", sites: [] };
      return;
    }

    // === Fingerprint ===
    yield { type: "status", message: `Fingerprinting ${aliveCandidates.length} sites...` };
    browser = await chromium.launch({ headless: true });

    const fpResults = await processConcurrently(aliveCandidates, 4, async (c) => {
      const fp = await fingerprintSite(c.url, browser!);
      return { ...c, confidence: fp.confidence, signals: fp.signals };
    });

    for (const r of fpResults) {
      if (r.confidence >= 20 && !seenDomains.has(r.domain)) {
        seenDomains.add(r.domain);
        const site: ValidatedSite = {
          url: r.url, domain: r.domain, brand: r.brand,
          confidence: r.confidence, signals: r.signals, foundVia: r.foundVia,
        };
        allValidated.push(site);
        yield { type: "site_found", site };
      }
    }

    yield { type: "status", message: `${allValidated.length} validated. Snowballing...` };

    // === Strategy 3: Snowball ===
    const snowballSources = allValidated
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 10); // crawl top 10 for links

    if (snowballSources.length > 0) {
      yield { type: "status", message: `Crawling ${snowballSources.length} sites for more links...` };

      const snowballCandidates: Candidate[] = [];
      const snowballResults = await processConcurrently(snowballSources, 3, async (site) =>
        snowballCrawl(site.url, browser!)
      );

      for (const links of snowballResults) {
        for (const link of links) {
          if (!seenDomains.has(link.domain) && !snowballCandidates.some((c) => c.domain === link.domain)) {
            snowballCandidates.push({
              url: link.url, domain: link.domain,
              brand: link.domain.split(".")[0], foundVia: "snowball",
            });
          }
        }
      }

      if (snowballCandidates.length > 0) {
        // No limit — validate all snowball candidates
        yield { type: "status", message: `${snowballCandidates.length} snowball candidates. Checking alive...` };

        const snowAlive = await processConcurrently(snowballCandidates, 8, async (c) => ({
          ...c, alive: await isAlive(c.url),
        }));

        const aliveSnow = snowAlive.filter((c) => c.alive);

        if (aliveSnow.length > 0) {
          yield { type: "status", message: `Fingerprinting ${aliveSnow.length} snowball sites...` };

          const snowFP = await processConcurrently(aliveSnow, 4, async (c) => {
            const fp = await fingerprintSite(c.url, browser!);
            return { ...c, confidence: fp.confidence, signals: fp.signals };
          });

          for (const r of snowFP) {
            if (r.confidence >= 20 && !seenDomains.has(r.domain)) {
              seenDomains.add(r.domain);
              const site: ValidatedSite = {
                url: r.url, domain: r.domain, brand: r.brand,
                confidence: r.confidence, signals: r.signals, foundVia: r.foundVia,
              };
              allValidated.push(site);
              yield { type: "site_found", site };
            }
          }
        }
      }
    }

    allValidated.sort((a, b) => b.confidence - a.confidence);
    yield { type: "status", message: `Done! ${allValidated.length} pirate sites found.` };
    yield { type: "complete", sites: allValidated };
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}
