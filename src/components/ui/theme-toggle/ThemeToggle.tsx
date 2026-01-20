"use client";

import { useTheme } from "@/stores/theme";
import "./ThemeToggle.css";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useTrackEvent } from "@/lib/analytics/hooks";

export default function ThemeToggle() {
  const theme = useTheme((state) => state.theme);
  const setTheme = useTheme((state) => state.setTheme);
  const trackEvent = useTrackEvent();

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark";
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const mode = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", mode);
    setTheme(mode);
    document.documentElement.setAttribute("data-theme", mode);

    trackEvent({
      event_type: "theme_toggle",
      theme_value: mode,
    });
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
