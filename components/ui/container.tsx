import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  size?: "content" | "text" | "wide";
  className?: string;
};

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  content: "max-w-content",
  text: "max-w-text",
  wide: "max-w-[88rem]"
};

export function Container({ size = "content", className, children }: PropsWithChildren<ContainerProps>) {
  return <div className={cn("mx-auto w-full px-5 sm:px-8", sizeClasses[size], className)}>{children}</div>;
}
