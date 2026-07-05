import { useReducedMotion } from "../lib/useReducedMotion";

function RouteLoader() {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="flex min-h-[60vh] w-full items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Chargement…</span>
      <span
        aria-hidden="true"
        className={`h-10 w-10 rounded-full border-2 border-white/20 border-t-white/80 ${
          reducedMotion ? "" : "animate-spin"
        }`}
      />
    </div>
  );
}

export default RouteLoader;
