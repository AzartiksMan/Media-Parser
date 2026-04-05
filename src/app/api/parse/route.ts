import { NextRequest } from "next/server";
import { parseSite } from "@/lib/parser";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { urls, regionId } = body as { urls: string[]; regionId: string };

  if (!urls || urls.length === 0) {
    return new Response(JSON.stringify({ error: "urls required" }), { status: 400 });
  }

  // Stream results one by one via Server-Sent Events
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i < urls.length; i++) {
        try {
          console.log(`[${i + 1}/${urls.length}] Parsing ${urls[i]}...`);
          const result = await parseSite(urls[i], regionId || "us");

          const event = `data: ${JSON.stringify({ index: i, total: urls.length, result })}\n\n`;
          controller.enqueue(encoder.encode(event));
        } catch (error) {
          const errorResult = {
            url: urls[i],
            domain: "",
            title: "",
            description: "",
            summary: "Parse error",
            isPirate: false,
            isPaid: false,
            pirateSignals: [],
            emails: [],
            phones: [],
            socials: [],
            advertisingPage: null,
            status: "error" as const,
            error: error instanceof Error ? error.message : String(error),
          };
          const event = `data: ${JSON.stringify({ index: i, total: urls.length, result: errorResult })}\n\n`;
          controller.enqueue(encoder.encode(event));
        }

        // Small delay between sites
        if (i < urls.length - 1) {
          await new Promise((r) => setTimeout(r, 500));
        }
      }

      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
