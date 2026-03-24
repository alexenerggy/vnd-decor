import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getProjects } from "@/lib/content/projects";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Проекты — VND Decor",
  description: "Портфолио свадебного и event-декора: реализованные кейсы студии VND Decor.",
  path: "/projects"
});

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Проекты", href: "/projects" }]} />
        <SectionHeading title="Проекты" description="Реализованные кейсы студии свадебного и event-декора." />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((item) => (
            <ProjectCard key={item.frontmatter.slug} project={item.frontmatter} />
          ))}
        </div>
      </Container>
    </section>
  );
}
