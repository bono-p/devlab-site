import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const COOKIE_KEY = "devlab-cookie-consent";

export default function CookieBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(COOKIE_KEY)) setVisible(true);
  }, []);

  function choose(choice) {
    localStorage.setItem(COOKIE_KEY, choice);
    setVisible(false);
    // TODO backend: si choice === "accepted", initialiser ici le script analytics.
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-[640px] rounded-lg border border-border-strong bg-panel p-5 shadow-[0_12px_32px_rgba(0,0,0,0.35)] sm:p-6">
      <p className="mb-3.5 text-[0.88rem] text-muted">
        <strong className="text-text">Help us understand how the Lab is discovered.</strong>
        <br />
        We use analytics to understand how visitors interact with DevLab and improve the experience. You can choose which optional technologies you allow.
      </p>
      <div className="flex flex-wrap gap-2.5">
        <button
          onClick={() => choose("accepted")}
          className="rounded-[4px] bg-teal px-4 py-2 text-[0.85rem] font-semibold text-[#0a1210] hover:bg-teal-dim"
        >
          Accept analytics
        </button>
        <button
          onClick={() => choose("necessary")}
          className="rounded-[4px] border border-border-strong px-4 py-2 text-[0.85rem] font-semibold text-text hover:border-teal hover:text-teal"
        >
          Only necessary
        </button>
        <Link
          to="/cookies"
          className="inline-flex rounded-[4px] border border-border-strong px-4 py-2 text-[0.85rem] font-semibold text-text hover:border-teal hover:text-teal"
        >
          Preferences
        </Link>
      </div>
    </div>
  );
}
