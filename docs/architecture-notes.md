# Journal des décisions d'architecture

Notes courtes sur les choix faits pendant la refonte premium, pour comprendre le "pourquoi" sans avoir à relire tout le diff.

## Fond WebGL au niveau `Layout`, pas par page

Le shader (`three/ShaderBackground.jsx`) est monté une seule fois dans `Layout.jsx`, en `position: fixed` derrière tout le reste. Les pages ne définissent plus leur propre fond dégradé : elles sont transparentes et s'appuient sur `GlassPanel` pour la lisibilité. Ça évite un remount du `Canvas` R3F (coûteux) à chaque changement de route et donne une continuité visuelle entre les pages, ce qui sert directement l'objectif de narration scrollée.

## `AnimatePresence` au niveau `Layout`, routing inchangé

Plutôt que de migrer vers `createBrowserRouter`/`RouterProvider` (nécessaire pour certains patterns de transition plus avancés), on garde `Routes`/`Route` classiques et on anime uniquement le contenu de l'`Outlet` via `PageTransition.jsx` (`motion.main` keyé sur `location.pathname`). Navbar/fond/footer restent montés en permanence. Moins de risque de régression sur le routing existant, pour le même résultat visuel.

## Scroll : ref mutable plutôt que state React

`ScrollProvider.jsx` expose la progression de scroll via un `useRef`, pas un `useState`. Le scroll déclenche potentiellement 60+ mises à jour par seconde ; passer ça par le state React re-rendrait tout l'arbre à chaque frame. Le shader (et tout futur consommateur) lit `progressRef.current` dans sa propre boucle (`useFrame`), sans jamais déclencher de re-render React.

## `@react-three/fiber` v8 (pas v9)

v9 de `@react-three/fiber` exige React 19. Le projet reste sur React 18.3 (pas de raison de migrer React pour ce chantier) — v8 + `@react-three/drei` v9 sont compatibles React 18 et suffisants pour un shader plein écran.

## Curseur personnalisé additif, pas un remplacement

Beaucoup de sites premium masquent le curseur natif (`cursor: none`) au profit d'un curseur custom. Choix ici : le curseur custom est une **lueur additive** qui suit le pointeur, le curseur natif reste toujours visible. Ça élimine tout un axe de bugs (curseur perdu en sortie de fenêtre, imprécision sur petits éléments cliquables) pour un gain esthétique presque identique.

## Contenu piloté par la donnée (`src/data/*.js`)

Les 3 études de cas (`Projects.jsx`), les compétences (`Skills.jsx`) et la timeline (`About.jsx`) étaient auparavant du JSX dupliqué (3 blocs quasi identiques dans `Projects.jsx`). Extraction en `data/projects.js`, `data/skills.js`, `data/experience.js` : ajouter un projet ou une compétence ne touche plus au JSX.

## Skills : contexte plutôt que score de maîtrise

Chaque compétence référence les projets/contextes réels où elle a été utilisée (`context: ["FORUM", "Groupie Tracker"]`) plutôt qu'un pourcentage ou un niveau ("Expert"/"Intermédiaire") inventé. Plus honnête pour un profil junior en recherche d'alternance, et ça raconte une vraie progression sans surjouer un niveau non vérifiable.

## Limites connues

- **Images non ré-encodées** : `groupie-tracker.png` (~325 Ko) et `booked.png` (~84 Ko) n'ont pas été recompressées (pas d'outil d'optimisation d'image disponible dans l'environnement). Mitigation actuelle : `loading="lazy"`, `decoding="async"` et dimensions explicites pour éviter le CLS. Une passe `squoosh`/`sharp` en local reste une amélioration possible.
- **Dépendances `three`/`@react-three/*`** alourdissent le bundle ; elles ne sont chargées que via le `Layout` (donc dès la première page), pas de lazy-loading spécifique au shader — acceptable pour un portfolio à 5 routes, mais à surveiller si le poids de la scène 3D augmente.
- Les 6 dépendances inutilisées (`react-parallax-mouse`, `react-scroll`, `match-sorter`, `sort-by`, `localforage`, `axios`) ont été retirées de `package.json` après vérification (aucun import dans `src/`).
