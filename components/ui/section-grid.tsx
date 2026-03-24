import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils/cn";

type SectionGridProps = {
  columns?: 2 | 3;
  className?: string;
};

export function SectionGrid({ columns = 2, className, children }: PropsWithChildren<SectionGridProps>) {
  return (
    <div className={cn("editorial-grid", columns === 3 && "lg:grid-cols-3", className)}>
      {children}
    </div>
  );
}
