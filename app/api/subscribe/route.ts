import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, wantsEarlyAccess } = body;

  // Récupération IP (reverse proxy friendly)
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "unknown";

  // Exemple : log ou stockage DB
  console.log({
    email,
    wantsEarlyAccess,
    ip,
    createdAt: new Date(),
  });

  // TODO: sauvegarde BDD ici (Prisma, Drizzle, SQL, etc.)

  return NextResponse.json(
    { success: true },
    { status: 200 }
  );
}
