import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-xl border border-brand-border bg-brand-soft px-4 py-3 text-sm text-brand-text transition-colors duration-200 placeholder:text-brand-muted/80 hover:border-brand-muted focus:border-brand-primary focus:bg-white",
        className
      )}
      {...props}
    />
  );
}
