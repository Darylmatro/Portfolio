// Chaque compétence porte le contexte concret où elle a été mise en
// pratique plutôt qu'un score de maîtrise arbitraire : la progression se
// lit à travers les projets et la formation, pas à travers une barre inventée.
export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    accent: "from-blue-400 to-cyan-300",
    summary:
      "La base de tout ce que je construis : des interfaces claires et réactives, jusqu'à ce portfolio lui-même.",
    skills: [
      { name: "HTML5", icon: "/svg/html5.svg", context: ["FORUM", "Groupie Tracker", "Booked"] },
      { name: "CSS3", icon: "/svg/css3.svg", context: ["FORUM", "Groupie Tracker", "Booked"] },
      { name: "JavaScript", icon: "/svg/javascript.svg", context: ["FORUM", "Groupie Tracker"] },
      { name: "React", icon: "/svg/react.svg", context: ["Booked", "Ce portfolio"] },
      { name: "Tailwind CSS", icon: "/svg/tailwind-css.svg", context: ["Booked", "Ce portfolio"] },
      { name: "TypeScript", icon: "/svg/typescript.svg", context: ["Booked"] },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    accent: "from-purple-400 to-fuchsia-300",
    summary:
      "La logique derrière l'interface : API, authentification, règles métier des applications.",
    skills: [
      { name: "Go", icon: "/svg/go-lang.svg", context: ["FORUM", "Groupie Tracker"] },
      { name: "Node.js", icon: "/svg/nodejs.svg", context: ["Booked"] },
      { name: "PHP", icon: "/svg/php.svg", context: ["Stage — Opus Belli"] },
      { name: "Java", icon: "/svg/java.svg", context: ["Formation Ynov"] },
      { name: "Python", icon: "/svg/python.svg", context: ["Formation Ynov"] },
    ],
  },
  {
    id: "data",
    title: "Bases de données",
    accent: "from-emerald-400 to-teal-300",
    summary: "Modéliser et stocker les données au service des applications ci-dessus.",
    skills: [
      { name: "MySQL", icon: "/svg/mysql.svg", context: ["Formation Ynov", "Stage — Opus Belli"] },
      { name: "MongoDB", icon: "/svg/mongodb.svg", context: ["Formation Ynov"] },
      { name: "PostgreSQL", icon: "/svg/postgresql.svg", context: ["Formation Ynov"] },
      { name: "SQLite", icon: "/svg/sqlite.svg", context: ["Formation Ynov"] },
      { name: "Supabase", icon: "/svg/supabase.svg", context: ["Formation Ynov"] },
    ],
  },
];

export default skillCategories;
