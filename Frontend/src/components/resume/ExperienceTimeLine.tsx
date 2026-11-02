
import { resumeData } from "../../data/resumeData";

const ExperienceTimeline = () => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-white">
        Professional Experience
      </h2>

      <div className="space-y-6">
        {resumeData.experience.map((job) => (
          <article
            key={`${job.company}-${job.role}`}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6"
          >
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {job.role}
                </h3>
                <p className="mt-1 text-blue-300">
                  {job.company} · {job.location}
                </p>
              </div>

              <p className="text-sm text-slate-400">
                {job.dates}
              </p>
            </div>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-300">
              {job.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
