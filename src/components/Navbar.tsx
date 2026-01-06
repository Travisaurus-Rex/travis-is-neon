export function Navbar() {
  return (
    <nav className="space-y-4 mt-16">
      <a
        key="about"
        href="#about"
        className="block text-3xl font-thin text-[var(--color-accent)] hover:text-[var(--color-contrast)] transition-colors duration-150"
      >
        ABOUT
      </a>
      <a
        key="skills"
        href="#skills"
        className="block text-3xl font-thin text-[var(--color-accent)] hover:text-[var(--color-contrast)] transition-colors duration-150"
      >
        SKILLS
      </a>
      <a
        key="work"
        href="#work"
        className="block text-3xl font-thin text-[var(--color-accent)] hover:text-[var(--color-contrast)] transition-colors duration-150"
      >
        WORK
      </a>
      <a
        key="projects"
        href="#projects"
        className="block text-3xl font-thin text-[var(--color-accent)] hover:text-[var(--color-contrast)] transition-colors duration-150"
      >
        PROJECTS
      </a>
      <a
        key="contact"
        href="#contact"
        className="block text-3xl font-thin text-[var(--color-accent)] hover:text-[var(--color-contrast)] transition-colors duration-150"
      >
        CONTACT
      </a>
    </nav>
  );
}
