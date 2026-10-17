import Link from "next/link";
import { site } from "@/config/site";
import OutboundLink from "@/components/ui/outbound-link/OutboundLink";

// TODO: confirm this is the real repo URL for the portfolio.
const REPO_URL = "https://github.com/Travisaurus-Rex/travis-is-neon";

const label = "mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted";
const link = "text-text transition-colors hover:text-accent";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-[10px] border border-line bg-surface p-8">
          <div>
            <p className="font-mono text-xl">
              Want to see the code behind this site?
            </p>
            <p className="mt-1 text-[15px] text-muted">
              It is all on GitHub. Judge gently.
            </p>
          </div>
          <OutboundLink
            href={REPO_URL}
            className="inline-block rounded-[10px] border border-accent bg-accent px-5 py-3 text-[15px] font-semibold text-btn-text transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(94,234,212,0.33)]"
          >
            View the repo &rarr;
          </OutboundLink>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-mono text-lg font-medium">{site.name}</p>
            <p className="mt-2 max-w-[34ch] text-[15px] leading-relaxed text-muted">
              Software engineer building reliable products from {site.location}.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm">
              <span className="inline-block size-2 rounded-full bg-emerald-400" />
              US citizen, available for US hours
            </p>
          </div>

          <div>
            <p className={label}>Explore</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#work" className={link}>
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#experience" className={link}>
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#toolbox" className={link}>
                  Toolbox
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={label}>Connect</p>
            <ul className="space-y-3 text-sm">
              <li>
                <OutboundLink href={`mailto:${site.email}`} className={link}>
                  Email
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href={site.github} className={link}>
                  GitHub
                </OutboundLink>
              </li>
              <li>
                <OutboundLink href={site.linkedin} className={link}>
                  LinkedIn
                </OutboundLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted">
          <span>
            &copy; {year} {site.name}. All rights reserved.
          </span>
          <a href="#" className="transition-colors hover:text-accent">
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
