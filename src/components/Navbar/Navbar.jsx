import { MenuIcon, XIcon } from "lucide-react"; // Include XIcon for the close button
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all rounded-b-2xl py-5 duration-300 ${
          isScrolled
            ? "bg-gray-900 shadow-xl shadow-gray-500"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 max-lg:flex-col">
          {/* Logo Section */}
          <div className="logo max-md:w-full max-md:flex max-md:items-center max-md:justify-between max-md:z-50">
            <Link
              to="/"
              className={`text-3xl max-lg:text-2xl max-sm:text-xl font-bold ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              Mental Health Space
            </Link>
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              className="max-md:block hidden"
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6 text-gray-800" />
              ) : (
                <MenuIcon className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            id="mainListDiv"
            className={`main_list transition-all duration-300 max-md:absolute max-md:left-0 max-md:w-full max-md:bg-[#dfdff0] max-md:pb-10 max-md:mt-[10vh] ${
              isMenuOpen
                ? "max-md:opacity-100 max-md:visible max-md:top-0 z-10"
                : "max-md:opacity-0 max-md:invisible max-md:-top-[1000%]"
            }`}
          >
            <ul className="flex max-lg:mt-5 max-md:flex-col gap-10 items-center text-lg max-lg:text-sm max-md:text-base max-md:gap-8">
              <li>
                <Link
                  to="/about"
                  className={`hover:text-indigo-600 font-medium ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://medium.com/@rashmi.psychology"
                  className={`hover:text-indigo-600 font-medium ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className={`hover:text-indigo-600 font-medium ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className={`hover:text-indigo-600 font-medium ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                >
                  FAQ's
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="text-white bg-indigo-500 px-5 py-1 rounded-md hover:bg-indigo-600"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
