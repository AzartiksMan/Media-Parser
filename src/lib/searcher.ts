export interface ArticleResult {
  url: string;
  title: string;
  snippet: string;
}

export interface MirrorResult {
  url: string;
  domain: string;
  title: string;
  brand: string;
}

export type ContentType = "movies" | "series" | "sports" | "music" | "software";

const REGION_SERPER: Record<string, { gl: string; hl: string }> = {
  us: { gl: "us", hl: "en" },
  uk: { gl: "uk", hl: "en" },
  ua: { gl: "ua", hl: "uk" },
  il: { gl: "il", hl: "he" },
  cy: { gl: "cy", hl: "el" },
  ae: { gl: "ae", hl: "ar" },
  de: { gl: "de", hl: "de" },
  fr: { gl: "fr", hl: "fr" },
  es: { gl: "es", hl: "es" },
  it: { gl: "it", hl: "it" },
  br: { gl: "br", hl: "pt" },
  tr: { gl: "tr", hl: "tr" },
  in: { gl: "in", hl: "hi" },
  ru: { gl: "ru", hl: "ru" },
  pl: { gl: "pl", hl: "pl" },
  ma: { gl: "ma", hl: "ar" },
  ca: { gl: "ca", hl: "en" },
};

// Domains we never return as mirrors (legit sites that mention pirate brands)
const MIRROR_BLOCKLIST = new Set([
  "google.com", "bing.com", "yahoo.com", "duckduckgo.com",
  "reddit.com", "quora.com", "twitter.com", "x.com", "facebook.com",
  "wikipedia.org", "youtube.com", "github.com", "medium.com",
  "vpnmentor.com", "comparitech.com", "technadu.com", "cybernews.com",
  "vpnoverview.com", "cloudwards.net", "torrentfreak.com",
  "nordvpn.com", "expressvpn.com", "surfshark.com",
  "imdb.com", "rottentomatoes.com", "justwatch.com",
  "similarweb.com", "web.archive.org", "archive.org",
]);

async function serperSearch(
  apiKey: string,
  query: string,
  gl: string,
  hl: string,
  num: number = 10,
): Promise<ArticleResult[]> {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: {
      "X-API-KEY": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ q: query, gl, hl, num }),
  });

  if (!res.ok) return [];

  const data = await res.json();
  return (data.organic || []).map((r: { link: string; title: string; snippet: string }) => ({
    url: r.link,
    title: r.title || "",
    snippet: r.snippet || "",
  }));
}

function isDomainBlocked(hostname: string): boolean {
  const lower = hostname.toLowerCase();
  for (const blocked of MIRROR_BLOCKLIST) {
    if (lower === blocked || lower.endsWith("." + blocked)) {
      return true;
    }
  }
  return false;
}

/**
 * Search for current mirrors/domains of a pirate brand.
 * E.g. brand "egybest" -> searches "egybest" and returns domains containing the brand name.
 * Uses 1 Serper query per brand.
 */
export async function searchMirrors(
  brand: string,
  gl: string,
  hl: string,
): Promise<MirrorResult[]> {
  const apiKey = process.env.SERPER_API_KEY;
  if (!apiKey) return [];

  const results = await serperSearch(apiKey, brand, gl, hl, 10);
  const mirrors: MirrorResult[] = [];
  const seenDomains = new Set<string>();

  for (const r of results) {
    try {
      const url = new URL(r.url);
      const hostname = url.hostname.toLowerCase();

      if (seenDomains.has(hostname)) continue;
      if (isDomainBlocked(hostname)) continue;

      // The domain should contain the brand name (or be closely related)
      const brandClean = brand.toLowerCase().replace(/[-_\s]/g, "");
      const domainClean = hostname.replace(/[-_.]/g, "");
      if (!domainClean.includes(brandClean)) continue;

      seenDomains.add(hostname);
      mirrors.push({
        url: `${url.protocol}//${hostname}`,
        domain: hostname,
        title: r.title,
        brand,
      });
    } catch {
      // Invalid URL
    }
  }

  return mirrors;
}

/**
 * Search for articles that list pirate streaming sites.
 * Kept as supplementary discovery method.
 */
export async function searchForArticles(
  regionId: string,
  contentType: ContentType,
  customQuery?: string,
  maxArticles: number = 30,
): Promise<ArticleResult[]> {
  const apiKey = process.env.SERPER_API_KEY;
  if (!apiKey) {
    console.error("[Searcher] SERPER_API_KEY not set in .env");
    return [];
  }

  const region = REGION_SERPER[regionId] || REGION_SERPER.us;

  // Simple search queries per language
  const langQueries: Record<string, string[]> = {
    en: [`best free ${contentType} streaming sites 2026`, `${contentType === "movies" ? "fmovies" : "soap2day"} alternatives 2026`],
    ar: [`أفضل مواقع مشاهدة ${contentType === "movies" ? "أفلام" : "مسلسلات"} 2026`],
    uk: [`найкращі сайти ${contentType === "movies" ? "фільми" : "серіали"} безкоштовно 2026`],
    ru: [`лучшие сайты ${contentType === "movies" ? "фильмов" : "сериалов"} бесплатно 2026`],
    fr: [`meilleurs sites streaming ${contentType === "movies" ? "films" : "séries"} gratuit 2026`],
    he: [`אתרי ${contentType === "movies" ? "סרטים" : "סדרות"} בחינם 2026`],
    de: [`beste kostenlose ${contentType === "movies" ? "film" : "serien"} streaming seiten 2026`],
    es: [`mejores páginas para ver ${contentType === "movies" ? "películas" : "series"} gratis 2026`],
    it: [`migliori siti streaming ${contentType === "movies" ? "film" : "serie tv"} gratis 2026`],
    pt: [`melhores sites para assistir ${contentType === "movies" ? "filmes" : "séries"} grátis 2026`],
    tr: [`en iyi ücretsiz ${contentType === "movies" ? "film" : "dizi"} izleme siteleri 2026`],
    hi: [`फ्री ${contentType === "movies" ? "मूवी" : "सीरीज"} स्ट्रीमिंग साइट्स 2026`],
    pl: [`najlepsze strony do oglądania ${contentType === "movies" ? "filmów" : "seriali"} za darmo 2026`],
    el: [`καλύτερες σελίδες ${contentType === "movies" ? "ταινίες" : "σειρές"} δωρεάν 2026`],
  };

  const queries: string[] = [];
  if (customQuery?.trim()) {
    queries.push(customQuery.trim());
  }
  const prebuilt = langQueries[region.hl] || langQueries.en;
  queries.push(...prebuilt);

  const seenUrls = new Set<string>();
  const allArticles: ArticleResult[] = [];

  for (const q of queries) {
    if (allArticles.length >= maxArticles) break;

    try {
      const results = await serperSearch(apiKey, q, region.gl, region.hl, 10);
      for (const r of results) {
        if (allArticles.length >= maxArticles) break;
        if (seenUrls.has(r.url)) continue;
        seenUrls.add(r.url);
        allArticles.push(r);
      }
      await new Promise((r) => setTimeout(r, 300));
    } catch (err) {
      console.error(`[Searcher] Query failed:`, err);
    }
  }

  return allArticles.slice(0, maxArticles);
}

export { REGION_SERPER };
