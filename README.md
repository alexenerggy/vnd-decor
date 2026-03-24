# vnd-decor.ru

Production-ready starter for a new website of the VND Decor studio.

## Stack

- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- MDX/markdown content collections
- `next/image`
- Metadata API + `generateMetadata`
- Route Handlers for forms
- Telegram + email notifications
- JSON-LD, breadcrumbs, sitemap, robots

## Project principles

- Built from scratch, no legacy layout reuse
- `old_site/` is content/assets source only
- Content-first architecture (static/mostly static)
- No database at launch

## Key routes

- `/`
- `/projects`
- `/projects/[slug]`
- `/blog`
- `/blog/[slug]`
- `/about`
- `/contacts`
- Launch services:
  - `/prezidium-na-svadbu`
  - `/fotozona-na-svadbu`
  - `/svadebnaya-floristika`
  - `/oformlenie-vyezdnoy-registratsii`
- Secondary SEO page:
  - `/oformlenie-zala-sharami-na-svadbu`

## Content architecture

MDX content lives in:

- `content/services`
- `content/projects`
- `content/blog`

Each file contains frontmatter and body content. Loaders are in `lib/content/*`.

## Design system components

- `components/ui`: Button, Container, SectionHeading, RichText, Breadcrumbs, ImageGallery
- `components/cards`: ProjectCard, ServiceCard, ServiceListItem, ReviewCard
- `components/forms`: Input, Textarea, ContactForm
- `components/sections`: CTA, service page template

## Design system usage

Theme tokens and typography are defined in `styles/globals.css`:

- color tokens: `--color-primary`, `--color-bg`, `--color-text`, `--color-soft`, `--color-border`, `--color-muted`
- type classes: `.type-display`, `.type-h1`, `.type-h2`, `.type-h3`, `.type-body-lead`, `.type-kicker`
- editorial utilities: `.section-space`, `.editorial-grid`, `.editorial-split`, `.editorial-stack`, `.text-measure`

Example section:

```tsx
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

export function Example() {
  return (
    <section className="section-space">
      <Container>
        <SectionHeading
          eyebrow="Блок"
          title="Заголовок в editorial стиле"
          description="Подзаголовок с мягким контрастом и большим количеством воздуха."
        />
        <div className="editorial-grid">
          <article className="surface-card p-6">Карточка 1</article>
          <article className="surface-card p-6">Карточка 2</article>
        </div>
        <div className="mt-6">
          <ButtonLink href="/contacts" size="lg">Оставить заявку</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
```

## Forms and notifications

`POST /api/contact` includes:

- schema validation (`zod`)
- honeypot anti-spam
- in-memory rate limiting
- Telegram notification
- email notification via HTTP endpoint

Set credentials in `.env.local` based on `.env.example`.

## Local run

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
pnpm start
```

## What should be filled manually

- final legal texts in `/legal/*`
- real contact email and notification credentials
- final curated content for all services/projects/posts
- optional SEO verification artifacts (search engines) in `public/`
