import { Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";
import RouteLoader from "./RouteLoader";
import { useReducedMotion } from "../lib/useReducedMotion";

const variants = {
  initial: { opacity: 0, scale: 0.985, filter: "blur(6px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 1.01, filter: "blur(6px)" },
};

function PageTransition() {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={location.pathname}
        variants={reducedMotion ? undefined : variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex-1"
      >
        <Suspense fallback={<RouteLoader />}>
          <Outlet />
        </Suspense>
      </motion.main>
    </AnimatePresence>
  );
}

export default PageTransition;
