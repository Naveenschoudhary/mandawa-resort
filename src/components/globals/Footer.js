// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const footerPages = [
//   {
//     name: "Home",
//     link: "/",
//   },
//   {
//     name: "Contact",
//     link: "/contact",
//   },
//   {
//     name: "Book Rooms",
//     link: "/accommodation",
//   },
//   {
//     name: "Events",
//     link: "/events",
//   },
//   {
//     name: "Gallery",
//     link: "/gallery",
//   },
// ];
// const legal = [
//   {
//     name: "Terms of Service",
//     link: "/termsofservice",
//   },
//   {
//     name: "Privacy Policy",
//     link: "/privacy-policy",
//   },
// ];
// const accommodation = [
//   {
//     name: "Blog",
//     link: "/blog",
//   },
//   {
//     name: "Reservation",
//     link: "/reservation",
//   },
// ];

// const Footer = () => {
//   return (
//     <footer className="text-center bg-[url('/images/footerbg.jpg')] bg-cover bg-center  tracking-wider w-full  text-white relative">
//         <div className="bg-black/50 backdrop-brightness-75">
//       <div className="container border-l border-r z-2 mx-auto border-white/40">
//         <div className="container px-6 pt-12">
//           <div className="mb-6 flex flex-col md:hidden fill-white text-3xl ">
//         <h2 className='text-accent tracking-widest text-md uppercase font-medium'>Mandawa<br/> <span className='tracking-[10px] text-white'>Resort</span> </h2>
//           </div>
//           <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2">
//             <div className="mb-6 hidden md:block  fill-white">
//         <h2 className='text-accent text-left text-2xl tracking-widest text-md uppercase font-medium'>Mandawa<br/> <span className='tracking-[10px] text-white'>Resort</span> </h2>
//               <div className="text-left my-4">
//                 <p className="pr-8">
//                   <strong>Address:</strong>
//                   Mandawa Kothi, Heritage Street, Ward No. 5, Mandawa, Dist.
//                   Jhunjhunu, Rajasthan 333704
//                 </p>
//                 <p className="pr-8 my-2">
//                   <strong>Phone Number :</strong>
//                   +91 9351154969
//                 </p>
//               </div>
//             </div>
//             <div className="mb-6">
//               <div className=" font-normal text-left mb-2.5 uppercase ">
//                 Pages
//               </div>

//               <ul className="list-none text-left text-sm mb-0">
//                 {footerPages.map((page, i) => {
//                   return (
//                     <React.Fragment key={i}>
//                       <li className="my-4">
//                         <Link href={page.link}>{page.name}</Link>
//                       </li>
//                     </React.Fragment>
//                   );
//                 })}
//                 <li></li>
//               </ul>
//             </div>
//             <div className="mb-6">
//               <div className=" font-normal mb-2.5 text-left uppercase ">
//                 Accomodation
//               </div>

//               <ul className="list-none mb-0 text-left text-sm">
//                 {accommodation.map((page, i) => {
//                   return (
//                     <React.Fragment key={i}>
//                       <li className="my-4">
//                         <Link href={page.link}>{page.name}</Link>
//                       </li>
//                     </React.Fragment>
//                   );
//                 })}
//                 <li></li>
//               </ul>
//             </div>
//             <div className="mb-6">
//               <div className=" font-normal mb-2.5 text-left uppercase ">
//                 legal
//               </div>

//               <ul className="list-none mb-0 text-left text-sm">
//                 {legal.map((page, i) => {
//                   return (
//                     <React.Fragment key={i}>
//                       <li className="my-4">
//                         <Link href={page.link}>{page.name}</Link>
//                       </li>
//                     </React.Fragment>
//                   );
//                 })}
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex flex-col gap-2 items-center ">
//             <div>
//               <div className="flex gap-2"></div>
//             </div>
//             <div>
//               <div className="flex gap-2"></div>
//             </div>
//           </div>
//         </div>

//         <div className="text-center tracking-wider text-xs py-6">
//           © 2022-2023 Mandawa Resort . All rights reserved.
//         </div>
//       </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Abhaya_Libre } from "next/font/google";
import { Open_Sans } from "next/font/google";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const abhay_libre = Abhaya_Libre({
  weight: "800",
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className={`${open_sans.className} bg-[#131A22] text-white py-8`}>
      <div className="flex justify-center mb-4">
        <div className="flex items-center">
          <Image
            src="/images/Logo.png"
            height={97}
            width={165}
            alt="Logo"
            className="mr-2"
          />
        </div>
      </div>
      <div className="container mb-3 divide-y-2 gap-y-4 md:divide-x-2 md:divide-y-0 grid sm:grid-cols-1 md:grid-cols-3 mx-auto">
        {/* Links */}
        <div className="flex flex-col mt-3 md:mt-0">
          <h4 className="text-xl font-semibold mb-2 text-center">
            Useful Links
          </h4>
          <div className="flex mx-auto space-x-8">
            <div>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Luxury Stay
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Dining
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Our History
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col mt-3 md:mt-0 text-xl">
          <div className="flex items-center flex-col">
            <FaLocationDot className="mt-2 text-xl text-white" />
            <p className="mt-2 mb-3 text-center text-white">
              Sector 77, Gurugram,<br></br> Haryana 122004
            </p>
          </div>
          <div className="flex mt-3 items-center text-center flex-col">
            <FaPhoneVolume className="text-xl text-white" />
            <p className="mt-2">+91-7666779997</p>
            <p className="mt-0 text-xs">(24/7 Open Line)</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center">
          <div className="mt-3 md:mt-0 sm:text-center md:text-center lg:text-left">
            <h4 className="text-xl font-semibold mb-2">
              Subscribe Our Newsletter
            </h4>
            <input
              type="email"
              placeholder="Enter your email address"
              className="border text-black border-gray-300 rounded-md pl-1 pr-6 w-full focus:outline-none focus:bg-gray-200"
            />
            <button
              className={`${open_sans.className} block bg-gray-400 text-black text-xs my-2 py-2 px-2 rounded-full hover:text-white hover:bg-gray-600 transition duration-300`}
            >
              SUBSCRIBE NOW
            </button>
            <h4 className={`${abhay_libre.className} text-xl mb-2 text-left`}>
              Follow Us
            </h4>
            <div className="flex items-center">
              <Link href="#" className="mr-4">
                <FaFacebookSquare className="hover:drop-shadow-[0_6px_6px_rgba(255,255,255,0.25)] transition duration-100 text-xl text-blue-700" />
              </Link>
              <Link href="#" className="mr-4">
                <FaInstagram className="hover:drop-shadow-[0_6px_6px_rgba(255,255,255,0.25)] transition duration-100 text-xl" />
              </Link>
              <Link href="#" className="mr-4">
                <FaXTwitter className="hover:drop-shadow-[0_7px_7px_rgba(255,255,255,0.25)] transition duration-100 text-xl text-blue-500" />
              </Link>
              <Link href="#" className="mr-4">
                <FaPinterest className="hover:drop-shadow-[0_6px_6px_rgba(255,255,255,0.25)] transition duration-100 text-xl text-red-600" />
              </Link>
              <Link href="#">
                <FaYoutube className="hover:drop-shadow-[0_6px_6px_rgba(255,255,255,0.25)] transition duration-100 text-xl text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
