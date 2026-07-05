# Design system — portfolio Daryl Matro

Ce document décrit les fondations visuelles et d'interaction du portfolio. Il sert de référence pour garder une identité cohérente si de nouvelles pages ou sections sont ajoutées.

## Palette

Le fond global est un dégradé animé rendu par un shader WebGL (`src/three/ShaderBackground.jsx`), pas du CSS statique — le contenu ne doit jamais définir son propre arrière-plan opaque.

| Rôle | Valeur | Usage |
| --- | --- | --- |
| Base sombre 1 | `#0f2027` | Ancre du dégradé (haut / valeurs basses) |
| Base sombre 2 | `#2c5364` | Milieu du dégradé |
| Base sombre 3 | `#232526` | Bas du dégradé, quasi-noir |
| Accent bleu | `#60a5fa` / `blue-400` à `blue-600` | CTA primaire, liens actifs |
| Accent violet | `#a78bfa` / `purple-400` à `purple-600` | CTA primaire (dégradé), titres |
| Accent rose | `#f472b6` / `pink-300` à `pink-400` | Touches (Contact), lueur du shader |
| Surface glass | `bg-black/40` + `backdrop-blur-xl` + `border-white/10` | Tout bloc de contenu (`GlassPanel`) |
| Texte principal | `text-white` | Titres, texte fort |
| Texte secondaire | `text-white/70` à `text-white/85` | Paragraphes, descriptions |

**Règle de contraste** : aucun texte ne doit reposer directement sur le shader. Tout texte significatif vit dans une `GlassPanel` (ou un bloc `bg-black/…`) qui garantit un contraste suffisant indépendamment des couleurs animées en fond.

## Typographie

- **Titres (`font-display`)** : Bricolage Grotesque Variable — police d'affichage distinctive, expressive, réservée aux `h1`/`h2`/titres de section.
- **Corps de texte (`font-sans`, par défaut)** : Inter Variable — sobre, très lisible, utilisée pour paragraphes, labels, UI.
- Les deux sont auto-hébergées via `@fontsource-variable/*` (aucun appel réseau externe au runtime).

Échelle indicative :
- Hero (`Home`) : `text-5xl` → `text-8xl` (mobile → desktop)
- Titres de page (`h1`) : `text-4xl` → `text-5xl`
- Titres de section (`h2`) : `text-2xl` → `text-4xl`
- Corps : `text-base` / `text-lg`
- Labels/eyebrows : `text-xs`, `uppercase`, `tracking-[0.2em]` à `tracking-[0.3em]`

## Espacement & mise en page

- Conteneur de page : `mx-auto max-w-5xl` (contenu éditorial) ou `max-w-6xl` (Projects, plus large pour les visuels).
- Rythme vertical généreux entre sections : `py-20`, `mt-16`/`mt-20` entre blocs majeurs.
- Cartes/panels : coins très arrondis (`rounded-3xl`/`rounded-2xl`), jamais d'angles vifs — cohérent avec l'esthétique "liquid glass".

## Principes d'animation

- **Durées** : micro-interactions ~0.2–0.35s, transitions de page ~0.55s, reveals au scroll ~0.7s. Easing signature : `[0.16, 1, 0.3, 1]` (easeOutExpo-like), pour un mouvement qui décélère franchement — sensation premium, jamais linéaire.
- **Transition de page** (`PageTransition.jsx`) : crossfade + léger scale + blur ("liquid glass"), pas de slide. `AnimatePresence mode="wait"` gardé au niveau du `Layout`, qui lui reste monté en permanence (navbar/fond/footer ne clignotent jamais).
- **Reveal au scroll** (`components/ui/Reveal.jsx`) : `whileInView`, fade + translateY(28px), déclenché une seule fois (`viewport.once`).
- **Fond shader** : réagit en continu au temps, à la position de la souris (lissée) et à la progression de scroll (lissée) — jamais de mouvement brusque, tout est interpolé (`lerp` ~0.04–0.05 par frame).
- **Curseur personnalisé** (`Cursor.jsx`) : une lueur additive qui suit le pointeur, ne remplace jamais le curseur natif (sécurité d'usage), grossit au survol des éléments interactifs.
- **`prefers-reduced-motion: reduce`** : coupe le temps du shader (image figée), désactive Lenis (scroll natif), neutralise les transitions de page et le curseur personnalisé, et un reset CSS global ramène toutes les animations/transitions restantes à ~0ms.

## Composants clés

- `components/ui/GlassPanel.jsx` — surface glass standard, base de tout contenu.
- `components/ui/CtaLink.jsx` — CTA premium unique (interne via `Link`, externe, ou téléchargement), deux variantes (`primary`, `ghost`).
- `components/ui/Reveal.jsx` — wrapper de reveal au scroll, respecte `prefers-reduced-motion`.
- `components/PageTransition.jsx` — orchestration des transitions de route + `Suspense`.
- `three/ShaderBackground.jsx` — fond WebGL unique, avec repli CSS si WebGL indisponible.

## Accessibilité

- Tous les `aria-*`/`sr-only` existants sont conservés (menu mobile, formulaire de contact).
- `:focus-visible` stylé globalement (anneau bleu `#60a5fa`), jamais supprimé.
- Le curseur personnalisé est purement additif (`pointer-events: none`), il ne bloque ni ne remplace la navigation clavier/souris standard.
