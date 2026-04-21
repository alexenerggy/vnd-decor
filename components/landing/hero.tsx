"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-brand-bgDark text-white"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-wedding.jpg"
          alt="Оформление свадьбы — Ежевика Студия"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      </div>

      <div className="container-content pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-serif font-semibold leading-[1.02] tracking-tight text-[clamp(2.5rem,6vw,5rem)]"
          >
            Свадьба,&nbsp;которую захочется пересматривать в&nbsp;фотоальбоме
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mt-6 max-w-2xl text-[clamp(1.05rem,1.5vw,1.375rem)] leading-relaxed text-white/85"
          >
            Авторский декор под концепцию вашей пары. Прозрачная смета без скрытых наценок.
            Более 200 свадеб с 2016 года.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a href="#final-cta" className="btn-primary">
              Получить 3 концепции и смету бесплатно
            </a>
            <a href="#portfolio" className="btn-ghost">
              Смотреть портфолио
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur-sm"
          >
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
            Ответим в течение 2 часов · Telegram / WhatsApp / MAX
          </motion.p>
        </div>
      </div>
    </section>
  );
}
