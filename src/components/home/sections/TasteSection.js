import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "../section_components/SectionHeading";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
	weight: "400",
	subsets: ["latin"],
});

export const TasteSection = () => {
	return (
		<div className="container  m-4">
			<SectionHeading subHeading={"The Taste of Life"} />
			<div className="flex flex-wrap items-center justify-evenly w-[vw]">
				<div className="inset-0 m-2">
					<Image
						src="/images/sectionImages/Aapno-img.png"
						height={200}
						width={550}
						alt="image"
					/>
				</div>
				<div className="inset-0 m-2">
					<Image
						src="/images/sectionImages/Aapno-img.png"
						height={200}
						width={550}
						alt="image"
					/>
				</div>
			</div>
			<div className="mt-3 p-0">
				<Link href="#" className="flex flex-row justify-center">
					<p
						className={`${open_sans.className}  text-sm text-gray-600 hover:font-bold mr-2`}
					>
						explore more
					</p>
					<Image
						src="/right-arrow.png"
						alt="arrow-icon"
						width={15}
						height={10}
					/>
				</Link>
			</div>
		</div>
	);
};
