
import { resumeData } from "../../data/resumeData";

const EducationSection = () => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-white">
        Education & Professional Training
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {resumeData.education.map((item) => (
          <article
            key={item.institution}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <p className="text-sm text-blue-300">{item.dates}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {item.institution}
            </h3>
            <p className="mt-2 text-slate-300">
              {item.qualification}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {item.location}
            </p>
          </article>
        ))}

        {resumeData.training.map((item) => (
          <article
            key={item.institution}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <p className="text-sm text-blue-300">{item.dates}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {item.institution}
            </h3>
            <p className="mt-2 text-slate-300">
              {item.qualification}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
