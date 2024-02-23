import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";

const Menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="border-b  border-white/5 max-h-[100px] flex items-center fixed top-0 w-full bg-[#FFF6EA] z-20">
      <div className="container mx-auto flex justify-between w-full items-center h-full">
        {/* Logo */}
        <div className="w-20 h-20 relative">
          <Image
            src="/images/logo.png"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        {/* Navigation */}
        <nav className="flex justify-center items-center gap-8">
          <ul className="text-black hidden md:flex  text-center gap-6 text-md tracking-wider">
            {Menu.map((item, i) => (
              <li key={i} className="hover:text-[#E0B279] hover:text-shadow-lg">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          >
            <CiMenuBurger className="text-xl md:hidden" />
          </button>
          <button className="px-8 py-2 rounded-full border border-[#E0B279] text-[#E0B279] hover:bg-[#E0B279] hover:border-[#FFF6EA] hover:text-[#FFF6EA]">
            Book Now
          </button>
        </nav>
      </div>
      {menuOpen && (
        <ul className="text-black px-4 py-4 bg-primary md:hidden bg-background w-full top-[100%] absolute flex flex-col  text-start gap-6 text-md tracking-wider">
          {Menu.map((item, i) => (
            <li key={i} className="hover:text-[#E0B279] hover:text-shadow-lg">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
          <button className="px-8 py-2 rounded-full border border-[#E0B279] text-[#E0B279] hover:bg-[#E0B279] hover:border-[#FFF6EA] hover:text-[#FFF6EA]">
            Book Now
          </button>
        </ul>
      )}
    </header>
  );
};

export default Header;
