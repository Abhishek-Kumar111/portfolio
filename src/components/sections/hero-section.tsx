import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { profile, skills } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";
import { Reveal } from "@/components/ui/reveal";
import { OrbShell } from "@/components/orb-shell";

export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-14 pt-14 md:grid-cols-[1.2fr_0.8fr] md:items-center md:pt-20">
      <Reveal className="space-y-6">
        <Badge variant="secondary" className="rounded-full bg-cyan-500/10 px-4 py-1 text-cyan-800 dark:text-cyan-200">
          Developer Portfolio
        </Badge>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl md:text-6xl dark:text-white">
          {profile.name}
        </h1>
        <p className="text-base font-medium text-slate-700 sm:text-lg dark:text-slate-300">{profile.role}</p>
        <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-600 dark:text-slate-300">
          {profile.headline}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="rounded-full px-6">
            <Link href="#projects">
              Explore Projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </Reveal>

      <Reveal className="md:justify-self-end">
        <Surface tone="accent" className="space-y-5 p-5">
          <OrbShell />
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="rounded-full border-white/30 bg-white/40 dark:bg-slate-900/50">
                {skill}
              </Badge>
            ))}
          </div>
        </Surface>
      </Reveal>
    </section>
  );
}
