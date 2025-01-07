import React, { useState } from "react";

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all rounded-b-2xl py-5 duration-300 ${
          isScrolled ? "bg-gray-900 shadow-xl shadow-gray-500" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="logo">
            <a
              href="#"
              className={`text-3xl font-bold ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              Mental Health Space
            </a>
          </div>

          <div
            id="mainListDiv"
            className={`main_list transition-all duration-300 ${
              isMenuOpen
                ? "h-auto opacity-100 visible"
                : "h-0 opacity-0 invisible"
            } md:h-auto md:opacity-100 md:visible`}
          >
            <ul className="flex flex-col items-center md:flex-row md:space-x-8 text-lg">
              <li>
                <a
                  href="#"
                  className={` hover:text-indigo-600 font-medium ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@rashmi.psychology"
                  className={` hover:text-indigo-600 font-medium ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className={` hover:text-indigo-600 font-medium ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className={` hover:text-indigo-600 font-medium ${
                    isScrolled ? "text-white" : "text-gray-800"
                  }`}
                >
                  FAQ's
                </a>
              </li>
              <a
                href="#appointment"
                className="text-white bg-indigo-500 px-5 py-1 rounded-md hover:bg-indigo-600"
              >
                Book Now
              </a>
            </ul>
          </div>

          <div
            className="navTrigger cursor-pointer block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`w-8 h-1 bg-white mb-1 transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-white mb-1 transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-8 h-1 bg-white transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
