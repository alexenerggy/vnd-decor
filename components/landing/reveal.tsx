"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition" | "children">;

export function Reveal({
  delay = 0,
  y = 24,
  once = true,
  className,
  children,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
