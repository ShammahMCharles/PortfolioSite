const Projects = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
            current 
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">Featured Projects</h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            A collection of applications I've designed and developed while
            growing as a software engineer.
          </p>
        </div>

        {/* Project card */}
        <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-blue-500">
          {/* Project preview */}
          <div className="flex min-h-64 items-center justify-center bg-linear-to-br from-blue-950 via-slate-800 to-indigo-950 p-8">
            <div className="w-full max-w-md rounded-xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-semibold">Budget Overview</span>
                <span className="text-sm text-blue-400">Dashboard</span>
              </div>

              <p className="text-sm text-slate-400">Monthly Budget</p>

              <h2 className="mt-2 text-4xl font-bold">$4,250.00</h2>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Income</p>
                  <p className="mt-2 font-semibold text-green-400">$5,500</p>
                </div>

                <div className="rounded-lg bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Expenses</p>
                  <p className="mt-2 font-semibold text-blue-400">$1,250</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project information */}
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold">BudgetBuilder</h2>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
                Live
              </span>
            </div>

            <p className="mt-4 leading-7 text-slate-400">
              A personal finance application that helps users manage their
              budgets, track purchases, and organize financial goals.
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Express", "MongoDB"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ),
              )}
            </div>

            {/* Project links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://budgetbuilder-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-500"
              >
                Live Demo ↗
              </a>

              <a
                href="https://github.com/ShammahMCharles/BudgetBuilder"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-3 font-semibold transition hover:border-white hover:bg-slate-800"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
