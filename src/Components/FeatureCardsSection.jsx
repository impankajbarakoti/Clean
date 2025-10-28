import React from "react";
// React Icons से वास्तविक आइकन इम्पोर्ट करें
import { FaShieldAlt, FaTrophy, FaHeart } from "react-icons/fa";

const FeatureCardsSection = () => {
  // URL for the green glove/sponge image
  const SPONGE_IMAGE_URL =
    "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/green_glove_02.png";

  const features = [
    {
      // FaShieldAlt (शील्ड आइकन)
      icon: <FaShieldAlt className="h-8 w-8 text-green-600" />,
      title: "Trusted Company",
      description:
        "We pride ourselves on building trust through reliability, always showing up on time and treating your space with care.",
    },
    {
      // FaTrophy (ट्रॉफी आइकन)
      icon: <FaTrophy className="h-8 w-8 text-green-600" />,
      title: "Professional Service",
      description:
        "Excellent performance, flat rates, no surprises. Every clean is thorough, personalized, and backed by friendly support.",
    },
    {
      // FaHeart (हार्ट आइकन)
      icon: <FaHeart className="h-8 w-8 text-green-600" />,
      title: "Customer Care",
      description:
        "With open communication, scheduling, and a satisfaction guarantee we ensure you’re happy after every clean.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Map through the first three feature cards */}
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl transition duration-300 hover:shadow-2xl"
            >
              {/* Icon Container: W-10 H-10 का उपयोग करके आइकन को बड़ा किया गया है */}
              <div className="w-10 h-10 mb-5 flex items-center justify-start">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}

          {/* The specialized 4K+ Cleanings Performed Card */}
          <div className="bg-green-600 rounded-3xl p-8 shadow-xl flex flex-col justify-between overflow-hidden">
            <div>
              <p className="text-5xl font-bold text-white mb-1">4K+</p>
              <p className="text-lg text-white font-medium opacity-80">
                Cleanings Performed
              </p>
            </div>

            {/* Sponge/Glove Image */}
            <div className="relative h-40 mt-6 -mx-8 -mb-8 flex justify-center items-end">
              <img
                src={SPONGE_IMAGE_URL}
                alt="Hand in green glove holding an orange sponge"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
