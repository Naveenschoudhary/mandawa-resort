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
		<div className="my-10 container mx-auto m-4 bg-[#FFF6EA]">
			<SectionHeading
				mainHeading={props.mainHeading}
				subHeading={props.subHeading}
			/>
			<div>
				<Link
					href={props.viewRoomLink}
					className="flex flex-row justify-center"
				>
					<p className={`${open_sans.className}  text-sm  text-gray-600 hover:font-bold mr-2`}>
						view all rooms
					</p>
					<FaArrowRightLong className="text-[#E0B279]"/>
				</Link>
			</div>
			<div className="mt-5 grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
				<div className="inset-0 flex items-center justify-center">
					<Image
						src={props.imageSrc}
						height={393.34}
						width={600}
						alt={props.altName}
					/>
				</div>
				<div>
					<div className="pt-8 pl-6 pr-5">
						<h1
							className={`${open_sans.className}`}
						>
							{props.heading}
						</h1>
                        <p
							className={`${open_sans.className} sm:text-base  md:text-sm lg:text-lg xl:text-lg`}
						>
							{props.body}
						</p>
                        <button className="px-8 py-2 rounded-full border bg-[#E0B279] border-[#FFF6EA] text-[#FFF6EA] hover:bg-[#FFF6EA] hover:border-[#E0B279] hover:text-[#E0B279]">Book Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};
