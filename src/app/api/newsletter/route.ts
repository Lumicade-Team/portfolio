import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

type NewsletterPayload = {
  name: string;
  email: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<NewsletterPayload>;

    const payload: NewsletterPayload = {
      name: (body.name || "").trim(),
      email: (body.email || "").trim().toLowerCase(),
    };

    if (!payload.name || !payload.email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const { error } = await supabaseServer
      .from("newsletter_subscribers")
      .upsert(
        {
          name: payload.name,
          email: payload.email,
        },
        { onConflict: "email" },
      );

    if (error) {
      return NextResponse.json({ error: "Failed to save subscription." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Subscribed successfully." });
  } catch {
    return NextResponse.json({ error: "Unexpected error while subscribing." }, { status: 500 });
  }
}