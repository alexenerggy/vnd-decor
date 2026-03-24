import type { MetadataRoute } from "next";

import { getBlogPosts } from "@/lib/content/blog";
import { getProjects } from "@/lib/content/projects";
import { getServices } from "@/lib/content/services";
import { absoluteUrl } from "@/lib/seo/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [services, projects, posts] = await Promise.all([getServices(), getProjects(), getBlogPosts()]);

  const staticPages = ["/", "/projects", "/blog", "/about", "/contacts", "/legal/privacy", "/legal/consent"].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7
  }));

  const servicePages = services.map((item) => ({
    url: absoluteUrl(`/${item.frontmatter.slug}`),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  const projectPages = projects.map((item) => ({
    url: absoluteUrl(`/projects/${item.frontmatter.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const blogPages = posts.map((item) => ({
    url: absoluteUrl(`/blog/${item.frontmatter.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticPages, ...servicePages, ...projectPages, ...blogPages];
}
