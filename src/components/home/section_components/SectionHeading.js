import React from "react";
import { Passions_Conflict } from "next/font/google";

const passions_conflict = Passions_Conflict({
  weight: "400",
  subsets: ["latin"],
});

export const SectionHeading = (props) => {
  return (
    <div>
      <div className="flex items-center justify-center h-83 m-0 p-0">
        {props.mainHeading && (
          <h2
            className={`${passions_conflict.className} mb-2 text-center lg:text-8xl  md:text-6xl text-4xl inset-0 p-0`}
          >
            {props.mainHeading}
          </h2>
        )}
      </div>
      <div className="flex items-center justify-center h-74 w-auto pt-2 pb-2 -mt-4 mb-2">
        <h3 className="text-center mb-8 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl">
          {props.subHeading}
        </h3>
      </div>
    </div>
  );
};
