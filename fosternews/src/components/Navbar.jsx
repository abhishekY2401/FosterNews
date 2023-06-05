import { Link } from "react-router-dom";
import { Search } from "../assets/Search.jsx";
import SignIn from "./auth/SignIn";
import Subscribe from "./auth/Subscribe";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between pt-6">
        <div className="flex mr-4 my-2 items-center justify-end">
          <input
            type="search"
            className="bg-purple-white shadow rounded-3xl outline-none border-2 border-sky-500 p-1 pl-4 font-quicksand text-md"
            placeholder="Search"
          ></input>
          <div className="absolute mr-4 text-purple-lighter">
            <Search />
          </div>
        </div>

        <div>
        <Link to="/">
            <h1 className="text-3xl font-black font-playfair text-center">
            Foster News
            </h1>
        </Link>
        </div>

        <div className="p-1.5 w-24 bg-red-700 rounded-full text-center">
        <Link to="/signin" element={<SignIn />}>
            <span className="text-white font-quicksand text-sm">Sign In</span>
        </Link>
        </div>
        <div className="p-1.5 w-36 bg-black rounded-full text-center">
        <Link to="/subscribe" element={<Subscribe />}>
            <span className="text-white font-quicksand text-sm">
            Subscribe Now
            </span>
        </Link>
        </div>
      </div>
      <div className="pt-6 flex justify-center items-center">
        <hr className="h-0.5 w-screen font-bold bg-gray-400"/>
      </div>
    </>
  );
};

export default Navbar;
