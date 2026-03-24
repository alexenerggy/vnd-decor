import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service-page";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Фотозона на свадьбу — VND Decor",
  description: "Дизайн и реализация фотозоны на свадьбу: интерьерные и уличные решения.",
  path: "/fotozona-na-svadbu"
});

export default function FotozonaPage() {
  return <ServicePageTemplate slug="fotozona-na-svadbu" />;
}
