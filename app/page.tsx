import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ProjectCard } from "@/components/cards/project-card";
import { ReviewCard } from "@/components/cards/review-card";
import { ServiceCard } from "@/components/cards/service-card";
import { ContactForm } from "@/components/forms/contact-form";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageSection } from "@/components/ui/page-section";
import { SectionGrid } from "@/components/ui/section-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import { getBlogPosts } from "@/lib/content/blog";
import { getProjects } from "@/lib/content/projects";
import { getServices } from "@/lib/content/services";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Декоратор на свадьбу в Москве и МО — студия свадебного декора VND Decor",
  description:
    "Студия свадебного декора: оформление свадьбы, оформление зала, услуги декоратора на свадьбу и комплексное оформление под ключ в Москве и МО.",
  path: "/",
  image: "/images/projects/elegant-1.jpg"
});

const processSteps = [
  "Знакомство и бриф по формату события",
  "Концепция, мудборд и визуальная логика зон",
  "Смета, состав работ и финальное согласование",
  "Монтаж, координация и реализация в день события"
];

const trustPoints = [
  "200+ реализованных свадеб по данным legacy-архива студии",
  "Работаем с разным масштабом и бюджетом без визуального шума",
  "Официальный договор и прозрачный состав работ",
  "Сфокусированы на декоре и оформлении, а не на wedding planning"
];

export default async function HomePage() {
  const [services, projects, posts] = await Promise.all([getServices(), getProjects(), getBlogPosts()]);

  return (
    <>
      <PageSection className="hairline border-b border-brand-border">
        <Container>
          <div className="editorial-split items-center">
            <div className="editorial-stack">
              <p className="type-kicker">Студия свадебного и event-декора</p>
              <h1 className="type-display max-w-4xl">
                Декоратор на свадьбу в Москве и МО: оформление свадьбы и зала в единой эстетике
              </h1>
              <p className="type-body-lead text-measure">
                Закрываем широкий коммерческий запрос на оформление свадьбы под ключ как <strong>комплексный декор и
                оформление</strong>: церемония, президиум, флористика, фотозона и гостевые зоны.
              </p>
              <p className="text-sm leading-7 text-brand-muted">
                Мы не занимаемся полным wedding planning. Наша зона экспертизы — визуальная концепция и реализация
                декора события.
              </p>
              <div className="mt-2 flex flex-wrap gap-3">
                <ButtonLink href="/contacts" size="lg">
                  Обсудить оформление
                </ButtonLink>
                <ButtonLink href="/#services" variant="outline" size="lg">
                  Услуги и цены-ориентиры
                </ButtonLink>
              </div>
            </div>

            <div className="surface-card relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/projects/elegant-1.jpg"
                alt="Свадебный декор в Москве: оформление церемонии и банкетного зала"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container size="text">
          <SectionHeading
            eyebrow="О студии"
            title="VND Decor — авторская студия свадебного декора"
            description="Создаем визуальную историю события через материалы, флористику, свет и архитектуру зоны."
            align="center"
          />
          <div className="editorial-stack text-center text-[1.02rem] leading-8 text-brand-text">
            <p>
              Если вам нужен декоратор на свадьбу с системным подходом, мы берем на себя путь от брифа и концепции до
              монтажного дня и финального результата на площадке.
            </p>
            <p className="text-brand-muted">
              На старте фиксируем стилистику и бюджетные рамки, чтобы оформление свадебного зала, церемонии и фотозоны
              выглядело целостно и соответствовало вашей идее.
            </p>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Избранные кейсы"
            title="Реализованные проекты"
            description="Показываем реальные свадьбы и подход к комплексному оформлению площадок."
            action={
              <Link href="/projects" className="type-kicker transition-colors hover:text-brand-primary">
                Все проекты
              </Link>
            }
          />
          <SectionGrid>
            {projects.slice(0, 2).map((item) => (
              <ProjectCard key={item.frontmatter.slug} project={item.frontmatter} />
            ))}
          </SectionGrid>
        </Container>
      </PageSection>

      <PageSection id="services" tone="soft">
        <Container>
          <SectionHeading
            eyebrow="Услуги"
            title="Услуги декоратора на свадьбу"
            description="Ключевые направления запуска: президиум, фотозона, флористика и выездная регистрация."
          />

          <SectionGrid>
            {services.slice(0, 4).map((item) => (
              <ServiceCard key={item.frontmatter.slug} service={item.frontmatter} />
            ))}
          </SectionGrid>

          <div className="mt-8 editorial-grid lg:grid-cols-2">
            <article className="surface-card p-6 sm:p-7">
              <p className="type-kicker mb-3">Оформление свадьбы цены</p>
              <p className="text-sm leading-7 text-brand-muted">
                На сайте указаны исторические ориентиры по услугам из legacy-архива. Точная стоимость формируется после
                брифа, площадки, сезона и состава работ.
              </p>
            </article>
            <article className="surface-card p-6 sm:p-7">
              <p className="type-kicker mb-3">Полезные материалы</p>
              <ul className="space-y-2 text-sm text-brand-primary">
                {posts.slice(0, 2).map((post) => (
                  <li key={post.frontmatter.slug}>
                    <Link href={`/blog/${post.frontmatter.slug}`} className="transition-colors hover:text-brand-text">
                      {post.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Процесс"
            title="Как строится работа над проектом"
            description="Структурная модель без лишних этапов и с контролем результата на каждом шаге."
          />
          <ol className="editorial-grid text-sm lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <li key={step} className="surface-card p-5 sm:p-6">
                <p className="type-kicker mb-2">Шаг {idx + 1}</p>
                <p className="text-[0.96rem] leading-7">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Почему мы"
            title="Доверие и прозрачный подход"
            description="Собрали ключевые принципы, за которые нас выбирают пары и партнеры площадок."
          />
          <ol className="editorial-grid lg:grid-cols-2">
            {trustPoints.map((point, idx) => (
              <li key={point} className="surface-card p-6 sm:p-7">
                <p className="type-kicker mb-2">Преимущество {idx + 1}</p>
                <p className="text-sm leading-7 text-brand-text">{point}</p>
              </li>
            ))}
          </ol>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <SectionHeading
            eyebrow="Отзывы"
            title="Отзывы клиентов"
            description="Фидбек после реализации свадебных проектов и монтажного дня."
          />
          <SectionGrid>
            <ReviewCard
              text="Команда собрала декор в точном соответствии с концепцией. Площадка и церемония выглядели как единая история."
              author="[[PLACEHOLDER_REVIEW_AUTHOR_1]]"
            />
            <ReviewCard
              text="Все этапы от сметы до монтажа прошли спокойно и прозрачно. Получили именно тот уровень эстетики, который хотели."
              author="[[PLACEHOLDER_REVIEW_AUTHOR_2]]"
            />
          </SectionGrid>
        </Container>
      </PageSection>

      <PageSection tone="soft">
        <Container>
          <div className="editorial-split items-start">
            <div className="editorial-stack">
              <SectionHeading
                eyebrow="Заявка"
                title="Оформление свадьбы под ключ: консультация по декору"
                description="Оставьте заявку, и мы предложим структуру оформления, состав работ и бюджетный диапазон под вашу площадку."
              />
              <p className="text-sm leading-7 text-brand-muted">
                В рамках консультации обсуждаем стилистику, тайминг, флористику, зонирование и интеграцию декора в формат
                вашего события в Москве и МО.
              </p>
              <div className="surface-card p-6 sm:p-7">
                <p className="type-kicker mb-3">Быстрые ссылки</p>
                <ul className="space-y-2 text-sm text-brand-primary">
                  <li>
                    <Link href="/projects" className="transition-colors hover:text-brand-text">
                      Портфолио проектов
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="transition-colors hover:text-brand-text">
                      Блог и идеи по декору
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacts" className="transition-colors hover:text-brand-text">
                      Контакты студии
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <ContactForm service="Консультация: оформление свадьбы" />
          </div>
        </Container>
      </PageSection>
    </>
  );
}
