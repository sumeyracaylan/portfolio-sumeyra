import { Button } from "./Button";
import { CV_HREF } from "@/lib/constants";

export function Footer({ variant = "full" }: { variant?: "full" | "simple" }) {
  if (variant === "simple") {
    return (
      <footer className="bg-navy py-14 pb-8 text-white">
        <div className="mx-auto flex max-w-[1140px] flex-wrap items-center justify-between gap-5 px-8">
          <p className="text-[14.5px] text-[#B7BBD0]">
            © 2026 Sümeyra Caylan. All rights reserved.
          </p>
          <Button variant="footer-cv" size="sm" href={CV_HREF} download>
            ↓ Download CV
          </Button>
        </div>
      </footer>
    );
  }

  return (
    <footer id="contact" className="bg-navy py-16 pb-10 text-cream">
      <div className="mx-auto flex max-w-[1140px] flex-wrap items-start justify-between gap-8 px-8">
        <div>
          <h3 className="mb-3 text-[26px]">Let&apos;s work together.</h3>
          <p className="mb-6 max-w-[360px] text-[15px] text-[#B7BBD0]">
            Open to new opportunities and freelance collaborations — feel free to
            reach out.
          </p>
          <Button variant="footer-cv" size="sm" href={CV_HREF} download>
            ↓ Download CV
          </Button>
        </div>
        <div className="flex flex-col gap-2 text-[15px]">
          <a
            href="mailto:sumeyracaylann@gmail.com"
            className="border-b border-transparent text-cream transition-colors hover:border-accent"
          >
            sumeyracaylann@gmail.com
          </a>
          <span className="text-[#8489A3]">Munich, Germany</span>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1140px] flex-wrap justify-between gap-2.5 border-t border-white/[0.12] px-8 pt-6 text-[13px] text-[#8489A3]">
        <span>© 2026 Sümeyra Caylan. All rights reserved.</span>
        <span>Designed &amp; built with care.</span>
      </div>
    </footer>
  );
}
