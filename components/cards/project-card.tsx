import Image from "next/image";
import Link from "next/link";

import type { ProjectFrontmatter } from "@/lib/content/types";

type ProjectCardProps = {
  project: ProjectFrontmatter;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card group overflow-hidden">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.gallery[0] ?? "/images/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      </Link>
      <div className="editorial-stack p-6 sm:p-7">
        <p className="type-kicker">{project.style}</p>
        <h3 className="type-h3">
          <Link href={`/projects/${project.slug}`} className="transition-colors group-hover:text-brand-primary">
            {project.title}
          </Link>
        </h3>
        <p className="text-sm leading-7 text-brand-muted">{project.shortDescription}</p>
      </div>
    </article>
  );
}
