"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Palette, Sparkles } from "lucide-react";

const steps = [
  {
    Icon: MessageSquare,
    title: "Заявка и брифинг",
    text: "Оставляете заявку → созваниваемся, уточняем дату, площадку, бюджет, ваше видение. Это бесплатно."
  },
  {
    Icon: Palette,
    title: "3 концепции и смета",
    text: "В течение 3–5 дней присылаем 3 разные авторские концепции со сметой по каждой. Выбираете — дорабатываем до финала и подписываем договор."
  },
  {
    Icon: Sparkles,
    title: "Монтаж и ваш праздник",
    text: "Наша команда приезжает за 3–5 часов до церемонии, всё собирает, вы занимаетесь только собой. После праздника — демонтаж."
  }
];

export function HowItWorks() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <section aria-labelledby="howitworks-heading" className="section-pad bg-brand-background">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="type-eyebrow">Процесс</p>
          <h2 id="howitworks-heading" className="type-h2 mt-4">
            Как мы работаем
          </h2>
          <p className="type-lead mt-5">
            Всего три шага от заявки до свадьбы. Вы согласуете идею и смету, мы берём на себя остальное.
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative mt-16">
          <div className="absolute left-0 right-0 top-6 hidden h-px md:block" aria-hidden="true">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ transformOrigin: "left" }}
              className="h-px w-full bg-brand-border"
            />
          </div>

          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map(({ Icon, title, text }, idx) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + idx * 0.12 }}
                className="relative"
              >
                <div className="flex items-center gap-4">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-primary text-white font-serif text-lg font-semibold">
                    {idx + 1}
                  </div>
                  <Icon className="h-5 w-5 text-brand-muted" strokeWidth={1.5} />
                </div>
                <h3 className="type-h3 mt-6">{title}</h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-brand-muted">{text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
