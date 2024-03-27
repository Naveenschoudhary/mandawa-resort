import React from "react";
import Image from "next/image";

export const AboutHeroSection = () => {
  return (
    <div className="h-[50vh] md:h-[60vh] lg:h-[90vh] relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={"/images/aboutImages/about-hero-main.png"}
          alt={"Image"}
          fill
          className="w-full h-full object-cover  opacity-50"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className=" text-black text-4xl md:text-6xl lg:text-8xl   font-extrabold">
          About Us
        </p>
        <p className="w-4/5 sm:w-9/12 md:w-4/6 mt-2 md:mt-3 font-bold text-center text-sm sm:text-lg lg:text-xl text-[#1f201f]">
          Experience tranquility and luxury at Mandawa Resort, where every
          moment is a journey into blissful relaxation amidst breathtaking
          natural beauty.
        </p>
      </div>
    </div>
  );
};
