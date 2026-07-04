import Image from "next/image";
import { MockCard, MockPhone, MockVisualFrame } from "./mock-primitives";
import tabiiCover from "@/public/images/tabii-cover.png";

export type ProjectVisualVariant = "tabii" | "delphi" | "appguard" | "mtm";

const frameClasses =
  "aspect-[16/11] min-[861px]:aspect-[4/3.1]";

function TabiiVisual() {
  return (
    <MockVisualFrame className={frameClasses}>
      <Image
        src={tabiiCover}
        alt="Cover image for the tabii design system refactor"
        fill
        sizes="(min-width: 861px) 50vw, 100vw"
        className="object-cover object-left"
      />
    </MockVisualFrame>
  );
}

function DelphiVisual() {
  return (
    <MockVisualFrame
      className={frameClasses}
      style={{
        background:
          "radial-gradient(120% 120% at 20% 15%, #6FCFC0 0%, var(--color-teal) 65%)",
      }}
    >
      <MockCard className="left-[8%] top-[10%] w-[60%] p-4">
        <div className="mb-2.5 h-[9px] w-[70%] rounded bg-border" />
        <div className="flex h-16 items-end gap-2">
          <div className="h-[40%] w-3.5 rounded-[3px] bg-teal" />
          <div className="h-[70%] w-3.5 rounded-[3px] bg-coral" />
          <div className="h-[55%] w-3.5 rounded-[3px] bg-blue" />
          <div className="h-[90%] w-3.5 rounded-[3px] bg-teal" />
        </div>
      </MockCard>
      <MockCard className="right-[10%] bottom-[14%] w-[46%] p-3.5">
        <div className="mb-2 h-2 w-[50%] rounded bg-border" />
        <div className="h-9 w-9 rounded-full border-[6px] border-coral border-t-border" />
      </MockCard>
    </MockVisualFrame>
  );
}

function AppGuardVisual() {
  return (
    <MockVisualFrame
      className={frameClasses}
      style={{
        background:
          "radial-gradient(120% 120% at 20% 15%, #5A6BD8 0%, var(--color-blue) 60%)",
      }}
    >
      <MockCard className="left-[12%] top-[14%] w-[56%] p-4">
        <div className="mb-2.5 flex gap-2">
          <div className="h-[22px] w-[22px] rounded-md bg-blue" />
          <div className="mt-1.5 h-[9px] w-[60%] rounded bg-border" />
        </div>
        <div className="mb-2 h-[9px] w-full rounded bg-border" />
        <div className="h-[9px] w-[80%] rounded bg-border" />
      </MockCard>
      <MockCard className="right-[8%] bottom-[12%] w-[40%] p-3.5">
        <div className="h-[9px] w-full rounded bg-blue/40" />
      </MockCard>
    </MockVisualFrame>
  );
}

function MtmVisual() {
  return (
    <MockVisualFrame
      className={frameClasses}
      style={{
        background:
          "radial-gradient(120% 120% at 20% 15%, #FFA98C 0%, var(--color-coral) 65%)",
      }}
    >
      <MockPhone
        className="right-[14%] top-[8%] w-[44%] aspect-[9/18.5]"
        screenClassName="bg-[linear-gradient(180deg,#FFF3EC,#FFE4DA)]"
      >
        <div className="flex h-full flex-col items-center justify-center gap-2.5 p-3.5">
          <div className="h-14 w-14 rounded-full border-[5px] border-coral" />
          <div className="h-2 w-[70%] rounded bg-navy/15" />
        </div>
      </MockPhone>
      <MockCard className="left-[10%] bottom-[16%] w-[44%] p-3.5">
        <div className="mb-2 h-[9px] w-[60%] rounded bg-border" />
        <div className="h-[9px] w-[40%] rounded bg-border" />
      </MockCard>
    </MockVisualFrame>
  );
}

const variants: Record<ProjectVisualVariant, () => React.ReactElement> = {
  tabii: TabiiVisual,
  delphi: DelphiVisual,
  appguard: AppGuardVisual,
  mtm: MtmVisual,
};

export function ProjectVisual({ variant }: { variant: ProjectVisualVariant }) {
  const Visual = variants[variant];
  return <Visual />;
}
