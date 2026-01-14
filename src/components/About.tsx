export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center section">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="mb-4 text-sm uppercase tracking-widest text-accent">
          About
        </div>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
          I build software that
          <span className="text-accent"> scales</span>,
          <span className="text-accent"> ships</span>, and{" "}
          <span className="text-accent">lasts</span>.
        </h1>

        <div className="mt-6 h-px w-24 bg-white" />

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-foreground/80">
          I&apos;m a senior full stack engineer with 6 years building production
          systems for enterprise and consumer platforms. I work across frontend,
          backend, databases, and infrastructure—focusing on architecture that
          adapts as products grow and teams evolve.
        </p>
      </div>
    </section>
  );
}
