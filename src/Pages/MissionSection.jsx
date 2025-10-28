import React from "react";

const MissionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="bg-white p-6 md:p-10 lg:p-16 rounded-[2.5rem] shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_about_01-600x407.jpg"
              alt="Smiling cleaner holding supplies"
              className="w-full h-auto object-cover rounded-[1.5rem]" // Slightly less rounded than the container
            />
          </div>

          {/* Right Side: Mission Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our mission
            </h2>
            <div className="relative text-gray-700 text-xl italic font-serif mb-8 max-w-md lg:max-w-none mx-auto lg:mx-0">
              {/* Quote icon */}
              <span className="absolute -left-6 md:-left-10 -top-4 text-orange-500 text-6xl font-bold opacity-80 z-0 select-none hidden sm:block">
                &ldquo;
              </span>
              <p className="relative z-10">
                Our journey began with a passion for creating tidy, welcoming
                spaces and a desire to help busy people enjoy more free time.
              </p>
            </div>

            {/* Signature */}
            <div className="flex flex-col items-center lg:items-start mt-4">
              {/* Placeholder for signature image */}
              {/* In a real project, this would be an actual image of a signature */}
              <img
                src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/signature_01.png" // Placeholder signature image
                alt="Laura Jackson Signature"
                className="h-16 w-auto mb-2"
              />
              <p className="text-lg font-semibold text-gray-800">
                Laura Jackson
              </p>
              <p className="text-gray-600">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
