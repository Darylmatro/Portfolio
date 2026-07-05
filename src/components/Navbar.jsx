import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useReducedMotion } from "../lib/useReducedMotion";

const links = [
  { to: "/", label: "Accueil", end: true },
  { to: "/about", label: "Mon parcours" },
  { to: "/projects", label: "Projets" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

const linkClasses = ({ isActive }) =>
  `relative z-10 block rounded-full px-4 py-2 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
    isActive ? "text-white" : "text-white/70 hover:text-white"
  }`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  // Lock background scroll while the full-screen mobile menu is open.
  useEffect(() => {
    if (!isOpen) return undefined;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-6xl items-center justify-center gap-10 px-6 py-4">
        <Link
          to="/"
          className="rounded font-display text-lg font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          DM
        </Link>

        <LayoutGroup>
          <ul className="hidden md:flex md:items-center md:gap-2">
            {links.map((link) => (
              <li key={link.to} className="relative">
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={`${linkClasses} text-sm`}
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-600/30"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      {link.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </LayoutGroup>

        <button
          type="button"
          className="absolute right-6 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-md p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 md:hidden"
          aria-controls="primary-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(true)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Rendered via a portal: `backdrop-blur-xl` on this header makes it a
          containing block for `position: fixed` descendants, which would
          otherwise trap a full-screen overlay inside the header's own
          (much smaller) box instead of the viewport. */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="primary-menu"
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 bg-[#05070a] md:hidden"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                type="button"
                className="absolute right-6 top-6 inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">Fermer le menu</span>
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <ul className="flex flex-col items-center gap-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.end}
                      onClick={() => setIsOpen(false)}
                      className={`${linkClasses} text-xl`}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </header>
  );
}

export default Navbar;
