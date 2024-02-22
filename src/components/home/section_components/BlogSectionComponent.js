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
		<div className="m-3">
			<div className="inset-0 flex items-center justify-center">
				<Image
					src={props.path}
					height={200}
					width={350}
					alt={props.altName}
				/>
			</div>
			<div className="flex-col text-center items-center justify-center mt-2">
				<div className="mt-2 p-0">
					<p className={`${open_sans.className} leading-4 text-sm`}>
						{props.blogName}
					</p>
				</div>
				<div className="m-0 p-2 text-center">
					<p
						className={`${open_sans.className} leading-4 text-sm  text-gray-700`}
					>
						{props.date} | {props.poster}
					</p>
				</div>
			</div>
		</div>
	);
};
