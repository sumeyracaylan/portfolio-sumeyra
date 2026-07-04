import Link from "next/link";
import { ProjectVisual } from "./ProjectVisual";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-7 py-[52px] min-[861px]:grid-cols-2 min-[861px]:gap-16">
      <div
        className={`order-1 ${reverse ? "min-[861px]:order-2" : "min-[861px]:order-1"}`}
      >
        <ProjectVisual variant={project.visual} />
      </div>
      <div
        className={`order-2 ${reverse ? "min-[861px]:order-1" : "min-[861px]:order-2"}`}
      >
        <span className="mb-3.5 block text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
          {project.tag}
        </span>
        <h3 className="mb-3.5 text-[26px] text-navy">{project.title}</h3>
        <p className="mb-5 text-[15.5px] text-navy-soft">{project.description}</p>
        {project.impact && (
          <p className="mb-5 text-[15px] font-bold text-accent">{project.impact}</p>
        )}
        <div className="mb-[22px] flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-white px-[13px] py-1.5 text-[12.5px] font-semibold text-navy-soft"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.hasCaseStudy ? (
          <Link
            href={`/work/${project.slug}`}
            className="border-b-2 border-navy pb-0.5 text-[18.5px] font-semibold text-navy"
          >
            View full case study →
          </Link>
        ) : (
          <span className="text-[14.5px] font-semibold italic text-ink-muted">
            Full case study coming soon
          </span>
        )}
      </div>
    </div>
  );
}
