import React from "react";
import { FaHome, FaChevronDown, FaArrowRight } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ScheduleEstimateSection = () => {
  const BACKGROUND_IMAGE_URL =
    "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/background_02.jpg";

  // Set up intersection observer
  const { ref, inView } = useInView({
    triggerOnce: true, // trigger only once
    threshold: 0.3, // start animation when 30% visible
  });

  return (
    <section
      className="relative bg-cover bg-center h-auto py-20 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url('${BACKGROUND_IMAGE_URL}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between w-full space-y-10 lg:space-y-0">
        {/* Left Side: Text */}
        <div className="text-white text-center lg:text-left max-w-md">
          <p className="font-script text-2xl mb-4 italic text-orange-500">
            Let us make your life a little easier
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
            Schedule Your Free Estimate Today
          </h2>
        </div>

        {/* Right Side: Input Box */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <div className="relative flex items-center bg-gray-100 rounded-full shadow-lg p-2 pr-2.5">
            <div className="flex-shrink-0 bg-white rounded-full w-12 h-12 flex items-center justify-center mr-3 ml-1 shadow">
              <FaHome className="text-green-600 text-xl" />
            </div>

            <div className="relative flex-grow">
              <input
                type="text"   
                readOnly
                value="Home Cleaning"
                className="w-full outline-0 bg-transparent border-none focus:ring-0 text-lg text-gray-800 placeholder-gray-500 py-2 pl-2 pr-10 appearance-none cursor-pointer"
                placeholder="Select a service"
              />
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <FaChevronDown className="text-gray-500 text-sm" />
              </div>
            </div>

            <button className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-md hover:bg-orange-600 transition duration-300 transform hover:scale-105 ml-3">
              <FaArrowRight className="text-white text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* CountUp Stats Section */}
      <div
        ref={ref}
        className="relative z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-white"
      >
        {/* 1 */}
        <div>
          <h3 className="text-5xl font-bold text-orange-400">
            {inView && <CountUp start={0} end={4500} duration={3} />}+
          </h3>
          <p className="mt-2 text-gray-200 text-lg">Happy Clients</p>
        </div>

        {/* 2 */}
        <div>
          <h3 className="text-5xl font-bold text-orange-400">
            {inView && <CountUp start={0} end={1200} duration={3} />}+
          </h3>
          <p className="mt-2 text-gray-200 text-lg">Projects Completed</p>
        </div>

        {/* 3 */}
        <div>
          <h3 className="text-5xl font-bold text-orange-400">
            {inView && <CountUp start={0} end={15} duration={3} />}+
          </h3>
          <p className="mt-2 text-gray-200 text-lg">Years Experience</p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleEstimateSection;
