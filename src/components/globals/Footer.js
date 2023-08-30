import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <footer className="text-center bg-[url('/images/footerbg.jpg')] bg-cover bg-center  tracking-wider w-full  text-white relative">
        <div className="bg-black/50 backdrop-brightness-75">
      <div className="container border-l border-r z-2 mx-auto border-white/40">
        <div className="container px-6 pt-12">
          <div className="mb-6 flex flex-col md:hidden fill-white text-3xl ">
        <h2 className='text-accent tracking-widest text-md uppercase font-medium'>Mandawa<br/> <span className='tracking-[10px] text-white'>Resort</span> </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-6 hidden md:block  fill-white">
        <h2 className='text-accent text-left text-2xl tracking-widest text-md uppercase font-medium'>Mandawa<br/> <span className='tracking-[10px] text-white'>Resort</span> </h2>
              <div className="text-left my-4">
                <p className="pr-8">
                  <strong>Address:</strong>
                  Mandawa Kothi, Heritage Street, Ward No. 5, Mandawa, Dist.
                  Jhunjhunu, Rajasthan 333704
                </p>
                <p className="pr-8 my-2">
                  <strong>Phone Number :</strong>
                  +91 9351154969
                </p>
              </div>
            </div>
            <div className="mb-6">
              <div className=" font-normal text-left mb-2.5 uppercase ">
                Pages
              </div>

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
              <div className=" font-normal mb-2.5 text-left uppercase ">
                Accomodation
              </div>

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
              <div className=" font-normal mb-2.5 text-left uppercase ">
                legal
              </div>

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
          © 2022-2023 Mandawa Resort . All rights reserved.
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
