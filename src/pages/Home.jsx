import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CtaLink from "../components/ui/CtaLink";
import { useReducedMotion } from "../lib/useReducedMotion";

const CV_FILE = "/CV-pro .pdf";
const FULL_NAME = "Daryl Matro";

function Home() {
  const [displayed, setDisplayed] = useState("");
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(FULL_NAME);
      return undefined;
    }
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(FULL_NAME.slice(0, i + 1));
      i += 1;
      if (i === FULL_NAME.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <div className="flex min-h-[85vh] w-full flex-col items-center justify-center px-6 py-16 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex w-full max-w-4xl flex-col items-center text-center"
      >
        <span className="mb-6 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          Développement Web &amp; Mobile
        </span>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
            }}
          >
            {displayed}
          </span>
          {!reducedMotion && (
            <span className="ml-1 animate-pulse text-blue-400">|</span>
          )}
        </h1>

        <p className="mt-8 max-w-xl text-balance text-lg text-white/80 sm:text-xl">
          Recherche une alternance en développement web/mobile pour mettre en
          pratique mes compétences acquises et apprendre de nouvelles choses.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <CtaLink href={CV_FILE} download="CV-pro .pdf">
            Télécharger mon CV
          </CtaLink>
          <CtaLink to="/projects" variant="ghost">
            Voir mes projets
          </CtaLink>
        </div>
      </motion.div>

      {!reducedMotion && (
        <motion.div
          className="mt-20 flex flex-col items-center gap-2 text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        ></motion.div>
      )}
    </div>
  );
}

export default Home;
