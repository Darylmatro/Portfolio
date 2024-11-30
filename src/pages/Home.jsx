import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";
import Modal from "../components/Modal";

function Home() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState(""); // Nouveau state pour le type de message
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );
      setResponseMessage("Votre message a été envoyé avec succès !");
      setResponseType("success"); // Type "success" pour une réponse réussie
      setFormData({ email: "", message: "" });
    } catch (error) {
      setResponseMessage("Oups une erreur est survenue. Réessayer plus tard.");
      setResponseType("error"); // Type "error" pour une erreur
    }
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <div className="h-screen bg-white">
      {/* Navbar + Header avec Image de fond */}
      <header className="relative h-screen flex flex-col items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/nimg.png')" }}
        ></div>

        <nav className="absolute top-0 left-0 w-full p-4 flex flex-wrap md:flex-nowrap justify-center items-center bg-gradient-to-b from-black via-transparent">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-white">
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="relative hover:text-gray-200 transition-all duration-300 text-white font-bold cursor-pointer group"
              >
                À propos
                <span className="absolute left-1/2 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projets"
                smooth={true}
                duration={500}
                className="relative hover:text-gray-200 transition-all duration-300 text-white font-bold cursor-pointer group"
              >
                Projets
                <span className="absolute left-1/2 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className="relative hover:text-gray-200 transition-all duration-300 text-white font-bold cursor-pointer group"
              >
                Skills
                <span className="absolute left-1/2 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="relative hover:text-gray-200 transition-all duration-300 text-white font-bold cursor-pointer group"
              >
                Contact
                <span className="absolute left-1/2 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </ScrollLink>
            </li>
          </ul>
        </nav>

        {/* Header Content */}
        <div className="relative z-10 flex flex-col justify-center items-center">
          <div className="text-6xl font-bold tracking-wider mb-4 z-20 text-white">
            {/* Diviser le nom en 2 parties */}
            {"Daryl".split("").map((letter, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
            <span className="mx-2"> {/* Espace entre Daryl et MATRO */} </span>
            {"MATRO".split("").map((letter, index) => (
              <span
                key={index + 5} // Début du comptage à partir de l'index de "Daryl"
                className="letter"
                style={{ animationDelay: `${(index + 5) * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
          <p className="text-2xl text-center max-w-xl z-20 text-white">
            À la recherche d'un stage/Alternance en Développement web.
          </p>
        </div>
      </header>

      {/* Section À propos */}
      <div
        id="about"
        className="flex flex-col justify-center items-center p-12 bg-gray-100 shadow-md rounded-lg"
      >
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-black mb-6">À propos</h2>
          <p className="text-lg text-gray-700">
            Étudiant en 2ème année de Bachelor Informatique à Ynov Rennes,
            passionné par le développement web et la cybersécurité. Je suis à la
            recherche d'un stage pour mettre en pratique mes connaissances et
            approfondir mes compétences en développement web.
          </p>
        </div>
      </div>

      {/* Section Projets */}
      <div id="projets" className="mt-12 p-4 bg-gray-100">
        <h2 className="text-center text-4xl font-bold text-black mb-6">
          MES PROJETS
        </h2>
        <div className="flex flex-wrap justify-center space-x-6">
          {/* Carte de projet 1 */}
          <div className="relative border-2 border-gray-500 w-96 h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 mb-6">
            <img
              src="/forum.png"
              alt="FORUM"
              className="w-full h-56 object-cover rounded-t-lg shadow-lg"
            />
            <div className="bg-white p-4 text-center rounded-b-lg">
              <p className="font-bold text-xl mb-2">FORUM</p>
              <p className="text-sm mb-4">
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
            </div>
          </div>

          {/* Carte de projet 2 */}
          <div className="relative border-2 border-gray-500 w-96 h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 mb-6">
            <img
              src="/groupie-tracker.png"
              alt="GROUPIE TRACKER"
              className="w-full h-56 object-cover rounded-t-lg shadow-lg"
            />
            <div className="bg-white p-4 text-center rounded-b-lg">
              <p className="font-bold text-xl mb-2">GROUPIE TRACKER</p>
              <p className="text-sm mb-4">
                Application permettant de suivre les groupes et leurs
                performances en ligne.
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
            </div>
          </div>

          {/* Carte de projet 3 */}
          <div className="relative border-2 border-gray-500 w-96 h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 mb-6">
            <img
              src="/quiz.png"
              alt="QUIZ"
              className="w-full h-56 object-cover rounded-t-lg shadow-lg"
            />
            <div className="bg-white p-4 text-center rounded-b-lg">
              <p className="font-bold text-xl mb-2">QUIZ</p>
              <p className="text-sm mb-4">
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
            </div>
          </div>
        </div>
      </div>

      {/* Section Skills */}
      <div id="skills" className="mt-12 p-4 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-black mb-6">
            SKILLS
          </h2>
          <div className="flex flex-wrap justify-center space-x-6">
            {/* Carte Skill 1 */}
            <div className="relative border-2 border-gray-500 w-96 h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 mb-6">
              <img
                src="/back.png"
                alt="Back-end"
                className="w-full h-56 object-cover rounded-t-lg shadow-lg"
              />
              <div className="bg-white p-4 text-center rounded-b-lg">
                <p className="font-bold text-xl mb-2">Back-end</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <img
                    src="svg/php.svg"
                    alt="PHP"
                    title="PHP"
                    className="w-6 h-6 hover:scale-110 transition-transform"
                  />
                  <img
                    src="svg/go-lang.svg"
                    alt="GO-LANG"
                    title="GO-LANG"
                    className="w-6 h-6 hover:scale-110 transition-transform"
                  />
                  <img
                    src="svg/java.svg"
                    alt="Java"
                    title="Java"
                    className="w-6 h-6 hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div>

            {/* Carte Skill 2 */}
            <div className="relative border-2 border-gray-500 w-96 h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 mb-6">
              <img
                src="/front.jpg"
                alt="Front-end"
                className="w-full h-56 object-cover rounded-t-lg shadow-lg"
              />
              <div className="bg-white p-4 text-center rounded-b-lg">
                <p className="font-bold text-xl mb-2">Front-end</p>
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
                    src="svg/react.svg"
                    alt="React"
                    title="React"
                    className="w-6 h-6 hover:scale-110 transition-transform"
                  />
                  <img
                    src="svg/tailwind-css.svg"
                    alt="Tailwind CSS"
                    title="Tailwind CSS"
                    className="w-6 h-6 hover:scale-110 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Contact */}
      <div id="contact" className="mt-12 p-4 bg-gray-100">
        <h2 className="text-center text-4xl font-bold text-black mb-6">
          CV & CONTACT
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto space-y-6 md:space-y-0 md:space-x-6">
          {/* Aperçu du CV */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="w-full bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <p className="text-lg font-bold text-black mb-3 text-center">
                  Mon CV
                </p>
                <img
                  src="/apercu-cv.jpg"
                  alt="Aperçu du CV"
                  className="w-full h-56 rounded-lg shadow-lg object-contain"
                />
              </div>
              <br />
              <a
                href="/daryl.pdf"
                download="daryl.pdf"
                className="flex items-center font-bold justify-center w-full px-4 py-3 bg-white-800 rounded-lg hover:bg-gray-200 transition-all border-2 border-gray-800"
              >
                Télécharger
              </a>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre message"
                    rows="4"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center font-bold justify-center w-full px-4 py-3 bg-white-800 rounded-lg hover:bg-gray-200 transition-all border-2 border-gray-800"
              >
                Envoyer
              </button>
              {/* Modal */}
              {showModal && (
                <Modal message={responseMessage} type={responseType} />
              )}
              <div className="w-full max-w-lg space-y-6">
                <br />
                {/* Ligne blanche séparatrice */}
                <div className="h-[1px] bg-gray-300"></div>

                {/* Bouton GitHub */}
                <a
                  href="https://github.com/Darylmatro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-3 bg-white-800 rounded-lg hover:bg-gray-200 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src="svg/github.svg"
                      alt="GitHub"
                      className="w-6 h-6"
                    />
                    <span className="text-lg font-medium">GitHub</span>
                  </div>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white p-6 mt-12 text-center">
        {/* Copyright */}
        &copy; {new Date().getFullYear()} dmatro.fr Tous droits réservés.
      </footer>
    </div>
  );
}

export default Home;
