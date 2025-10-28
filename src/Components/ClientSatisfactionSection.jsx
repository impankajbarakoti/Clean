import React from "react";
import { FaStar, FaCheckSquare } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ClientSatisfactionSection = () => {
  const CLIENT_IMAGE_URL =
    "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_home_02_01-600x702.png";

  const GOOGLE_ICON_URL =
    "https://cdn.trustindex.io/assets/platform/Google/icon.svg";

  const surveyResults = [
    { label: "Punctuality of cleaners", rate: 96 },
    { label: "Quality of cleaning", rate: 94 },
    { label: "Respect for your home & belongings", rate: 100 },
  ];

  // Observe when the section comes into view
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3, // start animation when 30% visible
  });

  return (
    <section ref={ref} className="bg-gray-50 py-16 sm:py-24 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12">
          {/* LEFT COLUMN */}
          <div className="lg:w-1/2 relative mb-16 lg:mb-0 flex justify-center">
            <img
              src={CLIENT_IMAGE_URL}
              alt="Happy client clapping"
              className="rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md h-auto object-cover"
              style={{ aspectRatio: "600/702" }}
            />

            {/* Satisfaction Rate Badge */}
            <div className="flex flex-col items-center absolute bottom-[-3rem] right-1/2 transform translate-x-1/2 lg:right-4 lg:translate-x-0 bg-white p-4 rounded-xl shadow-xl z-10 w-40">
              <FaCheckSquare className="text-green-600 text-3xl mb-1" />
              <p className="text-3xl font-bold text-gray-800">
                {inView ? <CountUp end={96} duration={2} /> : "0"}%
              </p>
              <p className="text-sm text-gray-500">Satisfaction Rate</p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 lg:pt-8 max-w-lg">
            <p className="text-orange-500 text-lg font-semibold mb-2 italic">
              Satisfaction survey
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              What Our Clients Think
            </h2>

            {/* Google Rating */}
            <div className="flex items-center mb-10">
              <img
                src={GOOGLE_ICON_URL}
                alt="Google Icon"
                className="h-5 w-5 mr-1"
              />
              <span className="text-lg font-semibold text-gray-800 mr-3">
                {inView ? (
                  <CountUp end={4.7} decimals={1} duration={1.5} />
                ) : (
                  "0"
                )}
              </span>
              <div className="flex text-yellow-500">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
              </div>
            </div>

            {/* Survey Progress Bars */}
            <div className="space-y-6 mb-8">
              {surveyResults.map((result, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-gray-700 font-medium">{result.label}</p>
                    <p className="text-gray-700 font-semibold">
                      {inView ? (
                        <CountUp end={result.rate} duration={1.5} />
                      ) : (
                        "0"
                      )}
                      %
                    </p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{
                        width: inView ? `${result.rate}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-4">
              *Clients satisfaction survey based on 298 responses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSatisfactionSection;
