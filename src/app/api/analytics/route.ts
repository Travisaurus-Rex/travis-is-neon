import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const url = process.env.NEXT_PUBLIC_ANALYTICS_URL;
  if (!url) {
    return NextResponse.json(
      { message: "Analytics URL missing from env", success: false },
      { status: 500 },
    );
  }

  const forwarded = req.headers.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const body = await req.json();

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...body,
      ip,
    }),
  });

  return NextResponse.json({ ok: true });
}
