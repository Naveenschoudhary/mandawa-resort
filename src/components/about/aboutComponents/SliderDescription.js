import React from "react";
import { images } from "./SliderConstants";
import left from "../../../../public/left.svg";
import right from "../../../../public/left.svg";
import Image from "next/image";
import { motion } from "framer-motion";

export const SliderDescription = ({ clickNext, clickPrev, activeImgIdx }) => {
  return (
    <div className="grid place-items-start w-full  relative md:rounded-tr-md md:rounded-br-md">
      <div className="text-sm absolute right-4 top-2 underline-offset-4 underline">
        History to Present
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImgIdx
              ? "block w-full h-full md:h-[80vh]  py-12 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImgIdx ? 0 : 0.5,
              scale: idx === activeImgIdx ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImgIdx ? 1 : 0.5,
              scale: idx === activeImgIdx ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 1,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="  py-10 text-5xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {" "}
              {elem.desc}
            </div>
          </motion.div>
          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              onClick={clickPrev}
              className="absolute bottom-2 right-10 cursor-pointer"
            >
              <Image src={left} alt="icon" width={20} height={20} />
            </div>
            <div
              onClick={clickNext}
              className="absolute bottom-2 right-2 cursor-pointer scale-x-[-1]"
            >
              <Image src={right} alt="icon" width={20} height={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
