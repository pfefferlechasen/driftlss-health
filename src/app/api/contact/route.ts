import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, practice, type, website, message, practiceType } = body;

    const label = practiceType || type || "Not specified";
    const lines = [
      `<p><strong>Name:</strong> ${name}</p>`,
      email ? `<p><strong>Email:</strong> ${email}</p>` : "",
      practice ? `<p><strong>Practice:</strong> ${practice}</p>` : "",
      `<p><strong>Practice Type:</strong> ${label}</p>`,
      website ? `<p><strong>Website:</strong> ${website}</p>` : "",
      message ? `<p><strong>Message:</strong> ${message}</p>` : "",
      `<p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>`,
    ].filter(Boolean).join("\n");

    await resend.emails.send({
      from: "Driftless <noreply@driftlss.com>",
      to: "admin@driftlss.com",
      subject: `New contact from ${name}`,
      html: `<h2>New Contact Form Submission</h2>\n${lines}`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}
