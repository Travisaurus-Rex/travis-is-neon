"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ToggleSwitch() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark";
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <div className="toggle-container" onClick={toggleTheme}>
      <div className="icon-left">
        <Sun />
      </div>
      <div className={`toggle-switch ${theme === "dark" ? "active" : ""}`}>
        <div className="track">
          <div className="thumb"></div>
        </div>
      </div>
      <div className="icon-right">
        <Moon />
      </div>
    </div>
  );
}
