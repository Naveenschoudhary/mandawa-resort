import React from "react";
import Link from "next/link";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

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
    link: "/room",
  },
  {
    name: "Events",
    link: "/rooms",
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
    link: "#",
  },
  {
    name: "Reservation",
    link: "/room",
  },
];

const social = [
  {
    name: "facebook",
    link: "/blog",
    icon: FaFacebookF,
  },
  {
    name: "Whats App",
    link: "#",
    icon: FaWhatsapp,
  },
  {
    name: "instagram",
    link: "#",
    icon: FaInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="text-center tracking-wider w-full bg-black  text-white">
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
          <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2">
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
              <h5 className=" font-normal text-left mb-2.5 capitised font-serif">
                Pages
              </h5>

              <ul className="list-none text-left  mb-0">
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
              <h5 className=" font-normal mb-2.5 text-left capitised font-serif">
                Accomodation
              </h5>

              <ul className="list-none mb-0 text-left ">
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
              <h5 className=" font-normal mb-2.5 text-left capitised font-serif">
                legal
              </h5>

              <ul className="list-none mb-0 text-left ">
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
            <div className="mb-6">
              <h5 className=" font-normal mb-2.5 text-left capitised font-serif">
                Social
              </h5>

              <ul className="list-none mb-0 text-left ">
                {social.map((page, i) => {
                  return (
                    <React.Fragment key={i}>
                      <li className="my-4">
                        <Link href={page.link}>
                          <div className="flex gap items-center gap-2 hover:text-accent">
                            <page.icon className="w-4 h-4" />
                            <div>{page.name}</div>
                          </div>
                        </Link>
                      </li>
                    </React.Fragment>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center tracking-wider  py-6">
          © 2022-2023 Mandawa Resort . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
