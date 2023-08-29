import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="border-b border-white/4 min-h-[100px] flex items-center relative" style={{zIndex:"1000"}}>
    <div className="flex items-center container mx-auto h-full">
      <div className="text-2xl flex items-center gap-24 font-semibold container mx-auto">
        <h2 className='text-accent tracking-widest text-md uppercase font-medium'>Mandawa<br/> <span className='tracking-[10px] text-black'>Resort</span> </h2>
        <ul className="text-black flex gap-8 text-sm font-medium tracking-wider ">
          <li className='hover:text-accent'>
            <Link href={"/"}>About Us</Link>
          </li>
          <li className='hover:text-accent'>
            <Link href={"/"}>Contact</Link>
          </li>
          <li className='hover:text-accent'>
            <Link href={"/"}>Rooms</Link>
          </li>
        </ul> 
      </div>
      <div>
        <button className="accentbtn whitespace-nowrap transition-colors ease-in duration-200">
          Book Now
        </button>
      </div>
      </div>
    </header>
  )
}

export default Header