"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./reveal";

const faqs = [
  {
    q: "За какое время нужно бронировать?",
    a: "Оптимально — за 3–6 месяцев. На пиковые даты (май–сентябрь, субботы) лучше за 6–9 месяцев. Но мы берём экспресс-проекты, если дата свободна."
  },
  {
    q: "Выезжаете ли за пределы Москвы?",
    a: "Да, работаем по Москве и Московской области. По России и за рубежом — обсуждается индивидуально, закладываем логистику в смету."
  },
  {
    q: "Можно ли менять концепцию после заключения договора?",
    a: "Мелкие правки — бесплатно. Смена общего стиля после закупки материалов — к сожалению, нет. Поэтому мы делаем 3 концепции на старте, чтобы выбрать спокойно."
  },
  {
    q: "Что если что-то сломается в день свадьбы?",
    a: "На монтаже всегда остаётся наш координатор до начала церемонии. Все конструкции проверяются, есть запасные элементы. За 9 лет — ни одного инцидента."
  },
  {
    q: "Работаете ли вы с мужскими или нестандартными свадьбами?",
    a: "Да. Делали свадьбы в стилях rock, готика, Halloween, LGBT-церемонии, тематические (Гарри Поттер, Великий Гэтсби и др.)."
  },
  {
    q: "Какая предоплата и когда финал?",
    a: "30% — бронь даты, 50% — за 2 недели до свадьбы (закупка материалов), 20% — в день монтажа. Всё фиксируем в договоре."
  }
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-pad bg-brand-background">
      <div className="container-content">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <Reveal>
            <p className="type-eyebrow">Вопросы</p>
            <h2 id="faq-heading" className="type-h2 mt-4">
              Частые вопросы
            </h2>
            <p className="type-lead mt-5">
              Всё, что обычно спрашивают пары до заключения договора.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="divide-y divide-brand-border border-t border-b border-brand-border">
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${idx}`}
                      id={`faq-button-${idx}`}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left group"
                    >
                      <span className="font-serif text-xl sm:text-2xl font-semibold text-brand-text leading-tight">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-border text-brand-primary transition-all duration-300 ${
                          isOpen ? "rotate-45 bg-brand-primary text-white border-brand-primary" : ""
                        }`}
                      >
                        <Plus className="h-4 w-4" strokeWidth={1.5} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="content"
                          id={`faq-panel-${idx}`}
                          role="region"
                          aria-labelledby={`faq-button-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-12 text-[0.95rem] leading-7 text-brand-muted">
                            {item.a}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
