import { NextRequest, NextResponse } from "next/server";

const allowedIPs = process.env.ALLOWED_IPS
  ? process.env.ALLOWED_IPS.split(",").map((ip) => ip.trim())
  : [];

export function proxy(request: NextRequest) {
  const ip =
    request.headers.get("x-real-ip") ||
    request.headers.get("x-forwarded-for") ||
    "0.0.0.0";

  const pathname = request.nextUrl.pathname;

  // Laisser passer les assets
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/conditions-utilisation") ||
    pathname.startsWith("/mentions-legales") ||
    pathname.startsWith("/politique-confidentialite")
  ) {
    return NextResponse.next();
  }

  // Redirection visiteurs non autorisés
  if (!allowedIPs.includes(ip)) {
    return NextResponse.rewrite(new URL("/coming-soon", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
