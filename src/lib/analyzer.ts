import { AnalysisResult, ExtractedData } from "./types";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

function heuristicAnalysis(
  title: string,
  metaDescription: string,
  extractedData: ExtractedData
): AnalysisResult {
  // Weight signals: strong/domain/ad_network = 3 points, weak = 1 point
  let score = 0;
  for (const signal of extractedData.pirateSignals) {
    if (signal.startsWith("strong:") || signal.startsWith("domain:") || signal.startsWith("ad_network:")) {
      score += 3;
    } else {
      score += 1;
    }
  }
  // Need score >= 3 to be pirate (1 strong signal or 3 weak ones)
  return {
    summary: metaDescription || title || "No description available",
    isPirate: score >= 3,
    isPaid: extractedData.paidSignals.length >= 2,
    pirateConfidence: Math.min(score / 10, 1),
  };
}

export async function analyzeSite(
  url: string,
  title: string,
  metaDescription: string,
  mainPageText: string,
  extractedData: ExtractedData,
  regionId: string
): Promise<AnalysisResult> {
  // If no API key — use heuristic only
  if (!ANTHROPIC_API_KEY) {
    console.log(`[Analyzer] No API key — using heuristic for ${url}`);
    return heuristicAnalysis(title, metaDescription, extractedData);
  }

  const pirateSignalsList = extractedData.pirateSignals.join(", ") || "none detected";
  const paidSignalsList = extractedData.paidSignals.join(", ") || "none detected";

  const prompt = `You are helping media buyers analyze websites for advertising placement opportunities.

Analyze this website:
URL: ${url}
Title: ${title}
Meta description: ${metaDescription}
Page text (first 3000 chars): ${mainPageText.slice(0, 3000)}

Detected pirate signals: ${pirateSignalsList}
Detected paid/paywall signals: ${paidSignalsList}

Determine:
1. A brief summary (1-2 sentences): what is this site about, its niche and audience
2. Is this a pirate/unlicensed content site? (streaming, torrents, free movies/series/music/software/games without proper licensing)
3. Is this a paid/premium content site with paywall?
4. Confidence score for piracy detection (0.0 to 1.0)

Respond ONLY with valid JSON:
{
  "summary": "...",
  "is_pirate": true/false,
  "is_paid": true/false,
  "pirate_confidence": 0.0-1.0
}`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 300,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!response.ok) {
      console.error(`[Analyzer] Claude API error ${response.status}`);
      return heuristicAnalysis(title, metaDescription, extractedData);
    }

    const data = await response.json();
    const text = data.content?.[0]?.text || "";
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON in response");

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      summary: parsed.summary || metaDescription || "No description available",
      isPirate: parsed.is_pirate ?? extractedData.pirateSignals.length >= 2,
      isPaid: parsed.is_paid ?? extractedData.paidSignals.length >= 2,
      pirateConfidence: parsed.pirate_confidence ?? 0,
    };
  } catch (err) {
    console.error(`[Analyzer] Failed for ${url}:`, err);
    return heuristicAnalysis(title, metaDescription, extractedData);
  }
}
