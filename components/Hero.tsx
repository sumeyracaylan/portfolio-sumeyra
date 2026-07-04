import { Button } from "./Button";
import { PersonIllustration } from "./PersonIllustration";
import { CV_HREF } from "@/lib/constants";

const pills = ["Mobile", "Web & Responsive", "Smart TV / Big Screen", "Design Systems"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-bg pt-[110px] pb-[100px]">
      <div className="relative z-2 mx-auto max-w-[1140px] px-8">
        <div className="grid grid-cols-1 items-center gap-11 min-[861px]:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-[760px]">
            <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-[7px] text-sm font-semibold text-ink-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Senior Product Designer · Munich, DE
            </span>
            <h1 className="mb-[22px] text-[38px] leading-[1.15] tracking-[-0.01em] text-navy min-[861px]:text-[52px]">
              I design digital products people actually enjoy{" "}
              <em className="not-italic bg-[linear-gradient(180deg,transparent_62%,var(--color-teal-soft)_62%)]">
                using
              </em>
              .
            </h1>
            <p className="mb-9 max-w-[600px] text-lg text-navy-soft">
              Engineer-turned-designer with 6+ years of experience across mobile, web,
              and TV. I&apos;ve led end-to-end design for a streaming platform used by
              millions, built design systems that scale, and helped freelance teams
              turn complex problems into clear interfaces.
            </p>
            <div className="mb-[52px] flex flex-wrap items-center gap-[18px]">
              <Button variant="primary" href={CV_HREF} download>
                ↓ Download CV
              </Button>
              <Button variant="ghost" href="#work">
                See my work
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-border bg-white px-[15px] py-2 text-[13px] font-semibold text-navy-soft"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
          <div className="order-first mx-auto mb-3 flex max-w-[220px] justify-center min-[861px]:order-none min-[861px]:mx-0 min-[861px]:mb-0 min-[861px]:max-w-none">
            <PersonIllustration className="h-auto w-full max-w-[220px] min-[861px]:max-w-[320px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
