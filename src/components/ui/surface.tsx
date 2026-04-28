import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const surfaceVariants = cva(
  "rounded-2xl border border-white/10 bg-white/60 p-6 shadow-[0_20px_60px_-32px_rgba(14,23,38,0.45)] backdrop-blur-xl transition-colors dark:bg-slate-900/60",
  {
    variants: {
      tone: {
        default: "text-slate-900 dark:text-slate-100",
        subtle: "bg-white/40 dark:bg-slate-900/40",
        accent:
          "border-cyan-400/40 bg-gradient-to-br from-cyan-200/40 to-indigo-200/30 dark:from-cyan-400/20 dark:to-indigo-500/20",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  },
);

type SurfaceProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof surfaceVariants>;

export function Surface({ className, tone, ...props }: SurfaceProps) {
  return <div className={cn(surfaceVariants({ tone }), className)} {...props} />;
}
