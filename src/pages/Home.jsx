import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [displayed, setDisplayed] = useState("");
  const fullName = "Daryl MATRO";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] animate-gradient-x flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="relative z-10 flex flex-col justify-center items-center w-full max-w-7xl">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-mono font-extrabold text-white drop-shadow-lg mb-4 sm:mb-6 lg:mb-8 h-16 sm:h-20 flex items-center text-center">
          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {displayed}
          </span>
          <span className="ml-1 text-blue-400 animate-pulse">|</span>
        </h1>
        <p className="text-white text-base sm:text-lg lg:text-2xl max-w-md sm:max-w-xl text-center mb-6 sm:mb-8 font-mono bg-black bg-opacity-30 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg">
          À la recherche d'un stage/Alternance en Développement web.
        </p>
        <Link
          to="/projects"
          className="px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 text-base sm:text-lg"
        >
          Voir mes projets
        </Link>
      </div>
      {/* Dégradé animé en fond (optionnel, pour l'effet) */}
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

export default Home;
