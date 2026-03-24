import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationJsonLd } from "@/lib/seo/jsonld";
import { siteConfig } from "@/lib/site-config";

import "@/styles/globals.css";

const defaultTitle = "VND Decor — студия свадебного и event-декора";
const defaultDescription =
  "Премиальный декор свадеб и событий в Москве и МО: концепция, флористика, церемония и оформление под ключ.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: defaultTitle,
    template: "%s"
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
    <html lang="ru">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50">
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
