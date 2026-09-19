import { Link } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";

const statusList = [
  { to: "/projects/calvonote", name: "CALVONOTE", desc: "Transcription vocale hors-ligne, français & langues locales", status: "active" },
  { to: "/projects/kryptos", name: "KRYPTOS", desc: "Chiffrement de texte, fichiers, dossiers, images et vidéos — AES", status: "active" },
  { to: "/projects/visioid", name: "VISIO·ID", desc: "Reconnaissance faciale temps réel — webcam, caméra IP, vidéo, photo", status: "active" },
  { to: "/projects/minillm", name: "MINILLM", desc: "Modèle de langage entraîné from scratch, ~23M paramètres", status: "experiment" },
  { to: "/projects/tardigrade", name: "TARDIGRADE", desc: "Fine-tuning NLLB pour la traduction français ↔ fulfulde", status: "research" },
  { to: "/projects/kitabu", name: "KITABU", desc: "Bibliothèque numérique francophone — backend, paiements", status: "prototype" },
  { to: "/projects/format", name: "FORMAT", desc: "Format de fichier structuré .fmt et son module Python", status: "active" },
];

const systems = [
  { to: "/projects/calvonote", name: "CalvoNote", tags: "AI · SPEECH · NLP", status: "active", desc: "Technology should understand more than the world's most represented languages — transcription et traduction hors-ligne, français et fulfulde inclus." },
  { to: "/projects/kryptos", name: "Kryptos", tags: "SECURITY · CRYPTOGRAPHY", status: "active", desc: "Chiffrement AES de texte, fichiers, dossiers, images et vidéos — une interface unique pour protéger des données de nature différente." },
  { to: "/projects/visioid", name: "VisioID", tags: "COMPUTER VISION", status: "active", desc: "Reconnaissance faciale en temps réel — webcam, caméra IP, vidéo et photo, avec gestion de profils et stockage local." },
  { to: "/projects/minillm", name: "MiniLLM", tags: "R&D · LANGUAGE MODELS", status: "experiment", desc: "Building a language model from scratch — comprendre concrètement la conception, l'entraînement et l'évaluation d'un petit modèle, ~23M paramètres." },
];

function SectionHead({ kicker, title, lede }) {
  return (
    <div className="mb-11 max-w-[640px]">
      <p className="mb-2.5 font-mono text-[0.78rem] text-muted-2">{kicker}</p>
      <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold tracking-tight">{title}</h2>
      {lede && <p className="mt-3 max-w-[62ch] text-muted">{lede}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <header className="mx-auto max-w-[1160px] px-6 pb-16 pt-16 sm:pt-24">
        <p className="mb-5 font-mono text-[0.82rem] text-muted-2">DEVLAB AFRICA — GAROUA, CAMEROUN</p>
        <h1 className="max-w-[14ch] font-display text-[clamp(2.1rem,5.4vw,3.6rem)] font-semibold leading-[1.08] tracking-tight">
          From problems to systems.
        </h1>
        <p className="mt-5 max-w-[52ch] text-[1.05rem] text-muted sm:text-[1.1rem]">
          Software engineering, artificial intelligence and applied research from Cameroon. Nous étudions des problèmes réels, concevons des architectures adaptées et construisons des logiciels et systèmes destinés à produire des solutions concrètes.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/lab" className="rounded-[4px] bg-teal px-5 py-2.5 text-[0.92rem] font-semibold text-[#0a1210] hover:bg-teal-dim">
            Explore the Lab
          </Link>
          <Link to="/contact" className="rounded-[4px] border border-border-strong px-5 py-2.5 text-[0.92rem] font-semibold text-text hover:border-teal hover:text-teal">
            Start a project
          </Link>
        </div>

        <div className="mt-16 overflow-hidden rounded-lg border border-border bg-panel">
          <div className="flex flex-col sm:flex-row">
            {["PROBLEM", "RESEARCH", "ARCHITECTURE", "ENGINEERING", "SYSTEM"].map((step) => (
              <div
                key={step}
                className="flex flex-1 items-center justify-center border-b border-border p-3.5 text-center font-mono text-[0.76rem] text-muted sm:border-b-0 sm:border-r"
              >
                {step}
              </div>
            ))}
            <div className="flex flex-1 items-center justify-center p-3.5 text-center font-mono text-[0.76rem] text-teal">
              PRODUCT
            </div>
          </div>
        </div>
      </header>

      {/* ================= LAB STATUS ================= */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <SectionHead kicker="SYSTEM STATUS" title="Ce qui bouge en ce moment dans le laboratoire" />
          <div className="flex flex-col overflow-hidden rounded-lg border border-border">
            {statusList.map((s) => (
              <Link
                key={s.name}
                to={s.to}
                className="flex flex-col gap-2 border-b border-border bg-panel px-5 py-4 transition-colors last:border-b-0 hover:bg-panel-2 hover:no-underline sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <span>
                  <span className="font-mono text-[0.94rem]">{s.name}</span>
                  <span className="mt-0.5 block text-[0.86rem] text-muted">{s.desc}</span>
                </span>
                <StatusBadge status={s.status} />
              </Link>
            ))}
            <div className="flex flex-col gap-2 border-t border-border bg-panel px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <span>
                <span className="font-mono text-[0.94rem]">NODUS</span>
                <span className="mt-0.5 block text-[0.86rem] text-muted">Système sécurisé pour organisations institutionnelles — non détaillé publiquement</span>
              </span>
              <StatusBadge status="restricted" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= INSIDE THE LAB ================= */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <SectionHead
            kicker="INSIDE THE LAB"
            title="Un laboratoire en mouvement"
            lede="Certains systèmes sont déployés, d'autres sont expérimentaux, certains cherchent encore leur forme définitive."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: "Building", items: ["CalvoNote — pipeline offline STT/TTS multilingue", "Kryptos — chiffrement AES multi-format", "Kitabu — infrastructure paiement & téléchargement"] },
              { label: "Researching", items: ["Tardigrade — traduction français ↔ fulfulde", "MiniLLM — comportement de minuscules modèles de langage", "Apprentissage optimisé — classification en vision avec peu de données"] },
              { label: "Exploring", items: ["Systèmes numériques institutionnels", "Infrastructure sécurisée pour environnements contraints"] },
            ].map((col) => (
              <div key={col.label}>
                <h3 className="mb-4 font-mono text-[0.92rem] text-muted">{col.label}</h3>
                <ul className="flex flex-col gap-3">
                  {col.items.map((it) => (
                    <li key={it} className="rounded-[4px] border border-border bg-panel px-4 py-3.5 text-[0.88rem]">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE WORK ON ================= */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <SectionHead kicker="DOMAINS" title="What we work on" />
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {[
              { title: "Artificial Intelligence", items: ["Machine Learning", "Natural Language Processing", "Speech technologies", "Computer Vision", "Language models", "Edge / Offline AI"] },
              { title: "Software Engineering", items: ["Backend systems & APIs", "Web applications", "Mobile applications", "Desktop software", "Authentication", "Payment infrastructure"] },
              { title: "Data & Digital Systems", items: ["Data pipelines", "Analytics", "Architectures numériques complètes", "Digitalisation de processus institutionnels"] },
              { title: "Applied Research", items: ["Entraînement & optimisation de modèles", "Systèmes offline", "Méthodes alternatives d'apprentissage", "Venture building"] },
            ].map((d) => (
              <div key={d.title} className="bg-bg p-6 sm:p-7">
                <h3 className="mb-3 text-[1.05rem] font-semibold">{d.title}</h3>
                <ul className="text-[0.9rem] text-muted">
                  {d.items.map((it, i) => (
                    <li key={it} className={`py-1.5 ${i > 0 ? "border-t border-dotted border-border" : ""}`}>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED SYSTEMS ================= */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <SectionHead kicker="SYSTEMS WE'VE BUILT" title="Quelques systèmes représentatifs" />
          <div className="grid grid-cols-1 gap-4.5 md:grid-cols-2">
            {systems.map((s) => (
              <Link
                key={s.name}
                to={s.to}
                className="flex min-h-[180px] flex-col gap-3.5 rounded-lg border border-border bg-panel p-6 transition-colors hover:border-border-strong hover:no-underline sm:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-[1.15rem] font-semibold">{s.name}</h3>
                    <p className="mt-1 font-mono text-[0.74rem] text-muted-2">{s.tags}</p>
                  </div>
                  <StatusBadge status={s.status} />
                </div>
                <p className="flex-1 text-[0.9rem] text-muted">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RESEARCH QUESTION ================= */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <SectionHead kicker="RESEARCH QUESTION" title="Une question ouverte du laboratoire" />
          <div className="rounded-lg border border-border bg-panel p-6 sm:p-8">
            <StatusBadge status="experiment">EXPERIMENTAL</StatusBadge>
            <h3 className="mt-4 max-w-[42ch] font-display text-[1.3rem] font-semibold">
              Can a computer vision model learn to classify efficiently from very little data?
            </h3>
            <p className="mt-4 max-w-[62ch] text-muted">
              Dans quelle mesure un système d'apprentissage optimisé peut-il produire une classification fiable en vision par ordinateur à partir d'un nombre restreint d'exemples ? Une question de recherche indépendante des systèmes de langage du laboratoire.
            </p>
            <div className="mt-6 flex flex-wrap gap-7">
              {[
                { label: "Hypothesis", text: "Une architecture et une stratégie d'entraînement bien choisies peuvent réduire fortement le besoin en données étiquetées." },
                { label: "Status", text: "Expérimentations en cours sur des modèles de classification en vision par ordinateur." },
                { label: "Next", text: "Comparer plusieurs stratégies d'apprentissage optimisé sur des jeux de données réduits." },
              ].map((m) => (
                <div key={m.label} className="min-w-[140px]">
                  <span className="mb-1 block font-mono text-[0.72rem] text-muted-2">{m.label}</span>
                  <p className="text-[0.88rem]">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LAB LOG ================= */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <SectionHead kicker="LAB LOG" title="Journal de laboratoire" />
          <div className="flex flex-col">
            {[
              { date: "18 SEP 2026", name: "MINILLM", text: "Expérimentation d'entraînement terminée.", next: "Next: évaluer le comportement du tokenizer.", status: "active" },
              { date: "— 2026", name: "KRYPTOS", text: "Implémentation du chiffrement AES pour les fichiers volumineux et dossiers.", next: "Next: étendre la couverture aux flux vidéo.", status: "active" },
            ].map((entry) => (
              <div key={entry.name} className="grid grid-cols-1 gap-2 border-t border-border py-4.5 first:border-t-0 sm:grid-cols-[110px_1fr_auto] sm:items-start sm:gap-5">
                <div className="font-mono text-[0.78rem] text-muted-2 sm:pt-0.5">{entry.date}</div>
                <div>
                  <h4 className="mb-1 font-mono text-[0.86rem] text-teal">{entry.name}</h4>
                  <p className="text-[0.88rem] text-muted">{entry.text}</p>
                  <p className="mt-1.5 text-[0.82rem] text-muted-2">{entry.next}</p>
                </div>
                <StatusBadge status={entry.status} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VENTURE BUILDING ================= */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <SectionHead
            kicker="VENTURE BUILDING"
            title="From experiment to company"
            lede="Certains problèmes ne s'arrêtent pas au stade du prototype. DevLab peut éventuellement transformer certaines technologies développées dans le laboratoire en produits ou structures indépendantes."
          />
          <div className="flex flex-wrap items-center gap-2 font-mono text-[0.82rem] text-muted">
            {["Problem", "Research", "Prototype", "Validation", "Product", "Independent Venture"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-panel px-3.5 py-2">{step}</span>
                {i < arr.length - 1 && <span className="text-muted-2">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <p className="mb-8 font-mono text-[0.78rem] text-muted-2">THE PERSON BEHIND THE LAB</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[120px_1fr] sm:items-start">
            <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border border-border bg-panel-2 font-mono text-[0.78rem] text-muted-2 sm:h-[120px] sm:w-[120px]">
              BP
            </div>
            <div>
              <h3 className="text-[1.15rem] font-semibold">Bono Passale</h3>
              <p className="mb-3.5 font-mono text-[0.82rem] text-teal">Founder · Software Engineer</p>
              <p className="max-w-[62ch] text-muted">
                Software engineer interested in artificial intelligence, systems engineering, applied research and technology development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESEARCH NOTES ================= */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[1160px] px-6">
          <SectionHead kicker="RESEARCH NOTES" title="Dernières notes" />
          <div className="flex flex-col">
            {[
              { kicker: "RESEARCH NOTE 001", title: "Can a vision model classify efficiently with very little data?", date: "SEP 2026" },
              { kicker: "RESEARCH NOTE 002", title: "Building offline speech systems for underrepresented languages", date: "AOÛT 2026" },
              { kicker: "ENGINEERING NOTE 003", title: "What does it take to build a small language model from scratch?", date: "AOÛT 2026" },
            ].map((n) => (
              <Link
                key={n.kicker}
                to="/research"
                className="flex flex-col gap-1 border-t border-border py-4.5 text-text first:border-t-0 hover:no-underline sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span>
                  <span className="mb-1 block font-mono text-[0.72rem] text-muted-2">{n.kicker}</span>
                  <h4 className="text-[1rem] font-semibold">{n.title}</h4>
                </span>
                <span className="whitespace-nowrap font-mono text-[0.78rem] text-muted-2">{n.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-[900px] px-6">
          <p className="mb-2.5 font-mono text-[0.78rem] text-muted-2">START A CONVERSATION</p>
          <h2 className="max-w-[16ch] font-display text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold">
            Have a problem worth solving?
          </h2>
          <p className="mt-3 text-muted">Le ton d'une discussion technique, pas d'une agence commerciale.</p>
          <Link to="/contact" className="mt-6 inline-flex rounded-[4px] bg-teal px-5 py-2.5 text-[0.92rem] font-semibold text-[#0a1210] hover:bg-teal-dim">
            Start a conversation
          </Link>
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <Newsletter />
    </>
  );
}

function Newsletter() {
  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-[900px] px-6">
        <p className="mb-2.5 font-mono text-[0.78rem] text-muted-2">STAY CLOSE TO THE LAB</p>
        <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.1rem)] font-semibold">
          Research notes, experiments, new systems and major DevLab updates.
        </h2>
        <NewsletterForm />
      </div>
    </section>
  );
}

function NewsletterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO backend: remplacer par un insert Supabase dans `newsletter_subscribers` (email, subscribed_at).
    const status = e.currentTarget.querySelector("[data-status]");
    if (status) status.textContent = "Pas encore connecté — le formulaire sera actif avec le backend.";
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex max-w-[440px] flex-wrap gap-2.5">
      <input
        type="email"
        required
        placeholder="your@email.com"
        aria-label="Adresse email"
        className="min-w-[220px] flex-1 rounded-[4px] border border-border-strong bg-panel px-3.5 py-3 text-[0.94rem] text-text"
      />
      <button type="submit" className="rounded-[4px] bg-teal px-5 py-2.5 text-[0.92rem] font-semibold text-[#0a1210] hover:bg-teal-dim">
        Join the Lab
      </button>
      <p data-status className="mt-1.5 w-full text-[0.82rem] text-muted-2" />
    </form>
  );
}
