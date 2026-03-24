import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { RichText } from "@/components/ui/rich-text";
import { getLegalDocument } from "@/lib/content/legal";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Согласие на обработку ПД — VND Decor",
  description: "Согласие на обработку персональных данных для формы сайта vnd-decor.ru.",
  path: "/legal/consent"
});

export default async function ConsentPage() {
  const content = await getLegalDocument("consent");

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Согласие на обработку", href: "/legal/consent" }
          ]}
        />
        <h1 className="mt-6 text-4xl">Согласие на обработку персональных данных</h1>
        <div className="mt-6">
          <RichText source={content} />
        </div>
      </Container>
    </section>
  );
}
