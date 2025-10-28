import React from "react";

// Placeholder SVG for Phone Icon
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-orange-500"
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 013-3h1.372c.813 0 1.62.388 2.228 1.153l.36 1.35a3.75 3.75 0 00.916 1.745c.447.447.909.85 1.39 1.183l.36.242a3.75 3.75 0 001.745.916l1.35.36c.765.208 1.153 1.015 1.153 2.228v1.372a3 3 0 01-3 3h-1.372c-.813 0-1.62-.388-2.228-1.153l-.36-1.35a3.75 3.75 0 00-1.745-.916c-.447-.447-.909-.85-1.39-1.183l-.36-.242a3.75 3.75 0 00-1.745-.916l-1.35-.36c-.765-.208-1.153-1.015-1.153-2.228V7.5a3 3 0 013-3H1.5z"
      clipRule="evenodd"
    />
  </svg>
);

const BookingPromoSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#f9f7f0]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Orange Promo Card Container */}
        <div className="relative bg-orange-500 p-8 md:p-12 lg:p-16 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between text-white">
            {/* Left Content Area (Text & Phone) */}
            <div className="w-full lg:w-1/2 relative z-10 mb-8 lg:mb-0 text-center lg:text-left">
              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 max-w-lg mx-auto lg:mx-0">
                What Can We Clean For You Today?
              </h2>

              {/* Booking Link */}
              <a
                href="#"
                className="inline-block text-xl font-semibold mb-8 hover:underline transition duration-150"
              >
                Book Your Clean Now
              </a>

              {/* Phone Call Button/Info */}
              <a
                href="tel:8442420464"
                className="inline-flex items-center space-x-3 text-lg font-semibold bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full py-2 px-6 transition duration-200"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                  <PhoneIcon />
                </div>
                <span>Call us: (844) 242-9464</span>
              </a>
            </div>

            {/* Right Content Area (Image and Award) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-80 lg:h-auto min-h-[300px]">
              {/* Cleaner Image */}
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/team_01.png"
                alt="Smiling cleaning professional"
                className="absolute right-0 bottom-0 h-full w-auto object-contain z-10 pointer-events-none"
                style={{ maxHeight: "120%" }} // Let the image slightly overflow the container height
              />

              {/* Award Badge */}
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/award_logo.png"
                alt="2024 Super Service Award"
                className="absolute top-4 right-4 md:right-16 w-20 md:w-24 h-auto z-20 pointer-events-none"
              />

              {/* Subtle Kitchen Background Image (Blurred) */}
              <div
                className="absolute inset-0 bg-cover bg-center rounded-[3rem] opacity-30"
                style={{
                  backgroundImage: `url('https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_03.jpg')`,
                  filter: "blur(4px) brightness(0.8)", // Blur and darken the background image
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingPromoSection;
