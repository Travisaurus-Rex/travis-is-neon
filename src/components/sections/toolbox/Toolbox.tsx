import Link from "next/link";

interface Card {
  title: string;
  blurb: string;
  skills: string[];
  learning?: string[];
  highlight?: boolean;
  link?: { href: string; label: string };
}

const cards: Card[] = [
  {
    title: "Full stack",
    blurb: "Frontend first, comfortable everywhere.",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      ".NET",
      "Docker",
    ],
  },
  {
    title: "AI forward",
    blurb: "AI in how I work, and in what I ship.",
    skills: [
      "AI-assisted development",
      "Claude API",
      "Prompt engineering",
      "Structured output",
      "RAG",
      "AI agents",
    ],
    highlight: true,
    link: {
      href: "/projects/bahasa-builder",
      label: "See it in Bahasa Builder",
    },
  },
  {
    title: "Agency and CMS",
    blurb: "Fast, editable sites for clients.",
    skills: [
      "PHP",
      "GraphQL",
      "Performance and SEO",
      "Responsive UI",
      "Strapi CMS",
      "Headless WordPress",
    ],
  },
];

const chip = "rounded-full border px-2.5 py-1 font-mono text-xs";

export default function Toolbox() {
  return (
    <section id="toolbox" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-14">
      <h2 className="mb-9 text-[clamp(1.9rem,4vw,3rem)] leading-none">
        Toolbox
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`flex flex-col rounded-[10px] border bg-surface p-6 ${
              card.highlight
                ? "border-accent shadow-[0_0_40px_rgba(94,234,212,0.14)]"
                : "border-line"
            }`}
          >
            <h3 className="mb-1 text-xl">{card.title}</h3>
            <p className="mb-5 text-[15px] leading-relaxed text-muted">
              {card.blurb}
            </p>

            <div className="flex flex-wrap gap-2">
              {card.skills.map((s) => (
                <span key={s} className={`${chip} border-line text-accent`}>
                  {s}
                </span>
              ))}
              {card.learning?.map((s) => (
                <span
                  key={s}
                  className={`${chip} border-dashed border-muted text-muted`}
                >
                  {s}
                </span>
              ))}
            </div>

            {card.learning && (
              <p className="mt-4 text-xs text-muted">
                Dashed means I&apos;m still growing here.
              </p>
            )}

            {card.link && (
              <Link
                href={card.link.href}
                className="mt-auto pt-5 font-mono text-sm text-accent hover:underline"
              >
                {card.link.label} &rarr;
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
