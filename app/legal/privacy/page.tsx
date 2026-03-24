import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { RichText } from "@/components/ui/rich-text";
import { getLegalDocument } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Политика конфиденциальности — VND Decor",
  description: "Политика обработки персональных данных сайта vnd-decor.ru.",
  path: "/legal/privacy"
});

export default async function PrivacyPage() {
  const content = await getLegalDocument("privacy");

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Политика конфиденциальности", href: "/legal/privacy" }
          ]}
        />
        <h1 className="mt-6 text-4xl">Политика конфиденциальности</h1>
        <div className="mt-6">
          <RichText source={content} />
        </div>
      </Container>
    </section>
  );
}
