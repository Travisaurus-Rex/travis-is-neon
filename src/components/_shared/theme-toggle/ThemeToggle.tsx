"use client";

import { useTheme } from "@/stores/theme";
import "./ThemeToggle.css";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

export default function ThemeToggle() {
  const theme = useTheme((state) => state.theme);
  const setTheme = useTheme((state) => state.setTheme);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark";
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const mode = theme === "light" ? "dark" : "light";
    setTheme(mode);
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
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
