import { Resend } from "resend";
import { NextResponse } from "next/server";
import { postLeadWebhook } from "@/lib/webhooks";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, phone, message } = body;

    const missing: string[] = [];
    if (!name?.trim()) missing.push("name");
    if (!email?.trim()) missing.push("email");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Driftlss <noreply@driftlss.com>",
      to: "admin@driftlss.com",
      subject: `Chat lead: ${name.trim()}`,
      text: [
        "New lead from chat widget",
        "",
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        phone ? `Phone: ${phone.trim()}` : "",
        "",
        message ? `Interest: ${message.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
    });

    void postLeadWebhook("chatbot", {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      source: "chatbot",
      notes: "",
      tags: ["clinic"],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Chat lead error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
