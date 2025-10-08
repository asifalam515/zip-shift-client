import React from "react";
import Banner from "../Banner/Banner";
import ServicesSection from "../ServicesSection/ServicesSection";
import ClientLogoSlider from "../ClientLogoSlider/ClientLogoSlider";
import FeaturesGrid from "../FeaturesGrid/FeaturesGrid";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <ClientLogoSlider></ClientLogoSlider>
      <FeaturesGrid></FeaturesGrid>
    </div>
  );
};

export default Home;
