import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../section_components/SectionHeading";
import { Open_Sans } from "next/font/google";
import { IMAGE_BASE_URL } from "@/utlis/config";

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const TasteSection = () => {
  return (
    <div className="bg-primary py-16">
      <div className="container mx-auto">
        <SectionHeading subHeading={"The Taste of Life"} mainHeading={"Food"} />
        <div className="flex flex-wrap items-center justify-evenly w-[vw]">
          <div className="inset-0 m-2 rounded">
            <Image
              src={`${IMAGE_BASE_URL}/PHOTO-2023-07-23-13-41-37%202.jpg`}
              height={200}
              width={550}
              alt="image"
              className="rounded"
            />
          </div>
          <div className="inset-0 m-2 rounded-md">
            <Image
              src={`${IMAGE_BASE_URL}/PHOTO-2023-07-23-13-41-39%202.jpg`}
              height={200}
              width={550}
              alt="image"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
