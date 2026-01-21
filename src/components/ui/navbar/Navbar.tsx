import "./Navbar.css";
import { Luckiest_Guy } from "next/font/google";

const font = Luckiest_Guy({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <nav className={`navbar ${font.className}`}>
      <a key="about" href="#about" className="navbar-link">
        ABOUT
      </a>
      <a key="skills" href="#skills" className="navbar-link">
        SKILLS
      </a>
      <a key="work" href="#work" className="navbar-link">
        WORK
      </a>
      <a key="projects" href="#projects" className="navbar-link">
        PROJECTS
      </a>
      <a key="contact" href="#contact" className="navbar-link">
        CONTACT
      </a>
    </nav>
  );
}
