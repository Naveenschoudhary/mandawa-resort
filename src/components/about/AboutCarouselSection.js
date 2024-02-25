import React from "react";
import { Slider } from "./aboutComponents/Slider";

export const AboutCarouselSection = () => {
	return (
		<div className="bg-gradient-to-r from-[#c8bdba] to-[#a49d9b] w-full min-h-screen mx-auto grid place-items-center">
			<Slider />
		</div>
	);
};
