import React from "react";

// The URL for the background image
const BACKGROUND_IMAGE_URL =
  "http://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/background_03.jpg";

const StillHaveQuestionsBanner = () => {
  return (
    // The main container. We use relative positioning for text overlay.
    // Set a minimum height to ensure the content is visible.
    <div
      className="relative w-full min-h-[340px]  flex items-center justify-center overflow-hidden"
      // Use inline style for the background image. Tailwind CSS background image classes
      // are difficult to use with external URLs that change often, so this is cleaner.
      style={{
        backgroundImage: `url('${BACKGROUND_IMAGE_URL}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* This div centers the text content and ensures it's easy to read 
        even with the busy background. 
      */}
      <div className="text-center z-10 p-6">
        {/* Top orange text: "Frequently Asked Questions" */}
        <p className="text-orange-500 text-lg font-semibold mb-2 italic">
          Frequently Asked Questions?
        </p>

        {/* Main large text: "Still Have Questions?" */}
        <h2 className="text-2xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Still Have Questions?
        </h2>

        {/* The CTA Button */}
        <a
          href="/faq" // Replace with the actual link to your FAQ page
          className="inline-block px-8 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105"
        >
          Send us Your Mail
        </a>
      </div>
    </div>
  );
};

export default StillHaveQuestionsBanner;
