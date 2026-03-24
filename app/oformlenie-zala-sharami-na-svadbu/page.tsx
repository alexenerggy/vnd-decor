import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service-page";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Оформление зала шарами на свадьбу — VND Decor",
  description: "Вторичная SEO-страница по оформлению зала шарами, без акцента в основной навигации.",
  path: "/oformlenie-zala-sharami-na-svadbu"
});

export default function BalloonsPage() {
  return <ServicePageTemplate slug="oformlenie-zala-sharami-na-svadbu" />;
}
