import React from 'react'
import AboutUs from './AboutUs'
import AboutFeatureSection from './AboutFeatureSection'
import ScheduleEstimateSection from '../Components/ScheduleEstimateSection'
import MissionSection from './MissionSection'
import Testimonial from '../Components/Testimonial'
import StillHaveQuestionsBanner from '../Components/StillHaveQuestionsBanner'


const Abouty = () => {
  return (
    <div>
          <AboutUs />
          <AboutFeatureSection />
          <ScheduleEstimateSection />
          <MissionSection />
          <Testimonial />
          <StillHaveQuestionsBanner/>
        
    </div>
  )
}

export default Abouty
