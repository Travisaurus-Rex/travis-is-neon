// src/app/page.tsx
import About from "@/components/sections/about/About";
import Work from "@/components/sections/work/Work";
import Skills from "@/components/sections/skills/Skills";
import Projects from "@/components/sections/projects/Projects";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}
