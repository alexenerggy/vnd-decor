import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, action, align = "left" }: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={[
        "mb-9 flex flex-wrap gap-4",
        isCentered ? "justify-center text-center" : "items-end justify-between text-left"
      ].join(" ")}
    >
      <div className={["space-y-3", isCentered ? "max-w-3xl" : "max-w-2xl"].join(" ")}>
        {eyebrow ? <p className="type-kicker">{eyebrow}</p> : null}
        <h2 className="type-h2">{title}</h2>
        {description ? <p className="type-body-lead text-sm sm:text-base">{description}</p> : null}
      </div>
      {action ? <div className={isCentered ? "w-full" : ""}>{action}</div> : null}
    </div>
  );
}
