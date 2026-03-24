import type { Metadata } from "next";

import { siteConfig } from "@/lib/site-config";

type BuildMetadataParams = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.domain).toString();
}

export function buildMetadata({ title, description, path = "/", image = "/images/og-default.svg" }: BuildMetadataParams): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "ru_RU",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
