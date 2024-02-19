import HeroSection from "@/components/about/HeroSection";
import Layout from "@/components/globals/Layout";
import React from "react";

const About = () => {
  return (
    <div>
      <Layout>
        <HeroSection thumbnailSrc="https://dummyimage.com/1600x1200/" />
      </Layout>
    </div>
  );
};

export default About;
