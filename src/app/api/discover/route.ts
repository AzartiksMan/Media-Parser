import { NextRequest } from "next/server";
import { discoverSites } from "@/lib/discoverer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { regionId, contentType } = body as {
    regionId: string;
    contentType?: string;
  };

  if (!regionId) {
    return new Response(JSON.stringify({ error: "regionId required" }), {
      status: 400,
    });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of discoverSites(regionId, contentType)) {
          const data = `data: ${JSON.stringify(event)}\n\n`;
          controller.enqueue(encoder.encode(data));
        }
      } catch (error) {
        const errorEvent = `data: ${JSON.stringify({
          type: "error",
          error: error instanceof Error ? error.message : String(error),
        })}\n\n`;
        controller.enqueue(encoder.encode(errorEvent));
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
