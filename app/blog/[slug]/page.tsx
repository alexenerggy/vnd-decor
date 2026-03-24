import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactForm } from "@/components/forms/contact-form";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { RichText } from "@/components/ui/rich-text";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content/blog";
import { buildMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((item) => ({ slug: item.frontmatter.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return buildMetadata({ title: "Статья не найдена", description: "Страница не найдена", path: `/blog/${slug}` });
  }

  return buildMetadata({
    title: post.frontmatter.seoTitle,
    description: post.frontmatter.seoDescription,
    path: `/blog/${post.frontmatter.slug}`,
    image: post.frontmatter.coverImage
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Главная", path: "/" },
    { name: "Блог", path: "/blog" },
    { name: post.frontmatter.title, path: `/blog/${post.frontmatter.slug}` }
  ];

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
        <JsonLd
          data={
            articleJsonLd({
              title: post.frontmatter.title,
              description: post.frontmatter.excerpt,
              datePublished: post.frontmatter.date,
              path: `/blog/${post.frontmatter.slug}`,
              image: post.frontmatter.coverImage
            })
          }
        />

        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Блог", href: "/blog" },
            { label: post.frontmatter.title, href: `/blog/${post.frontmatter.slug}` }
          ]}
        />

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <article className="space-y-6">
            <h1 className="text-4xl sm:text-5xl">{post.frontmatter.title}</h1>
            <p className="text-sm uppercase tracking-[0.18em] text-brand-muted">{post.frontmatter.date}</p>
            <RichText source={post.content} />

            <section>
              <h2 className="mb-3 text-2xl">Полезные ссылки</h2>
              <ul className="space-y-1 text-sm text-brand-primary">
                <li>
                  <Link href="/">На главную</Link>
                </li>
                {post.frontmatter.relatedServices.map((service) => (
                  <li key={service}>
                    <Link href={`/${service}`}>{service}</Link>
                  </li>
                ))}
                {post.frontmatter.relatedProjects.map((project) => (
                  <li key={project}>
                    <Link href={`/projects/${project}`}>{project}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside>
            <ContactForm />
          </aside>
        </div>
      </Container>
    </section>
  );
}
