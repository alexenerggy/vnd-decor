import type { Metadata } from "next";

import { ContactForm } from "@/components/forms/contact-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Контакты — VND Decor",
  description: "Свяжитесь со студией VND Decor для консультации по свадебному и event-декору.",
  path: "/contacts"
});

export default function ContactsPage() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Контакты", href: "/contacts" }]} />

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h1 className="text-4xl sm:text-5xl">Контакты</h1>
            <div className="mt-6 space-y-2 text-brand-muted">
              <p>Телефон: {siteConfig.phone}</p>
              <p>Email: {siteConfig.email}</p>
              <p>География: {siteConfig.city}</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
