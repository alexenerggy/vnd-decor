"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
};

export function CountUp({ to, duration = 1.2, suffix = "", prefix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v))
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
