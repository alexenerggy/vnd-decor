import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "О студии — VND Decor",
  description: "О студии VND Decor: подход, ценности и экспертиза в свадебном и event-декоре.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "О студии", href: "/about" }]} />
        <h1 className="mt-6 text-4xl sm:text-5xl">О студии</h1>
        <p className="mt-4 max-w-3xl text-brand-muted">
          VND Decor создает авторский свадебный и event-декор с редакционным подходом к визуальной композиции, материалам и атмосфере.
        </p>
      </Container>
    </section>
  );
}
