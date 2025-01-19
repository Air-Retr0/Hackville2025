import { Link } from "react-router-dom";

const Gallery = () => {
  const handleAcademicClick = () => {
    console.log("Navigating to the Academic Resources page");
  };

  const handleExternalClick = () => {
    console.log("Navigating to the External services Page");
  };

  return (
    <div className="bg-white dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
              Resources
            </h2>
            <p className="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
              Find here curated knowledge put together for your convenience.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-col gap-8">
          <div className="group relative items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg h-80 min-w-fit mb-8 ml-56">
            <img
              src="/sheridan-college-hazel-campus-moriyama-teshima-2.jpg"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="w-full h-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            Academic
            <Link
              to="/resources/academics"
              onClick={handleAcademicClick}
              className="absolute inset-0"
            >
            </Link>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="flex items-start justify-between px-4 py-4">
              <span className="text-sm text-white md:text-lg">Academic</span>
            </div>
          </div>

          <div className="group relative items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg h-80 min-w-fit mb-8 ml-56">
            <img
              src="/360_F_254854812_KmvcDS47hNL3TrbOUXkjmvIeplVbAKuK.jpg"
              loading="lazy"
              alt="Photo by Magicle"
              className="w-full h-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <Link
              to="/resources/external"
              onClick={handleExternalClick}
              className="absolute inset-0"
            >
            </Link>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div className="flex items-start justify-between px-4 py-4">
              <span className="text-sm text-white md:text-lg">External</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
