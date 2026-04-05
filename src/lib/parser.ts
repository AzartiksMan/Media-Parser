import { crawlSite } from "./crawler";
import { extractFromHtml } from "./extractor";
import { analyzeSite } from "./analyzer";
import { ParseResult } from "./types";

export async function parseSite(
  url: string,
  regionId: string
): Promise<ParseResult> {
  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  const domain = new URL(url).hostname;

  const crawlResult = await crawlSite(url);

  if (crawlResult.status !== "success") {
    return {
      url,
      domain,
      title: "",
      description: "",
      summary: crawlResult.error || "Failed to crawl",
      isPirate: false,
      isPaid: false,
      pirateSignals: [],
      emails: [],
      phones: [],
      socials: [],
      advertisingPage: null,
      status: "error",
      error: crawlResult.error,
    };
  }

  const extracted = extractFromHtml(crawlResult.allPagesHtml, url);

  const analysis = await analyzeSite(
    url,
    crawlResult.title,
    crawlResult.metaDescription,
    crawlResult.mainPageText,
    extracted,
    regionId
  );

  return {
    url,
    domain,
    title: crawlResult.title,
    description: crawlResult.metaDescription,
    summary: analysis.summary,
    isPirate: analysis.isPirate,
    isPaid: analysis.isPaid,
    pirateSignals: extracted.pirateSignals,
    emails: extracted.emails,
    phones: extracted.phones,
    socials: extracted.socials,
    advertisingPage: crawlResult.advertisingPageUrl,
    status: "success",
  };
}
