import React from "react";

// Assuming you have SVG icons. For simplicity, I'll use placeholders or
// simple inline SVGs. In a real project, you'd import them.
// For example, if you use Heroicons, you'd import:
// import { ShieldCheckIcon, CalendarIcon, LeafIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

// Placeholder SVG for Trusted Professionals (ShieldCheck)
const TrustedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-green-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.617 2.383-1.553 3.099l-5.59 3.824a1.125 1.125 0 01-1.125 0l-5.59-3.824A3.375 3.375 0 013 12c0-1.268.617-2.383 1.553-3.099l5.59-3.824a1.125 1.125 0 011.125 0l5.59 3.824A3.375 3.375 0 0121 12z"
    />
  </svg>
);

// Placeholder SVG for Flexible Scheduling (Calendar)
const FlexibleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-green-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12v-.008zM12 18h.008v.008H12v-.008z"
    />
  </svg>
);

// Placeholder SVG for Eco-Friendly Cleaning (Leaf)
const EcoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-green-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 6.75l-2.25 2.25m0 0l-2.25 2.25m2.25-2.25l2.25 2.25m0 0l2.25 2.25M12 10.5l-2.25 2.25m0 0l-2.25 2.25m2.25-2.25l2.25 2.25m0 0l2.25 2.25M6.75 18l-2.25 2.25m0 0l-2.25 2.25m2.25-2.25l2.25 2.25M18 13.5l-2.25 2.25m0 0l-2.25 2.25m2.25-2.25l2.25 2.25m0 0l2.25 2.25M18 6.75l-2.25 2.25m0 0l-2.25 2.25m2.25-2.25l2.25 2.25m0 0l2.25 2.25"
    />
  </svg>
);

// Placeholder SVG for Customized Service Plans (WrenchScrewdriver)
const CustomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-green-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.42 15.17L17.25 21A2.25 2.25 0 0021 17.25l-5.83-5.83a2.25 2.25 0 00-2.97-.985v0zM10.5 12.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5.25-7.5A.75.75 0 0116.5 4.5h2.25A.75.75 0 0119.5 5.25v2.25A.75.75 0 0118.75 8.25h-2.25A.75.75 0 0116.5 7.5V5.25zM10.5 10.5V3h3v5.25h3V3h3v7.5c0 1.036-.84 1.875-1.875 1.875h-5.25c-1.035 0-1.875-.84-1.875-1.875z"
    />
  </svg>
);

const AboutFeatureSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left Content Area */}
          <div className="lg:col-span-7 mb-12 lg:mb-0">
            <p className="text-base text-orange-500 font-medium mb-2">
              About us
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold leading-tight text-gray-800 mb-8">
              We are a professional cleaning company dedicated
              to delivering <br />high-quality cleaning services with a
              personal touch.
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-xl">
              Our team goes above and beyond to ensure you're happy after every
              clean, with open communication, flexible scheduling, and a
              satisfaction guarantee that puts your peace of mind first.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {/* Feature Item 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <TrustedIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Trusted Professionals
                  </h3>
                  <p className="text-gray-600">
                    Our cleaners are thoroughly vetted, trained, and to quality
                    service. We treat your space with the same care and respect
                    we give our own.
                  </p>
                </div>
              </div>

              {/* Feature Item 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <FlexibleIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Flexible Scheduling
                  </h3>
                  <p className="text-gray-600">
                    Life gets busy. That's why we offer flexible booking options
                    including weekly, monthly, and one-time cleanings, always on
                    your terms.
                  </p>
                </div>
              </div>

              {/* Feature Item 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <EcoIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Eco-Friendly Cleaning
                  </h3>
                  <p className="text-gray-600">
                    We use non-toxic, environmentally friendly products that are
                    safe for children, pets, and the planet without compromising
                    on results.
                  </p>
                </div>
              </div>

              {/* Feature Item 4 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <CustomIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Customized Service Plans
                  </h3>
                  <p className="text-gray-600">
                    From a light refresh to a deep clean, we tailor every
                    service to your needs and budget. You'll never pay for more
                    than you need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="lg:col-span-5 flex justify-center items-center">
            {/* The image is contained within a div for easier styling and potential effects */}
            <div className="relative w-full max-w-md lg:max-w-none">
              <img
                src="http://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_about.png"
                alt="Cleaning supplies"
                className="w-full bg-green-500  h-auto object-cover rounded-3xl" // Added rounded corners
              />
              {/* Overlay for the green blob effect and bubbles - this will require more advanced styling */}
              {/* For now, I'll create a simple green background. Realistically, this complex shape
                  with bubbles would be an SVG or a more complex CSS drawing.
                  I'm creating a simple rounded green background for the image to simulate the effect. */}
              
              {/* To truly replicate the bubbles, you'd need SVG or animated CSS pseudo-elements.
                  For a basic Tailwind setup, this is the limit without custom CSS or a UI library. */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatureSection;
