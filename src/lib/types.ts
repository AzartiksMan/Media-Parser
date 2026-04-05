export interface ParseResult {
  url: string;
  domain: string;
  title: string;
  description: string;
  summary: string;
  isPirate: boolean;
  isPaid: boolean;
  pirateSignals: string[];
  emails: string[];
  phones: string[];
  socials: SocialLink[];
  advertisingPage: string | null;
  status: "success" | "error" | "timeout";
  error?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface CrawlResult {
  url: string;
  domain: string;
  title: string;
  metaDescription: string;
  mainPageText: string;
  contactPageHtml: string | null;
  aboutPageHtml: string | null;
  advertisingPageHtml: string | null;
  advertisingPageUrl: string | null;
  allPagesHtml: string[];
  scripts: string[];
  status: "success" | "error" | "timeout";
  error?: string;
}

export interface ExtractedData {
  emails: string[];
  phones: string[];
  socials: SocialLink[];
  pirateSignals: string[];
  paidSignals: string[];
}

export interface AnalysisResult {
  summary: string;
  isPirate: boolean;
  isPaid: boolean;
  pirateConfidence: number;
}

export interface ParseJob {
  id: string;
  query: string;
  regionId: string;
  status: "pending" | "searching" | "running" | "completed" | "error";
  progress: number;
  total: number;
  searchResults: SearchResultItem[];
  results: ParseResult[];
  createdAt: string;
}

export interface SearchResultItem {
  url: string;
  title: string;
  snippet: string;
  selected: boolean;
}
