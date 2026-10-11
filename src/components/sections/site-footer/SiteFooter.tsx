import { site } from "@/config/site";
import OutboundLink from "@/components/ui/outbound-link/OutboundLink";

const linkClass = "text-text transition-colors hover:text-accent";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-4 px-6 py-12 text-sm text-muted">
        <span>
          {site.name} &middot; {site.location}
        </span>
        <span className="flex flex-wrap gap-x-4 gap-y-2">
          <OutboundLink href={`mailto:${site.email}`} className={linkClass}>
            Email
          </OutboundLink>
          <OutboundLink href={site.resume} target="_blank" className={linkClass}>
            Resume
          </OutboundLink>
          <OutboundLink href={site.github} className={linkClass}>
            GitHub
          </OutboundLink>
          <OutboundLink href={site.linkedin} className={linkClass}>
            LinkedIn
          </OutboundLink>
        </span>
      </div>
    </footer>
  );
}
