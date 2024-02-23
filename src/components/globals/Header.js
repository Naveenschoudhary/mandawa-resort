import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="border-b border-white/5 min-h-[100px] flex items-center fixed top-0 w-full bg-[#FFF6EA] z-20">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="w-20 h-20 mx-10 relative">
          <Image
            src="/images/logo.png" // Adjust the path to your logo image
            alt="logo"
            fill
            className='object-contain'
          />
        </div>
        {/* Navigation */}
        <nav className='flex justify-center items-center gap-24 mx-20'>
          <ul className="text-black flex text-center gap-24 text-sm font-bold tracking-wider">
            <li className="hover:text-[#E0B279] hover:text-shadow-lg">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#E0B279] hover:text-shadow-lg">
              <Link href="/about">About</Link>
            </li>
            <li className="hover:text-[#E0B279] hover:text-shadow-lg">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <button className="px-8 py-2 rounded-full border border-[#E0B279] text-[#E0B279] hover:bg-[#E0B279] hover:border-[#FFF6EA] hover:text-[#FFF6EA]">Book Now</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
