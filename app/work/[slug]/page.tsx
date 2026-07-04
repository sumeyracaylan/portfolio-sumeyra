import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { CaseStudySection } from "@/components/CaseStudySection";
import { ResultBanner } from "@/components/ResultBanner";
import { Footer } from "@/components/Footer";
import { caseStudies, getCaseStudy } from "@/content/tabii";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  return {
    title: `${caseStudy.title.split(" — ")[0]} — Case Study | Sümeyra Caylan`,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) notFound();

  return (
    <>
      <Nav sectionLinkBase="/" />
      <div className="mx-auto max-w-[1140px] px-8">
        <Link
          href="/#work"
          className="my-10 mb-5 inline-flex items-center gap-2 text-[14.5px] font-semibold text-navy-soft hover:text-accent"
        >
          ← Back to portfolio
        </Link>
      </div>
      <CaseStudyHero
        eyebrow={caseStudy.eyebrow}
        title={caseStudy.title}
        tagline={caseStudy.tagline}
        role={caseStudy.role}
        platforms={caseStudy.platforms}
        impactStats={caseStudy.impactStats}
      />
      <div className="mx-auto max-w-[1140px] px-8">
        {caseStudy.sections.map(({ key, ...section }) => (
          <CaseStudySection key={key} {...section} />
        ))}
        <ResultBanner headline={caseStudy.result.headline} body={caseStudy.result.body} />
      </div>
      <Footer variant="simple" />
    </>
  );
}
