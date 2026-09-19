import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1160px] px-6 pb-10 pt-14">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-[320px]">
          <Link to="/" className="font-display text-[1.05rem] font-bold text-text">
            Dev<span className="text-teal">Lab</span>
          </Link>
          <p className="mt-3.5 max-w-[62ch] text-muted">
            Software engineering, artificial intelligence and applied research from Cameroon.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 sm:gap-14">
          <div>
            <h4 className="mb-3 font-mono text-[0.82rem] font-medium text-muted-2">Lab</h4>
            <Link to="/lab" className="block py-1 text-[0.9rem] text-muted hover:text-text">Systems</Link>
            <Link to="/research" className="block py-1 text-[0.9rem] text-muted hover:text-text">Research</Link>
            <Link to="/ventures" className="block py-1 text-[0.9rem] text-muted hover:text-text">Ventures</Link>
          </div>
          <div>
            <h4 className="mb-3 font-mono text-[0.82rem] font-medium text-muted-2">Company</h4>
            <Link to="/about" className="block py-1 text-[0.9rem] text-muted hover:text-text">About</Link>
            <Link to="/contact" className="block py-1 text-[0.9rem] text-muted hover:text-text">Contact</Link>
          </div>
          <div>
            <h4 className="mb-3 font-mono text-[0.82rem] font-medium text-muted-2">Legal</h4>
            <Link to="/privacy" className="block py-1 text-[0.9rem] text-muted hover:text-text">Privacy</Link>
            <Link to="/cookies" className="block py-1 text-[0.9rem] text-muted hover:text-text">Cookies</Link>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-border pt-6 text-[0.82rem] text-muted-2">
        <span>© 2026 DevLab Africa. Structure en construction / formalisation juridique en cours.</span>
        <span className="font-mono">devlab-afr.onrender.com</span>
      </div>
    </footer>
  );
}
