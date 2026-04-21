import type { Metadata } from "next";

import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { FinalCta } from "@/components/landing/final-cta";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Portfolio } from "@/components/landing/portfolio";
import { Pricing } from "@/components/landing/pricing";
import { Problem } from "@/components/landing/problem";
import { SocialProof } from "@/components/landing/social-proof";
import { Solution } from "@/components/landing/solution";
import { Testimonials } from "@/components/landing/testimonials";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Ежевика Студия — авторский свадебный декор в Москве",
  description:
    "Авторский декор под концепцию вашей пары. Прозрачная смета без скрытых наценок. Более 200 свадеб с 2016 года. Москва и МО.",
  path: "/",
  image: "/images/hero-wedding.jpg"
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
