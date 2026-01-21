"use client";

import { useVoiceStore } from "@/stores/useVoiceStore";
import "./Navbar.css";
import { Bodoni_Moda, Luckiest_Guy } from "next/font/google";

const classy = Bodoni_Moda({ subsets: ["latin"] });
const looney = Luckiest_Guy({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const voice = useVoiceStore((state) => state.voice);
  const nameFont = voice === "looney" ? looney : classy;
  return (
    <nav className={`navbar ${nameFont.className}`}>
      <a
        key="about"
        href="#about"
        className={`navbar-link ${voice === "looney" ? "looney-text-hover" : ""}`}
      >
        ABOUT
      </a>
      <a
        key="skills"
        href="#skills"
        className={`navbar-link ${voice === "looney" ? "looney-text-hover" : ""}`}
      >
        SKILLS
      </a>
      <a
        key="work"
        href="#work"
        className={`navbar-link ${voice === "looney" ? "looney-text-hover" : ""}`}
      >
        WORK
      </a>
      <a
        key="projects"
        href="#projects"
        className={`navbar-link ${voice === "looney" ? "looney-text-hover" : ""}`}
      >
        PROJECTS
      </a>
      <a
        key="contact"
        href="#contact"
        className={`navbar-link ${voice === "looney" ? "looney-text-hover" : ""}`}
      >
        CONTACT
      </a>
    </nav>
  );
}
