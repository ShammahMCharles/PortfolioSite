
import { resumeData } from "../../data/resumeData";

const ProjectShowcase = () => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-white">
        Technical Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {resumeData.projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-blue-400/50"
          >
            <p className="text-sm text-blue-300">
              {project.type}
            </p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              {project.name}
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
