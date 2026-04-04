import { fetchChatbotConfig } from "@/lib/dashboard";
import { NextResponse } from "next/server";

export async function GET() {
  const config = await fetchChatbotConfig();
  if (!config) {
    return NextResponse.json(
      {
        welcome_message:
          "Have a question about our services? We're here to help.",
        widget_color: "#2A7D6E",
        widget_position: "bottom-right",
        is_active: true,
      },
      { status: 200 }
    );
  }

  return NextResponse.json({
    welcome_message: config.welcome_message,
    widget_color: config.widget_color,
    widget_position: config.widget_position,
    is_active: config.is_active,
  });
}
