import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./lang";

interface Buttons {
  buttons: string[];
}

const Navbar: React.FC<Buttons> = ({ buttons }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: buttons[0], link: "#home" },
    { name: buttons[1], link: "#about" },
    { name: buttons[2], link: "#services" },
    { name: buttons[3], link: "#contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`p-4 flex justify-between items-center px-6 md:px-10 lg:px-20 z-50 w-full top-0 transition-all duration-300 ${isSticky ? "sticky bg-white shadow-md" : "absolute bg-transparent"
        }`}
    >
      {/* Logo */}
      <Image
        className="cursor-pointer"
        alt="Logo"
        src="/assets/logo.svg"
        width={150}
        height={50}
        priority={true}
      />

      {/* Navigation Links (hidden on small screens, visible on larger) */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex space-x-6 font-bold justify-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-[#392467] px-4 py-2 hover:bg-[#392467] hover:text-white whitespace-nowrap rounded-[25px] transition-all duration-300 cursor-pointer"
            >
              <Link href={item.link} scroll={false}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Language Switcher (hidden on small screens, visible on larger) */}
      <div className="hidden lg:flex flex-row px-4">
        <LanguageSwitcher />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center">
        <LanguageSwitcher />
        <button
          onClick={toggleMenu}
          className="text-[#392467] focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (shown when toggled) */}
      {isMenuOpen && (
        <div
          className={`lg:hidden absolute top-16 left-0 w-full ${isSticky ? "bg-white shadow-md" : "bg-transparent"
            } transition-all duration-300`}
        >
          <div className="flex flex-wrap justify-center items-center">
            <ul className="flex flex-col space-y-4 py-4 pr-2">
              {navItems.slice(0, Math.ceil(navItems.length / 2)).map((item, index) => (
                <li
                  key={index}
                  className="text-[#392467] px-4 py-2 hover:bg-[#392467] hover:text-white whitespace-nowrap rounded-[25px] transition-all duration-300 cursor-pointer"
                >
                  <Link href={item.link} scroll={false}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col space-y-4 py-4 pl-2">
              {navItems.slice(Math.ceil(navItems.length / 2)).map((item, index) => (
                <li
                  key={index}
                  className="text-[#392467] px-4 py-2 hover:bg-[#392467] hover:text-white whitespace-nowrap rounded-[25px] transition-all duration-300 cursor-pointer"
                >
                  <Link href={item.link} scroll={false}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
