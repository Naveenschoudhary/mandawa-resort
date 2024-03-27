import { IMAGE_BASE_URL } from "@/utlis/config";
import Image from "next/image";
import React from "react";

const RoomsImgBlock = () => {
  return (
    <div className="bg-white container h-screen h-full py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <Image
              src={`${IMAGE_BASE_URL}PHOTO-2023-07-23-13-39-20%209.jpg`}
              loading="lazy"
              alt="Photo loading"
              fill
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Standard Rooms
            </span>
          </div>
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image
              src={`${IMAGE_BASE_URL}PHOTO-2023-07-23-13-39-20%2010.jpg`}
              loading="lazy"
              alt="Photo by Magicle"
              fill
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Dulex Room
            </span>
          </div>
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <img
              src={`${IMAGE_BASE_URL}PHOTO-2023-07-23-13-41-31%202.jpg`}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Super Dulex Rooms
            </span>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <Image
              src={`${IMAGE_BASE_URL}loddy.jpeg`}
              loading="lazy"
              fill
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Party Place
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsImgBlock;
