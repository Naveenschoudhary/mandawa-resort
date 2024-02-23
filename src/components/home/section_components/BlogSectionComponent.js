import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  weight: "500",
  subsets: ["latin"],
});

export const BlogSectionComponent = (props) => {
  return (
    <div className=" bg-white rounded">
      <Image
        className="rounded w-full"
        src={props.path}
        height={200}
        width={400}
        alt={props.altName}
      />
      <div className="flex-col py-2 px-4 text-center items-center justify-center mt-2">
        <div className="mt-2 p-0">
          <p className={`${open_sans.className} leading-4 text-sm`}>
            {props.blogName}
          </p>
        </div>
        <div className="m-0 p-2 text-center">
          <p
            className={`${open_sans.className}  text-start  text-sm font-thin leading-4  text-gray-500`}
          >
            {props.date} | {props.poster}
          </p>
        </div>
        <p className="text-end text-accent">Read More...</p>
      </div>
    </div>
  );
};
