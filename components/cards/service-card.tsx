import Link from "next/link";

import type { ServiceFrontmatter } from "@/lib/content/types";

type ServiceCardProps = {
  service: ServiceFrontmatter;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="surface-card p-6 sm:p-7">
      <p className="type-kicker mb-2">Услуга</p>
      <h3 className="type-h3 mb-3">
        <Link href={`/${service.slug}`} className="transition-colors hover:text-brand-primary">
          {service.title}
        </Link>
      </h3>
      <p className="mb-5 text-sm leading-7 text-brand-muted">{service.shortDescription}</p>
      <Link href={`/${service.slug}`} className="text-sm text-brand-primary transition-colors hover:text-brand-text">
        Подробнее
      </Link>
    </article>
  );
}
