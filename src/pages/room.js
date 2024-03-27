import Herosection from "@/components/contact/Herosection";
import Layout from "@/components/globals/Layout";
import BookingFormComp from "@/components/rooms/BookingForm";
import RoomsImgBlock from "@/components/rooms/RoomsImgBlock";
import { IMAGE_BASE_URL } from "@/utlis/config";
import React from "react";

const room = () => {
  return (
    <Layout>
      <Herosection src={`${IMAGE_BASE_URL}loddy.jpeg`} />
      <RoomsImgBlock />
      <BookingFormComp />
    </Layout>
  );
};

export default room;
