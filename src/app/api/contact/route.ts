import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, practice, type, website, message } = body;

    if (!name || !practice || !type || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Driftless Contact Form <onboarding@resend.dev>",
      to: "admin@driftlss.com",
      subject: `New lead: ${practice} (${type})`,
      replyTo: undefined,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Name</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Practice</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(practice)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Type</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(type)}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Website</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${website ? escapeHtml(website) : "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;font-weight:bold;border-bottom:1px solid #eee;">Message</td>
            <td style="padding:8px 12px;border-bottom:1px solid #eee;">${escapeHtml(message)}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
