import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const links = [
  { to: "/lab", label: "Lab" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/ventures", label: "Ventures" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Basculer le thème clair/sombre"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-panel text-muted transition-colors hover:border-teal hover:text-teal"
    >
      {theme === "light" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      )}
    </button>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-6 px-6 py-4">
        <Link
          to="/"
          className="font-display text-[1.05rem] font-bold tracking-tight text-text"
          onClick={() => setOpen(false)}
        >
          Dev<span className="text-teal">Lab</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `text-[0.92rem] font-medium transition-colors hover:text-text ${
                    isActive ? "text-text" : "text-muted"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden rounded-[4px] bg-teal px-5 py-2.5 text-[0.92rem] font-semibold text-[#0a1210] transition-colors hover:bg-teal-dim sm:inline-flex"
          >
            Start a project
          </Link>
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-border bg-panel text-text md:hidden"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`overflow-y-auto border-t border-border bg-bg transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-[70vh]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-2">
          {links.map((l) => (
            <li key={l.to} className="border-b border-border">
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3.5 text-[1.02rem] ${isActive ? "text-text" : "text-muted"}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="py-4 sm:hidden">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex rounded-[4px] bg-teal px-5 py-2.5 text-[0.92rem] font-semibold text-[#0a1210]"
            >
              Start a project
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
