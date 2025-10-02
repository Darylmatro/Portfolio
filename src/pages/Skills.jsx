import React from "react";

const backendIcons = [
  { src: "svg/php.svg", alt: "PHP" },
  { src: "svg/go-lang.svg", alt: "Go" },
  { src: "svg/java.svg", alt: "Java" },
  { src: "svg/python.svg", alt: "Python" },
  { src: "svg/nodejs.svg", alt: "Node.js" },
];
const frontendIcons = [
  { src: "svg/html5.svg", alt: "HTML5" },
  { src: "svg/css3.svg", alt: "CSS3" },
  { src: "svg/javascript.svg", alt: "JavaScript" },
  { src: "svg/react.svg", alt: "React" },
  { src: "svg/tailwind-css.svg", alt: "Tailwind CSS" },
  { src: "svg/typescript.svg", alt: "TypeScript" },
];
const dbIcons = [
  { src: "svg/mysql.svg", alt: "MySQL" },
  { src: "svg/mongodb.svg", alt: "MongoDB" },
  { src: "svg/supabase.svg", alt: "Supabase" },
  { src: "svg/sqlite.svg", alt: "SQLite" },
  { src: "svg/postgresql.svg", alt: "PostgreSQL" },
];

function Skills() {
  const renderIcons = (icons) => (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 max-w-3xl w-full mx-auto place-items-center">
        {icons.map((icon, idx) => (
          <img
            key={idx}
            src={icon.src}
            alt={icon.alt}
            title={icon.alt}
            className="w-20 h-20 md:w-24 md:h-24 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_16px_rgba(59,130,246,0.5)]"
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#232526] flex items-center justify-center py-8">
      <div className="w-full max-w-5xl p-8 bg-black bg-opacity-40 rounded-xl shadow-lg flex flex-col gap-10">
        {/* Backend */}
        <div className="bg-black bg-opacity-40 rounded-xl shadow-md p-8 flex flex-col items-center gap-8">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Backend</h2>
          {renderIcons(backendIcons)}
        </div>
        {/* Frontend */}
        <div className="bg-black bg-opacity-40 rounded-xl shadow-md p-8 flex flex-col items-center gap-8">
          <h2 className="text-2xl font-bold text-pink-400 mb-2">Frontend</h2>
          {renderIcons(frontendIcons)}
        </div>
        {/* Base de données */}
        <div className="bg-black bg-opacity-40 rounded-xl shadow-md p-8 flex flex-col items-center gap-8">
          <h2 className="text-2xl font-bold text-green-400 mb-2">
            Base de données
          </h2>
          {renderIcons(dbIcons)}
        </div>
      </div>
    </div>
  );
}

export default Skills;
