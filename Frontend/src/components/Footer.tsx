
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Shammah Charles. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/ShammahMCharles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-blue-600"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shammahc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
