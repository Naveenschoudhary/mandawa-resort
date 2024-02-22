import React from "react";
import { WelcomeSectionComponent } from "../section_components/WelcomeSectionComponent";

export const WelcomeSection = () => {
	return (
		<WelcomeSectionComponent
			mainHeading={"Welcome"}
			subHeading={"Luxury and Nature in Harmony"}
			imageSrc={"/images/sectionImages/residence-area 1.png"}
			altName={"Hotel Image"}
			about={
				"AapnoGhar offers myriad possibilities for relaxation, entertainment and recreation with an ethno-modern luxury resort within Delhi/NCR since 1994. Located conveniently on Delhi-Jaipur Expressway on National Highway 8, Gurugram, the 9-acre wonderland exists in harmony with the magic of nature, being a one-stop recreation centre around Delhi/NCR."
			}
			message={
				"A place that offers everything you have ever dreamed of, created to fullfill your heart's desires and designed to satisfy your dreams of owning a home in a unique place."
			}
			name={"Leonardo P."}
			designation={"Resort Manager"}
		/>
	);
};
