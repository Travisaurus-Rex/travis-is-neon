import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  const body = await req.json();

  await fetch("https://portfolio-api.codedbytravis.workers.dev/events", {
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
