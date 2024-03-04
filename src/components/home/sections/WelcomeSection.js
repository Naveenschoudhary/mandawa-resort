import React from "react";
import { WelcomeSectionComponent } from "../section_components/WelcomeSectionComponent";
import { IMAGE_BASE_URL } from "@/utlis/config";
export const WelcomeSection = () => {
  return (
    <WelcomeSectionComponent
      mainHeading={"Welcome"}
      subHeading={"Luxury and Nature in Harmony"}
      imageSrc={`${IMAGE_BASE_URL}/PHOTO-2023-07-23-13-41-36.jpg`}
      altName={"Hotel Image"}
      about={
        "In the heart of vibrant Rajasthan, Mandawa Resort welcomes you to a celebration that blends the magic of love with the rich tapestry of our heritage. Tucked away in the charming town of Mandawa, our resort becomes the canvas for your dream wedding, weaving together tradition and modern luxury in the most enchanting way."
      }
      message={
        "A place that offers everything you have ever dreamed of, created to fullfill your heart's desires and designed to satisfy your dreams of having an destination wedding in heart of haritage."
      }
      name={"Surj Mal singh"}
      designation={"Actor"}
    />
  );
};
