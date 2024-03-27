import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import Image from "next/image";

const ImageCard = ({ imageUrl }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="group cursor-pointer relative">
      <Image
        src={imageUrl}
        alt="Image"
        layout="responsive"
        width={400} // Set your desired width here
        height={300} // Set your desired height here
        className="object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="bg-white text-gray-800 px-2 py-2 rounded-full hover:bg-gray-200 transition-colors"
          onClick={toggleFullScreen}
        >
          <FaEye />
        </button>
      </div>
      {isFullScreen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-90 flex">
          <button
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
            onClick={toggleFullScreen}
          >
            &#10005;
          </button>
          <Image
            src={imageUrl}
            alt="Full Screen"
            objectFit="cover"
            fill
            style={{ maxWidth: "70vw", maxHeight: "70vh" }}
            className="m-auto max-h-full max-w-full"
          />
        </div>
      )}
    </div>
  );
};

export default ImageCard;
