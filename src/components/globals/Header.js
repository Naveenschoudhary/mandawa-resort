import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IMAGE_BASE_URL } from "@/utlis/config";
import { Dialog } from "@headlessui/react";
import BookingFrom from "./BookingForm";
import CustomModel from "./CustomModal";

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
    name: "Room",
    link: "/room",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booking, setBooking] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 500) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`border-b  border-white/5 max-h-[100px] flex items-center  w-full bg-[#FFF6EA] z-20  ${
        isHeaderVisible ? "opacity-100 top-0 fixed" : " -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between w-full items-center h-full">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={`${IMAGE_BASE_URL}logo.png`}
            alt="logo"
            width={"120"}
            height={"80"}
          />
        </Link>
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
          <button
            onClick={() => {
              console.log("Book");
              setBooking(true);
            }}
            className="px-8 py-2 rounded-full border border-[#E0B279] text-[#E0B279] hover:bg-[#E0B279] hover:border-[#FFF6EA] hover:text-[#FFF6EA]"
          >
            Book Now
          </button>
        </nav>
      </div>
      {booking && (
        <CustomModel isOpen={booking} setIsOpen={setBooking}>
          <BookingFrom />
        </CustomModel>
      )}
      {menuOpen && (
        <ul className="text-black px-4 py-4 bg-primary md:hidden bg-background w-full top-[100%] absolute flex flex-col  text-start gap-6 text-md tracking-wider">
          {Menu.map((item, i) => (
            <li key={i} className="hover:text-[#E0B279] hover:text-shadow-lg">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
          <button
            onClick={() => {
              console.log("Book");
              setBooking(true);
            }}
            className="px-8 py-2 rounded-full border border-[#E0B279] text-[#E0B279] hover:bg-[#E0B279] hover:border-[#FFF6EA] hover:text-[#FFF6EA]"
          >
            Book Now
          </button>
        </ul>
      )}
    </header>
  );
};

export default Header;
