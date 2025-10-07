import React from "react";

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] flex items-center justify-center">
      <div className="flex flex-col justify-center items-center p-12 bg-black bg-opacity-40 rounded-xl shadow-lg max-w-2xl w-full gap-10">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold text-white mb-6">À propos</h2>
          <p className="text-lg text-white text-center font-mono">
            Je suis actuellement étudiant en troisième année de Bachelor
            Informatique à Inoff, Campus Rennes. Passionné par l’informatique et
            les nouvelles technologies, je m’intéresse particulièrement à la
            manière dont elles évoluent et transforment notre quotidien. J’aime
            comprendre, expérimenter et me tenir informé des dernières avancées
            pour continuer à progresser. Curieux et rigoureux, j’accorde une
            grande importance à la qualité du travail et à la compréhension des
            besoins dans chaque projet. J’apprécie également le travail en
            équipe : échanger des idées, apprendre des autres et construire
            ensemble des solutions efficaces fait partie de ce que j’aime le
            plus dans ce domaine.
          </p>
        </div>
        {/* Section Éducation */}
        <div className="w-full bg-black bg-opacity-40 rounded-lg p-6 flex flex-col gap-6 shadow-md">
          <h3 className="text-2xl font-bold text-blue-300 mb-2 flex items-center gap-2 justify-center">
            🎓 Éducation
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💻</span>
              <div>
                <span className="font-bold text-white">
                  Bachelor Informatique
                </span>{" "}
                <span className="text-white">- Ynov Rennes</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📜</span>
              <div>
                <span className="font-bold text-white">Baccalauréat ES</span>{" "}
                <span className="text-white">
                  - (Spécialités Economie et Gestion)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Bouton Télécharger CV */}
        <a
          href="/CV-pro .pdf"
          download="CV-pro .pdf"
          className="mt-2 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-all duration-300 text-lg text-center"
        >
          Télécharger mon CV
        </a>
      </div>
    </div>
  );
}

export default About;
