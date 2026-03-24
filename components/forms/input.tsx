import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-brand-border bg-brand-soft px-4 py-3 text-sm text-brand-text transition-colors duration-200 placeholder:text-brand-muted/80 hover:border-brand-muted focus:border-brand-primary focus:bg-white",
        className
      )}
      {...props}
    />
  );
}
