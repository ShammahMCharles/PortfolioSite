const ResumeHero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-900 to-blue-950 p-8 md:p-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        Professional Profile
      </p>

      <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
        Shammah Charles
      </h1>

      <h2 className="mt-4 text-xl font-medium text-blue-300 md:text-2xl">
        Software Developer | Cloud | Cybersecurity
      </h2>

      <p className="mt-6 max-w-3xl leading-8 text-slate-300">
        Software Developer with a foundation in computer science, information
        security, technical support, and cloud technologies. Passionate about
        building secure applications and solving real-world technical problems.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="/Frontend/public/SCharles_ITProfessional_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          View Resume PDF
        </a>

        <a
          href="/Frontend/public/SCharles_ITProfessional_resume.pdf"
          download
          className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default ResumeHero;
