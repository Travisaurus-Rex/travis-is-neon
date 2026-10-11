"use client";

import { useEffect, useRef } from "react";
import { experience } from "@/lib/experience";

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = list.querySelectorAll<HTMLElement>("[data-item]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) (e.target as HTMLElement).dataset.in = "true";
        });
      },
      { threshold: 0.2 },
    );
    items.forEach((el) => io.observe(el));

    const update = () => {
      const r = list.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      list.style.setProperty("--p", String(Math.max(0, Math.min(1, p))));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-14"
    >
      <h2 className="mb-9 text-[clamp(1.9rem,4vw,3rem)] leading-none">
        Experience
      </h2>

      <ol
        ref={listRef}
        className="relative list-none pl-9 [--p:0] before:absolute before:bottom-[6px] before:left-[7px] before:top-[6px] before:w-0.5 before:bg-line after:absolute after:left-[7px] after:top-[6px] after:h-[calc((100%_-_12px)_*_var(--p))] after:w-0.5 after:bg-accent after:shadow-[0_0_12px_var(--color-accent)]"
      >
        {experience.map((job) => (
          <li
            key={job.id}
            data-item
            className="relative grid gap-x-8 gap-y-2 pb-11 before:absolute before:-left-9 before:top-[5px] before:size-4 before:rounded-[3px] before:border-2 before:border-accent before:bg-primary before:transition-colors data-[in=true]:before:bg-accent md:grid-cols-[150px_1fr] motion-safe:translate-y-4 motion-safe:opacity-0 motion-safe:transition motion-safe:duration-500 motion-safe:data-[in=true]:translate-y-0 motion-safe:data-[in=true]:opacity-100"
          >
            <div className="pt-1 font-mono text-[13px] uppercase tracking-wide text-muted">
              {job.start} &ndash; {job.end}
            </div>
            <div>
              <h3 className="text-xl">{job.title}</h3>
              <p className="mb-2 text-[15px] font-semibold text-accent">
                {job.company}
              </p>
              <p className="max-w-[60ch] leading-relaxed text-muted">
                {job.summary}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
