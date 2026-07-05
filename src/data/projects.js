export const projects = [
  {
    slug: "forum",
    title: "FORUM",
    category: "Plateforme communautaire",
    tagline: "Un forum gaming pensé pour l'échange et la découverte.",
    description:
      "Gaming Universe Forum est une application web communautaire dédiée aux passionnés de jeux vidéo. Elle permet aux utilisateurs de créer un compte, de publier des messages, de commenter les publications et d'interagir avec d'autres membres. Le système de likes valorise les contributions les plus pertinentes et favorise les échanges autour de l'univers du gaming.",
    highlights: [
      "Comptes utilisateurs et authentification",
      "Publications, commentaires et interactions entre membres",
      "Système de likes pour mettre en avant les contenus pertinents",
    ],
    stack: [
      { name: "HTML5", icon: "/svg/html5.svg" },
      { name: "CSS3", icon: "/svg/css3.svg" },
      { name: "JavaScript", icon: "/svg/javascript.svg" },
      { name: "Go", icon: "/svg/go-lang.svg" },
    ],
    image: "/forum.png",
    github: "https://github.com/Darylmatro/forum",
    demo: "https://forum.enzo-turpin.fr/",
  },
  {
    slug: "groupie-tracker",
    title: "Groupie Tracker",
    category: "Application web",
    tagline: "Suivre ses groupes préférés, du premier album à la prochaine date.",
    description:
      "Groupie Tracker est une application web conçue pour suivre facilement vos groupes de musique préférés. Elle permet de découvrir des informations détaillées sur chaque groupe, comme les membres, la date de création et le premier album. Grâce à une carte interactive, les utilisateurs peuvent explorer les dates et lieux des prochains concerts et planifier leurs sorties musicales.",
    highlights: [
      "Fiches détaillées par groupe (membres, création, premier album)",
      "Dates et lieux des concerts à venir",
      "Carte interactive pour explorer les événements",
    ],
    stack: [
      { name: "HTML5", icon: "/svg/html5.svg" },
      { name: "CSS3", icon: "/svg/css3.svg" },
      { name: "JavaScript", icon: "/svg/javascript.svg" },
      { name: "Go", icon: "/svg/go-lang.svg" },
    ],
    image: "/groupie-tracker.png",
    github: "https://github.com/Darylmatro/Groupie-Tracker",
    demo: "https://groupietracker.enzo-turpin.fr/",
  },
  {
    slug: "booked",
    title: "Booked",
    category: "SaaS de réservation",
    tagline: "Digitaliser la prise de rendez-vous des petits professionnels.",
    description:
      "Booked est une application SaaS destinée aux petits professionnels — salons de coiffure, instituts de beauté et autres prestataires — qui ont besoin d'un système de réservation simple. L'objectif est de simplifier la gestion des rendez-vous via une application web et mobile accessible, d'améliorer l'expérience client et d'optimiser la gestion du planning au quotidien.",
    highlights: [
      "Prise de rendez-vous en ligne pour petits professionnels",
      "Applications web et mobile connectées",
      "Gestion de planning pensée pour le quotidien",
    ],
    stack: [
      { name: "React", icon: "/svg/react.svg" },
      { name: "TypeScript", icon: "/svg/typescript.svg" },
      { name: "Tailwind CSS", icon: "/svg/tailwind-css.svg" },
      { name: "Node.js", icon: "/svg/nodejs.svg" },
    ],
    image: "/booked.png",
    github: "https://github.com/EnzoTurpin/Booked",
    demo: "https://booked.enzo-turpin.fr/login",
  },
];

export default projects;
