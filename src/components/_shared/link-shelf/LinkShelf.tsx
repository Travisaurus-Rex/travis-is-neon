import { FaGithub, FaLinkedinIn, FaCodepen } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function LinkShelf() {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row max-md:space-y-8 md:space-x-5 text-neutral-400">
      <a
        href="https://github.com/Travisaurus-Rex"
        className="popout popout-btn flex items-center gap-3 justify-center w-full text-2xl lg:text-4xl text-accent hover:text-contrast transition-colors"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
        <span className="md:hidden">Github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/travis-a-768637a2/"
        className="popout popout-btn flex items-center gap-3 justify-center w-full text-2xl lg:text-4xl text-accent hover:text-contrast transition-colors"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
        <span className="md:hidden">LinkedIn</span>
      </a>
      <a
        href="https://codepen.io/Travisaurus-Rex"
        className="popout popout-btn flex items-center gap-3 justify-center w-full text-2xl lg:text-4xl text-accent hover:text-contrast transition-colors"
        target="_blank"
        rel="noreferrer"
      >
        <FaCodepen />
        <span className="md:hidden">Codepen</span>
      </a>
      <a
        href="mailto:tadamsdeveloper@gmail.com"
        className="popout popout-btn flex items-center gap-3 justify-center w-full text-2xl lg:text-4xl text-accent hover:text-contrast transition-colors"
      >
        <MdEmail />
        <span className="md:hidden">Email me</span>
      </a>
    </div>
  );
}
