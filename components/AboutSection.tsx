import { PersonIllustration } from "./PersonIllustration";

const hobbies = ["📸 Photography", "✏️ Drawing", "📚 Reading"];

const education = [
  {
    degree: "MSc, Design Informatics",
    school: "University of Edinburgh",
    years: "2019–2020",
  },
  {
    degree: "BSc, Electrical & Electronics Engineering",
    school: "Abdullah Gül University",
    years: "2013–2018",
  },
];

const skills = [
  "User Research",
  "Design Systems",
  "Interaction Design",
  "Wireframing & Prototyping",
  "Information Architecture",
  "Responsive & TV Design",
  "Figma",
  "Data Visualization",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-9 px-8 min-[861px]:grid-cols-[340px_1fr] min-[861px]:gap-[72px]">
        <div>
          <div className="relative aspect-square w-full max-w-[240px] overflow-hidden rounded-card bg-white p-3 min-[861px]:max-w-none">
            <PersonIllustration className="h-full w-full" />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {hobbies.map((hobby) => (
              <span
                key={hobby}
                className="rounded-full border border-border bg-white px-[15px] py-2 text-[13px] font-semibold text-navy-soft"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent">
            About Me
          </span>
          <h2 className="mt-2.5 mb-[22px] text-[32px] text-navy">
            From circuits to interfaces
          </h2>
          <p className="mb-5 max-w-[620px] text-base text-navy-soft">
            I started out on the engineering side — a degree in Electrical &amp;
            Electronics Engineering, followed by a year working as an embedded
            software developer, coding state machines and interfaces for hardware
            rather than screens. It was good training in how systems fit together,
            but I kept gravitating toward the parts of the job that were actually
            about people. That pull led me to a Master&apos;s in Design Informatics
            at the University of Edinburgh, and from there into UX for good.
          </p>
          <p className="mb-5 max-w-[620px] text-base text-navy-soft">
            Since then I&apos;ve spent 6+ years designing across mobile, web, and TV.
            For four of those years I led design at TRT, where I took tabii — a
            national streaming platform — from early wireframes to a full design
            system, working across iOS, Android, responsive web, and Smart TV.
            Alongside that, I&apos;ve taken on freelance projects with teams like
            AppGuard, ITV, Delphi Sonic, and MTM Biotechnology, usually stepping in
            where dense, technical products need a clearer interface.
          </p>
          <p className="mb-5 max-w-[620px] text-base text-navy-soft">
            Outside of work, I&apos;m usually behind a camera, sketching something,
            or in the middle of a book — photography, drawing, and reading are the
            things that keep me recharged. I also volunteer as a UI/UX design
            instructor at the ReDI School of Digital Integration, teaching design
            fundamentals to career-changers building their way into tech, which is a
            role that feels a bit like paying my own career switch forward.
          </p>

          <h3 className="mt-[34px] mb-3.5 text-[22px] text-navy">Education</h3>
          <ul className="mb-2">
            {education.map((item) => (
              <li
                key={item.degree}
                className="flex max-w-[620px] justify-between gap-4 border-b border-border py-3.5 text-[15px] text-navy-soft"
              >
                <span>
                  <strong className="font-semibold text-navy">{item.degree}</strong> —{" "}
                  {item.school}
                </span>
                <span className="whitespace-nowrap text-[13.5px] text-ink-muted">
                  {item.years}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mt-[34px] mb-3.5 text-[22px] text-navy">Core skills</h3>
          <div className="flex max-w-[620px] flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-white px-[13px] py-1.5 text-[12.5px] font-semibold text-navy-soft"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
