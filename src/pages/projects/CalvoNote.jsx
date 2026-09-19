import { useState } from "react";
import { Link } from "react-router-dom";
import StatusBadge from "../../components/StatusBadge";

function BackLink() {
  return (
    <Link to="/projects" className="inline-flex items-center gap-1.5 font-mono text-[0.82rem] text-muted hover:text-teal hover:no-underline">
      ← Systems
    </Link>
  );
}

export default function CalvoNote() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-[1160px] px-6 pt-7">
        <BackLink />
      </div>

      {/* ================= HERO ================= */}
      <header className="mx-auto max-w-[1160px] px-6 pb-12 pt-9 sm:pt-14">
        <p className="mb-4 font-mono text-[0.8rem] tracking-wide text-muted-2">AI · SPEECH · NLP · AFRICAN LANGUAGES</p>
        <div className="mb-5">
          <StatusBadge status="active" />
        </div>
        <h1 className="max-w-[16ch] font-display text-[clamp(1.9rem,4.4vw,3rem)] font-semibold">CalvoNote</h1>
        <p className="mt-4 max-w-[58ch] text-[1.05rem] text-muted">
          CalvoNote explore la construction de technologies de parole et de langage adaptées à des contextes linguistiques et techniques encore peu représentés — dont le fulfulde adamawa, parlé dans le nord du Cameroun.
        </p>
        <p className="mt-7 max-w-[20ch] border-l-2 border-teal pl-5 font-display text-[clamp(1.2rem,2.4vw,1.6rem)] font-medium leading-snug">
          Technology should understand more than the world's most represented languages.
        </p>
      </header>

      {/* ================= CAPABILITIES ================= */}
      <section className="border-t border-border py-14 sm:py-16">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-6 font-mono text-[0.78rem] text-muted-2">CAPABILITIES</p>
          <div className="flex flex-wrap gap-2">
            {["Speech-to-Text", "Translation", "Text-to-Speech", "NLP", "Offline AI", "Desktop AI", "Multilingue"].map((c) => (
              <span key={c} className="rounded-full border border-border px-3.5 py-1.5 font-mono text-[0.78rem] text-muted">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}
      <section className="border-t border-border py-14 sm:py-16">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-2.5 font-mono text-[0.78rem] text-muted-2">ARCHITECTURE</p>
          <h2 className="mb-7 font-display text-[clamp(1.5rem,2.4vw,1.9rem)] font-semibold">Du signal vocal au texte, et retour</h2>
          <div className="flex flex-col items-start">
            {["VOICE", "SPEECH RECOGNITION", "LANGUAGE PROCESSING", "TRANSLATION", "SYNTHESIS"].map((step, i, arr) => (
              <div key={step} className="flex flex-col items-start">
                <div className="rounded-[4px] border border-border bg-panel px-4.5 py-3 font-mono text-[0.86rem]">{step}</div>
                {i < arr.length - 1 && <div className="py-1.5 pl-6 font-mono text-[0.9rem] text-muted-2">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESEARCH ================= */}
      <section className="border-t border-border py-14 sm:py-16">
        <div className="mx-auto max-w-[1160px] px-6">
          <div className="max-w-[640px]">
            <p className="mb-2.5 font-mono text-[0.78rem] text-muted-2">RESEARCH</p>
            <h2 className="mb-3 font-display text-[clamp(1.5rem,2.4vw,1.9rem)] font-semibold">Le problème des ressources limitées</h2>
            <p className="max-w-[62ch] text-muted">
              La majorité des technologies de parole sont entraînées sur un petit nombre de langues à forte ressource. Les langues comme le fulfulde disposent de peu de données publiques, de peu d'outils, et d'aucun support hors-ligne fiable. CalvoNote est construit en tenant compte de ces contraintes dès le départ, plutôt que de les traiter comme une extension tardive.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL DETAILS (Layer 2) ================= */}
      <section className="border-t border-border py-14 sm:py-16">
        <div className="mx-auto max-w-[1160px] px-6">
          <details
            open={open}
            onToggle={(e) => setOpen(e.currentTarget.open)}
            className="rounded-lg border border-border bg-panel"
          >
            <summary className="flex cursor-pointer list-none items-center gap-2 px-5 py-4.5 font-mono text-[0.86rem] text-teal sm:px-6">
              <span aria-hidden="true">{open ? "–" : "+"}</span> Technical details
            </summary>
            <div className="border-t border-border px-5 pb-6 pt-5 sm:px-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2.5 font-mono text-[0.78rem] text-muted-2">Plateforme</h4>
                  <ul className="text-[0.88rem] text-muted">
                    <li className="py-1">Application desktop, Python</li>
                    <li className="py-1">Fonctionnement hors-ligne</li>
                    <li className="py-1">Version actuelle : v4.3</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2.5 font-mono text-[0.78rem] text-muted-2">Langues</h4>
                  <ul className="text-[0.88rem] text-muted">
                    <li className="py-1">Support multilingue</li>
                    <li className="py-1">Fulfulde adamawa inclus</li>
                    <li className="py-1">Français</li>
                  </ul>
                </div>
              </div>
              <p className="mt-5 text-[0.8rem] text-muted-2">Dernière mise à jour : septembre 2026.</p>
            </div>
          </details>
        </div>
      </section>

      <section className="border-t border-border py-14 sm:py-16">
        <div className="mx-auto max-w-[1160px] px-6">
          <BackLink />
        </div>
      </section>
    </>
  );
}
