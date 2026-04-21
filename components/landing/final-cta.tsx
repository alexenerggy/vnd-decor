"use client";

import { motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const months = [
  "январе",
  "феврале",
  "марте",
  "апреле",
  "мае",
  "июне",
  "июле",
  "августе",
  "сентябре",
  "октябре",
  "ноябре",
  "декабре"
];

const monthName = months[new Date().getMonth()];

export function FinalCta() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string>("");
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const weddingDate = String(fd.get("weddingDate") || "").trim();

    const nextErrors: { name?: boolean; phone?: boolean } = {};
    if (name.length < 2) nextErrors.name = true;
    if (phone.length < 6) nextErrors.phone = true;
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setState("submitting");
    setError("");

    const message = [
      weddingDate ? `Дата свадьбы: ${weddingDate}` : null,
      "Запрос: 3 концепции и смета"
    ]
      .filter(Boolean)
      .join(". ");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email: "",
          message: message || "Запрос на 3 концепции и смету",
          service: "Главный лид-форма",
          website: ""
        })
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error || "Не удалось отправить форму");
      }
      setState("success");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
    }
  }

  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative isolate overflow-hidden bg-brand-bgDark text-white section-pad"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-wedding.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-brand-bgDark/85"
          aria-hidden="true"
        />
      </div>

      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="type-eyebrow !text-white/60">Заявка</p>
          <h2
            id="final-cta-heading"
            className="mt-4 font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-tight"
          >
            Свободно всего 3 даты в {monthName}
          </h2>
          <p className="mt-5 text-[clamp(1rem,1.3vw,1.2rem)] leading-relaxed text-white/80">
            Оставьте заявку — пришлём 3 концепции и смету в течение 3 рабочих дней.
            Это бесплатно и ни к чему не обязывает.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mt-10 max-w-4xl"
        >
          {state === "success" ? (
            <div className="rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-brand-bgDark">
                <Check className="h-6 w-6" strokeWidth={2.5} />
              </div>
              <h3 className="mt-5 font-serif text-2xl font-semibold">Заявка принята</h3>
              <p className="mt-3 text-white/75 max-w-md mx-auto">
                Свяжемся с вами в течение 2 часов в удобном мессенджере. Отдохните — мы берём
                оформление на себя.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
                <div>
                  <label htmlFor="cta-name" className="sr-only">
                    Имя
                  </label>
                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Имя"
                    aria-invalid={errors.name || undefined}
                    className="input-base input-dark"
                  />
                  {errors.name ? (
                    <p className="mt-1.5 text-xs text-[#ff9f9f]">Введите имя</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="cta-phone" className="sr-only">
                    Телефон
                  </label>
                  <input
                    id="cta-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    aria-invalid={errors.phone || undefined}
                    className="input-base input-dark"
                  />
                  {errors.phone ? (
                    <p className="mt-1.5 text-xs text-[#ff9f9f]">Введите телефон</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="cta-date" className="sr-only">
                    Дата свадьбы
                  </label>
                  <input
                    id="cta-date"
                    name="weddingDate"
                    type="date"
                    placeholder="Дата свадьбы"
                    className="input-base input-dark [color-scheme:dark]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="btn-primary !bg-brand-accent !text-brand-bgDark hover:!bg-white whitespace-nowrap"
                >
                  {state === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} />
                      Отправляем…
                    </>
                  ) : (
                    "Отправить"
                  )}
                </button>
              </div>

              {state === "error" ? (
                <p className="text-sm text-[#ff9f9f]">{error}</p>
              ) : null}

              <p className="pt-2 text-xs leading-5 text-white/55 max-w-2xl">
                Нажимая «Отправить», вы соглашаетесь с{" "}
                <a href="/legal/privacy" className="underline underline-offset-4 hover:text-white">
                  политикой обработки персональных данных
                </a>
                .
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
