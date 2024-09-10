import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/lang";

interface Buttons {
  buttons: string[];
}

const NavbarMobile: React.FC<Buttons> = ({ buttons }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change to sticky when scrolled past 560px
      if (window.scrollY > 560) {
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

  const navItems = [
    { name: buttons[0], link: "#home" }, // ID for home section
    { name: buttons[1], link: "#about" }, // ID for about section
    { name: buttons[2], link: "#services" }, // ID for services section
    { name: buttons[3], link: "#contact" }, // ID for contact section
  ];

  return (
    <div
      className={`z-50 w-[80%] min-h-screen ${
        isSticky ? "sticky top-0" : "absolute top-0"
      } transition-all duration-300`}
    >
      <div className="flex justify-between items-center p-4">
        <Image
          className="cursor-pointer"
          alt="Logo"
          src="/assets/logo.svg"
          width={150}
          height={50}
          priority={true}
        />
        <LanguageSwitcher />
      </div>
      <ul className="space-y-4 p-4">
        {navItems.map((item, index) => (
          <li key={index} className="text-white">
            <Link href={item.link}>
              <div className="block px-4 py-2 rounded-lg hover:bg-white hover:text-red transition-all">
                {item.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarMobile;
