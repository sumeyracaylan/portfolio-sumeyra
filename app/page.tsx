import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { projects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <section id="work" className="border-y border-border bg-cream py-24">
        <div className="mx-auto max-w-[1140px] px-8">
          <div className="mb-16 max-w-[640px]">
            <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent">
              Selected Work
            </span>
            <h2 className="mt-2.5 text-[36px] text-navy">
              Four projects, four very different screens
            </h2>
            <p className="mt-3.5 text-[16.5px] text-ink-muted">
              From a national streaming platform to focused freelance engagements — a
              look at the problems I&apos;ve designed my way through.
            </p>
          </div>
          <div className="divide-y divide-border">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>
      <AboutSection />
      <Footer variant="full" />
    </>
  );
}
