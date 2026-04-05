"use client";

import { useState, useCallback } from "react";
import { ParseResult } from "@/lib/types";
import { REGIONS, Region } from "@/lib/regions";

interface ValidatedSiteItem {
  url: string;
  domain: string;
  brand: string;
  confidence: number;
  signals: string[];
  foundVia: "seed" | "mirror" | "snowball" | "article";
  selected: boolean;
}

type ContentType = "movies" | "series" | "sports" | "music" | "software";

type Step = "discover" | "discovering" | "select" | "parsing" | "results";

const CONTENT_TYPES: { id: ContentType; label: string }[] = [
  { id: "movies", label: "Movies" },
  { id: "series", label: "TV Series" },
  { id: "sports", label: "Sports" },
  { id: "music", label: "Music" },
  { id: "software", label: "Software / Games" },
];

const FOUND_VIA_LABELS: Record<string, string> = {
  seed: "Seed DB",
  mirror: "Mirror Search",
  snowball: "Snowball",
  article: "Article",
};

function confidenceColor(c: number): string {
  if (c >= 70) return "text-green-400";
  if (c >= 50) return "text-yellow-400";
  if (c >= 30) return "text-orange-400";
  return "text-red-400";
}

function confidenceBg(c: number): string {
  if (c >= 70) return "bg-green-900/30 border-green-700/50";
  if (c >= 50) return "bg-yellow-900/30 border-yellow-700/50";
  if (c >= 30) return "bg-orange-900/30 border-orange-700/50";
  return "bg-red-900/30 border-red-700/50";
}

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState("us");
  const [contentType, setContentType] = useState<ContentType>("movies");
  const [step, setStep] = useState<Step>("discover");

  // Discovery state
  const [discoveredSites, setDiscoveredSites] = useState<ValidatedSiteItem[]>([]);
  const [statusMessages, setStatusMessages] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [discoverError, setDiscoverError] = useState<string | null>(null);

  // Parse state
  const [results, setResults] = useState<ParseResult[]>([]);
  const [parseProgress, setParseProgress] = useState({ current: 0, total: 0 });
  const [filter, setFilter] = useState<"all" | "pirate" | "clean">("all");

  const handleDiscover = useCallback(async () => {
    setIsSearching(true);
    setDiscoverError(null);
    setDiscoveredSites([]);
    setStatusMessages([]);
    setStep("discovering");

    try {
      const discoverRes = await fetch("/api/discover", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ regionId: selectedRegion, contentType }),
      });

      const reader = discoverRes.body?.getReader();
      if (!reader) {
        setDiscoverError("Failed to start discovery stream.");
        setStep("discover");
        setIsSearching(false);
        return;
      }

      const decoder = new TextDecoder();
      let buffer = "";
      const sitesAccumulator: ValidatedSiteItem[] = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const data = line.replace("data: ", "").trim();
          if (!data || data === "[DONE]") continue;

          try {
            const event = JSON.parse(data);

            if (event.type === "status") {
              setStatusMessages((prev) => [...prev.slice(-19), event.message]);
            } else if (event.type === "site_found" && event.site) {
              const newSite: ValidatedSiteItem = {
                ...event.site,
                selected: true,
              };
              sitesAccumulator.push(newSite);
              setDiscoveredSites([...sitesAccumulator]);
            } else if (event.type === "complete") {
              // Done
            } else if (event.type === "error") {
              console.error("[Discover] Stream error:", event.error);
            }
          } catch {
            // skip malformed
          }
        }
      }

      if (sitesAccumulator.length === 0) {
        setDiscoverError(
          "No pirate sites discovered. Try a different region or content type."
        );
        setStep("discover");
      } else {
        // Sort by confidence
        sitesAccumulator.sort((a, b) => b.confidence - a.confidence);
        setDiscoveredSites([...sitesAccumulator]);
        setStep("select");
      }
    } catch (err) {
      setDiscoverError(
        "Discovery failed: " + (err instanceof Error ? err.message : String(err))
      );
      setStep("discover");
    } finally {
      setIsSearching(false);
    }
  }, [selectedRegion, contentType]);

  const toggleSite = (index: number) => {
    setDiscoveredSites((prev) =>
      prev.map((s, i) => (i === index ? { ...s, selected: !s.selected } : s))
    );
  };

  const toggleAllSites = () => {
    const allSelected = discoveredSites.every((s) => s.selected);
    setDiscoveredSites((prev) => prev.map((s) => ({ ...s, selected: !allSelected })));
  };

  const handleStartParsing = useCallback(async () => {
    const selectedUrls = discoveredSites.filter((s) => s.selected).map((s) => s.url);
    if (selectedUrls.length === 0) return;

    setStep("parsing");
    setResults([]);
    setParseProgress({ current: 0, total: selectedUrls.length });

    try {
      const res = await fetch("/api/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urls: selectedUrls, regionId: selectedRegion }),
      });

      const reader = res.body?.getReader();
      if (!reader) return;

      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const data = line.replace("data: ", "").trim();
          if (!data || data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data);
            setResults((prev) => [...prev, parsed.result]);
            setParseProgress({ current: parsed.index + 1, total: parsed.total });
          } catch {
            // skip
          }
        }
      }

      setStep("results");
    } catch (err) {
      console.error("Parse failed:", err);
      setStep("results");
    }
  }, [discoveredSites, selectedRegion]);

  const handleReset = () => {
    setStep("discover");
    setDiscoveredSites([]);
    setStatusMessages([]);
    setResults([]);
    setParseProgress({ current: 0, total: 0 });
    setFilter("all");
    setDiscoverError(null);
  };

  const exportCsv = () => {
    const headers = [
      "URL",
      "Domain",
      "Summary",
      "Is Pirate",
      "Is Paid",
      "Pirate Signals",
      "Emails",
      "Phones",
      "Socials",
      "Ad Page",
    ];
    const rows = results.map((r) => [
      r.url,
      r.domain,
      `"${(r.summary || "").replace(/"/g, '""')}"`,
      r.isPirate ? "YES" : "NO",
      r.isPaid ? "YES" : "NO",
      `"${r.pirateSignals.join("; ")}"`,
      `"${r.emails.join("; ")}"`,
      `"${r.phones.join("; ")}"`,
      `"${r.socials.map((s) => s.url).join("; ")}"`,
      r.advertisingPage || "",
    ]);
    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `media-parser-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredResults = results.filter((r) => {
    if (filter === "pirate") return r.isPirate;
    if (filter === "clean") return !r.isPirate;
    return true;
  });

  const pirateCount = results.filter((r) => r.isPirate).length;
  const cleanCount = results.filter((r) => !r.isPirate).length;
  const selectedSiteCount = discoveredSites.filter((s) => s.selected).length;

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      <header className="border-b border-slate-700/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={handleReset}
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            Media Parser
          </button>
          <span className="text-sm text-slate-400">Pirate Site Discovery &amp; Analysis</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Step 1: Discover Settings */}
        {step === "discover" && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Discover Pirate Sites</h2>
              <p className="text-slate-400">
                Seed database + mirror search + snowball crawling + validation
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Region */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isSearching}
                >
                  {REGIONS.map((r: Region) => (
                    <option key={r.id} value={r.id}>
                      {r.flag} {r.name} ({r.language})
                    </option>
                  ))}
                </select>
              </div>

              {/* Content Type */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Content Type
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {CONTENT_TYPES.map((ct) => (
                    <button
                      key={ct.id}
                      onClick={() => setContentType(ct.id)}
                      disabled={isSearching}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        contentType === ct.id
                          ? "bg-blue-600 text-white"
                          : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200 border border-slate-600"
                      }`}
                    >
                      {ct.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Discover button */}
              <button
                onClick={handleDiscover}
                disabled={isSearching}
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-medium text-lg rounded-lg transition-colors"
              >
                {isSearching ? "Discovering..." : "Discover Sites"}
              </button>

              {discoverError && (
                <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 text-red-400 text-sm">
                  {discoverError}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Discovering (live progress) */}
        {step === "discovering" && (
          <div className="max-w-2xl mx-auto py-8">
            <div className="text-center mb-8">
              <div className="inline-block w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-6" />
              <h2 className="text-2xl font-bold text-white mb-2">Discovery Engine Running</h2>
              <p className="text-slate-400 mb-2">
                Seeds + Mirrors + Validation + Snowball
              </p>
              <p className="text-blue-400 font-bold text-lg">
                {discoveredSites.length} sites validated so far
              </p>
            </div>

            {/* Status log */}
            <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6 max-h-48 overflow-y-auto font-mono text-xs">
              {statusMessages.map((msg, i) => (
                <div key={i} className="text-slate-400 py-0.5">
                  <span className="text-slate-600 mr-2">[{i + 1}]</span>
                  {msg}
                </div>
              ))}
              {statusMessages.length === 0 && (
                <div className="text-slate-600">Waiting for events...</div>
              )}
            </div>

            {/* Live discovered sites */}
            {discoveredSites.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-slate-400 mb-3">
                  Validated Sites ({discoveredSites.length}):
                </h3>
                <div className="max-h-60 overflow-y-auto flex flex-wrap gap-2">
                  {discoveredSites.map((s, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 border rounded text-xs ${confidenceBg(s.confidence)}`}
                    >
                      <span className={`font-medium ${confidenceColor(s.confidence)}`}>
                        {s.confidence}
                      </span>
                      <span className="text-blue-400">{s.domain}</span>
                      <span className="text-slate-500">{FOUND_VIA_LABELS[s.foundVia]}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Select discovered sites */}
        {step === "select" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">Validated Pirate Sites</h2>
                <p className="text-slate-400 text-sm mt-1">
                  {discoveredSites.length} sites validated with confidence scores. Select which to analyze for contacts.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={toggleAllSites}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition-colors"
                >
                  {discoveredSites.every((s) => s.selected) ? "Deselect All" : "Select All"}
                </button>
                <button
                  onClick={handleStartParsing}
                  disabled={selectedSiteCount === 0}
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-medium rounded-lg transition-colors"
                >
                  Analyze Selected ({selectedSiteCount})
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {discoveredSites.map((s, i) => (
                <label
                  key={i}
                  className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                    s.selected
                      ? "bg-slate-800 border-blue-500/50"
                      : "bg-slate-800/50 border-slate-700 opacity-60"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={s.selected}
                    onChange={() => toggleSite(i)}
                    className="mt-1 w-4 h-4 rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-blue-400 text-sm font-medium">{s.domain}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${confidenceBg(s.confidence)} ${confidenceColor(s.confidence)}`}>
                        {s.confidence}% confidence
                      </span>
                      <span className="px-2 py-0.5 bg-slate-700 text-slate-400 rounded text-xs">
                        {FOUND_VIA_LABELS[s.foundVia]}
                      </span>
                      {s.brand && (
                        <span className="px-2 py-0.5 bg-slate-700 text-slate-400 rounded text-xs">
                          brand: {s.brand}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {s.signals.filter(sig => !sig.startsWith("error:")).map((sig, j) => (
                        <span
                          key={j}
                          className="px-1.5 py-0.5 bg-slate-700/50 text-slate-400 rounded text-xs"
                        >
                          {sig}
                        </span>
                      ))}
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
              >
                Back to Discovery
              </button>
              <button
                onClick={handleStartParsing}
                disabled={selectedSiteCount === 0}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 text-white font-medium rounded-lg transition-colors"
              >
                Analyze Selected ({selectedSiteCount})
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Parsing / Analyzing */}
        {step === "parsing" && (
          <div className="max-w-xl mx-auto text-center py-16">
            <div className="inline-block w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-6" />
            <h2 className="text-2xl font-bold text-white mb-2">Analyzing Sites for Contacts</h2>
            <p className="text-slate-400 mb-6">
              {parseProgress.current}/{parseProgress.total} sites analyzed
            </p>
            <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
              <div
                className="bg-blue-500 rounded-full h-3 transition-all duration-500"
                style={{
                  width:
                    parseProgress.total > 0
                      ? `${(parseProgress.current / parseProgress.total) * 100}%`
                      : "0%",
                }}
              />
            </div>
            {results.length > 0 && (
              <p className="text-sm text-slate-500">
                Last: {results[results.length - 1]?.domain}
              </p>
            )}
          </div>
        )}

        {/* Step 5: Results */}
        {step === "results" && (
          <>
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white">Results</h2>
                <p className="text-slate-400 text-sm mt-1">
                  {results.length} sites analyzed
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <button
                    onClick={() => setFilter("all")}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                      filter === "all"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    All ({results.length})
                  </button>
                  <button
                    onClick={() => setFilter("pirate")}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                      filter === "pirate"
                        ? "bg-red-600 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    Pirate ({pirateCount})
                  </button>
                  <button
                    onClick={() => setFilter("clean")}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                      filter === "clean"
                        ? "bg-green-600 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    Clean ({cleanCount})
                  </button>
                </div>
                <button
                  onClick={exportCsv}
                  className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Export CSV
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm transition-colors"
                >
                  New Discovery
                </button>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 text-slate-300">
                    <th className="text-left px-4 py-3 font-medium">Site</th>
                    <th className="text-left px-4 py-3 font-medium">Summary</th>
                    <th className="text-center px-4 py-3 font-medium">Pirate</th>
                    <th className="text-center px-4 py-3 font-medium">Paid</th>
                    <th className="text-left px-4 py-3 font-medium">Emails</th>
                    <th className="text-left px-4 py-3 font-medium">Phones</th>
                    <th className="text-left px-4 py-3 font-medium">Socials</th>
                    <th className="text-left px-4 py-3 font-medium">Ad Page</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredResults.map((r, i) => (
                    <tr
                      key={i}
                      className={`border-t border-slate-700/50 ${
                        r.status === "error"
                          ? "bg-red-900/20"
                          : r.isPirate
                          ? "bg-red-900/10"
                          : "hover:bg-slate-800/50"
                      }`}
                    >
                      <td className="px-4 py-3">
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 font-medium"
                        >
                          {r.domain}
                        </a>
                        {r.status === "error" && (
                          <span className="block text-xs text-red-400 mt-1">{r.error}</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-slate-300 max-w-xs">
                        <span className="line-clamp-2">{r.summary}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {r.isPirate ? (
                          <span className="px-2 py-1 bg-red-900/30 text-red-400 rounded text-xs font-medium">
                            YES
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded text-xs font-medium">
                            NO
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {r.isPaid ? (
                          <span className="text-yellow-400 text-xs font-medium">PAID</span>
                        ) : (
                          <span className="text-slate-500 text-xs">free</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {r.emails.length > 0 ? (
                          r.emails.map((e, j) => (
                            <a
                              key={j}
                              href={`mailto:${e}`}
                              className="text-blue-400 hover:text-blue-300 text-xs block"
                            >
                              {e}
                            </a>
                          ))
                        ) : (
                          <span className="text-slate-500 text-xs">--</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {r.phones.length > 0 ? (
                          r.phones.map((p, j) => (
                            <span key={j} className="text-xs block">
                              {p}
                            </span>
                          ))
                        ) : (
                          <span className="text-slate-500 text-xs">--</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {r.socials.length > 0 ? (
                          r.socials.map((s, j) => (
                            <a
                              key={j}
                              href={s.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 text-xs block"
                            >
                              {s.platform}
                            </a>
                          ))
                        ) : (
                          <span className="text-slate-500 text-xs">--</span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        {r.advertisingPage ? (
                          <a
                            href={r.advertisingPage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 text-xs"
                          >
                            Link
                          </a>
                        ) : (
                          <span className="text-slate-500 text-xs">--</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
