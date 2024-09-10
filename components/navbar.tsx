import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "./lang";

interface Buttons {
  buttons: string[];
}

const Navbar: React.FC<Buttons> = ({ buttons }) => {
  const navItems = [
    { name: buttons[0], link: "#home" },     // ID for home section
    { name: buttons[1], link: "#about" },    // ID for about section
    { name: buttons[2], link: "#services" }, // ID for services section
    { name: buttons[3], link: "#contact" },  // ID for contact section
  ];

  return (
    <nav className="p-4 xl:flex md:flex flex-row justify-around hidden px-20 gap-10 z-10 w-full sticky top-0">
      <Image
        className="translate-x-15 cursor-pointer"
        alt="Logo"
        src="/assets/logo.svg"
        width={290}
        height={90} // Corrected height
      />
      <div className="w-[40%] pl-5">
        <ul className="flex space-x-6 font-bold">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-[#392467] px-4 py-2 hover:bg-[#392467] hover:text-[white] rounded-[25px] transition-all duration-300 cursor-pointer"
            >
              {/* Using Next.js Link component to navigate to IDs */}
              <Link href={item.link} scroll={false}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row px-4">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
