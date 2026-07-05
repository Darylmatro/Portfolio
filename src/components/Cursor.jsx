import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "../lib/useReducedMotion";

function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mql = window.matchMedia("(pointer: fine)");
    setFine(mql.matches);
    const onChange = (event) => setFine(event.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return fine;
}

// A soft trailing highlight, additive to the native cursor rather than a
// replacement for it — keeps click precision and cursor visibility intact
// for every input device while still adding a premium touch on desktop.
function Cursor() {
  const reducedMotion = useReducedMotion();
  const finePointer = useFinePointer();
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });

  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    if (!enabled) return undefined;

    const handleMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target.closest?.("a, button, [role='button'], input, textarea");
      setHovering(Boolean(target));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.span
        animate={{
          width: hovering ? 44 : 16,
          height: hovering ? 44 : 16,
          opacity: hovering ? 0.9 : 0.65,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="block rounded-full bg-white"
      />
    </motion.div>
  );
}

export default Cursor;
