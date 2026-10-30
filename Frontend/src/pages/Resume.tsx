
const Resume = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h1 className="text-4xl font-bold text-gray-900">
        My Resume
      </h1>

      <p className="mt-4 max-w-2xl text-gray-600">
        Explore my education, technical skills, certifications,
        and professional background.
      </p>

      <div className="mt-10 rounded-xl border border-gray-200 p-8">

        <h2 className="text-2xl font-semibold text-gray-900">
          Professional Background
        </h2>

        <p className="mt-3 leading-relaxed text-gray-600">
          My background includes software development,
          information security, technical support, and cloud technologies.
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-gray-900">
          Technical Interests
        </h2>

        <p className="mt-3 text-gray-600">
          Full-stack development, cloud infrastructure,
          cybersecurity, and software engineering.
        </p>

        {/* We'll add your full resume and PDF download here. */}

      </div>
    </section>
  );
};

export default Resume;
