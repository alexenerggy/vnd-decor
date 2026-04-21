import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd } from "@/lib/seo/jsonld";
import { siteConfig } from "@/lib/site-config";

import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap"
});

const defaultTitle = "Ежевика Студия — авторский свадебный декор в Москве";
const defaultDescription =
  "Авторское оформление свадеб под концепцию вашей пары. Прозрачные сметы без скрытых наценок. Более 200 свадеб с 2016 года. Москва и МО.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: defaultTitle,
    template: "%s · Ежевика Студия"
  },
  description: defaultDescription,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: siteConfig.name,
    type: "website",
    locale: "ru_RU",
    images: [{ url: "/images/og-default.svg", width: 1200, height: 630, alt: siteConfig.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/og-default.svg"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 bg-brand-primary text-white px-4 py-2 rounded"
        >
          Перейти к контенту
        </a>
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main id="main-content" className="min-h-[60svh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
