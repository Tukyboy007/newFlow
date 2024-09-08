import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import LanguageSwitcher from './lang';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
  ];
  return (
    <nav className="p-4 xl:flex md:flex flex-row justify-around hidden px-20 gap-10 z-10 w-full sticky top-0">
      <Image
        className='translate-x-15 cursor-pointer'
        alt=""
        src="/assets/logo.svg"
        width={290}
        height={9}
      />
      <div className='w-[40%] pl-5'>
        <ul className="flex space-x-6 font-bold">
          {navItems.map((item, index) => (
            <li key={index} className='text-[#392467] px-4 py-2 hover:bg-[#392467] hover:text-[white] rounded-[25px] transition-all duration-300 cursor-pointer'>
              <Link href={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-row px-4'>
        <LanguageSwitcher />
      </div>

    </nav>
  )
}

export default Navbar;