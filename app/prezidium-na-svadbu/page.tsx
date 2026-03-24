import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service-page";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Президиум на свадьбу — VND Decor",
  description: "Оформление президиума и декор свадебного стола жениха и невесты в Москве и МО.",
  path: "/prezidium-na-svadbu"
});

export default function PrezidiumPage() {
  return <ServicePageTemplate slug="prezidium-na-svadbu" />;
}
