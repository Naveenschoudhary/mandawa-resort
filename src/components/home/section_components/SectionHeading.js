import React from "react";

export const SectionHeading = (props) => {
  return (
    <div className="my-4">
      <div className="flex items-center justify-center h-83 m-0 p-0">
        {props.mainHeading && (
          <h2
            className={` mb-4 text-center lg:text-4xl  md:text-3xl text-2xl inset-0 p-0`}
          >
            {props.mainHeading}
          </h2>
        )}
      </div>
      <div className="flex items-center justify-center h-74 w-auto pt-2 pb-2 -mt-4 mb-2">
        <div className="text-center mb-8 2xl:text-3xl xl:text-2xl lg:text-xl text-xl">
          {props.subHeading}
        </div>
      </div>
    </div>
  );
};
