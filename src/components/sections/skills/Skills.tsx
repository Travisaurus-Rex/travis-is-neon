import { Server, Layout, BrainCircuit } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 section">
      <div className="px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Technical Skills
        </h2>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            I&apos;m a product focused software engineer who builds features
            with intent. My background in long lived, large scale systems — from
            enterprise platforms serving 10,000+ customers to mission critical
            mobile apps — taught me how architecture, tradeoffs, and constraints
            actually show up in real products.
          </p>

          <p>
            Today, I focus on making clear decisions about scope, priorities,
            and implementation details that move products forward without
            unnecessary complexity. I care about building things that are
            understandable, adaptable, and easy to evolve as requirements
            change.
          </p>

          <p>
            My work emphasizes thoughtful problem solving, strong fundamentals,
            and choosing the right level of abstraction for the problem at hand.
            The goal is not perfect systems, but software that is reliable,
            useful, and easy for teams to work with over time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="rounded-lg md:p-6 bg-card/20">
            <div className="flex items-center space-x-3 mb-4">
              <Server className="text-neon-cyan w-6 h-6" />
              <h3 className="text-xl font-semibold text-neon-cyan">Backend</h3>
            </div>
            <p className="leading-relaxed text-base">
              I design and maintain backend services using
              <span className="text-accent font-bold"> Node.js</span>,
              TypeScript, NestJS, and Express, as well as
              <span className="text-accent font-bold"> .NET</span> and
              <span className="text-accent font-bold"> C#</span>. I work with
              databases like PostgreSQL, MongoDB, and SQL Server, focusing on
              clean architecture, modular code, strong typing, and patterns that
              scale across teams.
            </p>
          </div>

          <div className="rounded-lg md:p-6 bg-card/20">
            <div className="flex items-center space-x-3 mb-4">
              <Layout className="text-neon-pink w-6 h-6" />
              <h3 className="text-xl font-semibold text-neon-pink">Frontend</h3>
            </div>
            <p className="leading-relaxed text-base">
              I build production UIs using{" "}
              <span className="text-accent font-bold">React</span> and{" "}
              <span className="text-accent font-bold">Angular</span>, with
              experience in Next.js based projects. I&apos;ve led large-scale
              Angular applications in enterprise environments and now work
              across both ecosystems, focusing on component architecture, state
              management, and performance optimization.
            </p>
          </div>

          <div className="rounded-lg md:p-6 bg-card/20">
            <div className="flex items-center space-x-3 mb-4">
              <BrainCircuit className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Mindset</h3>
            </div>
            <p className="leading-relaxed text-base">
              I emphasize code clarity, testing, and maintainable architecture.
              I enjoy improving developer experience through better tooling,
              documentation, and CI/CD workflows. My backend focus has
              strengthened how I approach performance, reliability, and
              long-term system health.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="md:p-8 rounded-lg">
            <h3 className="text-2xl mb-4 text-neon-cyan">Always Learning</h3>
            <p className="text-foreground/80 leading-relaxed text-base">
              I stay committed to continuous learning within the Node.js
              ecosystem. I&apos;m currently deepening my expertise in NestJS,
              advanced TypeScript patterns, backend performance optimization,
              database design, testing, and distributed systems.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              {["NestJS", "Go", "PostgreSQL", "Docker", "CI/CD"].map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
