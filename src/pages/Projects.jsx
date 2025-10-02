import React from "react";

function Projects() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] flex items-center justify-center">
      <div className="w-full max-w-5xl p-8 bg-black bg-opacity-40 rounded-xl shadow-lg">
        <h2 className="text-center text-4xl font-bold text-white mb-6">
          MES PROJETS
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Carte de projet 1 */}
          <div className="relative border-2 border-gray-500 w-80 h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 bg-[#232526] bg-opacity-80">
            <img
              src="/forum.png"
              alt="FORUM"
              className="w-full h-48 object-cover rounded-t-lg shadow-lg"
            />
            <div className="bg-black bg-opacity-60 p-4 text-center rounded-b-lg">
              <p className="font-bold text-xl mb-2 text-white">FORUM</p>
              <p className="text-sm mb-4 text-white">
                Un projet de forum en ligne permettant des discussions entre
                utilisateurs.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <img
                  src="svg/html5.svg"
                  alt="HTML5"
                  title="HTML5"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/css3.svg"
                  alt="CSS3"
                  title="CSS3"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/javascript.svg"
                  alt="JavaScript"
                  title="JavaScript"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/go-lang.svg"
                  alt="GO-LANG"
                  title="GO-LANG"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </div>
              <a
                href="https://github.com/ton-compte-github/forum"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le projet FORUM sur GitHub"
                className="inline-block mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
              >
                Voir GitHub
              </a>
            </div>
          </div>

          {/* Carte de projet 2 */}
          <div className="relative border-2 border-gray-500 w-80 h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 bg-[#232526] bg-opacity-80">
            <img
              src="/groupie-tracker.png"
              alt="GROUPIE TRACKER"
              className="w-full h-48 object-cover rounded-t-lg shadow-lg"
            />
            <div className="bg-black bg-opacity-60 p-4 text-center rounded-b-lg">
              <p className="font-bold text-xl mb-2 text-white">
                GROUPIE TRACKER
              </p>
              <p className="text-sm mb-4 text-white">
                Groupie Tracker est une application web permettant de suivre vos
                groupes de musique préférés. Découvrez les membres des groupes,
                leurs dates de création, le premier album, ainsi que les dates
                et lieux de leurs prochains concerts. Explorez les événements
                via une carte interactive.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <img
                  src="svg/html5.svg"
                  alt="HTML5"
                  title="HTML5"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/css3.svg"
                  alt="CSS3"
                  title="CSS3"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/javascript.svg"
                  alt="JavaScript"
                  title="JavaScript"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/go-lang.svg"
                  alt="GO-LANG"
                  title="GO-LANG"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </div>
              <a
                href="https://github.com/Darylmatro/Groupie-Tracker"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le projet GROUPIE TRACKER sur GitHub"
                className="inline-block mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
              >
                Voir GitHub
              </a>
            </div>
          </div>

          {/* Carte de projet 3 */}
          <div className="relative border-2 border-gray-500 w-80 h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 bg-[#232526] bg-opacity-80">
            <img
              src="/quiz.png"
              alt="QUIZ"
              className="w-full h-48 object-cover rounded-t-lg shadow-lg"
            />
            <div className="bg-black bg-opacity-60 p-4 text-center rounded-b-lg">
              <p className="font-bold text-xl mb-2 text-white">QUIZ</p>
              <p className="text-sm mb-4 text-white">
                Un projet de quiz interactif pour tester vos connaissances.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <img
                  src="svg/html5.svg"
                  alt="HTML5"
                  title="HTML5"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/css3.svg"
                  alt="CSS3"
                  title="CSS3"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/go-lang.svg"
                  alt="GO-LANG"
                  title="GO-LANG"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </div>
              <a
                href="https://github.com/ton-compte-github/quiz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le projet QUIZ sur GitHub"
                className="inline-block mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
              >
                Voir GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
