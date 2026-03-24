import Link from "next/link";

type Breadcrumb = {
  label: string;
  href: string;
};

type BreadcrumbsProps = {
  items: Breadcrumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки" className="text-xs uppercase tracking-[0.14em] text-brand-muted">
      <ol className="flex flex-wrap items-center gap-2.5">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-brand-text">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="transition-colors hover:text-brand-primary">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
