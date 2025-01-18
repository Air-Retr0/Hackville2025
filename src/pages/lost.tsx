import { Link } from "react-router-dom";
import MagneticButton from "../components/tempolabs/magbutton";

function Lost() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you’re looking for doesn’t exist.</p>
      {/* <Link to='/' className="px-6 py-2 bg-white text-black rounded hover:bg-black hover:text-white focus:outline-none focus:ring-8 focus:ring-black">Go Back Home</Link> */}
      <Link to='/'><MagneticButton /></Link>
    </div>
  );
}

export default Lost
