import React from "react";

// --- Icon Placeholders ---
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const CheckmarkCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const SparklesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L18 21l-7.286-2.143L6 21l2.286-6.857L3 12l5.714-2.143L6 3z"
    />
  </svg>
);

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <CalendarIcon />,
      title: "Book Consultations",
      description: "Call us or write a message in the contact form below.",
    },
    {
      icon: <CheckmarkCircleIcon />,
      title: "Choose Your Package",
      description:
        "We offer cleaning packages by hour, type of room or tailored to your needs.",
    },
    {
      icon: <SparklesIcon />,
      title: "We Clean, You Relax",
      description:
        "Cleaning service covering dusting, vacuuming, mopping, and sanitization.",
    },
  ];

  const ARROW_TOP_URL =
    "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_top.png";
  const ARROW_BOTTOM_URL =
    "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_image_bottom.png";

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle & Title */}
        <p className="text-orange-500 text-lg font-semibold mb-2 italic">
          How it works
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-16">
          Step By Step User Guide
        </h2>

        {/* Steps */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-start space-y-16 lg:space-y-0 lg:space-x-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center max-w-xs z-10"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                {step.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {step.description}
              </p>

              {/* Arrow between steps (only for desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-[-7rem] transform translate-y-8">
                  <img
                    src={index === 0 ? ARROW_TOP_URL : ARROW_BOTTOM_URL}
                    alt="Arrow to next step"
                    className="w-32 opacity-80"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Get Started Button */}
        <button className="mt-16 px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full shadow-2xl transition duration-300 transform hover:scale-[1.03] active:scale-95 z-10 relative">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HowItWorksSection;
