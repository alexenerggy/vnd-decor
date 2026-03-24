import { cache } from "react";

import { bySlug, loadCollection } from "@/lib/content/loader";
import type { ContentEntry, ProjectFrontmatter } from "@/lib/content/types";

const loadProjectsCollection = cache(async (): Promise<Array<ContentEntry<ProjectFrontmatter>>> => {
  return loadCollection<ProjectFrontmatter>("content/projects");
});

export const getProjects = cache(async () => {
  const projects = await loadProjectsCollection();
  return projects.sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title, "ru"));
});

export const getProjectBySlug = cache(async (slug: string) => {
  const projects = await loadProjectsCollection();
  return bySlug(projects, slug);
});
