import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "ghost" | "footer-cv";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-cream shadow-[0_6px_18px_rgba(23,31,61,0.18)] hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(23,31,61,0.24)]",
  ghost:
    "border-[1.5px] border-navy text-navy hover:bg-navy/20 hover:text-navy",
  "footer-cv":
    "bg-footer-cv text-white hover:opacity-90 hover:-translate-y-0.5",
};

interface ButtonProps extends ComponentProps<"a"> {
  variant: Variant;
  size?: "default" | "sm";
  href: string;
}

export function Button({
  variant,
  size = "default",
  href,
  className,
  children,
  ...rest
}: ButtonProps) {
  const sizeClasses =
    size === "sm" ? "px-[18px] py-[9px] text-[13.5px]" : "px-[22px] py-3 text-[14.5px]";

  const classes = `inline-flex items-center gap-2 whitespace-nowrap rounded-full font-semibold transition-[transform,box-shadow] duration-[180ms] ease-out ${sizeClasses} ${variantClasses[variant]} ${className ?? ""}`;

  const isInternal = href.startsWith("/") && !rest.download;

  if (isInternal) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
