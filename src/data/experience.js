// Timeline utilisée par la page About, triée du plus récent au plus ancien.
export const timeline = [
  {
    id: "today",
    type: "goal",
    period: "Aujourd'hui en Mastère 1 à Ynov Paris",
    title: "Recherche d'alternance ",
    place: "Développement web & mobile",
    points: [],
  },
  {
    id: "stage-kundalini",
    type: "work",
    period: "Mars – Juillet 2026",
    title: "Développeur web full-stack — Stage",
    place: "Studio de yoga Kundalini (client indépendant)",
    points: [
      "Stack : React, Vite, TailwindCSS, Firebase (Auth/Firestore), Git, Vercel",
      "Développement d'une application web vitrine responsive (SPA React) : cours, planning, événements, FAQ et formulaires",
      "Espace d'administration protégé par authentification Firebase, intégrations Flodesk, Stripe et génération de PDF",
      "Travail collaboratif sous Git : branches dédiées, pull requests, revue de code et résolution de conflits",
    ],
  },
  {
    id: "stage",
    type: "work",
    period: "Juin – Août 2025",
    title: "Stage développeur",
    place: "Opus Belli",
    points: [
      "Mise en place et personnalisation d'un site WordPress",
      "Création et modification d'un thème enfant",
      "Gestion de contenus (articles de blog)",
    ],
  },
  {
    id: "bachelor",
    type: "education",
    period: "3e année 2026",
    title: "Bachelor Informatique (Développement Web & Mobile)",
    place: "Ynov Campus Rennes",
    points: [],
  },
  {
    id: "bac",
    type: "education",
    period: "Avant Ynov",
    title: "Baccalauréat ES",
    place: "Spécialités Économie et Gestion",
    points: [],
  },
];

export default timeline;
