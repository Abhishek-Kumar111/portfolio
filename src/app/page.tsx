import Background from "@/components/background";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(99,102,241,0.2),_transparent_30%)] dark:bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_40%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.15),_transparent_30%)]" />
      <div className="pointer-events-none">
  <Background />
</div>
      <SiteHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}