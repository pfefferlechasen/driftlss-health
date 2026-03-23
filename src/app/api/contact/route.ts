import { Resend } from "resend";
import { NextResponse } from "next/server";

function esc(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function safeUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") return esc(parsed.href);
  } catch { /* invalid url */ }
  return "";
}

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, practice, type, website, message, practiceType } = body;

    const label = esc(practiceType || type || "Not specified");

    // Validate required fields
    const missing: string[] = [];
    if (!name?.trim()) missing.push("name");
    if (!email?.trim()) missing.push("email");
    if (!message?.trim()) missing.push("message");

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Basic email format check
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
      subject: `New inquiry from ${(practice || name).trim()}`,
      text: [
        `New contact form submission`,
        ``,
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        practice ? `Practice: ${practice.trim()}` : "",
        `Type: ${label}`,
        `Website: ${website?.trim() || "Not provided"}`,
        ``,
        `Message:`,
        message.trim(),
      ].filter(Boolean).join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488;">New Inquiry from ${esc((practice || name).trim())}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Name</td>
              <td style="padding: 8px 12px; color: #6b7280; border-bottom: 1px solid #e5e7eb;">${esc(name.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Email</td>
              <td style="padding: 8px 12px; color: #6b7280; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${esc(email.trim())}">${esc(email.trim())}</a></td>
            </tr>
            ${practice ? `<tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Practice</td>
              <td style="padding: 8px 12px; color: #6b7280; border-bottom: 1px solid #e5e7eb;">${esc(practice.trim())}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Type</td>
              <td style="padding: 8px 12px; color: #6b7280; border-bottom: 1px solid #e5e7eb;">${label}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">Website</td>
              <td style="padding: 8px 12px; color: #6b7280; border-bottom: 1px solid #e5e7eb;">${website?.trim() ? `<a href="${safeUrl(website.trim())}">${esc(website.trim())}</a>` : "Not provided"}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-radius: 8px;">
            <p style="font-weight: 600; color: #374151; margin: 0 0 8px 0;">Message:</p>
            <p style="color: #6b7280; margin: 0; white-space: pre-wrap;">${esc(message.trim())}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
