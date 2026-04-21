"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#pricing", label: "Пакеты" },
  { href: "#testimonials", label: "Отзывы" },
  { href: "#faq", label: "FAQ" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const headerClass = scrolled
    ? "bg-brand-background/92 backdrop-blur-md border-b border-brand-border"
    : "bg-transparent border-b border-transparent";

  const textClass = scrolled ? "text-brand-text" : "text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 h-16 transition-all duration-200 ${headerClass}`}
      >
        <div className="container-content flex h-full items-center justify-between">
          <Link
            href="/"
            aria-label="Ежевика Студия"
            className={`font-serif text-2xl font-semibold tracking-tight transition-colors ${textClass}`}
          >
            Ежевика <span className="text-brand-accent">Студия</span>
          </Link>

          <nav aria-label="Главное меню" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${textClass}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a href="#final-cta" className="btn-primary !min-h-[44px] !py-2.5 !px-5 text-sm">
              Бесплатный просчёт
            </a>
          </div>

          <button
            type="button"
            aria-label="Открыть меню"
            aria-expanded={mobileOpen}
            className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${textClass}`}
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню"
          className="fixed inset-0 z-50 bg-brand-bgDark text-white animate-fade-in-up lg:hidden"
          style={{ animationDuration: "220ms" }}
        >
          <div className="flex h-16 items-center justify-between px-5 sm:px-8">
            <span className="font-serif text-2xl font-semibold">
              Ежевика <span className="text-brand-accent">Студия</span>
            </span>
            <button
              type="button"
              aria-label="Закрыть меню"
              className="flex h-11 w-11 items-center justify-center rounded-full text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 sm:px-8 pt-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl py-3 border-b border-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#final-cta"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-8"
            >
              Бесплатный просчёт
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
