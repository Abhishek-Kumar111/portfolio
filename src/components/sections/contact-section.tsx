import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { profile } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Surface } from "@/components/ui/surface";
import { Reveal } from "@/components/ui/reveal";

export function ContactSection() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let&apos;s build something high-impact."
      description="I enjoy collaborating on AI-powered products, polished frontends, and technical storytelling."
    >
      <Reveal>
        <Surface className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="space-y-4">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {profile.availability}
            </p>
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                {profile.email}
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-600 dark:text-cyan-300" />
                {profile.location}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
          <Button asChild className="rounded-full px-6">
  <a
    href={`mailto:${profile.email}?subject=Regarding Collaboration&body=Hi Abhishek, I visited your portfolio and...`}
  >
    Start a Conversation <ArrowUpRight className="h-4 w-4" />
  </a>
</Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="#top">Back to Top</Link>
            </Button>
          </div>
        </Surface>
      </Reveal>
    </Section>
  );
}
