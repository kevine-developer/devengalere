import { NextRequest, NextResponse } from "next/server";

// Charge les IP autorisées
const allowedIPs = process.env.ALLOWED_IPS
  ? process.env.ALLOWED_IPS.split(",").map((ip) => ip.trim())
  : [];

console.log("Allowed IPs:", allowedIPs);

// Fonction obligatoire
export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Récupère l'IP de manière fiable
  let ip =
    (request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"))
      ?.split(",")[0]
      .trim() ||
    request.headers.get("x-forwarded-for") ||
    request.headers.get("x-real-ip") ||
    "0.0.0.0";

  // Normalise IPv6 : ::ffff:127.0.0.1 => 127.0.0.1
  ip = ip.replace(/^::ffff:/, "");

  // En local : ::1 = 127.0.0.1
  if (ip === "::1") ip = "127.0.0.1";

  console.log("Incoming IP:", ip, "for path:", pathname);

  // Laisse passer les assets ou APIs nécessaires
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap")
  ) {
    return NextResponse.next();
  }

  // Condition de maintenance
  const maintenance = process.env.MAINTENANCE === "true";

  if (maintenance && !allowedIPs.includes(ip)) {
    return NextResponse.rewrite(new URL("/coming-soon", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
