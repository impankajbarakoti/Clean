import React from "react";

// AboutHero component using rafce style
const AboutUs = () => {
  return (
    <div className="relative w-full h-96 lg:h-[450px] overflow-hidden">
      {/* Background Image/Overlay Container */}
      {/* The image link provided in the prompt is used as a background */}
      {/* Note: In a real app, you'd ensure this image is properly hosted or imported. */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/hero_about.jpg')",
          // To mimic the slight darkening/overlay often seen on hero images
          filter: "brightness(85%)",
        }}
      >
        {/* Optional: A subtle dark overlay if the image itself isn't dark enough */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Text Content Container */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-24 text-white">
        {/* "About us" text - smaller, italic, slightly transparent */}
        <p className="text-xl text-orange-500 italic font-semibold  opacity-90 mb-2">About us</p>

        {/* Main headline text */}
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-semibold leading-tight">
          Making Spaces Shine, One
          <br />
          Clean at a Time.
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;
