import { notFound } from "next/navigation";
import Link from "next/link";

import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { RichText } from "@/components/ui/rich-text";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBlogPosts } from "@/lib/content/blog";
import { getProjects } from "@/lib/content/projects";
import { getServiceBySlug } from "@/lib/content/services";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export async function ServicePageTemplate({ slug }: { slug: string }) {
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const [projects, posts] = await Promise.all([getProjects(), getBlogPosts()]);
  const relatedProjects = projects.filter((item) => service.frontmatter.relatedProjects.includes(item.frontmatter.slug));
  const relatedPosts = posts.filter((item) => service.frontmatter.relatedPosts.includes(item.frontmatter.slug));
  const breadcrumbItems = [
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/#services" },
    { name: service.frontmatter.title, path: `/${service.frontmatter.slug}` }
  ];

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
        <div className="mb-8">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Услуги", href: "/#services" },
              { label: service.frontmatter.title, href: `/${service.frontmatter.slug}` }
            ]}
          />
        </div>

        <SectionHeading title={service.frontmatter.title} description={service.frontmatter.shortDescription} />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-10">
            <RichText source={service.content} />

            <section>
              <h2 className="mb-4 text-2xl">FAQ</h2>
              <div className="space-y-3">
                {service.frontmatter.faq.map((item) => (
                  <details key={item.question} className="rounded-xl border border-brand-border bg-brand-soft p-4">
                    <summary className="cursor-pointer font-medium">{item.question}</summary>
                    <p className="mt-2 text-sm text-brand-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl">Релевантные проекты</h2>
              <ul className="space-y-2 text-sm text-brand-primary">
                {relatedProjects.map((project) => (
                  <li key={project.frontmatter.slug}>
                    <Link href={`/projects/${project.frontmatter.slug}`}>{project.frontmatter.title}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl">Полезные статьи</h2>
              <ul className="space-y-2 text-sm text-brand-primary">
                {relatedPosts.map((post) => (
                  <li key={post.frontmatter.slug}>
                    <Link href={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside>
            <ContactForm service={service.frontmatter.title} />
          </aside>
        </div>
      </Container>
    </section>
  );
}
