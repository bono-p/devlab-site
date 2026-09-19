import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CookieBar from "./components/CookieBar";
import Home from "./pages/Home";
import CalvoNote from "./pages/projects/CalvoNote";
import Stub from "./pages/Stub";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/calvonote" element={<CalvoNote />} />

          <Route path="/lab" element={<Stub kicker="THE LAB" title="Systems, status & lab log" note="Vue complète des systèmes, statuts et journal de laboratoire" />} />
          <Route path="/projects" element={<Stub kicker="SYSTEMS WE'VE BUILT" title="Tous les projets" note="Liste complète : CalvoNote, Kryptos, VisioID, MiniLLM, Tardigrade, Kitabu, Format" />} />
          <Route path="/projects/kryptos" element={<Stub kicker="KRYPTOS" title="Kryptos" note="Chiffrement AES de texte, fichiers, dossiers, images et vidéos" />} />
          <Route path="/projects/visioid" element={<Stub kicker="VISIO·ID" title="VisioID" note="Reconnaissance faciale temps réel" />} />
          <Route path="/projects/minillm" element={<Stub kicker="MINILLM" title="MiniLLM" note="Modèle de langage entraîné from scratch" />} />
          <Route path="/projects/tardigrade" element={<Stub kicker="TARDIGRADE" title="Tardigrade" note="Fine-tuning NLLB français ↔ fulfulde" />} />
          <Route path="/projects/kitabu" element={<Stub kicker="KITABU" title="Kitabu" note="Bibliothèque numérique francophone" />} />
          <Route path="/projects/format" element={<Stub kicker="FORMAT" title="Format" note="Format de fichier structuré .fmt" />} />
          <Route path="/research" element={<Stub kicker="RESEARCH" title="Research Notes & questions" note="Notes de recherche et questions ouvertes du laboratoire" />} />
          <Route path="/ventures" element={<Stub kicker="VENTURE BUILDING" title="From experiment to company" note="Détail du processus de venture building" />} />
          <Route path="/about" element={<Stub kicker="ABOUT" title="DevLab & son fondateur" note="Positionnement complet et présentation de Bono Passale" />} />
          <Route path="/contact" element={<Stub kicker="START A CONVERSATION" title="Have a problem worth solving?" note="Formulaire de contact complet" />} />
          <Route path="/privacy" element={<Stub kicker="LEGAL" title="Privacy Policy" note="Texte juridique à vérifier avant publication officielle" />} />
          <Route path="/cookies" element={<Stub kicker="LEGAL" title="Cookie Policy" note="Panneau de préférences cookies détaillé" />} />
        </Routes>
      </main>
      <Footer />
      <CookieBar />
    </div>
  );
}
