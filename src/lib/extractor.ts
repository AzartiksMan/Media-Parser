import * as cheerio from "cheerio";
import { ExtractedData, SocialLink } from "./types";

const EMAIL_REGEX = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-z]{2,}/g;

// Only match phone numbers that start with + or ( — no loose digit matching
const PHONE_REGEX = /(?:\+\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{2,4}[-.\s]?\d{2,4}[-.\s]?\d{0,4})/g;

const SOCIAL_PLATFORMS: Record<string, RegExp> = {
  twitter: /(?:twitter\.com|x\.com)\/[a-zA-Z0-9_]+/i,
  instagram: /instagram\.com\/[a-zA-Z0-9_.]+/i,
  facebook: /facebook\.com\/[a-zA-Z0-9.]+/i,
  linkedin: /linkedin\.com\/(?:company|in)\/[a-zA-Z0-9\-]+/i,
  telegram: /t\.me\/[a-zA-Z0-9_]+/i,
  youtube: /youtube\.com\/(?:c\/|channel\/|@)[a-zA-Z0-9_\-]+/i,
  tiktok: /tiktok\.com\/@[a-zA-Z0-9_.]+/i,
};

// Known legitimate streaming/media domains — NOT pirate
const LEGIT_DOMAINS = [
  "netflix.com",
  "hulu.com",
  "disneyplus.com",
  "disney.com",
  "hbomax.com",
  "max.com",
  "amazon.com",
  "primevideo.com",
  "apple.com",
  "tv.apple.com",
  "peacocktv.com",
  "paramount.com",
  "paramountplus.com",
  "crunchyroll.com",
  "spotify.com",
  "youtube.com",
  "ivi.ru",
  "kinopoisk.ru",
  "okko.tv",
  "more.tv",
  "wink.ru",
  "start.ru",
  "rutube.ru",
  "megogo.net",
  "sweet.tv",
  "deezer.com",
  "tidal.com",
  "justwatch.com",
  "imdb.com",
  "rottentomatoes.com",
  "metacritic.com",
  "letterboxd.com",
  "film.ru",
  "kino.mail.ru",
  "wikipedia.org",
  "google.com",
  "duckduckgo.com",
];

// Strong pirate signals — encoding/release formats that only pirate sites use
const STRONG_PIRATE_KEYWORDS = [
  "torrent",
  "magnet:",
  "webrip",
  "bdrip",
  "hdtv",
  "hdrip",
  "dvdrip",
  "camrip",
  "x264",
  "x265",
  "hevc",
  "bluray rip",
  "скачать торрент",
  "download torrent",
  "magnet link",
];

// Weak pirate signals — need multiple to trigger
const WEAK_PIRATE_KEYWORDS = [
  "watch free",
  "stream free",
  "free movie",
  "free film",
  "download free",
  "without registration",
  "без регистрации",
  "без реєстрації",
  "скачать бесплатно",
  "смотреть бесплатно",
  "дивитися безкоштовно",
];

// Pirate ad networks — strong signal
const PIRATE_AD_NETWORKS = [
  "juicyads",
  "exoclick",
  "trafficjunky",
  "popads",
  "propellerads",
  "adsterra",
  "hilltopads",
  "clickadu",
  "trafficstars",
  "popcash",
  "pushground",
  "clickaine",
];

// Known pirate domain patterns
const PIRATE_DOMAINS = [
  "1337x",
  "rarbg",
  "piratebay",
  "yts.",
  "fmovies",
  "123movies",
  "putlocker",
  "solarmovie",
  "gomovies",
  "hdrezka",
  "rezka.",
  "kinogo",
  "kinokrad",
  "filmix",
  "seasonvar",
  "uakino",
  "uaserials",
  "uafilm",
  "lordfilm",
  "gidonline",
  "kinokong",
  "baskino",
  "filmua.tv",
  "eneyida",
];

const PAID_SIGNALS = [
  "subscribe",
  "premium",
  "paywall",
  "member",
  "paid content",
  "exclusive access",
  "piano.io",
  "tinypass",
  "meterwall",
  "leaky paywall",
];

function isLegitDomain(domain: string): boolean {
  return LEGIT_DOMAINS.some((legit) => domain.includes(legit));
}

export function extractFromHtml(htmlPages: string[], siteUrl?: string): ExtractedData {
  const emails = new Set<string>();
  const phones = new Set<string>();
  const seenSocialUrls = new Set<string>();
  const seenSocialPlatforms = new Set<string>();
  const socials: SocialLink[] = [];
  const pirateSignals: string[] = [];
  const paidSignals: string[] = [];

  // Check if this is a known legit domain
  let isLegit = false;
  if (siteUrl) {
    try {
      isLegit = isLegitDomain(new URL(siteUrl).hostname.toLowerCase());
    } catch { /* ignore */ }
  }

  for (const html of htmlPages) {
    const $ = cheerio.load(html);
    const text = $("body").text().toLowerCase();
    const allHtml = html.toLowerCase();

    // Emails — from mailto: links (most reliable)
    $('a[href^="mailto:"]').each((_, el) => {
      const mailto = $(el).attr("href")?.replace("mailto:", "").split("?")[0];
      if (mailto) emails.add(mailto.toLowerCase().trim());
    });

    // Emails — from visible text (filter out image filenames and junk)
    const emailMatches = text.match(EMAIL_REGEX) || [];
    for (const email of emailMatches) {
      const clean = email.toLowerCase().trim();
      if (
        !clean.endsWith(".png") &&
        !clean.endsWith(".jpg") &&
        !clean.endsWith(".gif") &&
        !clean.endsWith(".svg") &&
        !clean.endsWith(".webp") &&
        !clean.includes("sentry") &&
        !clean.includes("webpack") &&
        !clean.includes("example.com")
      ) {
        emails.add(clean);
      }
    }

    // Phones — ONLY from tel: links (most reliable, no false positives)
    $('a[href^="tel:"]').each((_, el) => {
      const tel = $(el).attr("href")?.replace("tel:", "").trim();
      if (tel && tel.replace(/\D/g, "").length >= 7) {
        phones.add(tel);
      }
    });

    // Phones — from text, strict regex (must start with +)
    const phoneMatches = text.match(PHONE_REGEX) || [];
    for (const phone of phoneMatches) {
      const digits = phone.replace(/\D/g, "");
      // Must have 7-15 digits (valid phone range) and start with +
      if (digits.length >= 7 && digits.length <= 15 && phone.trim().startsWith("+")) {
        phones.add(phone.trim());
      }
    }

    // Socials — deduplicate by platform (show max 1 per platform)
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href") || "";
      for (const [platform, regex] of Object.entries(SOCIAL_PLATFORMS)) {
        if (regex.test(href) && !seenSocialUrls.has(href) && !seenSocialPlatforms.has(platform)) {
          seenSocialUrls.add(href);
          seenSocialPlatforms.add(platform);
          socials.push({ platform, url: href });
        }
      }
    });

    // Pirate signals — skip if known legit domain
    if (!isLegit) {
      for (const keyword of STRONG_PIRATE_KEYWORDS) {
        if (text.includes(keyword) && !pirateSignals.includes(`strong: ${keyword}`)) {
          pirateSignals.push(`strong: ${keyword}`);
        }
      }
      for (const keyword of WEAK_PIRATE_KEYWORDS) {
        if (text.includes(keyword) && !pirateSignals.includes(`weak: ${keyword}`)) {
          pirateSignals.push(`weak: ${keyword}`);
        }
      }
      for (const network of PIRATE_AD_NETWORKS) {
        if (allHtml.includes(network) && !pirateSignals.includes(`ad_network: ${network}`)) {
          pirateSignals.push(`ad_network: ${network}`);
        }
      }
    }

    // Paid signals
    for (const signal of PAID_SIGNALS) {
      if (allHtml.includes(signal) && !paidSignals.includes(signal)) {
        paidSignals.push(signal);
      }
    }
  }

  // Check domain against known pirate domains
  if (siteUrl && !isLegit) {
    try {
      const domain = new URL(siteUrl).hostname.toLowerCase();
      for (const pirateDomain of PIRATE_DOMAINS) {
        if (domain.includes(pirateDomain) && !pirateSignals.includes(`domain: ${pirateDomain}`)) {
          pirateSignals.push(`domain: ${pirateDomain}`);
        }
      }
    } catch { /* ignore */ }
  }

  return {
    emails: Array.from(emails),
    phones: Array.from(phones),
    socials,
    pirateSignals,
    paidSignals,
  };
}
