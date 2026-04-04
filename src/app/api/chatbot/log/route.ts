import { logConversation } from "@/lib/dashboard";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  await logConversation(body);
  return NextResponse.json({ success: true });
}
