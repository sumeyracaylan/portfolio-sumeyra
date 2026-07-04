import Link from "next/link";
import { Button } from "./Button";
import { CV_HREF } from "@/lib/constants";

export function Nav({ sectionLinkBase = "" }: { sectionLinkBase?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/[86%] backdrop-blur-[10px]">
      <nav className="mx-auto flex h-[76px] max-w-[1140px] items-center justify-between px-8">
        <Link href="/" className="text-[19px] font-bold text-navy">
          sümeyra<span className="text-teal">.</span>caylan
        </Link>
        <div className="hidden items-center gap-9 text-[15px] font-medium min-[861px]:flex">
          <a
            href={`${sectionLinkBase}#work`}
            className="text-navy-soft transition-colors hover:text-accent"
          >
            Work
          </a>
          <a
            href={`${sectionLinkBase}#about`}
            className="text-navy-soft transition-colors hover:text-accent"
          >
            About
          </a>
          <a
            href={`${sectionLinkBase}#contact`}
            className="text-navy-soft transition-colors hover:text-accent"
          >
            Contact
          </a>
        </div>
        <Button variant="primary" size="sm" href={CV_HREF} download>
          Download CV
        </Button>
      </nav>
    </header>
  );
}
