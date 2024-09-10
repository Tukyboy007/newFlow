import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./lang";

interface Buttons {
  buttons: string[];
}

const Navbar: React.FC<Buttons> = ({ buttons }) => {
  const [isSticky, setIsSticky] = useState(false);

  const navItems = [
    { name: buttons[0], link: "#home" }, // ID for home section
    { name: buttons[1], link: "#about" }, // ID for about section
    { name: buttons[2], link: "#services" }, // ID for services section
    { name: buttons[3], link: "#contact" }, // ID for contact section
  ];

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
      className={`p-4 hidden xl:flex md:flex flex-row justify-between items-center px-20 gap-10 z-50 w-full top-0 transition-all duration-300 ${
        isSticky ? "sticky bg-white shadow-md" : "absolute bg-transparent"
      }`}
    >
      {/* Logo with optional dynamic sizing */}
      <Image
        className="cursor-pointer"
        alt="Logo"
        src="/assets/logo.svg"
        width={150}
        height={50}
        priority={true}
      />
      {/* Navigation Links */}
      <div className="w-[40%] pl-5">
        <ul className="flex space-x-6 font-bold">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-[#392467] px-4 py-2 hover:bg-[#392467] hover:text-[white] rounded-[25px] transition-all duration-300 cursor-pointer"
            >
              <Link href={item.link} scroll={false}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Language Switcher */}
      <div className="flex flex-row px-4">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
