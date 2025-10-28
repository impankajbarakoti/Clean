import React from "react";

// --- Icon Placeholders (Using basic SVG for demonstration) ---
// For the "20+ Certified Cleaners" checkmark
const CheckmarkLargeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-green-600"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
// --- End Icon Placeholders ---

const AboutUsSection = () => {
  // URL for the main image (the cleaning lady)
  // NOTE: Using the uploaded image file name for reference, but keeping the component code
  // ready for an external deployment.
  const MAIN_IMAGE_URL =
    "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_home_02_02.png"; // Using a placeholder URL matching the image type

  // URL for the green award badge (2024 SUPER SERVICE AWARD)
 

  return (
    <section className="bg-gray-50 py-16 sm:py-24 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout Container */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
          {/* LEFT COLUMN: Image and Counter */}
          <div className="lg:w-1/2 relative mb-12 lg:mb-0 flex flex-col items-center">
            {/* The main rounded image of the cleaner */}
            <img
              src={MAIN_IMAGE_URL}
              alt="Professional cleaner smiling with supplies"
              className="rounded-3xl shadow-2xl w-full max-w-md lg:max-w-none h-auto object-cover"
              style={{ aspectRatio: "4/5" }} // Aspect ratio to match the original vertical image shape
            />

            {/* Counter Block (20+ Certified Cleaners) */}
            <div className="flex items-center absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 lg:left-0 lg:translate-x-0 bg-white p-4 rounded-xl shadow-xl z-10 w-64 justify-center">
              <CheckmarkLargeIcon />
              <div className="ml-3 text-left">
                <p className="text-3xl font-bold text-gray-800">20+</p>
                <p className="text-sm text-gray-500">Certified Cleaners</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 lg:pt-16">
            {/* Subtitle */}
            <p className="text-orange-500 text-lg font-semibold mb-2 italic">
              About us
            </p>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Professional Cleaning Services, You Can Count On
            </h2>

            {/* Main Paragraph */}
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl">
              Our team goes above and beyond to ensure you're happy after every
              clean, with open communication, flexible scheduling, and a
              satisfaction guarantee that puts your peace of mind first.
            </p>

            {/* Award Winning Service Block */}
            <div className="flex items-start mb-10">
              {/* Award Badge Image */}
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  An Award Winning Service
                </h3>
                <p className="text-gray-600 text-base max-w-sm">
                  Custom cleaning services tailored to your needs, preferences,
                  and schedule because no two spaces are the same.
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <button className="mt-4 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.03] active:scale-95">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
