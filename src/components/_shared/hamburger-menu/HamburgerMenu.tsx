"use client";

import { useEffect, useState } from "react";
import LinkShelf from "../link-shelf/LinkShelf";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import "./HamburgerMenu.css";
import { HamburgerIcon, X } from "lucide-react";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => setOpen(false);
  }, []);

  return (
    <>
      <button
        className="hamburger popout popout-btn"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="menu-overlay"
        onClick={() => setOpen(true)}
      >
        <HamburgerIcon width="40" height="40" />
      </button>

      <nav id="menu-overlay" className={`menu-overlay ${open ? "open" : ""}`}>
        <button
          className="menu-close popout popout-btn"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <X width="40" height="40" />
        </button>

        <ThemeToggle />
        <LinkShelf />
      </nav>
    </>
  );
}
