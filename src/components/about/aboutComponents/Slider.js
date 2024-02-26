"use client";

import React, { useEffect, useState } from "react";
import { images } from "./SliderConstants";
import Image from "next/image";
import { SliderDescription } from "./SliderDescription";

export const Slider = () => {
	const [activeImage, setActiveImage] = useState(0);

	const clickNext = () => {
		activeImage === images.length - 1
			? setActiveImage(0)
			: setActiveImage(activeImage + 1);
	};

	const clickPrev = () => {
		activeImage === 0
			? setActiveImage(images.length - 1)
			: setActiveImage(activeImage - 1);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			clickNext();
		}, 10000);
		return () => {
			clearTimeout(timer);
		};
	}, [activeImage]);

	return (
		<div className="grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
			<div
				className="w-full grid place-items-center grid-cols-1 md:grid-cols-2 gap-2 transition-transform 
            ease-in-out duration-500 md:rounded-2xl p-6 md:p-0 "
			>
				{images.map((pic, idx) => (
					<div
						className={`${
							idx === activeImage
								? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
								: "hidden"
						}`}
						key={idx}
					>
						<Image
							src={pic.src}
							alt="image"
							width={400}
							height={400}
							className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
						/>
					</div>
				))}
				<SliderDescription
					activeImgIdx={activeImage}
					clickNext={clickNext}
					clickPrev={clickPrev}
				/>
			</div>
		</div>
	);
};
