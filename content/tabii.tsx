import type { ImpactStat } from "@/components/CaseStudyHero";
import type { CaseStudySectionData } from "@/components/CaseStudySection";
import { MockCard, MockPhone } from "@/components/mock-primitives";

const TABII_GRADIENT =
  "radial-gradient(120% 120% at 20% 15%, #1B4A38 0%, var(--color-tabii-green) 65%)";
const NAVY_GRADIENT =
  "radial-gradient(120% 120% at 20% 15%, #2C3350 0%, var(--color-navy) 65%)";

export interface CaseStudy {
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string;
  role: string;
  platforms: string;
  impactStats: ImpactStat[];
  sections: CaseStudySectionData[];
  result: { headline: string; body: string };
}

export const tabiiCaseStudy: CaseStudy = {
  slug: "tabii",
  eyebrow: "TRT & TRT World · 2021–2025",
  title: "tabii — designing a national streaming platform from the ground up",
  tagline:
    "tabii is TRT's video-on-demand streaming service, built for viewers across Turkey. I joined as the design lead responsible for taking the product from its first wireframes to a fully realized experience across every screen people actually watch on.",
  role: "UI/UX Designer & Design System Owner",
  platforms: "iOS, Android, Responsive Web, Smart TV",
  impactStats: [
    { num: "2M+", label: "Subscribers in the first 2 months" },
    { num: "4", label: "Platforms designed end-to-end" },
    { num: "1", label: "Company-wide design system shipped" },
  ],
  sections: [
    {
      key: "problem",
      eyebrow: "Problem",
      heading: "One product, four very different screens",
      body: "Before tabii could grow, it had to work everywhere people actually watch — on a phone during a commute, on a laptop browser, and on a TV from across the room. Each context comes with its own input method, screen size, and attention span, and treating them as separate afterthoughts rather than one coherent product was the core risk to solve for.",
      layout: "alternating",
      background: TABII_GRADIENT,
      visual: (
        <>
          <MockCard className="left-[8%] top-[14%] w-[36%] p-4">
            <div className="mb-2 h-6 w-6 rounded-md bg-tabii-green" />
            <div className="mb-1.5 h-2 w-[70%] rounded bg-border" />
            <div className="h-2 w-[50%] rounded bg-border" />
          </MockCard>
          <MockCard className="right-[8%] top-[38%] w-[30%] p-4">
            <div className="mb-1.5 h-2 w-[60%] rounded bg-border" />
            <div className="h-2 w-[40%] rounded bg-border" />
          </MockCard>
          <MockCard className="left-[20%] bottom-[12%] w-[34%] p-4">
            <div className="flex gap-1.5">
              <div className="h-4 w-4 rounded-full bg-accent" />
              <div className="h-4 w-4 rounded-full bg-border" />
              <div className="h-4 w-4 rounded-full bg-border" />
            </div>
          </MockCard>
        </>
      ),
    },
    {
      key: "research",
      eyebrow: "Research",
      heading: "Understanding how people actually watch",
      body: "I took part in user research and usability testing to understand real viewing habits — how people browse for something to watch, how they navigate with a remote versus a touchscreen, and where they got stuck. Those sessions shaped a lot of the structural decisions that followed.",
      layout: "alternating",
      reverse: true,
      background: TABII_GRADIENT,
      visual: (
        <>
          <MockCard className="left-[12%] top-[16%] w-[40%] p-4">
            <div className="mb-2.5 h-8 w-8 rounded-full bg-border" />
            <div className="mb-[5px] h-[7px] w-[80%] rounded bg-border" />
            <div className="h-[7px] w-[60%] rounded bg-border" />
          </MockCard>
          <MockCard className="right-[10%] bottom-[16%] w-[34%] p-4">
            <div className="h-11 w-full rounded-md bg-[linear-gradient(90deg,var(--color-accent),var(--color-border))] opacity-50" />
          </MockCard>
        </>
      ),
    },
    {
      key: "information-architecture",
      eyebrow: "Information Architecture",
      heading: "Structuring content people could actually find",
      body: "With a fast-growing content library, discovery was the central challenge. I worked through wireframes and user flows to organize categories, search, and recommendations in a way that held up whether someone was scrolling with a thumb or navigating with arrow keys on a remote.",
      layout: "vertical",
      background: TABII_GRADIENT,
      visual: (
        <>
          <MockCard className="left-[8%] top-[16%] w-[18%] p-2.5">
            <div className="h-5 w-full rounded bg-tabii-green" />
          </MockCard>
          <MockCard className="left-[41%] top-[40%] w-[18%] p-2.5">
            <div className="h-5 w-full rounded bg-border" />
          </MockCard>
          <MockCard className="left-[8%] bottom-[16%] w-[18%] p-2.5">
            <div className="h-5 w-full rounded bg-border" />
          </MockCard>
          <MockCard className="right-[10%] top-[28%] w-[22%] p-2.5">
            <div className="h-5 w-full rounded bg-border" />
          </MockCard>
          <MockCard className="right-[10%] bottom-[20%] w-[22%] p-2.5">
            <div className="h-5 w-full rounded bg-accent" />
          </MockCard>
        </>
      ),
    },
    {
      key: "design-system",
      eyebrow: "Design System",
      heading: "One system, every screen",
      body: "Keeping visual and functional consistency across mobile, web, and TV meant building a design system from scratch — components, patterns, and documentation the wider team could rely on. I set it up and maintained it as the product evolved, alongside a company-wide design glossary to keep terminology consistent across teams.",
      layout: "alternating",
      reverse: true,
      background: TABII_GRADIENT,
      visual: (
        <>
          <MockCard className="left-[10%] top-[14%] flex w-[26%] gap-1.5 p-3">
            <div className="h-[18px] w-[18px] rounded-[5px] bg-tabii-green" />
            <div className="h-[18px] w-[18px] rounded-[5px] bg-tabii-lime" />
            <div className="h-[18px] w-[18px] rounded-[5px] bg-accent" />
          </MockCard>
          <MockCard className="right-[10%] top-[40%] w-[32%] p-2.5">
            <div className="h-[22px] w-[60px] rounded-full bg-tabii-green" />
          </MockCard>
          <MockCard className="left-[18%] bottom-[12%] w-[36%] p-3">
            <div className="mb-1.5 h-2 w-[90%] rounded bg-border" />
            <div className="h-2 w-[70%] rounded bg-border" />
          </MockCard>
        </>
      ),
    },
    {
      key: "low-fidelity-design",
      eyebrow: "Low-Fidelity Design",
      heading: "Getting the structure right before the pixels",
      body: "Early wireframes let the team agree on layout and navigation logic before investing in visual design — especially important for the Smart TV experience, where interaction patterns are far less standardized than on mobile or web.",
      layout: "alternating",
      background: NAVY_GRADIENT,
      visual: (
        <>
          <MockCard className="left-[10%] top-[16%] w-[34%] bg-white/90 p-4">
            <div className="mb-1.5 h-2.5 w-full rounded bg-[#D6D9E4]" />
            <div className="h-2.5 w-[70%] rounded bg-[#D6D9E4]" />
          </MockCard>
          <MockCard className="right-[12%] bottom-[16%] w-[38%] bg-white/90 p-4">
            <div className="grid grid-cols-2 gap-1.5">
              <div className="h-5 rounded bg-[#D6D9E4]" />
              <div className="h-5 rounded bg-[#D6D9E4]" />
            </div>
          </MockCard>
        </>
      ),
    },
    {
      key: "high-fidelity-design",
      eyebrow: "High-Fidelity Design",
      heading: "Bringing it to life, screen by screen",
      body: "From there, I moved into detailed prototypes and final UI across every platform — iterating with feedback from the team and from usability testing, refining everything from content cards to Smart TV remote navigation.",
      layout: "vertical",
      background: TABII_GRADIENT,
      visual: (
        <>
          <MockPhone
            className="left-[6%] top-[8%] aspect-[9/18.5] w-[16%]"
            screenClassName="bg-[linear-gradient(180deg,#0E2E24,#123D2E)]"
          >
            <div className="flex h-full flex-col gap-1.5 p-2.5">
              <div className="h-1.5 w-[50%] rounded-[3px] bg-tabii-lime" />
              <div className="mt-1.5 h-[26px] w-full rounded-md bg-white/10" />
              <div className="mt-1.5 grid grid-cols-2 gap-[5px]">
                <div className="h-[30px] rounded-[5px] bg-white/10" />
                <div className="h-[30px] rounded-[5px] bg-white/10" />
              </div>
            </div>
          </MockPhone>
          <MockCard className="left-[28%] top-[20%] w-[26%] p-3.5">
            <div className="mb-2 h-2 w-[80%] rounded bg-border" />
            <div className="flex gap-1.5">
              <div className="h-4 w-4 rounded-full bg-tabii-green" />
              <div className="h-4 w-4 rounded-full bg-tabii-lime" />
            </div>
          </MockCard>
          <MockCard className="right-[8%] bottom-[16%] w-[34%] p-3.5">
            <div className="mb-1.5 h-2 w-[70%] rounded bg-border" />
            <div className="h-2 w-[50%] rounded bg-border" />
          </MockCard>
          <MockCard className="right-[14%] top-[22%] w-[22%] p-3">
            <div className="grid grid-cols-2 gap-[5px]">
              <div className="h-[22px] rounded bg-accent/70" />
              <div className="h-[22px] rounded bg-border" />
            </div>
          </MockCard>
        </>
      ),
    },
    {
      key: "collaboration",
      eyebrow: "Collaboration",
      heading: "Shipping it with the wider team",
      body: "None of this happened in isolation. I worked closely with engineering, product, and content teams to keep design and implementation in sync, so what shipped matched what was designed — across four very different platforms and codebases.",
      layout: "alternating",
      background: TABII_GRADIENT,
      visual: (
        <>
          <MockCard className="left-[16%] top-[20%] flex aspect-square w-[20%] items-center justify-center">
            <div className="h-[34px] w-[34px] rounded-full bg-tabii-green" />
          </MockCard>
          <MockCard className="left-[38%] top-[34%] flex aspect-square w-[20%] items-center justify-center">
            <div className="h-[34px] w-[34px] rounded-full bg-accent" />
          </MockCard>
          <MockCard className="left-[60%] top-[22%] flex aspect-square w-[20%] items-center justify-center">
            <div className="h-[34px] w-[34px] rounded-full bg-tabii-lime" />
          </MockCard>
        </>
      ),
    },
  ],
  result: {
    headline: "2M+ subscribers in the first two months",
    body: "tabii launched across mobile, web, and Smart TV with a consistent design system behind it — reaching over 2 million subscribers within its first two months live.",
  },
};

export const caseStudies: Record<string, CaseStudy> = {
  tabii: tabiiCaseStudy,
};

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies[slug];
}
