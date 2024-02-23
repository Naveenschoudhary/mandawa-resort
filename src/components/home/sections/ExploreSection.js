import React from "react";
import {ExploreSectionComponent} from "../section_components/ExploreSectionComponent";
import { useState } from "react";

const ExploreSection = () => {
  return (
    <ExploreSectionComponent
      mainHeading={"Explore"}
      subHeading={"Rooms & Suites"}
      viewRoomLink={"www.google.com"}
      altName={"Hotel Image"}
      heading={
        "Reminiscent Stay at Aapna Ghar"
      }
      body={
        "Discover AapnoGhar Resort in manesar gurgaon (Gurugram), a luxury resort tucked away from the city bustle, to entertain guests with a unique holiday resort in manesar gurgaon experience.Resort in Gurgaon (Gurugram) Delhi is the ideal way to take a break to relax and enjoy a well deserved holiday near delhi."
      }
    />
  );
};

export default ExploreSection;
