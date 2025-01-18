import { Link } from "react-router-dom";

const Gallery = () => {
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


        <a
          href="#"
          className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 mb-16"
        >
          <img
            src="/public/360_F_254854812_KmvcDS47hNL3TrbOUXkjmvIeplVbAKuK.jpg"
            loading="lazy"
            alt="Photo by Magicle"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-8 inline-block text-sm text-white md:ml-5 md:text-lg">
            External
          </span>
        </a>
        <Link to='resources/academic'>
          <img
            src="/public/sheridan-college-hazel-campus-moriyama-teshima-2.jpg"
            loading="lazy"
            alt="Photo by Martin Sanchez"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

          <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
            Academic
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
