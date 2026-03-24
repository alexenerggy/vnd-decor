import type { Metadata } from "next";

import { ServicePageTemplate } from "@/components/sections/service-page";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Свадебная флористика и декор — VND Decor",
  description: "Свадебные композиции, цветы на президиум и декор пространства живой флористикой.",
  path: "/svadebnaya-floristika"
});

export default function FloristikaPage() {
  return <ServicePageTemplate slug="svadebnaya-floristika" />;
}
