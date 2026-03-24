"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/forms/input";
import { Textarea } from "@/components/forms/textarea";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ service }: { service?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string>("");

  async function submitForm(formData: FormData) {
    setState("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      if (!res.ok) {
        const body = (await res.json()) as { error?: string };
        throw new Error(body.error || "Не удалось отправить форму");
      }

      setState("success");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
    }
  }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await submitForm(new FormData(event.currentTarget));
      }}
      className="space-y-4 rounded-2xl border border-brand-border bg-brand-soft p-6 sm:p-8"
    >
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="service" value={service || ""} />

      <div>
        <label htmlFor="name" className="mb-2 block text-sm">
          Имя
        </label>
        <Input id="name" name="name" placeholder="Как к вам обращаться" required />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm">
          Телефон
        </label>
        <Input id="phone" name="phone" placeholder="+7 (___) ___-__-__" required />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm">
          Email
        </label>
        <Input id="email" type="email" name="email" placeholder="name@email.com" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm">
          Сообщение
        </label>
        <Textarea id="message" name="message" placeholder="Опишите формат мероприятия, дату и площадку" required />
      </div>

      <Button type="submit" disabled={state === "submitting"} className="w-full sm:w-auto">
        {state === "submitting" ? "Отправляем..." : "Отправить заявку"}
      </Button>

      {state === "success" ? <p className="text-sm text-green-700">Заявка отправлена, скоро свяжемся с вами.</p> : null}
      {state === "error" ? <p className="text-sm text-red-700">{error}</p> : null}
    </form>
  );
}
