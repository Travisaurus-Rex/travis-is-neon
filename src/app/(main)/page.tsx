import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import Experience from "@/components/sections/experience/Experience";
import PageView from "@/components/ui/page-view/PageView";
import Toolbox from "@/components/sections/toolbox/Toolbox";
import SiteFooter from "@/components/sections/site-footer/SiteFooter";

export default function Home() {
  return (
    <>
      <PageView />
      <Hero />
      <Projects />
      <Experience />
      <Toolbox />
      <SiteFooter />
    </>
  );
}
