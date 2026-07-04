export function MockCard({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute rounded-[14px] bg-white/96 shadow-[0_20px_40px_rgba(0,0,0,0.18)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

export function MockPhone({
  className,
  screenClassName,
  children,
}: {
  className?: string;
  screenClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute rounded-[22px] bg-[#0B0B0F] p-1.5 shadow-[0_24px_50px_rgba(0,0,0,0.28)] ${className ?? ""}`}
    >
      <div
        className={`h-full w-full overflow-hidden rounded-[16px] ${screenClassName ?? "bg-white"}`}
      >
        {children}
      </div>
    </div>
  );
}

export function MockVisualFrame({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-card ${className ?? ""}`}
      style={style}
    >
      {children}
    </div>
  );
}
