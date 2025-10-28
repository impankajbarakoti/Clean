import React from 'react'
import ContactHeader from './ContactHeader'
import BookingFormSection from './BookingFormSection'
import ContactInfoSection from './ContactInfoSection'
import LocationsMapSection from './LocationsMapSection'
// import BookingPromoSection from './BookingPromoSection'

const Contacty = () => {
  return (
    <div>
          <ContactHeader />
          <BookingFormSection />
          <ContactInfoSection />
          <LocationsMapSection />
          {/* <BookingPromoSection/> */}
    </div>
  )
}

export default Contacty
