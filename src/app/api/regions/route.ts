import { NextResponse } from "next/server";
import { REGIONS } from "@/lib/regions";

export async function GET() {
  return NextResponse.json(REGIONS);
}
