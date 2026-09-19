# DevLab Africa — Site officiel (V2, React)

Site institutionnel de DevLab Africa. React + Vite + Tailwind CSS v4, React Router pour la navigation entre pages.

## Développement local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
```
Génère le dossier `dist/` (statique, prêt à déployer).

## Déploiement sur Render (Static Site)

- **Build Command** : `npm install && npm run build`
- **Publish directory** : `dist`
- Le fichier `public/_redirects` (copié dans `dist/` au build) fait le fallback SPA nécessaire pour que les routes comme `/projects/calvonote` fonctionnent en rechargement direct — vérifie que Render l'applique ; sinon, ajouter une règle de rewrite `/*  →  /index.html` dans les paramètres du service.

## Structure

- `src/pages/` — pages (Home complète, `Stub.jsx` pour les pages pas encore construites)
- `src/pages/projects/CalvoNote.jsx` — gabarit page projet
- `src/components/` — Nav (responsive, thème clair/sombre), Footer, StatusBadge, CookieBar
- `src/index.css` — design tokens (couleurs, typo) partagés entre thème clair et sombre

## Backend (à venir)

Le front est fonctionnel seul, sans backend. Les emplacements prévus pour Supabase (newsletter, contact, cookies/analytics, auth) sont marqués `// TODO backend:` dans le code (`Home.jsx`, `CookieBar.jsx`).

## Statut

En construction — pages Lab/Projects/Research/Ventures/About/Contact/Privacy/Cookies sont des stubs en attendant la suite ; seule CalvoNote a une vraie page projet pour l'instant.
