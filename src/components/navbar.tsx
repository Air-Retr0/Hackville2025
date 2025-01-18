import { Link } from "react-router-dom";
import Avatar from "./tempolabs/avatar";

const Navbar = () => {
  return (
    <nav className="bg-transparent text-black px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">STUDY</div>
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
          <li className="hover:text-gray-300 cursor-pointer ml-6">
            <Avatar />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
