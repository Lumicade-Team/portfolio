import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";
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

async function sendEmailAlert(payload: ContactPayload): Promise<EmailAlertResult> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return { sent: false, reason: "Missing GMAIL_USER or GMAIL_APP_PASSWORD" };
  }

  const from = process.env.CONTACT_FROM_EMAIL || gmailUser;
  const alertTo = process.env.CONTACT_ALERT_TO || "lumicad.dev@gmail.com";

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
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return { sent: true };
  } catch {
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

    const { error } = await supabaseServer.from("contact_messages").insert({
      name: payload.name,
      email: payload.email,
      message: payload.message,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to save your message." }, { status: 500 });
    }

    const emailResult = await sendEmailAlert(payload);

    return NextResponse.json({
      success: true,
      emailSent: emailResult.sent,
      message: emailResult.sent
        ? "Your message was submitted successfully."
        : "Your message was saved, but email notification failed.",
      emailError: emailResult.sent ? undefined : emailResult.reason,
    });
  } catch {
    return NextResponse.json({ error: "Unexpected error while sending your message." }, { status: 500 });
  }
}