import React from "react";
import Banner from "../Banner/Banner";
import ServicesSection from "../ServicesSection/ServicesSection";
import ClientLogoSlider from "../ClientLogoSlider/ClientLogoSlider";
import FeaturesGrid from "../FeaturesGrid/FeaturesGrid";
import BeMerchant from "../BeMerchant/BeMerchant";
import TestimonialsSection from "../TestimonialSection/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <ClientLogoSlider></ClientLogoSlider>
      <FeaturesGrid></FeaturesGrid>
      <BeMerchant></BeMerchant>
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
};

export default Home;
