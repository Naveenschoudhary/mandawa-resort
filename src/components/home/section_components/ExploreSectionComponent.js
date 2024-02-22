import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import { SectionHeading } from "../section_components/SectionHeading";
import { FaArrowRightLong } from "react-icons/fa6";

const open_sans = Open_Sans({
	weight: "400",
	subsets: ["latin"],
});

export const ExploreSectionComponent = (props) => {
	return (
		<div className="my-5 py-5 container mx-auto m-4 bg-[#FFF6EA]">
			<SectionHeading
				mainHeading={props.mainHeading}
				subHeading={props.subHeading}
			/>
			<div>
				<Link
					href={props.viewRoomLink}
					className="flex flex-row items-center justify-center"
				>
					<p
						className={`${open_sans.className}  text-sm  text-gray-600 hover:font-bold mr-2`}
					>
						view all rooms
					</p>
					<FaArrowRightLong className="text-[#E0B279]" />
				</Link>
			</div>
			<div className="mt-5 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
				<div className="inset-0">
					<Image
						src={props.imageSrc}
						height={457}
						width={608}
						alt={props.altName}
					/>
				</div>
				<div className="flex flex-col justify-center items-start px-36">
					<h1
						className={`${open_sans.className} text-center sm:text-base  md:text-sm lg:text-lg xl:text-lg mb-6`}
					>
						{props.heading}
					</h1>
					<p
						className={`${open_sans.className} sm:text-base  md:text-sm lg:text-sm xl:text-sm`}
					>
						{props.body}
					</p>
					<button className="mt-4 px-8 py-2 rounded-full border bg-[#E0B279] border-[#FFF6EA] text-[#FFF6EA] hover:bg-[#FFF6EA] hover:border-[#E0B279] hover:text-[#E0B279]">
						Explore
					</button>
				</div>
			</div>
		</div>
	);
};
