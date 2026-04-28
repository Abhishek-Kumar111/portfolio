import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { Reveal } from "@/components/ui/reveal";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Case studies focused on applied AI and delightful interaction."
      description="Each project emphasizes performance, clear information hierarchy, and practical engineering outcomes."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <Reveal key={project.title}>
            <Surface className="group flex h-full flex-col overflow-hidden p-0">
              <div className="relative aspect-[16/7] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full bg-slate-900/5 dark:bg-white/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  {project.demoUrl ? (
                    <Button asChild size="sm" className="rounded-full">
                      <Link href={project.demoUrl} target="_blank" rel="noreferrer">
                        Live Demo <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null}
                  <Button asChild size="sm" variant="outline" className="rounded-full">
                    <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                      Source <Github className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Surface>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}