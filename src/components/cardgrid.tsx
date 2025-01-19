const CardGrid = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2 h-screen">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-64 h-72">
          <div className="relative">
            <img
              className="w-full h-32 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-blue-300 text-white font-bold px-2 py-1 m-2 rounded-md text-xs">
              CSE 111
            </div>
          </div>
          <div className="p-2">
            <div className="text-sm font-medium text-gray-800 mb-1">Introduction to Programming</div>
            <p className="text-gray-500 text-xs">
              Master the basics of programming with Python, including variables, loops, and problem-solving techniques.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-64 h-72">
          <div className="relative">
            <img
              className="w-full h-32 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-green-900 text-white font-bold px-2 py-1 m-2 rounded-md text-xs">
              CSE 212
            </div>
          </div>
          <div className="p-2">
            <div className="text-sm font-medium text-gray-800 mb-1">Data Structures and Algorithms</div>
            <p className="text-gray-500 text-xs">
              Explore key data structures and algorithms that form the backbone of efficient problem-solving in software development.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-64 h-72">
          <div className="relative">
            <img
              className="w-full h-32 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-orange-600 text-white font-bold px-2 py-1 m-2 rounded-md text-xs">
              CSE 321
            </div>
          </div>
          <div className="p-2">
            <div className="text-sm font-medium text-gray-800 mb-1">Operating Systems</div>
            <p className="text-gray-500 text-xs">
              Learn the inner workings of modern operating systems, including process management, memory allocation, and concurrency.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-64 h-72">
          <div className="relative">
            <img
              className="w-full h-32 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-orange-600 text-white font-bold px-2 py-1 m-2 rounded-md text-xs">
              CSE 317
            </div>
          </div>
          <div className="p-2">
            <div className="text-sm font-medium text-gray-800 mb-1">Computer Networks</div>
            <p className="text-gray-500 text-xs">
              Dive into the fundamentals of networking, including protocols, data transmission, and the internet's architecture.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-64 h-72">
          <div className="relative">
            <img
              className="w-full h-32 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-purple-900 text-white font-bold px-2 py-1 m-2 rounded-md text-xs">
              CSE 412
            </div>
          </div>
          <div className="p-2">
            <div className="text-sm font-medium text-gray-800 mb-1">Artificial Intelligence</div>
            <p className="text-gray-500 text-xs">
              Discover AI concepts like machine learning, neural networks, and their applications in real-world problem-solving.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-64 h-72">
          <div className="relative">
            <img
              className="w-full h-32 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-purple-900 text-white font-bold px-2 py-1 m-2 rounded-md text-xs">
              CSE 433
            </div>
          </div>
          <div className="p-2">
            <div className="text-sm font-medium text-gray-800 mb-1">Database Systems</div>
            <p className="text-gray-500 text-xs">
              Learn about relational database management systems, SQL queries, and data modeling techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
