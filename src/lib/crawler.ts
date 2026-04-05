import { chromium, type Browser, type Page } from "playwright";
import { CrawlResult } from "./types";

const USER_AGENTS = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36",
];

const CONTACT_PATTERNS = [
  /\/contact/i,
  /\/about/i,
  /\/advertis/i,
  /\/media-kit/i,
  /\/sponsor/i,
  /\/partner/i,
  /\/reklama/i,
  /\/dmca/i,
];

const CONTACT_TEXT_PATTERNS = [
  /contact/i,
  /about\s*us/i,
  /advertis/i,
  /media\s*kit/i,
  /sponsor/i,
  /partner/i,
  /реклама/i,
  /контакт/i,
  /о\s*нас/i,
];

const PAGE_TIMEOUT = 30000;
const MAX_SUBPAGES = 3;

function randomUserAgent(): string {
  return USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
}

export async function crawlSite(url: string): Promise<CrawlResult> {
  let browser: Browser | null = null;
  const domain = new URL(url).hostname;

  try {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
      userAgent: randomUserAgent(),
      viewport: { width: 1920, height: 1080 },
    });
    const page = await context.newPage();

    // Main page — try to load, grab whatever we get even on timeout
    try {
      await page.goto(url, { waitUntil: "commit", timeout: PAGE_TIMEOUT });
      await page.waitForTimeout(3000);
    } catch {
      // Even if timeout, try to extract what loaded
      console.log(`[Crawler] Timeout for ${url}, extracting partial content`);
    }

    const title = await page.title().catch(() => "");
    const metaDescription = await page
      .$eval('meta[name="description"]', (el) => el.getAttribute("content") || "")
      .catch(() => "");

    const mainPageText = await page.evaluate(() => {
      return document.body?.innerText?.slice(0, 5000) || "";
    });

    const scripts = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("script[src]")).map(
        (s) => s.getAttribute("src") || ""
      );
    });

    // Find relevant subpages
    const links = await page.evaluate(() => {
      return Array.from(document.querySelectorAll("a[href]")).map((a) => ({
        href: a.getAttribute("href") || "",
        text: a.textContent?.trim() || "",
      }));
    });

    const relevantLinks = findRelevantLinks(links, url);
    const subpageResults: Record<string, string | null> = {
      contact: null,
      about: null,
      advertising: null,
    };
    let advertisingPageUrl: string | null = null;
    const allPagesHtml: string[] = [await page.content()];

    let visited = 0;
    for (const link of relevantLinks) {
      if (visited >= MAX_SUBPAGES) break;
      try {
        await page.goto(link.fullUrl, {
          waitUntil: "commit",
          timeout: 15000,
        });
        await page.waitForTimeout(2000);
        const html = await page.content();
        allPagesHtml.push(html);

        if (/contact/i.test(link.fullUrl) || /контакт/i.test(link.text)) {
          subpageResults.contact = html;
        }
        if (/about/i.test(link.fullUrl) || /о\s*нас/i.test(link.text)) {
          subpageResults.about = html;
        }
        if (
          /advertis|media.?kit|sponsor|partner|реклам/i.test(link.fullUrl) ||
          /advertis|media.?kit|sponsor|partner|реклам/i.test(link.text)
        ) {
          subpageResults.advertising = html;
          advertisingPageUrl = link.fullUrl;
        }
        visited++;
      } catch {
        // Skip failed subpages
      }
    }

    await browser.close();

    return {
      url,
      domain,
      title,
      metaDescription,
      mainPageText,
      contactPageHtml: subpageResults.contact,
      aboutPageHtml: subpageResults.about,
      advertisingPageHtml: subpageResults.advertising,
      advertisingPageUrl,
      allPagesHtml,
      scripts,
      status: "success",
    };
  } catch (error) {
    if (browser) await browser.close();
    return {
      url,
      domain,
      title: "",
      metaDescription: "",
      mainPageText: "",
      contactPageHtml: null,
      aboutPageHtml: null,
      advertisingPageHtml: null,
      advertisingPageUrl: null,
      allPagesHtml: [],
      scripts: [],
      status: "error",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

interface LinkInfo {
  href: string;
  text: string;
}

interface RelevantLink {
  fullUrl: string;
  text: string;
}

function findRelevantLinks(links: LinkInfo[], baseUrl: string): RelevantLink[] {
  const base = new URL(baseUrl);
  const seen = new Set<string>();
  const results: RelevantLink[] = [];

  for (const link of links) {
    let fullUrl: string;
    try {
      fullUrl = new URL(link.href, baseUrl).href;
    } catch {
      continue;
    }

    // Only same domain
    try {
      if (new URL(fullUrl).hostname !== base.hostname) continue;
    } catch {
      continue;
    }

    if (seen.has(fullUrl)) continue;

    const isRelevantHref = CONTACT_PATTERNS.some((p) => p.test(link.href));
    const isRelevantText = CONTACT_TEXT_PATTERNS.some((p) => p.test(link.text));

    if (isRelevantHref || isRelevantText) {
      seen.add(fullUrl);
      results.push({ fullUrl, text: link.text });
    }
  }

  return results;
}
