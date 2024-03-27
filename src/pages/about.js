import { AboutCarouselSection } from "@/components/about/AboutCarouselSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import AboutImageBlock from "@/components/about/AboutImageBlock";
import Layout from "@/components/globals/Layout";
import React from "react";

const About = () => {
  return (
    <div>
      <Layout>
        <AboutHeroSection />
        <AboutCarouselSection />
        <AboutImageBlock />
      </Layout>
    </div>
  );
};

export default About;
