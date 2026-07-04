export function ResultBanner({
  headline,
  body,
}: {
  headline: string;
  body: string;
}) {
  return (
    <div className="mt-[70px] mb-5 rounded-[32px] bg-tabii-green px-6 py-11 text-center text-white min-[861px]:px-12 min-[861px]:py-16">
      <span className="mb-3.5 block text-center text-[13px] font-bold uppercase tracking-[0.12em] text-tabii-lime">
        Result
      </span>
      <h2 className="mb-4 text-[28px] min-[861px]:text-[40px]">{headline}</h2>
      <p className="mx-auto max-w-[560px] text-base text-[#C9DAD2]">{body}</p>
    </div>
  );
}
