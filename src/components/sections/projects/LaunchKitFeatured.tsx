import Image from "next/image";
import Link from "next/link";

const launchkit = {
  title: "LaunchKit",
  description:
    "A full-stack website template platform for exploring, customizing, and exporting complete websites.",
  live: "https://launchkit-ebon.vercel.app/",
  github: "https://github.com/Travisaurus-Rex/launchkit",
  images: {
    nova: "https://res.cloudinary.com/swtmnaod/image/upload/v1792154006/launchkit/nova_thumbnail_a30bd46419_vtjril.png",
    atelier:
      "https://res.cloudinary.com/swtmnaod/image/upload/v1792154038/launchkit/atelier_thumbnail_ceefa595ad_i4jnhz.png",
    hearth:
      "https://res.cloudinary.com/swtmnaod/image/upload/v1792154072/launchkit/local_thumbnail_5dfa89e666_hznubi.png",
  },
  tags: ["Next.js", "TypeScript", "Strapi", "PostgreSQL", "Cloudinary"],
};

export default function LaunchKitFeatured() {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-surface mb-6">
      <div className="p-6 md:p-9">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-accent">
          Featured project / Full-stack development
        </p>

        <h3 className="mb-4 text-4xl font-semibold md:text-5xl">LaunchKit</h3>

        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {launchkit.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {launchkit.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 border-y border-line bg-primary p-3 md:gap-5 md:p-8">
        {Object.entries(launchkit.images).map(([name, src]) => (
          <div
            key={name}
            className="relative aspect-[3/4] overflow-hidden rounded-md border border-line bg-surface"
          >
            <Image
              src={src}
              alt={`${name} website template`}
              fill
              sizes="(min-width: 1024px) 300px, 33vw"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 p-6 md:p-9">
        <Link
          href="/projects/launchkit"
          className="rounded-lg bg-accent px-5 py-3 font-mono text-sm font-semibold text-primary transition-colors hover:bg-contrast"
        >
          View case study →
        </Link>

        <a
          href={launchkit.live}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-line px-5 py-3 font-mono text-sm transition-colors hover:border-accent"
        >
          Live demo ↗
        </a>

        <a
          href={launchkit.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-line px-5 py-3 font-mono text-sm transition-colors hover:border-accent"
        >
          GitHub ↗
        </a>
      </div>
    </article>
  );
}
