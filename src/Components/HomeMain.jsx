import React from "react";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";

import AboutUsSection from "./AboutUsSection";
import FeatureCardsSection from "./FeatureCardsSection";
import ScheduleEstimateSection from "./ScheduleEstimateSection";
import ClientSatisfactionSection from "./ClientSatisfactionSection";
import Testimonial from "./Testimonial";
import StillHaveQuestionsBanner from "./StillHaveQuestionsBanner";
import OffersAndDiscounts from "./OffersAndDiscounts";
import BlogPreviewSection from "./BlogPreviewSection";
import JoinTeamBanner from "./JoinTeamBanner";
import PopularServicesSections from "./PopularServicesSections";

const HomeMain = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorksSection />
      <PopularServicesSections/>
      <AboutUsSection />
      <FeatureCardsSection />
      <ScheduleEstimateSection />
      <ClientSatisfactionSection />
      <Testimonial />
      <StillHaveQuestionsBanner />
      <OffersAndDiscounts />
      <BlogPreviewSection />
      <JoinTeamBanner/>
      
    </div>
  );
};

export default HomeMain;
