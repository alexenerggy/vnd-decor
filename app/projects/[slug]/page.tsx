import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { ImageGallery } from "@/components/ui/image-gallery";
import { RichText } from "@/components/ui/rich-text";
import { getProjectBySlug, getProjects } from "@/lib/content/projects";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((item) => ({ slug: item.frontmatter.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return buildMetadata({ title: "Проект не найден", description: "Страница не найдена", path: `/projects/${slug}` });
  }

  return buildMetadata({
    title: `${project.frontmatter.title} — Проект VND Decor`,
    description: project.frontmatter.shortDescription,
    path: `/projects/${project.frontmatter.slug}`,
    image: project.frontmatter.gallery[0]
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Главная", path: "/" },
    { name: "Проекты", path: "/projects" },
    { name: project.frontmatter.title, path: `/projects/${project.frontmatter.slug}` }
  ];

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Проекты", href: "/projects" },
            { label: project.frontmatter.title, href: `/projects/${project.frontmatter.slug}` }
          ]}
        />

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <article className="space-y-6">
            <h1 className="text-4xl sm:text-5xl">{project.frontmatter.title}</h1>
            <p className="text-brand-muted">{project.frontmatter.shortDescription}</p>
            <ul className="grid gap-2 rounded-xl border border-brand-border bg-brand-soft p-5 text-sm sm:grid-cols-2">
              <li>Стиль: {project.frontmatter.style}</li>
              <li>Формат: {project.frontmatter.format}</li>
              <li>Локация: {project.frontmatter.location}</li>
              <li>Сезон: {project.frontmatter.season}</li>
            </ul>
            <ImageGallery
              images={project.frontmatter.gallery.map((src, index) => ({
                src,
                alt: `${project.frontmatter.title} — кадр ${index + 1}`
              }))}
            />
            <RichText source={project.content} />
            <section>
              <h2 className="mb-3 text-2xl">Связанные услуги</h2>
              <ul className="space-y-1 text-sm text-brand-primary">
                {project.frontmatter.relatedServices.map((item) => (
                  <li key={item}>
                    <Link href={`/${item}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="space-y-6">
            <ContactForm service={project.frontmatter.title} />
          </aside>
        </div>
      </Container>
    </section>
  );
}
