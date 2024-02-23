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
        "Discover Mandawa Resort in (Mandawa), a luxury resort tucked away from the city bustle, to entertain guests with a unique holiday resort in manesar gurgaon experience.Resort in Gurgaon (Gurugram) Delhi is the ideal way to take a break to relax and enjoy a well deserved holiday near delhi."
      }
    />
  );
};

export default ExploreSection;
