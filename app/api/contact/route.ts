import { NextResponse } from "next/server";

import { sendEmailNotification, sendTelegramNotification } from "@/lib/forms/notify";
import { isRateLimited } from "@/lib/forms/rate-limit";
import { contactFormSchema } from "@/lib/forms/schema";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  const rate = isRateLimited(`contact:${ip}`);
  if (rate.limited) {
    return NextResponse.json({ error: "Слишком много запросов. Попробуйте позже." }, { status: 429 });
  }

  const payload = (await request.json()) as Record<string, unknown>;
  const parsed = contactFormSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Ошибка валидации" }, { status: 400 });
  }

  const data = parsed.data;

  await Promise.allSettled([sendTelegramNotification(data), sendEmailNotification(data)]);

  return NextResponse.json({ ok: true });
}
