"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const serviceRoutes = new Set([
  "/prezidium-na-svadbu",
  "/fotozona-na-svadbu",
  "/svadebnaya-floristika",
  "/oformlenie-vyezdnoy-registratsii",
  "/oformlenie-zala-sharami-na-svadbu"
]);

type NavItem = {
  href: string;
  label: string;
  isActive: (pathname: string) => boolean;
};

const navItems: NavItem[] = [
  { href: "/", label: "Главная", isActive: (pathname) => pathname === "/" },
  { href: "/projects", label: "Проекты", isActive: (pathname) => pathname.startsWith("/projects") },
  { href: "/#services", label: "Услуги", isActive: (pathname) => serviceRoutes.has(pathname) },
  { href: "/about", label: "О студии", isActive: (pathname) => pathname === "/about" },
  { href: "/blog", label: "Блог", isActive: (pathname) => pathname.startsWith("/blog") },
  { href: "/contacts", label: "Контакты", isActive: (pathname) => pathname === "/contacts" }
];

export function Header() {
  const pathname = usePathname() ?? "/";

  function handleMobileNavClick(event: MouseEvent<HTMLAnchorElement>) {
    const details = event.currentTarget.closest("details");
    if (details) {
      details.removeAttribute("open");
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-brand-border/80 bg-brand-background/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-serif text-xl leading-none tracking-[-0.02em]">VND Decor</span>
          <span className="hidden text-[0.68rem] uppercase tracking-[0.18em] text-brand-muted lg:block">
            Wedding & Event Decor
          </span>
        </Link>

        <nav aria-label="Главное меню" className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.isActive(pathname) ? "page" : undefined}
              className={[
                "type-kicker !text-[0.64rem] !tracking-[0.16em] transition-colors",
                item.isActive(pathname) ? "text-brand-primary" : "text-brand-text hover:text-brand-primary"
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contacts" size="sm">
            Оставить заявку
          </ButtonLink>
        </nav>

        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer rounded-lg border border-brand-border px-3 py-2 text-xs uppercase tracking-[0.16em] text-brand-text">
            Меню
          </summary>
          <nav
            aria-label="Мобильное меню"
            className="surface-card absolute right-0 top-[calc(100%+0.75rem)] z-50 w-64 p-4 shadow-card"
          >
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={item.isActive(pathname) ? "page" : undefined}
                    onClick={handleMobileNavClick}
                    className={[
                      "block rounded-md px-2 py-2 text-sm transition-colors",
                      item.isActive(pathname)
                        ? "bg-brand-soft text-brand-primary"
                        : "text-brand-text hover:bg-brand-soft"
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3">
              <ButtonLink href="/contacts" className="w-full">
                Оставить заявку
              </ButtonLink>
            </div>
          </nav>
        </details>
      </Container>
    </header>
  );
}
