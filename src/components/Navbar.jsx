import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 flex flex-wrap md:flex-nowrap justify-center items-center bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] z-50 transition-all">
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white font-bold">
        <li>
          <Link
            to="/"
            className="relative transition-all duration-300 cursor-pointer group hover:text-blue-400 hover:font-extrabold"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="relative transition-all duration-300 cursor-pointer group hover:text-blue-400 hover:font-extrabold"
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="relative transition-all duration-300 cursor-pointer group hover:text-purple-400 hover:font-extrabold"
          >
            Projets
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className="relative transition-all duration-300 cursor-pointer group hover:text-purple-400 hover:font-extrabold"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="relative transition-all duration-300 cursor-pointer group hover:text-pink-400 hover:font-extrabold"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
