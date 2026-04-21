import Link from "next/link";
import { Instagram } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
  { href: "#final-cta", label: "Контакты" }
];

export function Footer() {
  return (
    <footer className="bg-brand-bgDark text-white/85">
      <div className="container-content py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <section>
            <p className="font-serif text-3xl font-semibold text-white">
              Ежевика <span className="text-brand-accent">Студия</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Авторская студия свадебного декора в Москве. С 2016 года создаём визуальную историю
              для пар, которые ценят эстетику и индивидуальный подход.
            </p>
            <p className="mt-5 text-xs text-white/50 leading-6">
              {siteConfig.inn} · {siteConfig.ogrn}
            </p>
          </section>

          <section>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-white/55">
              Навигация
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:text-brand-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-white/55">
              Контакты
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="transition-colors hover:text-brand-accent"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-brand-accent"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-white/60">{siteConfig.address}</li>
            </ul>

            <div className="mt-6">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-white/55">
                Мы на связи
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={siteConfig.telegram}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  Telegram
                </a>
                <a
                  href={siteConfig.whatsapp}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs font-medium transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  MAX
                </a>
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={siteConfig.instagram}
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  <Instagram className="h-4 w-4" strokeWidth={1.5} />
                </a>
                <a
                  href={siteConfig.vk}
                  aria-label="VK"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs font-semibold transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  VK
                </a>
                <a
                  href={siteConfig.pinterest}
                  aria-label="Pinterest"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs font-semibold transition-colors hover:border-brand-accent hover:text-brand-accent"
                >
                  P
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2016–2026 Ежевика Студия. Все права защищены.</p>
          <div className="flex gap-5">
            <Link href="/legal/privacy" className="transition-colors hover:text-brand-accent">
              Политика конфиденциальности
            </Link>
            <Link href="/legal/consent" className="transition-colors hover:text-brand-accent">
              Согласие на обработку данных
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
