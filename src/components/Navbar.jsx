import { FaHamburger, FaTimes } from "react-icons/fa";
import logoImg from "../assets/sagardas.jpg";
import { useState } from "react";
const Navbar = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const listStyles = "h-20 w-full flex items-center justify-end";
  const navItemStyles =
    "mr-8 first-letter:transition-colors duration-300 ease-in-out hover:text-[#00cc66]";

  return (
    <nav className="fixed h-20 w-full flex flex-row justify-between items-center text-[#505b27] bg-[#ffffff] shadow-md md:justify-evenly lg:justify-around z-50">
      <div className="h-auto w-auto flex flex-row items-center cursor-pointer">
        <img
          src={logoImg}
          alt="Logo"
          className="h-12 w-12 rounded-full ml-4 mr-2 lg:ml-[-4rem]"
        />
        <span className="text-lg font-semibold transition-colors duration-300 ease-in-out hover:text-[#00cc66] tracking-wide">
          Sagar Das
        </span>
      </div>
      {showNavItems && (
        <FaTimes
          className="mr-6 text-2xl font-thin cursor-pointer sm:hidden"
          onClick={() => setShowNavItems(false)}
        />
      )}
      {!showNavItems && (
        <FaHamburger
          className="mr-6 text-2xl font-thin cursor-pointer sm:hidden"
          onClick={() => setShowNavItems(true)}
        />
      )}
      <ul
        className={`${
          showNavItems ? "" : "hidden"
        } absolute top-20 h-80 w-full border-2 bg-[#ffffff] text-[#394d00] font-medium sm:flex sm:flex-row sm:relative sm:h-full sm:bg-transparent sm:top-0 sm:w-3/5 sm:justify-center sm:items-center sm:border-0 md:ml-20 lg:w-2/5 lg:ml-30 xl:ml-40`}
      >
        <li
          className={` ${listStyles} border-b border-b-[#394d00] border-opacity-50 sm:border-b-0`}
        >
          <a
            href="/"
            className={`${navItemStyles} hover:tracking-wider transition duration-300 ease-in-out transform hover:translate-y-1`}
          >
            Home
          </a>
        </li>
        <li
          className={` ${listStyles} border-b border-b-[#394d00] border-opacity-50  sm:border-b-0`}
        >
          <a
            href="/about"
            className={`${navItemStyles} hover:tracking-wider transition duration-300 ease-in-out transform hover:translate-y-1`}
          >
            About
          </a>
        </li>
        <li
          className={` ${listStyles} border-b border-b-[#394d00] border-opacity-50  sm:border-b-0`}
        >
          <a
            href="/projects"
            className={`${navItemStyles} hover:tracking-wider transition duration-300 ease-in-out transform hover:translate-y-1`}
          >
            Projects
          </a>
        </li>
        <li className={listStyles}>
          <a
            href="/contact"
            className={`${navItemStyles} hover:tracking-wider transition duration-300 ease-in-out transform hover:translate-y-1`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
