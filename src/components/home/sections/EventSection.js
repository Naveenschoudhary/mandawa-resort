import React from "react";
import { SectionHeading } from "../section_components/SectionHeading";
import { EventSectionComponent } from "../section_components/EventSectionComponent";

export const EventSection = () => {
  const photos = [
    {
      id: 1,
      path: "/images/sectionImages/Banquet-hall-4.png",
      altName: "Banquet-hall-image",
      eventName: "Dining & Food",
      expLink: "#",
    },
    {
      id: 2,
      path: "/images/sectionImages/Wedding-img.png",
      altName: "Wedding-image",
      eventName: "Weddings",
      expLink: "#",
    },
    {
      id: 3,
      path: "/images/sectionImages/Venue-img.png",
      altName: "Venue-image",
      eventName: "Venues",
      expLink: "#",
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <SectionHeading
          mainHeading={"Events"}
          subHeading={"Personalised, one-of-a-kind Events."}
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  gap-x-4">
          {photos.map((photo) => (
            <EventSectionComponent
              key={photo.id}
              path={photo.path}
              altName={photo.altName}
              eventName={photo.eventName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
