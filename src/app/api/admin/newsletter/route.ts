import { NextRequest, NextResponse } from "next/server";
import { supabaseServiceRole } from "@/lib/supabase";

async function hmacSign(message: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function verifyToken(token: string, secret: string): Promise<boolean> {
  const parts = token.split(":");
  if (parts.length !== 3) return false;
  const [user, expiry, signature] = parts;
  if (user !== "admin") return false;
  if (Date.now() > parseInt(expiry)) return false;
  const expected = await hmacSign(`${user}:${expiry}`, secret);
  return signature === expected;
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get("admin_session")?.value;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    console.error("Missing ADMIN_SESSION_SECRET environment variable");
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  if (!token || !(await verifyToken(token, secret))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabaseServiceRole
    .from("newsletter_subscribers")
    .select("id, name, email, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch newsletter subscribers:", error);
    return NextResponse.json({ error: "Failed to load subscribers." }, { status: 500 });
  }

  return NextResponse.json(data);
}
