import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "./useReducedMotion";

// Exposes scroll progress as a mutable ref (not React state) so consumers
// like the shader background can read it inside their own render loop
// without triggering a re-render on every scroll frame.
const ScrollContext = createContext(null);

export function ScrollProvider({ children }) {
  const progressRef = useRef(0);
  const lenisRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current = max > 0 ? window.scrollY / max : 0;
    };

    if (reducedMotion) {
      window.addEventListener("scroll", updateProgress, { passive: true });
      updateProgress();
      return () => window.removeEventListener("scroll", updateProgress);
    }

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef.current = lenis;
    lenis.on("scroll", updateProgress);

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  return (
    <ScrollContext.Provider value={progressRef}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollProgressRef() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("useScrollProgressRef must be used within ScrollProvider");
  }
  return ctx;
}

export default ScrollProvider;
