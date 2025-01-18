import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-black px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold"><Link to='/'>STUDY</Link></div>
        <ul className="flex space-x-6 items-center">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/academic">Academic</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/scheduling">Scheduling</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
