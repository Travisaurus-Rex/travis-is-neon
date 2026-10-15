import Image from "next/image";
import Link from "next/link";
import { useYearsOfExperience } from "@/hooks/useYearsOfExperience";
import { site } from "@/config/site";
import OutboundLink from "@/components/ui/outbound-link/OutboundLink";

const btn =
  "inline-block rounded-[10px] border px-5 py-3 text-[15px] font-semibold transition hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(94,234,212,0.33)]";

export default function Hero() {
  const yoe = useYearsOfExperience();

  return (
    <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr] md:py-24">
      <div>
        <p className="mb-5 font-mono text-sm font-medium uppercase tracking-[0.14em] text-accent before:content-['>_']">
          Software engineer
        </p>
        <h1 className="mb-6 text-[clamp(2rem,5vw,3.6rem)] leading-[1.05]">
          Travis Adams
        </h1>
        <p className="mb-4 max-w-[52ch] text-lg leading-relaxed text-muted">
          I build web applications that look good, work well, and solve real
          problems. With {yoe}+ years of experience across the stack, I've
          worked on everything from polished interfaces and complex business
          systems to emerging AI-powered applications.
        </p>
        <p className="mb-7 flex items-center gap-2 text-sm">
          <span className="inline-block size-2 rounded-full bg-emerald-400" />
          US citizen, available for US hours
        </p>
        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="#work"
            className={`${btn} border-accent bg-accent text-btn-text`}
          >
            View work
          </Link>
          {false && (
            <OutboundLink
              href={site.resume}
              target="_blank"
              className={`${btn} border-line`}
            >
              Resume
            </OutboundLink>
          )}
          <OutboundLink
            href={`mailto:${site.email}`}
            className={`${btn} border-line`}
          >
            Email
          </OutboundLink>
        </div>
        <div className="flex gap-5 text-sm text-muted">
          <OutboundLink href={site.github} className="hover:text-accent">
            GitHub
          </OutboundLink>
          <OutboundLink href={site.linkedin} className="hover:text-accent">
            LinkedIn
          </OutboundLink>
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[340px] overflow-hidden rounded-full border border-accent shadow-[0_0_60px_rgba(94,234,212,0.19)]">
        <Image
          src="/travis.jpg"
          alt="Travis Adams"
          fill
          priority
          sizes="340px"
          className="object-cover object-[70%_28%]"
        />
      </div>
    </section>
  );
}
