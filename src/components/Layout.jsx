import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className={`flex-1 ${!isHome ? "pb-[64px]" : ""}`}>
        <Outlet />
      </main>
      {!isHome && (
        <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#232526] text-white text-center py-4 text-sm z-50 flex flex-col items-center gap-2 shadow-t-md">
          <div className="flex justify-center gap-4 mb-1">
            <a
              href="https://github.com/Darylmatro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              title="GitHub"
            >
              <img
                src="/svg/github.svg"
                alt="GitHub"
                className="w-6 h-6 inline"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/daryl-matro-a9123a1b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              title="LinkedIn"
            >
              <img
                src="/svg/linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 inline"
              />
            </a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Daryl Matro. Tous droits réservés.
          </div>
        </footer>
      )}
    </div>
  );
}

export default Layout;
