import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

import type { ContentEntry } from "@/lib/content/types";

async function readDirectoryFiles(dirPath: string): Promise<string[]> {
  const files = await fs.readdir(dirPath);
  return files.filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
}

export async function loadCollection<T>(collectionPath: string): Promise<Array<ContentEntry<T>>> {
  const absoluteDir = path.join(process.cwd(), collectionPath);
  const files = await readDirectoryFiles(absoluteDir);

  const entries = await Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(absoluteDir, fileName);
      const raw = await fs.readFile(filePath, "utf-8");
      const parsed = matter(raw);

      return {
        frontmatter: parsed.data as T,
        content: parsed.content,
        filePath
      };
    })
  );

  return entries;
}

export function bySlug<T extends { slug: string }>(entries: Array<ContentEntry<T>>, slug: string): ContentEntry<T> | undefined {
  return entries.find((entry) => entry.frontmatter.slug === slug);
}
