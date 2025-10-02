import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] z-50 transition-all">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-white font-extrabold tracking-wide">
          <Link
            to="/"
            className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          >
            DM
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
          aria-controls="primary-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <ul
        id="primary-menu"
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row mt-4 md:mt-2 items-center md:items-center justify-center md:justify-center space-y-4 md:space-y-0 md:space-x-6 text-white font-bold max-w-7xl mx-auto`}
      >
        <li>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="relative transition-all duration-300 cursor-pointer group hover:text-blue-400 hover:font-extrabold focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="relative transition-all duration-300 cursor-pointer group hover:text-blue-400 hover:font-extrabold focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="relative transition-all duration-300 cursor-pointer group hover:text-purple-400 hover:font-extrabold focus:outline-none focus:ring-2 focus:ring-purple-400 rounded"
          >
            Projets
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            onClick={() => setIsOpen(false)}
            className="relative transition-all duration-300 cursor-pointer group hover:text-purple-400 hover:font-extrabold focus:outline-none focus:ring-2 focus:ring-purple-400 rounded"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="relative transition-all duration-300 cursor-pointer group hover:text-pink-400 hover:font-extrabold focus:outline-none focus:ring-2 focus:ring-pink-400 rounded"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
