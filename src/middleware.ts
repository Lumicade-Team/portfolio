import { NextRequest, NextResponse } from "next/server";

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

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin")) return NextResponse.next();
  if (pathname === "/admin/login") return NextResponse.next();

  const token = request.cookies.get("admin_session")?.value;
  const secret = process.env.ADMIN_SESSION_SECRET || "fallback-secret";

  if (!token || !(await verifyToken(token, secret))) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
