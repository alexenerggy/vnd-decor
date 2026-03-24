import { cache } from "react";

import { bySlug, loadCollection } from "@/lib/content/loader";
import type { ContentEntry, ServiceFrontmatter } from "@/lib/content/types";

const loadServicesCollection = cache(async (): Promise<Array<ContentEntry<ServiceFrontmatter>>> => {
  return loadCollection<ServiceFrontmatter>("content/services");
});

export const getServices = cache(async () => {
  const services = await loadServicesCollection();
  return services.sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title, "ru"));
});

export const getServiceBySlug = cache(async (slug: string) => {
  const services = await loadServicesCollection();
  return bySlug(services, slug);
});
