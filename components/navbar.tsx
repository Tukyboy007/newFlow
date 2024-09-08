import React from 'react';
import Link from 'next/link';
import Image from "next/image";

const Navbar: React.FC = () => {
    const navItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Contact', link: '/contact' },
      ];
    return(
        <nav className="p-4 flex flex-row justify-around">
           <Image
            alt=""
          src="/assets/arrow-down.png"
          width={188 / 3}
          height={105 / 3}
        />
        <ul className="flex space-x-6 font-bold">
          {navItems.map((item, index) => (
            <li key={index} className='text-[#392467] px-4 py-2 hover:bg-[#392467] hover:text-[white] rounded-[25px] transition-all duration-300 cursor-pointer'>
              <Link href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex flex-row px-4 py-2  text-[#c56b2f] cursor-pointer'>
            <h1 className='font-bold '>EN</h1>
            <h1>MG</h1>
        </div>
      </nav>
    )
}

export default Navbar;