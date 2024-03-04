import React from "react";
import { ExploreSectionComponent } from "../section_components/ExploreSectionComponent";
import { useState } from "react";

const ExploreSection = () => {
  return (
    <ExploreSectionComponent
      mainHeading={"Explore"}
      subHeading={"Rooms & Suites"}
      viewRoomLink={"/rooms"}
      altName={"Hotel Image"}
      heading={"Mandawa resort"}
      body={
        "Discover the lap of luxury at Mandawa Resort's enchanting array of rooms and suites. Each space is meticulously crafted to offer a haven of serenity, providing the perfect respite for you and your loved ones. Immerse yourself in the regal ambience, where the essence of traditional Rajasthani aesthetics harmoniously merges with contemporary comforts. The rooms embody a blend of grandeur and intimacy, ensuring that your stay is as memorable as the festivities themselves. From expansive suites boasting panoramic views to snug rooms adorned with artistic detailing, Mandawa Resort creates an oasis of relaxation amidst the vibrant celebrations. Experience the allure of Rajasthan within the walls of your private retreat, where every moment becomes a celebration of luxury and elegance."
      }
    />
  );
};

export default ExploreSection;
