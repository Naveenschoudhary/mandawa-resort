import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { SectionHeading } from "../section_components/SectionHeading";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

const open_sans = Open_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const ExploreSectionComponent = (props) => {
  const [images, setImages] = useState([
    "/images/footerbg.jpg",
    "/images/sectionImages/Blog-img.png",
    "/images/sectionImages/Venue-img.png",
    "/images/sectionImages/Wedding-img.png",
  ]); // Array of image paths
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true); // Auto-play images

  // Auto-play images
  useEffect(() => {
    let interval;
    if (isAutoPlayEnabled) {
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isAutoPlayEnabled, images.length]);

  // Handler for previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handler for next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="bg-primary">
      <div className="py-5 container mx-auto relative overflow-hidden">
        <SectionHeading
          mainHeading={props.mainHeading}
          subHeading={props.subHeading}
        />
        <div className="pb-4">
          <Link
            href={props.viewRoomLink}
            className="flex flex-row items-center justify-center"
          >
            <p
              className={`${open_sans.className}  text-sm my-4  text-gray-600 hover:font-bold`}
            >
              view all rooms
            </p>
            <FaArrowRightLong className="text-[#E0B279]" />
          </Link>
        </div>
        <div className="mt-5 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div
            className="relative h-96"
            style={{ maxHeight: "600px" }} // Specify the maximum height here
          >
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`image-${index}`}
                  className="carousel-image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              className="absolute bottom-4 right-4 text-white text-6xl z-10"
              onClick={prevImage}
            >
              <HiOutlineArrowSmRight />
            </button>
            <button
              className="absolute bottom-4 right-16 text-white text-6xl z-10"
              onClick={nextImage}
            >
              <HiOutlineArrowSmLeft />
            </button>
          </div>

          <div className="flex flex-col justify-center px-4 mt-4  md:px-24 items-start">
            <h1
              className={`${open_sans.className} text-center sm:text-base  md:text-sm lg:text-lg mb-4 `}
            >
              {props.heading}
            </h1>
            <p
              className={`${open_sans.className} sm:text-base tracking-wider md:text-sm lg:text-sm xl:text-sm`}
            >
              {props.body}
            </p>
            <button className="mt-4 px-8 py-2 rounded-full shadow-lg hover:border bg-[#E0B279] border-[#FFF6EA] text-[#FFF6EA] hover:bg-[#FFF6EA] hover:border-[#E0B279] hover:text-[#E0B279]">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
