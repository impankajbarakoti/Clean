import React from "react";

// Placeholder SVG for the Search/Magnifying Glass Icon
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-8 h-8 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const LocationsMapSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#f9f7f0]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Heading and Subheading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xl italic text-orange-500 mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Locations We Serve
          </h2>
        </div>

        {/* Map Container (White card with rounded corners) */}
        <div className="relative bg-white p-4 md:p-8 rounded-[2.5rem] shadow-xl overflow-hidden">
          {/* Map Embed - Replaced the static image with an iframe */}
          <div className="relative w-full aspect-[3/1] lg:aspect-[4/1] overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.07062095031!2d-74.01525283437198!3d40.71383832159048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a25e64811f5%3A0x6b49e29548451877!2sTribeca%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1661877546596!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) brightness(1.1)" }} // Apply filter to match the muted look
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map"
            ></iframe>

            {/* Map Pin/Search Icon Overlay (Kept for design consistency) */}
            {/* Note: This icon sits OVER the live map */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
             
            </div>

            {/* Attribution text (optional) */}
            <div className="absolute bottom-4 left-4 text-xs text-gray-500 opacity-70">
              <span className="font-semibold">Google</span> | 200 m
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMapSection;
