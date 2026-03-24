import Link from "next/link";

import type { ServiceFrontmatter } from "@/lib/content/types";

type ServiceListItemProps = {
  service: ServiceFrontmatter;
};

export function ServiceListItem({ service }: ServiceListItemProps) {
  return (
    <li className="surface-card p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:p-6">
      <p className="type-kicker mb-2">Услуга</p>
      <Link href={`/${service.slug}`} className="type-h3 block transition-colors hover:text-brand-primary">
        {service.title}
      </Link>
      <p className="mt-3 text-sm leading-7 text-brand-muted">{service.shortDescription}</p>
    </li>
  );
}
