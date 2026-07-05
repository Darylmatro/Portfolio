import { lazy, Suspense } from "react";
import { ScrollProvider } from "../lib/ScrollProvider";
import CssFallback from "../three/CssFallback";
import Cursor from "./Cursor";
import Navbar from "./Navbar";
import PageTransition from "./PageTransition";

// three.js/@react-three add ~300kB gzipped — deferred to its own chunk so it
// never blocks first paint. The CSS gradient shows instantly and the WebGL
// scene fades in once the chunk is ready.
const ShaderBackground = lazy(() => import("../three/ShaderBackground"));

function Layout() {
  return (
    <ScrollProvider>
      <div className="relative flex min-h-screen w-full flex-col text-white">
        <Suspense fallback={<CssFallback />}>
          <ShaderBackground />
        </Suspense>
        <Cursor />
        <Navbar />
        <PageTransition />
        <footer className="mt-auto w-full border-t border-white/10 bg-black/30 py-6 text-center text-sm text-white/70 backdrop-blur-xl">
          <div className="mb-3 flex justify-center gap-5">
            <a
              href="https://github.com/Darylmatro"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
              title="GitHub"
            >
              <img src="/svg/github.svg" alt="GitHub" className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/daryl-matro-a9123a1b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
              title="LinkedIn"
            >
              <img src="/svg/linkedin.svg" alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Daryl Matro. Tous droits réservés.</p>
        </footer>
      </div>
    </ScrollProvider>
  );
}

export default Layout;
