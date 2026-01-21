import { Luckiest_Guy, Bodoni_Moda } from "next/font/google";

const cartoony = Luckiest_Guy({ subsets: ["latin"], weight: "400" });
const classy = Bodoni_Moda({ subsets: ["latin"], weight: "400" });

export default function About() {
  return (
    <section id="about" className="flex items-center section">
      <div className="mx-auto w-full px-6">
        <div className="mb-4 text-sm uppercase tracking-widest text-accent font-bold">
          About
        </div>

        <h1 className={`sexy-texty text-9xl ${cartoony.className}`}>
          Travis Adams
        </h1>

        <p className={`mt-2 text-lg italic opacity-70 ${classy.className}`}>
          Purveyor of functional software. Est. 1986.
        </p>

        <h2
          className={`mt-6 text-5xl md:text-4xl font-bold leading-tight text-balance ${classy.className}`}
        >
          I build software that
          <span className="text-accent"> works, </span> then
          <span className="text-accent"> scales</span>, and then
          <span className="text-accent"> works</span> some more.
        </h2>

        <div className="mt-6 h-0.5 w-48 bg-[var(--color-text)]" />

        <p className="mt-8 text-xl leading-relaxed">
          This researcher has spent 6 years in the field studying production
          systems in their natural habitat (enterprise chaos). Primary findings
          indicate that software which &quot;works on my machine&quot; often
          fails to replicate in wild environments.
        </p>

        <p className="mt-6 text-xl leading-relaxed">
          Methodologies include: writing code assuming malicious user input,
          avoiding Friday deployments, and documenting things as if future-me
          has amnesia (he does).
        </p>

        <p className="mt-6 text-xl leading-relaxed">
          Results demonstrate that boring details like error handling and
          logging prevent more fires than clever architecture diagrams.
        </p>
      </div>
    </section>
  );
}
