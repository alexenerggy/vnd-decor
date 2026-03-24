import { absoluteUrl } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/site-config";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.domain,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    areaServed: "RU",
    sameAs: []
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  datePublished: string;
  path: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    mainEntityOfPage: absoluteUrl(input.path),
    image: [absoluteUrl(input.image)],
    author: {
      "@type": "Organization",
      name: siteConfig.legalName
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName
    }
  };
}
