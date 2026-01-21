"use client";

import "./LinkShelf.css";
import { FaGithub, FaLinkedinIn, FaCodepen } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTrackEvent } from "@/lib/analytics/hooks";

export default function LinkShelf() {
  const trackEvent = useTrackEvent();

  const handleOutboundClick = (url: string) => {
    trackEvent({
      event_type: "outbound_link",
      outbound_url: url,
    });
  };

  return (
    <div className="flex items-center justify-center flex-col md:flex-row max-md:mt-8 max-md:space-y-8 md:space-x-5 py-4">
      <a
        href="https://github.com/Travisaurus-Rex"
        className="popout popout-btn link-shelf-a flex items-center gap-3 justify-center w-full"
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          handleOutboundClick("https://github.com/Travisaurus-Rex")
        }
      >
        <FaGithub />
        <span className="md:hidden">Github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/travis-a-768637a2/"
        className="popout popout-btn link-shelf-a flex items-center gap-3 justify-center w-full"
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          handleOutboundClick("https://www.linkedin.com/in/travis-a-768637a2/")
        }
      >
        <FaLinkedinIn />
        <span className="md:hidden">LinkedIn</span>
      </a>
      <a
        href="https://codepen.io/Travisaurus-Rex"
        className="popout popout-btn link-shelf-a flex items-center gap-3 justify-center w-full"
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          handleOutboundClick("https://codepen.io/Travisaurus-Rex")
        }
      >
        <FaCodepen />
        <span className="md:hidden">Codepen</span>
      </a>
      <a
        href="mailto:tadamsdeveloper@gmail.com"
        className="popout popout-btn link-shelf-a flex items-center gap-3 justify-center w-full"
        onClick={() => handleOutboundClick("mailto:tadamsdeveloper@gmail.com")}
      >
        <MdEmail />
        <span className="md:hidden">Email me</span>
      </a>
    </div>
  );
}
