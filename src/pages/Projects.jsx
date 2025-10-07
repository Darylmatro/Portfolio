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
                Gaming Universe Forum est une application web communautaire
                dédiée aux passionnés de jeux vidéo. Elle permet aux
                utilisateurs de créer un compte, de publier des messages, de
                commenter les publications et d’interagir avec d’autres membres.
                Grâce à son interface intuitive, chacun peut partager ses
                expériences et découvrir de nouveaux contenus. Le système de
                likes valorise les contributions les plus pertinentes et
                favorise les échanges autour de l’univers du gaming.
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
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://github.com/Darylmatro/forum"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir le projet FORUM sur GitHub"
                  className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
                >
                  Voir GitHub
                </a>
                <a
                  href="https://forum.enzo-turpin.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir la démo du projet FORUM"
                  className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
                >
                  Demo
                </a>
              </div>
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
                Groupie Tracker est une application web conçue pour suivre
                facilement vos groupes de musique préférés. Elle permet de
                découvrir des informations détaillées sur chaque groupe, comme
                les membres, la date de création et le premier album.
                L’application affiche également les dates et lieux des prochains
                concerts pour ne rien manquer. Grâce à une carte interactive,
                les utilisateurs peuvent explorer les événements à venir et
                planifier leurs sorties musicales.
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
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="https://github.com/Darylmatro/Groupie-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir le projet GROUPIE TRACKER sur GitHub"
                  className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
                >
                  Voir GitHub
                </a>
                <a
                  href="https://groupietracker.enzo-turpin.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir la démo du projet GROUPIE TRACKER"
                  className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>

          {/* Carte de projet 3 */}
          <div className="relative border-2 border-gray-500 w-80 h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 bg-[#232526] bg-opacity-80">
            <img
              src="/booked.png"
              alt="Booked"
              className="w-full h-48 object-cover rounded-t-lg shadow-lg"
            />
            <div className="bg-black bg-opacity-60 p-4 text-center rounded-b-lg">
              <p className="font-bold text-xl mb-2 text-white">Booked</p>
              <p className="text-sm mb-4 text-white">
                Booked est une application SaaS (Software as a Service) destinée
                aux petits professionnels tels que les salons de coiffure, les
                instituts de beauté, et autres prestataires de services
                nécessitant un système de réservation. L'objectif principal est
                de simplifier la gestion des rendez-vous via une application web
                accessible et intuitive ainsi qu'une application
                mobile.L'application permettra à ces professionnels de
                digitaliser leur système de réservation, d'améliorer
                l'expérience client et d'optimiser la gestion de leur planning
                au quotidien.
              </p>
              <div className="flex justify-center space-x-4 mt-4">
                <img
                  src="svg/react.svg"
                  alt="React"
                  title="React"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/typescript.svg"
                  alt="TypeScript"
                  title="TypeScript"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/tailwind-css.svg"
                  alt="Tailwind CSS"
                  title="Tailwind CSS"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
                <img
                  src="svg/nodejs.svg"
                  alt="Node.js"
                  title="Node.js"
                  className="w-6 h-6 hover:scale-110 transition-transform"
                />
              </div>
              <a
                href="https://github.com/EnzoTurpin/Booked"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir le projet Booked sur GitHub"
                className="inline-block mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
              >
                Voir GitHub
              </a>
              <a
                href="https://booked.enzo-turpin.fr/login"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir la démo du projet Booked"
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-500 transition-transform duration-300"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
