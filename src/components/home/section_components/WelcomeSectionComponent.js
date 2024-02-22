import React from "react";
import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { SectionHeading } from "../section_components/SectionHeading";

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const WelcomeSectionComponent = (props) => {
  return (
    <div className="container mx-auto m-4">
      <SectionHeading
        mainHeading={props.mainHeading}
        subHeading={props.subHeading}
      />
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="inset-0 flex items-center justify-center">
          <Image
            src={props.imageSrc}
            height={393.34}
            width={600}
            alt={props.altName}
          />
        </div>
        <div>
          <div className="pt-8 pl-6 pr-5">
            <p
              className={`${open_sans.className} sm:text-base  md:text-sm lg:text-lg xl:text-lg`}
            >
              {props.about}
            </p>
          </div>
          <div className="mt-4 pr-5 pl-10">
            <div>
              <p className="font-semibold text-gray-800 sm:text-base  md:text-sm lg:text-lg xl:text-lg">
                {props.message}
              </p>
            </div>
            <div className="mt-3">
              <p className="font-bold text-gray-800 sm:text-base  md:text-sm lg:text-lg xl:text-lg">
                {props.name}
              </p>
              <p className="-mt-2 text-gray-600 font-semibold sm:text-base  md:text-sm lg:text-lg xl:text-lg">
                {props.designation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
