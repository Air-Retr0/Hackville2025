const CardGrid = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 h-screen">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-blue-300 text-white font-bold px-2 py-1 m-2 rounded-md">
              CSE 111
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Introduction to Programming</div>
            <p className="text-gray-500 text-sm">
              Master the basics of programming with Python, including variables, loops, and problem-solving techniques.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-green-900 text-white font-bold px-2 py-1 m-2 rounded-md">
              CSE 212
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Data Structures and Algorithms</div>
            <p className="text-gray-500 text-sm">
              Explore key data structures and algorithms that form the backbone of efficient problem-solving in software development.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-orange-600 text-white font-bold px-2 py-1 m-2 rounded-md">
              CSE 321
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Operating Systems</div>
            <p className="text-gray-500 text-sm">
              Learn the inner workings of modern operating systems, including process management, memory allocation, and concurrency.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-orange-600 text-white font-bold px-2 py-1 m-2 rounded-md">
              CSE 317
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Computer Networks</div>
            <p className="text-gray-500 text-sm">
              Dive into the fundamentals of networking, including protocols, data transmission, and the internet's architecture.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-purple-900 text-white font-bold px-2 py-1 m-2 rounded-md">
              CSE 412
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Artificial Intelligence</div>
            <p className="text-gray-500 text-sm">
              Discover AI concepts like machine learning, neural networks, and their applications in real-world problem-solving.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/600x360"
            />
            <div className="absolute top-0 right-0 bg-purple-900 text-white font-bold px-2 py-1 m-2 rounded-md">
              CSE 433
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">Database Systems</div>
            <p className="text-gray-500 text-sm">
              Learn about relational database management systems, SQL queries, and data modeling techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
