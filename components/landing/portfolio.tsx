"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "./reveal";

const portfolioImages = [
  "/images/legacy/portfolio/2.jpg.webp",
  "/images/legacy/portfolio/5.jpg.webp",
  "/images/legacy/portfolio/9.jpg.webp",
  "/images/legacy/portfolio/11.jpg.webp",
  "/images/legacy/portfolio/14.jpg.webp",
  "/images/legacy/portfolio/17.jpg.webp",
  "/images/legacy/portfolio/21.jpg.webp",
  "/images/legacy/portfolio/25.jpg.webp",
  "/images/legacy/portfolio/28.jpg.webp"
];

export function Portfolio() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % portfolioImages.length));
  }, []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i - 1 + portfolioImages.length) % portfolioImages.length));
  }, []);

  useEffect(() => {
    if (openIndex === null) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, next, prev]);

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="section-pad bg-brand-soft/60">
      <div className="container-content">
        <Reveal className="max-w-3xl">
          <p className="type-eyebrow">Портфолио</p>
          <h2 id="portfolio-heading" className="type-h2 mt-4">
            Реальные свадьбы, которые мы оформили
          </h2>
          <p className="type-lead mt-5">
            Каждая свадьба — авторский проект под концепцию пары. Ни одна декорация не повторяется.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
            {portfolioImages.map((src, idx) => (
              <button
                key={src}
                type="button"
                onClick={() => setOpenIndex(idx)}
                className="mb-4 block w-full overflow-hidden rounded-xl bg-brand-soft group relative"
                aria-label={`Открыть изображение ${idx + 1}`}
              >
                <Image
                  src={src}
                  alt={`Свадебный декор — работа ${idx + 1}`}
                  width={600}
                  height={idx % 3 === 0 ? 800 : idx % 3 === 1 ? 600 : 700}
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 text-center">
          <a href="#final-cta" className="btn-outline">
            Смотреть все 30+ работ
          </a>
        </Reveal>
      </div>

      <AnimatePresence>
        {openIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-bgDark/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Галерея работ"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Закрыть"
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              aria-label="Предыдущее"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              aria-label="Следующее"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={1.5} />
            </button>

            <motion.div
              key={openIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[85vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={portfolioImages[openIndex]}
                alt={`Свадебный декор — работа ${openIndex + 1}`}
                width={1600}
                height={1200}
                className="max-h-[85vh] w-auto rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
