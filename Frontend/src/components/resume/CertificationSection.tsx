
import { resumeData } from "../../data/resumeData";

const CertificationSection = () => {
  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold text-white">
        Certifications
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {resumeData.certifications.map((cert) => (
          <article
            key={cert.name}
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:border-blue-400/50"
          >
            <div className="mb-4 text-2xl text-blue-400">
              ✦
            </div>

            <h3 className="font-semibold text-white">
              {cert.name}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {cert.issuer}
            </p>

            <p className="mt-3 text-sm text-blue-300">
              {cert.date}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
