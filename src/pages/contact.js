import Herosection from "@/components/contact/Herosection";
import ContactContent from "@/components/contact/Contact";
import Layout from "@/components/globals/Layout";
import React from "react";
import { IMAGE_BASE_URL } from "@/utlis/config";

const Contact = () => {
  return (
    <Layout>
      <Herosection src={`${IMAGE_BASE_URL}PHOTO-2023-07-23-13-41-36.jpg`} />
      <ContactContent />
    </Layout>
  );
};

export default Contact;
