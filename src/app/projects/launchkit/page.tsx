import Image from "next/image";
import Link from "next/link";

const launchkit = {
  live: "https://YOUR-LAUNCHKIT-APP.vercel.app",
  github: "https://github.com/YOUR-USERNAME/YOUR-REPO",

  images: {
    nova: "https://res.cloudinary.com/swtmnaod/image/upload/v1792154012/launchkit/nova_full_d2b659af7a_hlvi0a.png",
    atelier:
      "https://res.cloudinary.com/swtmnaod/image/upload/v1792154043/launchkit/atelier_full_a8613422f3_nkj2c3.png",
    hearth:
      "https://res.cloudinary.com/swtmnaod/image/upload/v1792154077/launchkit/local_full_429a539192_m3honk.png",
    customizer: "/projects/launchkit/customizer.png",
    exportPreview: "",
  },
};

const technologies = [
  "Next.js 16",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Strapi 5",
  "PostgreSQL",
  "Cloudinary",
  "JSZip",
  "Cheerio",
];

const templates = [
  {
    number: "01",
    name: "Nova",
    category: "SaaS / Technology",
    description:
      "A modern landing page designed for software products, with a bold hero, structured feature sections, and conversion-focused calls to action.",
    image: launchkit.images.nova,
  },
  {
    number: "02",
    name: "Atelier",
    category: "Creative Studio",
    description:
      "An editorial-style website for creative businesses, with expressive typography, a refined layout, and an emphasis on visual storytelling.",
    image: launchkit.images.atelier,
  },
  {
    number: "03",
    name: "Hearth & Honey",
    category: "Café / Hospitality",
    description:
      "A warm, photography-led website for a neighborhood café, built around inviting imagery, brand personality, and approachable content.",
    image: launchkit.images.hearth,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function Screenshot({
  src,
  alt,
  aspect = "aspect-[16/10]",
  className = "",
}: {
  src?: string;
  alt: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-line bg-[#151d26] ${aspect} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Screenshot
          </span>
          <span className="max-w-xs text-sm text-muted">{alt}</span>
        </div>
      )}
    </div>
  );
}

function ArchitectureNode({
  label,
  detail,
}: {
  label: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      <p className="font-mono text-base font-semibold text-text">{label}</p>
      <p className="mt-2 text-sm text-muted">{detail}</p>
    </div>
  );
}

export default function LaunchKitPage() {
  return (
    <main className="min-h-screen text-text">
      {/* Navigation */}
      <div className="border-b border-line bg-primary/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/#work"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            ← Back to projects
          </Link>

          <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted">
            Project / LaunchKit
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="max-w-4xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Full-stack development / 2026
          </p>

          <h1 className="text-[clamp(4rem,12vw,9rem)] font-medium leading-[0.9] tracking-[-0.08em]">
            LaunchKit<span className="text-accent">.</span>
          </h1>

          <p className="mt-9 max-w-3xl text-xl leading-relaxed text-text md:text-3xl">
            Explore a template. Make it yours. Take the code with you.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            A full-stack website template platform where users can browse
            distinct designs, customize branding and content, and export
            ready-to-use website files.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={launchkit.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-6 py-3 font-mono text-sm font-semibold text-primary transition-colors hover:bg-contrast"
            >
              Explore LaunchKit ↗
            </a>

            <a
              href={launchkit.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line bg-surface px-6 py-3 font-mono text-sm transition-colors hover:border-accent"
            >
              View source ↗
            </a>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-line bg-surface p-4 md:p-10">
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />

          <div className="relative grid grid-cols-3 items-start gap-3 md:gap-6">
            <div className="pt-10 md:pt-20">
              <Screenshot
                src={launchkit.images.atelier}
                alt="Atelier creative studio template"
                aspect="aspect-[3/4]"
              />
            </div>

            <div>
              <Screenshot
                src={launchkit.images.nova}
                alt="Nova SaaS website template"
                aspect="aspect-[3/4]"
                className="border-accent/40 shadow-[0_0_50px_rgba(94,234,212,0.08)]"
              />
            </div>

            <div className="pt-6 md:pt-12">
              <Screenshot
                src={launchkit.images.hearth}
                alt="Hearth and Honey café template"
                aspect="aspect-[3/4]"
              />
            </div>
          </div>

          <div className="relative mt-8 flex flex-wrap justify-between gap-3 border-t border-line pt-5 font-mono text-xs uppercase tracking-widest text-muted">
            <span>Three templates</span>
            <span>One customization workflow</span>
            <span>Exportable code</span>
          </div>
        </div>
      </section>

      {/* Project overview */}
      <section className="border-y border-line bg-surface/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr] md:gap-20 md:py-20">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              01 / Overview
            </p>

            <h2 className="text-3xl md:text-4xl">
              More than a template gallery.
            </h2>

            <p className="mt-6 leading-relaxed text-muted">
              LaunchKit brings template discovery, content customization, live
              previewing, and code export into a single experience. Instead of
              stopping at a visual demo, users can personalize a design and
              leave with the files needed to use it.
            </p>

            <p className="mt-4 leading-relaxed text-muted">
              I built the application across the frontend, CMS, database, media
              storage, and export pipeline, with an emphasis on reusable
              components and a consistent experience across different designs.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Technology
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-primary px-3 py-2 font-mono text-xs text-text"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-6">
              <div>
                <p className="font-mono text-xs uppercase text-muted">
                  Project type
                </p>
                <p className="mt-2 text-sm">Full-stack web application</p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase text-muted">Role</p>
                <p className="mt-2 text-sm">Design & development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="02 / Template library"
          title="Three templates. Three distinct identities."
          description="Each template has its own visual language, while sharing the same underlying customization and export capabilities."
        />

        <div className="space-y-20">
          {templates.map((template, index) => (
            <article
              key={template.number}
              className={`grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14 ${
                index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="rounded-2xl border border-line bg-surface p-4 md:p-7">
                <Screenshot
                  src={template.image}
                  alt={`${template.name} full-page template screenshot`}
                  aspect="aspect-[4/3]"
                />
              </div>

              <div>
                <span className="font-mono text-sm text-accent">
                  {template.number} / 03
                </span>

                <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {template.category}
                </p>

                <h3 className="mt-3 text-4xl md:text-5xl">{template.name}</h3>

                <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                  {template.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Customization & Export */}
      <section className="border-y border-line bg-surface/70">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="03 / Customize & Export"
            title="Make it yours. Take it with you."
            description="LaunchKit goes beyond browsing templates. Customize a design in the browser, preview your changes, and download a standalone website you can use outside the platform."
          />

          {/* Customizer screenshot */}
          <div className="overflow-hidden rounded-2xl border border-line bg-primary p-3 md:p-6">
            {launchkit.images.customizer ? (
              <Image
                src={launchkit.images.customizer}
                alt="LaunchKit customization editor with branding controls and a live preview of the Atelier Studio template"
                width={1920}
                height={1080}
                sizes="(min-width: 1152px) 1080px, 100vw"
                className="block h-auto w-full rounded-lg"
              />
            ) : (
              <div className="flex min-h-80 items-center justify-center rounded-lg bg-surface text-sm text-muted">
                LaunchKit customizer screenshot
              </div>
            )}
          </div>

          {/* Customization features */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Brand identity",
                text: "Change the brand name and primary color to match your identity.",
              },
              {
                number: "02",
                title: "Hero content",
                text: "Personalize the headline and supporting message.",
              },
              {
                number: "03",
                title: "Call to action",
                text: "Update the main button label for your audience.",
              },
              {
                number: "04",
                title: "Live preview",
                text: "See your changes reflected in the template before exporting.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-line bg-primary p-6"
              >
                <span className="font-mono text-sm text-accent">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-medium">{item.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Export feature */}
          <div className="mt-20 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                The final step / Export
              </p>

              <h3 className="text-3xl leading-tight md:text-4xl">
                Your website.
                <br />
                Your files.
              </h3>

              <p className="mt-6 leading-relaxed text-muted">
                Once the design is ready, LaunchKit generates a downloadable ZIP
                containing the customized website. The exported files can be
                hosted independently, without requiring LaunchKit or its CMS.
              </p>

              <p className="mt-4 leading-relaxed text-muted">
                Behind the scenes, the export pipeline processes the rendered
                template, applies the customized content, packages the HTML,
                CSS, and image assets, and prepares everything for download.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["HTML", "CSS", "Image assets", "ZIP export"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-primary px-3 py-2 font-mono text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Export package visualization */}
            <div className="overflow-hidden rounded-xl border border-line bg-[#0a0c10]">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fb7185]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#5eead4]" />
                </div>

                <span className="font-mono text-xs text-muted">
                  launchkit-export.zip
                </span>

                <span className="font-mono text-xs text-accent">ZIP</span>
              </div>

              {/* File tree */}
              <div className="p-6 font-mono text-sm md:p-8">
                <div className="flex items-center gap-3 text-accent">
                  <span>▾</span>
                  <span>launchkit-export/</span>
                </div>

                <div className="ml-3 mt-5 space-y-5 border-l border-line pl-6">
                  <div className="flex items-center gap-3">
                    <span className="text-accent">◇</span>
                    <span className="text-text">index.html</span>
                    <span className="ml-auto hidden text-xs text-muted sm:inline">
                      Website markup
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-accent">◇</span>
                    <span className="text-text">styles.css</span>
                    <span className="ml-auto hidden text-xs text-muted sm:inline">
                      Website styles
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-accent">▾</span>
                    <span className="text-text">assets/</span>
                    <span className="ml-auto hidden text-xs text-muted sm:inline">
                      Local images
                    </span>
                  </div>

                  <div className="ml-3 space-y-4 border-l border-line pl-6 text-muted">
                    <div className="flex items-center gap-3">
                      <span>◇</span>
                      <span>hero.jpg</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span>◇</span>
                      <span>...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Export summary */}
              <div className="grid grid-cols-3 divide-x divide-line border-t border-line">
                {[
                  { value: "HTML", label: "Structure" },
                  { value: "CSS", label: "Styling" },
                  { value: "Assets", label: "Images" },
                ].map((item) => (
                  <div key={item.value} className="p-4 text-center md:p-5">
                    <p className="font-mono text-sm text-text">{item.value}</p>
                    <p className="mt-1 text-xs text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical implementation note */}
          <div className="mt-12 flex flex-col gap-4 rounded-xl border border-line bg-primary p-6 md:flex-row md:items-start md:gap-8 md:p-8">
            <div className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Under the hood
            </div>

            <p className="text-sm leading-relaxed text-muted md:text-base">
              The export system uses{" "}
              <strong className="font-medium text-text">Cheerio</strong> to
              process the generated HTML and{" "}
              <strong className="font-medium text-text">JSZip</strong> to
              assemble the downloadable archive. Images are included as local
              assets so the exported website can run independently of
              Cloudinary.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-y border-line bg-surface/70">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="04 / Architecture"
            title="A connected full-stack system."
            description="The application combines a React-based interface with structured CMS content, hosted media, persistent data, and client-side export generation."
          />

          <div className="rounded-2xl border border-line bg-primary p-6 md:p-10">
            <div className="grid gap-4 md:grid-cols-2">
              <ArchitectureNode
                label="Next.js + React"
                detail="Template gallery, customization interface, previews, and exports."
              />

              <ArchitectureNode
                label="Strapi CMS"
                detail="Structured template content and media relationships."
              />
            </div>

            <div className="flex justify-center py-5 font-mono text-xl text-accent">
              ↕
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ArchitectureNode
                label="Neon PostgreSQL"
                detail="Persistent content and application data."
              />

              <ArchitectureNode
                label="Cloudinary"
                detail="Hosted screenshots, photography, and template assets."
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-6 font-mono text-xs text-muted">
              <span>Frontend hosting: Vercel</span>
              <span className="text-accent">/</span>
              <span>CMS hosting: Render</span>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="06 / Engineering"
          title="The details behind the experience."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Reusable template registry",
              description:
                "A shared component registry maps template identifiers to their layouts, allowing different designs to use the same customization flow.",
            },
            {
              number: "02",
              title: "CMS-driven content",
              description:
                "Strapi provides structured template data and image references, separating managed content from the frontend presentation.",
            },
            {
              number: "03",
              title: "Static website export",
              description:
                "JSZip and Cheerio help transform the rendered template into a downloadable package of HTML, CSS, and assets.",
            },
          ].map((item) => (
            <article
              key={item.number}
              className="rounded-xl border border-line bg-surface p-7 md:p-8"
            >
              <span className="font-mono text-sm text-accent">
                {item.number}
              </span>
              <h3 className="mt-8 text-xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-line bg-surface/70">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Explore the project
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl leading-tight md:text-5xl">
            See LaunchKit in action.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
            Browse the templates, try the customizer, and explore the
            application for yourself.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={launchkit.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-6 py-3 font-mono text-sm font-semibold text-primary hover:bg-contrast"
            >
              Open LaunchKit ↗
            </a>

            <a
              href={launchkit.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line px-6 py-3 font-mono text-sm hover:border-accent"
            >
              View GitHub ↗
            </a>
          </div>

          <Link
            href="/#work"
            className="mt-12 inline-block font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            ← Back to all projects
          </Link>
        </div>
      </section>
    </main>
  );
}
