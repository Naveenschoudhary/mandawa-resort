import React from "react";
import Image from "next/image";

const Herosection = (props) => {
  return (
    <>
      <div className="w-escape  h-[50vh]  md:h-[60vh] lg:h-[90vh]  relative">
        <div className="absolute  w-full h-full">
          <Image
            quality={100}
            src={
              props.src
                ? props.src
                : "https://res.cloudinary.com/dyrsv9303/image/upload/v1674398264/mandawa/herobackground_viyscc.png"
            }
            alt="hero Picture"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div className="h-[300px]  md:h-[400px] lg:h-[600px] absolute inset-0 flex justify-center items-center z-5 bg-gradient-to-b from-black/60 to-tranparent  "></div>
    </>
  );
};

export default Herosection;
