
const Projects = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h1 className="text-4xl font-bold text-gray-900">
        My Projects
      </h1>

      <p className="mt-4 text-gray-600">
        A collection of applications and projects I've developed.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">

        <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">
            BudgetBuilder
          </h2>

          <p className="mt-3 leading-relaxed text-gray-600">
            A personal finance application designed to help users
            manage budgets, track purchases, and organize financial goals.
          </p>

          <p className="mt-4 text-sm font-medium text-blue-600">
            React · TypeScript · Express · MongoDB
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">
            Portfolio Website
          </h2>

          <p className="mt-3 leading-relaxed text-gray-600">
            A full-stack portfolio showcasing my development projects,
            technical skills, and professional background.
          </p>

          <p className="mt-4 text-sm font-medium text-blue-600">
            React · TypeScript · Tailwind · Node.js
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
