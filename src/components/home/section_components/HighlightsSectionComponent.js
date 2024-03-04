import React from "react";
import { SectionHeading } from "./SectionHeading";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/utlis/config";

const HighlightsSectionComponent = () => {
  return (
    <div className="bg-white">
      <div className="container pt-16 pb-64 mx-auto  relative">
        <SectionHeading
          mainHeading={"highlights"}
          subHeading={"Experience the Infinity"}
        />
        <div className="w-escape mt-4 h-[50vh] md:h-[60vh] lg:h-[90vh] relative">
          <Image
            src={`${IMAGE_BASE_URL}/PHOTO-2023-07-23-13-41-35%202.jpg`}
            alt="Highlights Image"
            fill
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="absolute -mt-36 flex flex-col items-center text-center bg-[rgba(255,246,234,0.6)] pt-8 md:mx-8 lg:mx-36 ">
          <h1 className="text-3xl">Diverse Venues</h1>
          <div className="w-40 mt-4 h-0.5 bg-[#E0B279]"></div>
          <p className="py-8 px-4 md:px-24  lg:px-72 text-lg">
            Be it an intimate affair or a big, fat Indian wedding, we have got the
            perfect space for you. Our resort offers a variety of venues, from a
            lavish banquet hall to lush green gardens, each crafted to host
            every aspect of your celebration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSectionComponent;
