import React from "react";

// The component name is typically based on the file name (e.g., HeroSection)
const HeroSection = () => {
  // You'll need to make sure this image path is accessible by your Vite project.
  // If using the public folder, the path would be: '/images/hero_image_02.jpg'
  // If importing locally, you'd import it at the top.
  const BG_IMAGE_URL =
    "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/hero_image_02.jpg";

  return (
    <div className="relative  w-full h-[120vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover  bg-center"
              style={{
                  backgroundImage: `url('${BG_IMAGE_URL}')`
              }}
      >
        {/* Optional: Dark overlay for better text readability (adjust opacity as needed) */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-10 lg:px-20">
        {/* Pricing Text Block */}
        <div className="flex items-center space-x-2 mb-4">
          {/* The small orange dot */}
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <p className="text-white text-lg font-light tracking-wider drop-shadow-md">
            Window Cleaning from $29
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-white text-5xl sm:text-7xl md:text-8xl font-extrabold max-w-4xl leading-tight drop-shadow-lg">
          We Clean, You Relax.
        </h1>

        {/* Call to Action Button */}
        <button className="mt-8 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.02] active:scale-95">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
