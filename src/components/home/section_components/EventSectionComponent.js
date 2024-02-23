import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Abhaya_Libre } from "next/font/google";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
	weight: "400",
	subsets: ["latin"],
});

const abhaya_libre = Abhaya_Libre({
	weight: "600",
	subsets: ["latin"],
});

export const EventSectionComponent = (props) => {
	return (
		<div className="my-5 pt-2">
			<div className="inset-0 flex items-center justify-center">
				<Image
					src={props.path}
					height={200}
					width={350}
					alt={props.altName}
				/>
			</div>
			<div className="flex items-center justify-center">
				<div className="-mt-3 text-center rounded-md bg-[#E0B279] px-6  h-auto">
					<p className="text-[#FFF6EA] font-semibold">Highlights</p>
				</div>
			</div>
			<div className="flex-col text-center items-center justify-center">
				<div className="mt-2 p-0">
					<p
						className={`${abhaya_libre.className} leading-6  text-lg`}
					>
						{props.eventName}
					</p>
				</div>
				<div className="m-0 p-0">
					<Link
						href={props.expLink}
						className="flex flex-row justify-center"
					>
						<p
							className={`${open_sans.className}  text-sm  text-gray-600 hover:font-bold mr-2`}
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
		</div>
	);
};
