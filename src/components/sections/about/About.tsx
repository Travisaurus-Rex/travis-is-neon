"use client";

import { useVoiceStore } from "@/stores/useVoiceStore";
import { Bodoni_Moda, Luckiest_Guy } from "next/font/google";

const classy = Bodoni_Moda({ subsets: ["latin"] });
const looney = Luckiest_Guy({ subsets: ["latin"], weight: "400" });

const content = {
  classy: {
    subtitle: "Purveyor of functional software. Est. 1986.",
    tagline:
      "I build software that works, then scales, and then works some more.",
    paragraphs: [
      'This researcher has spent 6 years in the field studying production systems in their natural habitat (enterprise chaos). Primary findings indicate that software which "works on my machine" often fails to replicate in wild environments.',
      "Methodologies include: writing code assuming malicious user input, avoiding Friday deployments, and documenting things as if future-me has amnesia (he does).",
      "Results demonstrate that boring details like error handling and logging prevent more fires than clever architecture diagrams.",
    ],
  },
  looney: {
    subtitle: "Builder of things that (usually) don't explode",
    tagline:
      "I build software that works, then scales, and then works some more.",
    paragraphs: [
      "I'm a senior fullstack engineer with 6 years building stuff for companies where downtime actually mattered. Learned how to architect systems that survive real users doing real (weird) things.",
      "I write TypeScript, build with React and Node, and make technical decisions based on what actually happens in production, not what looks good in a diagram. I care about the boring stuff: error handling that helps, logs you can actually read, and code that won't become someone's archaeology project.",
      "I also write in really big words sometimes but I promise, I'm not screaming at you.",
    ],
  },
};

export default function About() {
  const voice = useVoiceStore((state) => state.voice);
  const currentContent = content[voice];
  const nameFont = voice === "looney" ? looney : classy;

  return (
    <section
      id="about"
      className={`flex items-center section ${nameFont.className}`}
    >
      <div className="mx-auto w-full px-6">
        <div className="mb-4 text-sm uppercase tracking-widest text-accent font-bold">
          About
        </div>

        <h1
          className={`text-8xl font-bold ${voice === "looney" ? "looney-text " + nameFont.className : ""}`}
        >
          Travis Adams
        </h1>

        <p className="mt-2 text-lg italic opacity-70">
          {currentContent.subtitle}
        </p>

        <h2 className="mt-6 text-5xl md:text-4xl font-bold leading-tight text-balance">
          {currentContent.tagline.split(" ").map((word, i) => {
            const isAccent =
              word === "works," || word === "scales," || word === "works";
            return isAccent ? (
              <span key={i} className="text-accent">
                {" "}
                {word}{" "}
              </span>
            ) : (
              <span key={i}> {word} </span>
            );
          })}
        </h2>

        <div className="mt-6 h-0.5 w-48 bg-[var(--color-text)]" />

        {currentContent.paragraphs.map((para, i) => (
          <p key={i} className="mt-6 text-xl leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </section>
  );
}
