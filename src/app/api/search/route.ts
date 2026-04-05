import { NextRequest, NextResponse } from "next/server";
import { getSeedsForRegion } from "@/lib/seeds";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { regionId, contentType } = body as {
    regionId: string;
    contentType?: string;
  };

  if (!regionId) {
    return NextResponse.json({ error: "regionId is required" }, { status: 400 });
  }

  const seeds = getSeedsForRegion(regionId, contentType);

  return NextResponse.json({
    seeds: seeds.map((s) => ({
      domain: s.domain,
      brand: s.brand,
      contentType: s.contentType,
      region: s.region,
    })),
  });
}
