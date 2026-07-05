import { timeline } from "../data/experience";
import Reveal from "../components/ui/Reveal";
import GlassPanel from "../components/ui/GlassPanel";
import CtaLink from "../components/ui/CtaLink";

const CV_FILE = "/CV-pro .pdf";

const typeLabel = {
  education: "Formation",
  work: "Expérience",
  goal: "Objectif",
};

function About() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-10">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
          Mon parcours
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">À propos de moi</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Je suis actuellement étudiant en troisième année de Bachelor Informatique à Ynov Campus
          Rennes. Passionné par l&rsquo;informatique et les nouvelles technologies, je
          m&rsquo;intéresse particulièrement à la manière dont elles évoluent et transforment
          notre quotidien. Curieux et rigoureux, j&rsquo;accorde une grande importance à la
          qualité du travail et à la compréhension des besoins de chaque projet, et j&rsquo;aime
          particulièrement le travail en équipe : échanger des idées, apprendre des autres et
          construire ensemble des solutions efficaces.
        </p>
      </Reveal>

      <ol className="mt-16 space-y-8 border-l border-white/15 pl-8">
        {timeline.map((item, index) => (
          <Reveal as="li" key={item.id} delay={index * 0.06} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            />
            <GlassPanel className="p-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                {typeLabel[item.type]} · {item.period}
              </span>
              <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">{item.title}</h2>
              <p className="text-white/70">{item.place}</p>
              {item.points.length > 0 && (
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-white/80">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </GlassPanel>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-16">
        <GlassPanel className="p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold">Aperçu du CV</h2>
          <iframe
            src={CV_FILE}
            title="Aperçu de mon CV"
            className="mt-4 h-[500px] w-full rounded-2xl border border-white/15 bg-white"
          />
          <div className="mt-6 flex justify-center">
            <CtaLink href={CV_FILE} download="CV-pro .pdf">
              Télécharger mon CV
            </CtaLink>
          </div>
        </GlassPanel>
      </Reveal>
    </div>
  );
}

export default About;
