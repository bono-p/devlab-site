import { useCallback, useEffect, useState } from "react";

const THEME_KEY = "devlab-theme";

function effectiveTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState(effectiveTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  }, []);

  return { theme, toggle };
}
