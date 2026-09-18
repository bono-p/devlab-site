/* ==========================================================================
   DevLab Africa — main.js
   Comportement front uniquement pour l'instant : thème, nav mobile, cookies.
   Les points d'intégration backend (Supabase) sont marqués // TODO backend:
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------------
   * Thème clair / sombre — persisté en localStorage, respecte le système
   * ------------------------------------------------------------------- */
  const THEME_KEY = "devlab-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme"); // suit la préférence système
    }
  }

  function currentEffectiveTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  // Applique la préférence sauvegardée au chargement (avant paint géré par le script inline dans <head>)
  applyTheme(localStorage.getItem(THEME_KEY));

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = currentEffectiveTheme() === "light" ? "dark" : "light";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  });

  /* ---------------------------------------------------------------------
   * Navigation mobile
   * ------------------------------------------------------------------- */
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------------------------------------------------------------------
   * Cookie consent — mémorise le choix, ne charge rien avant consentement.
   * TODO backend: aucun — c'est purement local, mais le futur script
   * analytics doit vérifier localStorage.getItem('devlab-cookie-consent')
   * === 'accepted' avant de s'initialiser.
   * ------------------------------------------------------------------- */
  const COOKIE_KEY = "devlab-cookie-consent";
  const cookieBar = document.querySelector("[data-cookie-bar]");

  if (cookieBar) {
    const existing = localStorage.getItem(COOKIE_KEY);
    if (!existing) {
      cookieBar.classList.add("show");
    }

    cookieBar.querySelectorAll("[data-cookie-choice]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const choice = btn.getAttribute("data-cookie-choice"); // "accepted" | "necessary"
        localStorage.setItem(COOKIE_KEY, choice);
        cookieBar.classList.remove("show");
        // TODO backend: si choice === 'accepted', initialiser ici le script
        // analytics (ex: window.initAnalytics && window.initAnalytics()).
      });
    });
  }

  /* ---------------------------------------------------------------------
   * Newsletter — front only pour l'instant.
   * TODO backend: remplacer ce handler par un insert Supabase dans la
   * table `newsletter_subscribers` (colonnes: email, subscribed_at).
   * Exemple futur :
   *   const { error } = await supabase.from('newsletter_subscribers')
   *     .insert({ email });
   * ------------------------------------------------------------------- */
  const newsletterForm = document.querySelector("[data-newsletter-form]");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = newsletterForm.querySelector("[data-form-status]");
      // TODO backend: appel Supabase ici. En attendant, retour visuel seul.
      if (status) {
        status.textContent = "Pas encore connecté — le formulaire sera actif avec le backend.";
      }
    });
  }

  /* ---------------------------------------------------------------------
   * Formulaire de contact — front only pour l'instant.
   * TODO backend: remplacer par un insert Supabase dans `contact_messages`
   * (name, organization, email, project_type, problem, timeline, budget,
   * message, created_at), ou un envoi via une fonction Supabase Edge.
   * ------------------------------------------------------------------- */
  const contactForm = document.querySelector("[data-contact-form]");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = contactForm.querySelector("[data-form-status]");
      // TODO backend: appel Supabase ici (insert + éventuel email de notif).
      if (status) {
        status.textContent = "Pas encore connecté — le formulaire sera actif avec le backend.";
      }
    });
  }

  /* ---------------------------------------------------------------------
   * TODO backend: authentification (Supabase Auth)
   * Emplacement prévu : boutons [data-auth-signin] / [data-auth-signup]
   * dans la nav (actuellement absents du DOM tant que l'auth n'existe pas).
   * ------------------------------------------------------------------- */
})();
