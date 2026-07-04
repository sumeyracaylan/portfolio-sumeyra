export interface ImpactStat {
  num: string;
  label: string;
}

export function CaseStudyHero({
  eyebrow,
  title,
  tagline,
  role,
  platforms,
  impactStats,
}: {
  eyebrow: string;
  title: string;
  tagline: string;
  role: string;
  platforms: string;
  impactStats: ImpactStat[];
}) {
  return (
    <section className="pt-5 pb-[70px]">
      <div className="mx-auto max-w-[1140px] px-8">
        <div className="max-w-[680px] pt-5">
          <span className="mb-3.5 block text-[13px] font-bold uppercase tracking-[0.12em] text-accent">
            {eyebrow}
          </span>
          <h1 className="max-w-[600px] text-[32px] text-navy min-[861px]:text-[44px]">
            {title}
          </h1>
          <p className="mt-[18px] max-w-[520px] text-base text-navy-soft">{tagline}</p>
        </div>
        <div className="mt-12 flex flex-col flex-wrap items-start gap-10 border-t border-border pt-9 min-[861px]:flex-row">
          <div className="flex-1 basis-40">
            <h4 className="mb-2 text-[12.5px] font-bold uppercase tracking-[0.1em] text-ink-muted">
              Role
            </h4>
            <p className="text-[15.5px] text-navy-soft">{role}</p>
          </div>
          <div className="flex-1 basis-40">
            <h4 className="mb-2 text-[12.5px] font-bold uppercase tracking-[0.1em] text-ink-muted">
              Platforms
            </h4>
            <p className="text-[15.5px] text-navy-soft">{platforms}</p>
          </div>
          <div className="flex-[2] basis-[340px]">
            <h4 className="mb-2 text-[12.5px] font-bold uppercase tracking-[0.1em] text-ink-muted">
              Impact
            </h4>
            <div className="mt-1.5 flex flex-wrap gap-[22px] min-[861px]:flex-nowrap">
              {impactStats.map((stat) => (
                <div key={stat.label} className="flex-1 basis-[90px] min-[861px]:basis-0">
                  <div className="whitespace-nowrap text-[28px] font-extrabold text-tabii-green">
                    {stat.num}
                  </div>
                  <div className="mt-1 text-[12.5px] text-ink-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
