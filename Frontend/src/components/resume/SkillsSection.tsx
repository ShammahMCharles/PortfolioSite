
import { resumeData } from "../../data/resumeData";

const SkillsSection = () => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-white">
        Technical Skills
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        {resumeData.skills.map((group) => (
          <article
            key={group.category}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <h3 className="mb-4 font-semibold text-blue-300">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-slate-800 px-3 py-2 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
