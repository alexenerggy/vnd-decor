import Image from "next/image";
import Link from "next/link";
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from "react";

export const mdxComponents = {
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const href = props.href ?? "#";

    if (href.startsWith("/")) {
      return <Link href={href}>{props.children}</Link>;
    }

    return <a target="_blank" rel="noreferrer" {...props} />;
  },
  img: (props: ImgHTMLAttributes<HTMLImageElement>) => {
    const src = typeof props.src === "string" ? props.src : "/images/placeholder.jpg";
    const alt = props.alt ?? "Изображение";

    return (
      <span className="relative block h-[360px] w-full overflow-hidden rounded-xl border border-brand-border">
        <Image src={src} alt={alt} fill className="object-cover" />
      </span>
    );
  }
};
