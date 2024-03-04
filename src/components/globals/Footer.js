import React from "react";
import Link from "next/link";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/utlis/config";

const footerPages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Book Rooms",
    link: "/accommodation",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
];
const legal = [
  {
    name: "Terms of Service",
    link: "/termsofservice",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
];
const accommodation = [
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Reservation",
    link: "/reservation",
  },
];

const Footer = () => {
  return (
    <footer className="text-center tracking-wider w-full bg-black  text-white">
      <div className="border-b border-gray-700 items-center flex justify-end">
        <div className="flex my-4 gap-8 container justify-between items-center px-4 ">
          <div className="flex gap-8">
            <Link href={"tel:+91-97720 88555"} target="_blank">
              <BsTelephone className="w-6 h-6" />
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send?phone=+91-97720 88555&text=Hello"
              }
              target="_blank"
            >
              <BsWhatsapp className="w-6 h-6" />
            </Link>
            <Link
              href={"https://www.instagram.com/mandawakothi/"}
              target="_blank"
            >
              <AiOutlineInstagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container px-6 pt-12">
          <div className="mb-6 flex flex-col md:hidden fill-white text-3xl ">
            <Image
              src={`${IMAGE_BASE_URL}/logo.png`}
              width={"200"}
              height={"100"}
              alt="logo"
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-6 hidden md:block  fill-white">
              <Image
                src={`${IMAGE_BASE_URL}/logo.png`}
                width={"150"}
                height={"100"}
                alt="logo"
              />
              <div className="text-left my-4">
                <p className="pr-8">
                  <strong>Address :</strong>
                  Mandawa Resort, Fatehpur Road, Mandawa, District Jhunjhnu,
                  Rajasthan
                </p>
                <p className="pr-8 my-2">
                  <strong>Phone Number :</strong>
                  +91-97720 88555
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h5 className=" font-normal text-left mb-2.5 uppercase font-serif">
                Pages
              </h5>

              <ul className="list-none text-left text-sm mb-0">
                {footerPages.map((page, i) => {
                  return (
                    <React.Fragment key={i}>
                      <li className="my-4">
                        <Link href={page.link}>{page.name}</Link>
                      </li>
                    </React.Fragment>
                  );
                })}
                <li></li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className=" font-normal mb-2.5 text-left uppercase font-serif">
                Accomodation
              </h5>

              <ul className="list-none mb-0 text-left text-sm">
                {accommodation.map((page, i) => {
                  return (
                    <React.Fragment key={i}>
                      <li className="my-4">
                        <Link href={page.link}>{page.name}</Link>
                      </li>
                    </React.Fragment>
                  );
                })}
                <li></li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className=" font-normal mb-2.5 text-left uppercase font-serif">
                legal
              </h5>

              <ul className="list-none mb-0 text-left text-sm">
                {legal.map((page, i) => {
                  return (
                    <React.Fragment key={i}>
                      <li className="my-4">
                        <Link href={page.link}>{page.name}</Link>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2 items-center ">
            <div>
              <div className="flex gap-2"></div>
            </div>
            <div>
              <div className="flex gap-2"></div>
            </div>
          </div>
        </div>

        <div className="text-center tracking-wider text-xs py-6">
          © 2022-2023 Mandawa khoti . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
