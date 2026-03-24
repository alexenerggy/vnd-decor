import { cache } from "react";

import { bySlug, loadCollection } from "@/lib/content/loader";
import type { BlogFrontmatter, ContentEntry } from "@/lib/content/types";

const loadBlogCollection = cache(async (): Promise<Array<ContentEntry<BlogFrontmatter>>> => {
  return loadCollection<BlogFrontmatter>("content/blog");
});

export const getBlogPosts = cache(async () => {
  const posts = await loadBlogCollection();

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
});

export const getBlogPostBySlug = cache(async (slug: string) => {
  const posts = await loadBlogCollection();
  return bySlug(posts, slug);
});
