import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { site } from "@/config/site";
import type { Project } from "@/models/project";
import LaunchKitFeatured from "./LaunchKitFeatured";

function Card({ project }: { project: Project }) {
  const img = project.images.thumbnail || project.images.mainDesktop;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="popout flex flex-col overflow-hidden bg-surface"
    >
      <div className="relative aspect-[16/10] border-b border-line bg-gradient-to-br from-[#0f2a2a] to-surface">
        {img ? (
          <Image
            src={img}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <span className="absolute inset-0 grid place-items-center px-6 text-center font-mono text-3xl text-accent">
            {project.title}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-xl">{project.title}</h3>
        <p className="text-[15px] leading-relaxed text-muted">
          {project.description.short}
        </p>
        <span className="mt-auto pt-3 font-mono text-sm text-accent">
          View case study &rarr;
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  const featured = site.featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));
  const more = projects.filter((p) => !site.featuredSlugs.includes(p.slug));

  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-14">
      <h2 className="mb-9 text-[clamp(1.9rem,4vw,3rem)] leading-none">
        Selected work
      </h2>

      <LaunchKitFeatured />

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((project) => (
          <Card key={project.slug} project={project} />
        ))}
      </div>

      {more.length > 0 && (
        <div className="mt-10">
          <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            More work
          </h4>
          <div className="flex flex-wrap gap-3">
            {more.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="rounded-full border border-line bg-surface px-4 py-2 text-sm transition-colors hover:border-accent"
              >
                {project.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
