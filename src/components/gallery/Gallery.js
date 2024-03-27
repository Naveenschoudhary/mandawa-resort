import ImageCard from "@/components/gallery/ImageCard";
import React, { useState } from "react";

const Gallery = () => {
  const imageUrls = [
    "https://dummyimage.com/600x400/",
    "https://dummyimage.com/600x400/",
    "https://dummyimage.com/600x400/",
    "https://dummyimage.com/600x400/",
    "https://dummyimage.com/600x400/",
    "https://dummyimage.com/600x400/",
    "https://dummyimage.com/600x400/",
  ];

  return (
    <div className="grid grid-cols-1 container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {imageUrls.map((imageUrl, index) => (
        <ImageCard key={index} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Gallery;
