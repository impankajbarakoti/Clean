import React from "react";

// --- Icon Placeholders (Using basic SVG for demonstration) ---
// For the top checkmarks
const CheckmarkIconSmall = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-orange-500 mr-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// For "What's Included?" star/sparkle
const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-100 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.975 2.888a1 1 0 00-.363 1.118l1.519 4.674c.3.921-.755 1.688-1.539 1.118l-3.975-2.888a1 1 0 00-1.176 0l-3.975 2.888c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.363-1.118l-3.975-2.888c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"
    />
  </svg>
);

// For the small checkmarks inside the card
const CheckmarkIconGreen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-green-200 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// For the orange arrow button at the bottom
const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    />
  </svg>
);
// --- End Icon Placeholders ---

const PopularServicesSection = () => {
  // The chair image URL you provided
  const CHAIR_IMAGE_URL =
    "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/08/moving_cards_image_01.png";

  const features = [
    "Background checked cleaners",
    "Insurance coverage up to $1M",
    "No Contracts or Commitments",
  ];

  const includedItems = [
    "Affordable hourly service",
    "Ideal after deep cleaning",
    "Helps to keep your home always tidy",
  ];

  return (
    <section className="bg-white py-16 sm:py-24 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-12">
          Popular Services by Qleen
        </h2>

        {/* Top Features / Commitments */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-gray-700 text-lg font-medium"
            >
              <CheckmarkIconSmall />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Service Card Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto lg:h-[500px] flex flex-col lg:flex-row">
          {/* Left Side (Text Content) */}
          <div className="bg-green-600 text-white p-8 sm:p-10 lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-4xl sm:text-5xl font-bold">
                  Home Cleaning
                </h3>
                <span className="text-5xl sm:text-6xl font-bold opacity-30">
                  01
                </span>
              </div>

              <div className="flex items-center mb-4 text-gray-100">
                <StarIcon />
                <p className="text-xl font-semibold">What's Included?</p>
              </div>

              <p className="text-gray-200 text-base  text-justify mb-6 leading-tight">
                Dusting, vacuuming, mopping, and wiping down surfaces. It also
                typically involves cleaning appliances, bathrooms, and kitchen
                areas, as well as addressing any stains or messes.
              </p>

              <ul className="space-y-2 mb-8">
                {includedItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center text-justify text-gray-100 text-base"
                  >
                    <CheckmarkIconGreen />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price and Action Button */}
            <div className="flex items-center justify-between mt-8">
              <div className="text-4xl font-bold flex items-baseline">
                ${"39"}{" "}
                <span className="text-xl font-light opacity-80 ml-2">
                  /hour
                </span>
              </div>
              {/* <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105">
                <ArrowRightIcon />
              </button> */}
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="lg:w-1/2 flex items-end justify-center bg-green-600 p-6 lg:p-0">
            <img
              src={CHAIR_IMAGE_URL}
              alt="Stylish armchair with blanket and plant"
              className="w-full h-auto object-contain max-h-[400px] lg:max-h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServicesSection;
