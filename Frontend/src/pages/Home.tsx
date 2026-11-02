import { Link } from "react-router";

const Home = () => {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-center px-6 py-20">
      <p className="mb-4 font-medium text-blue-600">Welcome to my portfolio</p>

      <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
        Hi, I'm Shammah Charles.
        <span className="text-blue-600"> Software Developer.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
        I'm a developer passionate about building applications, solving
        problems, and exploring software engineering, cloud technologies, and
        cybersecurity.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/projects"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          View My Projects
        </Link>

        <Link
          to="/contact"
          className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-100"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Home;
