import { projects } from "../data/projects";
import Reveal from "../components/ui/Reveal";
import GlassPanel from "../components/ui/GlassPanel";
import CtaLink from "../components/ui/CtaLink";

function Projects() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-10">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
          Projets
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Études de cas</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Trois projets, trois problèmes différents : une communauté à faire vivre, une expérience
          à explorer, un métier à digitaliser.
        </p>
      </Reveal>

      <div className="mt-20 space-y-28">
        {projects.map((project, index) => {
          const reversed = index % 2 === 1;
          return (
            <Reveal key={project.slug}>
              <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                  <span
                    aria-hidden="true"
                    className="font-display text-6xl font-bold text-white/10 sm:text-7xl"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">
                    {project.category}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-lg text-white/85">{project.tagline}</p>
                  <p className="mt-4 text-white/70">{project.description}</p>

                  <ul className="mt-6 space-y-2">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-white/80">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80"
                      >
                        <img src={tech.icon} alt="" className="h-4 w-4" />
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <CtaLink href={project.demo} aria-label={`Voir la démo du projet ${project.title}`}>
                      Voir la démo
                    </CtaLink>
                    <CtaLink
                      href={project.github}
                      variant="ghost"
                      aria-label={`Voir le projet ${project.title} sur GitHub`}
                    >
                      Code sur GitHub
                    </CtaLink>
                  </div>
                </div>

                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                  <GlassPanel className="overflow-hidden p-2">
                    <img
                      src={project.image}
                      alt={`Capture d'écran du projet ${project.title}`}
                      loading="lazy"
                      decoding="async"
                      width={960}
                      height={540}
                      className="aspect-video w-full rounded-2xl object-cover"
                    />
                  </GlassPanel>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
