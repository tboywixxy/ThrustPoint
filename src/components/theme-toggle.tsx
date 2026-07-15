"use client";

import { Icon } from "./icons";

export function ThemeToggle() {
  function toggleTheme() {
    const next = document.documentElement.dataset.theme !== "dark";
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark mode"
    >
      <span className="moon-icon"><Icon name="moon" /></span>
      <span className="sun-icon"><Icon name="sun" /></span>
    </button>
  );
}
