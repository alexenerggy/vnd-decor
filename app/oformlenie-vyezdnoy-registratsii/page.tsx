import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service-page";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Оформление выездной регистрации — VND Decor",
  description: "Декор выездной церемонии, свадебной арки и зоны регистрации.",
  path: "/oformlenie-vyezdnoy-registratsii"
});

export default function RegistratsiyaPage() {
  return <ServicePageTemplate slug="oformlenie-vyezdnoy-registratsii" />;
}
