import { siteConfig } from "@/lib/site-config";

import type { ContactFormInput } from "@/lib/forms/schema";

function toText(data: ContactFormInput): string {
  return [
    "Новая заявка с сайта vnd-decor.ru",
    `Имя: ${data.name}`,
    `Телефон: ${data.phone}`,
    `Email: ${data.email || "не указан"}`,
    `Услуга: ${data.service || "не выбрана"}`,
    `Сообщение: ${data.message}`
  ].join("\n");
}

export async function sendTelegramNotification(data: ContactFormInput): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return;
  }

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: toText(data)
    })
  });
}

export async function sendEmailNotification(data: ContactFormInput): Promise<void> {
  const endpoint = process.env.EMAIL_API_ENDPOINT;
  const apiKey = process.env.EMAIL_API_KEY;
  const to = process.env.EMAIL_TO || siteConfig.email;

  if (!endpoint || !apiKey) {
    return;
  }

  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      to,
      subject: "Новая заявка с vnd-decor.ru",
      text: toText(data)
    })
  });
}
