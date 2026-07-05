import { skillCategories } from "../data/skills";
import Reveal from "../components/ui/Reveal";
import GlassPanel from "../components/ui/GlassPanel";

function Skills() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:px-10">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
          Compétences
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Ce que je sais faire</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
          Chaque compétence est reliée à un contexte concret — un projet ou ma formation — plutôt
          qu&rsquo;à un score arbitraire. C&rsquo;est comme ça que je préfère raconter ma
          progression.
        </p>
      </Reveal>

      <div className="mt-16 space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <Reveal key={category.id} delay={categoryIndex * 0.05}>
            <div className="mb-6 flex items-baseline gap-4">
              <h2
                className={`bg-gradient-to-r ${category.accent} bg-clip-text font-display text-2xl font-bold text-transparent sm:text-3xl`}
              >
                {category.title}
              </h2>
              <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
            </div>
            <p className="mb-8 max-w-2xl text-white/70">{category.summary}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {category.skills.map((skill) => (
                <GlassPanel key={skill.name} className="flex items-center gap-4 p-4">
                  <img src={skill.icon} alt="" className="h-10 w-10 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">{skill.name}</p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {skill.context.map((ctx) => (
                        <span
                          key={ctx}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/60"
                        >
                          {ctx}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Skills;
