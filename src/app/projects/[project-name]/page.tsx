"use client";

import DevName from "@/components/ui/dev-name/DevName";
import ThemeToggle from "@/components/ui/theme-toggle/ThemeToggle";
import { projects } from "@/lib/data";
import { useParams } from "next/navigation";
import { ProjectHeader } from "../components/ProjectHeader";
import HamburgerMenu from "@/components/ui/hamburger-menu/HamburgerMenu";
import { usePageView } from "@/lib/analytics/hooks";

export default function ProjectPage() {
  const params = useParams();
  const _slug = params["project-name"];
  const project = projects.find((p) => p.slug === _slug);
  usePageView(project ? (_slug as string) : "project_not_found");

  if (!project) {
    return (
      <div className="p-12 text-center text-[var(--color-text-light)]">
        Project not found
      </div>
    );
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-sidebar border border-b-2 border-black">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative">
          <DevName />
          <div className="max-md:hidden">
            <ThemeToggle />
          </div>
          <div className="md:hidden relative top-0 left-0">
            <HamburgerMenu />
          </div>
        </nav>
      </header>

      <div className="pt-18">
        <ProjectHeader
          desktopImg={project.images.mainDesktop}
          mobileImg={project.images.mainMobile}
          alt={project.title}
        />
      </div>

      <section className="section space-y-16 px-4">
        <h1 className="text-6xl md:text-6xl font-bold text-lg">
          {project.title}
        </h1>

        <div>
          <h2 className="text-4xl font-semibold mb-4">About the Project</h2>
          {project.description.about.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed mb-6">
              {para}
            </p>
          ))}
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-4">How It Was Built</h2>
          {project.description.howItWasBuilt.map((para, i) => (
            <p key={i} className="text-lg leading-relaxed mb-6">
              {para}
            </p>
          ))}
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {project.description.keyFeatures.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

        {project.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="tag tag-lg">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          {project.live && (
            <a
              target="_blank"
              href={project.live}
              className="popout popout-btn"
            >
              VISIT SITE
            </a>
          )}

          {project.github && project.github.monorepo && (
            <a
              target="_blank"
              href={project.github.monorepo}
              className="popout popout-btn"
            >
              GITHUB
            </a>
          )}

          {project.github && typeof project.github === "object" && (
            <>
              {project.github.frontend && (
                <a
                  target="_blank"
                  href={project.github.frontend}
                  className="popout popout-btn"
                >
                  FRONTEND
                </a>
              )}
              {project.github.backend && (
                <a
                  target="_blank"
                  href={project.github.backend}
                  className="popout popout-btn"
                >
                  BACKEND
                </a>
              )}
            </>
          )}

          {project.android && (
            <a
              target="_blank"
              href={project.android}
              className="popout popout-btn"
            >
              GOOGLE PLAY
            </a>
          )}

          {project.ios && (
            <a target="_blank" href={project.ios} className="popout popout-btn">
              APPLE STORE
            </a>
          )}
        </div>
      </section>
    </>
  );
}
