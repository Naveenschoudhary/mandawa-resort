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
import { FaYoutube } from "react-icons/fa";

const abhay_libre = Abhaya_Libre({
  weight: "400",
  subsets: ["latin"],
});

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer
      className={`${open_sans.className} bg-[#E0B279] text-black py-8 max-h-min`}
    >
      <div className="flex justify-center mb-4">
        <div className="flex items-center">
          <Image
            src="/images/footerLogo.png"
            height={97}
            width={165}
            alt="Logo"
            className="mr-2"
          />
        </div>
      </div>
      <div className="container flex justify-around">
        {/* Links */}
        <div className="flex flex-col">
          <h4 className={`${abhay_libre.className} text-xl mb-2 text-center`}>
            Useful Links
          </h4>
          <div className="flex justify-between">
            <ul className="mr-10">
              <li>
                <Link href="#">LUXURY STAY</Link>
              </li>
              <li>
                <Link href="#">ENTERTAINMENT</Link>
              </li>
              <li>
                <Link href="#">DINING</Link>
              </li>
              <li>
                <Link href="#">EVENTS</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">ABOUT US</Link>
              </li>
              <li>
                <Link href="#">CAREER</Link>
              </li>
              <li>
                <Link href="#">OUR HISTORY</Link>
              </li>
              <li>
                <Link href="#">GALLERY</Link>
              </li>
              <li>
                <Link href="#">CONTACT US</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="mr-8 h-52 border-r border-white"></div>

        {/* Contact Details */}
        <div className="flex flex-col">
          <div className="flex items-center flex-col">
            <Image
              src={"/images/icon_map_marker.png"}
              height={42}
              width={30}
              alt="Location icon"
            />
            <p className="my-2 text-black">
              Sector 77, Gurugram, Haryana 122004
            </p>
          </div>
          <div className="flex items-center flex-col">
            <Image
              src={"/images/icon_viber.png"}
              height={31}
              width={30}
              alt="Viber icon"
            />
            <p className="mt-2 text-black">+91-7666779997</p>
            <p className="mt-0 text-black text-xs">(24/7 Open Line)</p>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="h-52 border-r border-white"></div>

        {/* Social Media */}
        <div className="flex flex-col">
          <h4 className="text-xl text-left font-semibold mb-2">
            Subscribe Our Newsletter
          </h4>
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-gray-300 rounded-md pl-1 pr-6 w-full focus:outline-none focus:border-blue-500"
          />
          <div className="text-center flex flex-start">
            <button
              className={`${abhay_libre.className} bg-black text-white text-xs my-2 py-2 px-2  rounded-full inline-flex items-center`}
            >
              SUBSCRIBE NOW
            </button>
          </div>
          <h4
            className={`${abhay_libre.className} text-xl text-left font-semibold mb-2`}
          >
            Follow Us
          </h4>
          <div className="flex items-center">
            <Link href="#" className="mr-4">
              <Image
                src="/images/footer_icons/Facebook.png"
                height={35}
                width={35}
                alt="Facebook"
                className="h-6 w-6"
              />
            </Link>
            <Link href="#" className="mr-4">
              <Image
                src="/images/footer_icons/Instagram.png"
                height={35}
                width={35}
                alt="Instagram"
                className="h-6 w-6"
              />
            </Link>
            <Link href="#" className="mr-4">
              <Image
                src="/images/footer_icons/Twitter.png"
                height={35}
                width={35}
                alt="Twitter"
                className="h-6 w-6"
              />
            </Link>
            <Link href="#" className="mr-4">
              <Image
                src="/images/footer_icons/Pinterest.png"
                height={35}
                width={35}
                alt="Pinterest"
                className="h-6 w-6"
              />
            </Link>
            <Link href="#">
              <FaYoutube className="text-xl text-red-600" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
