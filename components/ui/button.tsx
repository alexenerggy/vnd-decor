import Link, { type LinkProps } from "next/link";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils/cn";

type SharedProps = {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
};

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = SharedProps & LinkProps & PropsWithChildren<{ className?: string }>;

const classes = {
  base: "inline-flex items-center justify-center gap-2 rounded-xl border font-medium tracking-[0.01em] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60",
  size: {
    sm: "px-4 py-2.5 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-base"
  },
  primary:
    "border-brand-primary bg-brand-primary text-brand-soft hover:-translate-y-0.5 hover:bg-brand-text active:translate-y-0 focus-visible:border-brand-primary",
  outline:
    "border-brand-border bg-transparent text-brand-text hover:-translate-y-0.5 hover:border-brand-muted hover:bg-brand-soft active:translate-y-0",
  ghost: "border-transparent bg-transparent text-brand-primary hover:bg-brand-soft/80 hover:text-brand-text"
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className={cn(classes.base, classes.size[size], classes[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(classes.base, classes.size[size], classes[variant], className)} {...props}>
      {children}
    </Link>
  );
}
