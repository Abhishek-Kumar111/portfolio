import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  title: string;
  eyebrow?: string;
  description?: string;
  actions?: ReactNode;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  actions,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-6xl px-6 py-16 md:py-24", className)}>
      <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white">
            {title}
          </h2>
          {description ? (
            <p className="text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? <div className="flex items-center gap-3">{actions}</div> : null}
      </div>
      {children}
    </section>
  );
}
