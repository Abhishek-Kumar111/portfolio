"use client";

import dynamic from "next/dynamic";

const FloatingOrb = dynamic(
  () => import("@/components/floating-orb").then((mod) => mod.FloatingOrb),
  {
    ssr: false,
    loading: () => <div className="h-56 animate-pulse rounded-2xl bg-slate-200/60 dark:bg-slate-800/60 sm:h-64" />,
  },
);

export function OrbShell() {
  return <FloatingOrb />;
}
