import { MockVisualFrame } from "./mock-primitives";

export interface CaseStudySectionData {
  key: string;
  eyebrow: string;
  heading: string;
  body: string;
  layout: "alternating" | "vertical";
  reverse?: boolean;
  background: string;
  visual: React.ReactNode;
}

export function CaseStudySection({
  eyebrow,
  heading,
  body,
  layout,
  reverse = false,
  background,
  visual,
}: CaseStudySectionData) {
  if (layout === "vertical") {
    return (
      <div className="grid grid-cols-1 gap-8 border-t border-border py-11 min-[861px]:py-16">
        <div className="max-w-[720px]">
          <span className="mb-3.5 block text-[13px] font-bold uppercase tracking-[0.12em] text-accent">
            {eyebrow}
          </span>
          <h3 className="text-[27px] text-navy">{heading}</h3>
        </div>
        <MockVisualFrame
          className="aspect-[16/11] w-full min-[861px]:aspect-[21/8]"
          style={{ background }}
        >
          {visual}
        </MockVisualFrame>
        <p className="max-w-[720px] text-[15.5px] text-navy-soft">{body}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 items-center gap-[26px] border-t border-border py-11 min-[861px]:grid-cols-2 min-[861px]:gap-16 min-[861px]:py-16">
      <div
        className={`order-1 ${reverse ? "min-[861px]:order-2" : "min-[861px]:order-1"}`}
      >
        <MockVisualFrame className="aspect-[4/3.1]" style={{ background }}>
          {visual}
        </MockVisualFrame>
      </div>
      <div
        className={`order-2 ${reverse ? "min-[861px]:order-1" : "min-[861px]:order-2"}`}
      >
        <span className="mb-3.5 block text-[13px] font-bold uppercase tracking-[0.12em] text-accent">
          {eyebrow}
        </span>
        <h3 className="mb-3.5 text-[27px] text-navy">{heading}</h3>
        <p className="max-w-[480px] text-[15.5px] text-navy-soft">{body}</p>
      </div>
    </div>
  );
}
