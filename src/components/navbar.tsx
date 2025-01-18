import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-black px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">STUDY</div>
        <ul className="flex space-x-6">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to='academic'>Academic</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <a href="#scheduling">Scheduling</a>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <a href="#resources">Resources</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
