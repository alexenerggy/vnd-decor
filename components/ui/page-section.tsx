import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils/cn";

type PageSectionProps = {
  id?: string;
  tone?: "default" | "soft";
  spacing?: "normal" | "compact";
  className?: string;
};

export function PageSection({
  id,
  tone = "default",
  spacing = "normal",
  className,
  children
}: PropsWithChildren<PageSectionProps>) {
  return (
    <section
      id={id}
      className={cn(
        spacing === "normal" ? "section-space" : "py-10 sm:py-14",
        tone === "soft" && "bg-brand-soft/45",
        className
      )}
    >
      {children}
    </section>
  );
}
