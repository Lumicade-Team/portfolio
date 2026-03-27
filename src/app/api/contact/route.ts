import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabaseServer";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

type EmailAlertResult = {
  sent: boolean;
  reason?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendEmailAlert(payload: ContactPayload): Promise<EmailAlertResult> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return { sent: false, reason: "Missing GMAIL_USER or GMAIL_APP_PASSWORD" };
  }

  const from = process.env.CONTACT_FROM_EMAIL || gmailUser;
  const alertTo = process.env.CONTACT_ALERT_TO;

  if (!alertTo) {
    return { sent: false, reason: "Missing CONTACT_ALERT_TO environment variable" };
  }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from,
      to: alertTo,
      subject: `New contact form message from ${payload.name}`,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return { sent: true };
  } catch (err) {
    console.error("Email sending failed:", err);
    return { sent: false, reason: "Google SMTP rejected the request. Check Gmail app password and sender settings." };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    const payload: ContactPayload = {
      name: (body.name || "").trim(),
      email: (body.email || "").trim(),
      message: (body.message || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const supabaseServer = getSupabaseServer();

    const { error } = await supabaseServer.from("contact_messages").insert({
      name: payload.name,
      email: payload.email,
      message: payload.message,
    });

    const emailResult = await sendEmailAlert(payload);

    // Without a privileged key, DB writes can fail under RLS. Treat email as a valid fallback path.
    if (error && !emailResult.sent) {
      return NextResponse.json({ error: "Failed to process your message." }, { status: 500 });
    }

    return NextResponse.json({
      success: !error || emailResult.sent,
      savedToDb: !error,
      emailSent: emailResult.sent,
      message: !error && emailResult.sent
        ? "Your message was submitted successfully."
        : !error && !emailResult.sent
          ? "Your message was saved, but email notification failed."
          : "Your message was sent by email, but could not be stored in the database.",
      emailError: emailResult.sent ? undefined : emailResult.reason,
      dbError: error ? "Could not store message in Supabase." : undefined,
    });
  } catch {
    return NextResponse.json({ error: "Unexpected error while sending your message." }, { status: 500 });
  }
}