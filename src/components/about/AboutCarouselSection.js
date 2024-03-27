import React from "react";
import { Slider } from "./aboutComponents/Slider";
import AboutImageBlock from "./AboutImageBlock";

export const AboutCarouselSection = () => {
  return (
    <div className="w-full my-8 container mx-auto grid place-items-center">
      <Slider />
    </div>
  );
};
