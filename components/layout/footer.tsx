import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

const primaryNav = [
  { href: "/", label: "Главная" },
  { href: "/projects", label: "Проекты" },
  { href: "/#services", label: "Услуги" },
  { href: "/about", label: "О студии" },
  { href: "/blog", label: "Блог" },
  { href: "/contacts", label: "Контакты" }
];

const legalNav = [
  { href: "/legal/privacy", label: "Политика конфиденциальности" },
  { href: "/legal/consent", label: "Согласие на обработку данных" }
];

export function Footer() {
  return (
    <footer className="border-t border-brand-border/90 bg-brand-soft/45 py-14 sm:py-16">
      <Container className="editorial-stack">
        <div className="editorial-grid lg:grid-cols-3">
          <section className="space-y-3">
            <p className="font-serif text-2xl tracking-[-0.02em]">VND Decor</p>
            <p className="max-w-sm text-sm leading-7 text-brand-muted">
              Авторская студия свадебного и event-декора. Создаем визуальную историю события в Москве и МО.
            </p>
          </section>

          <section className="space-y-3">
            <p className="type-kicker">Контакты</p>
            <ul className="space-y-2 text-sm text-brand-text">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-brand-primary">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-brand-primary">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-brand-muted">{siteConfig.city}</li>
            </ul>
          </section>

          <section className="space-y-3">
            <p className="type-kicker">Соцсети и мессенджеры</p>
            <ul className="space-y-2 text-sm text-brand-text">
              <li>
                <a href="#" aria-label="Telegram placeholder" className="transition-colors hover:text-brand-primary">
                  Telegram (placeholder)
                </a>
              </li>
              <li>
                <a href="#" aria-label="WhatsApp placeholder" className="transition-colors hover:text-brand-primary">
                  WhatsApp (placeholder)
                </a>
              </li>
              <li>
                <a href="#" aria-label="Instagram placeholder" className="transition-colors hover:text-brand-primary">
                  Instagram (placeholder)
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="hairline pt-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <section className="space-y-3">
              <p className="type-kicker">Навигация</p>
              <ul className="space-y-1.5 text-sm">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-brand-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3 sm:col-span-2 lg:col-span-1">
              <p className="type-kicker">Юридическая информация</p>
              <ul className="space-y-1.5 text-sm">
                {legalNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-brand-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <p className="type-kicker">Copyright</p>
              <p className="text-sm text-brand-muted">© {new Date().getFullYear()} VND Decor. Все права защищены.</p>
            </section>
          </div>
        </div>
      </Container>
    </footer>
  );
}
