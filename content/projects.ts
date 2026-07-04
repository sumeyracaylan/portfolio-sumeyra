import type { ProjectVisualVariant } from "@/components/ProjectVisual";

export interface Project {
  slug: string;
  visual: ProjectVisualVariant;
  tag: string;
  title: string;
  description: string;
  impact?: string;
  tags: string[];
  hasCaseStudy: boolean;
}

export const projects: Project[] = [
  {
    slug: "tabii",
    visual: "tabii",
    tag: "TRT & TRT World · 2021–2025",
    title: "tabii — national VOD streaming platform",
    description:
      "End-to-end UI/UX for TRT's video-on-demand service — mobile (iOS & Android), responsive web, and Smart TV — plus the design system that kept every screen consistent as the product scaled.",
    impact: "2M+ subscribers within the first 2 months of launch",
    tags: ["Mobile", "Web", "Smart TV", "Design Systems"],
    hasCaseStudy: true,
  },
  {
    slug: "delphi-sonic",
    visual: "delphi",
    tag: "Freelance",
    title: "Delphi Sonic — fire protection monitoring dashboard",
    description:
      "Detail-view UI design for a B2B dashboard that helps safety teams monitor fire protection systems in real time — dense sensor data made scannable at a glance.",
    tags: ["Dashboard", "B2B", "Data Visualization"],
    hasCaseStudy: false,
  },
  {
    slug: "appguard",
    visual: "appguard",
    tag: "Freelance",
    title: "AppGuard — cybersecurity platform redesign",
    description:
      "UI/UX redesign of B2B cybersecurity screens, restructuring dense security data into clearer hierarchies and a more approachable visual language.",
    tags: ["B2B", "Redesign", "Cybersecurity"],
    hasCaseStudy: false,
  },
  {
    slug: "mtm-biotechnology",
    visual: "mtm",
    tag: "Freelance",
    title: "MTM Biotechnology — mindfulness app & landing page",
    description:
      "UI/UX design for a neurofeedback-based earphone and its companion mindfulness app, plus the product landing page introducing it to new users.",
    tags: ["Mobile App", "Landing Page", "Wellness"],
    hasCaseStudy: false,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
