import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBlogPosts } from "@/lib/content/blog";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Блог о свадебном декоре — VND Decor",
  description: "Экспертные и вдохновляющие материалы по декору свадеб: идеи, тренды, практические советы.",
  path: "/blog"
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Блог", href: "/blog" }]} />
        <SectionHeading title="Блог" description="Материалы для пар и wedding-профессионалов о современном свадебном декоре." />
        <div className="grid gap-4">
          {posts.map((post) => (
            <article key={post.frontmatter.slug} className="rounded-2xl border border-brand-border bg-brand-soft p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">{post.frontmatter.category}</p>
              <h2 className="mt-2 text-3xl">
                <Link href={`/blog/${post.frontmatter.slug}`}>{post.frontmatter.title}</Link>
              </h2>
              <p className="mt-3 text-sm text-brand-muted">{post.frontmatter.excerpt}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
