import React from "react";
import { Mail } from "lucide-react";

// Image URLs provided by the user
const TEAM_IMAGE_URL =
  "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/team_02.png";
const HOME_BACKGROUND_URL =
  "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/home_02_image_02.jpg";
const ARROW_IMAGE_URL =
  "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/floating_rotate_bottom.png";

const JoinTeamBanner = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-10 bg-gray-50 font-sans overflow-hidden">
      {/* Main Card Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden">
        {/* Inner Flex Container */}
        <div className="flex flex-col lg:flex-row items-center relative">
          {/* LEFT SIDE — IMAGE AREA */}
          <div className="relative w-full lg:w-5/12 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex items-end justify-center overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center rounded-t-[2rem] lg:rounded-tr-none lg:rounded-l-[2rem] z-0"
              style={{ backgroundImage: `url('${HOME_BACKGROUND_URL}')` }}
            />

            {/* Main Team Image */}
            <img
              src={TEAM_IMAGE_URL}
              alt="Smiling cleaner ready to work"
              className="relative z-10 object-contain object-bottom max-h-[260px] sm:max-h-[300px] md:max-h-[340px] lg:max-h-[400px] w-auto"
            />

            {/* Award Badge */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/70 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-md z-20">
              <div className="flex items-center text-xs sm:text-sm font-semibold text-orange-500">
                <div className="w-2 h-2 rounded-full bg-orange-500 mr-2 relative">
                  <div className="absolute -left-2 top-1/2 h-0.5 w-4 sm:w-6 bg-orange-500 transform -translate-y-1/2"></div>
                </div>
                Super Service Award
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — TEXT CONTENT */}
          <div className="w-full lg:w-7/12 bg-green-700 text-white px-6 sm:px-10 md:px-12 py-10 sm:py-14 lg:py-20 text-center lg:text-left md:h-[400px] relative">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Join Our Growing Team Today
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-medium mb-8">
              Send us your resume
            </p>

            {/* Email CTA */}
            <a
              href="mailto:office@qleentheme.com"
              className="inline-flex items-center justify-center lg:justify-start text-lg sm:text-xl font-bold hover:text-orange-400 transition duration-300"
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 mr-3 text-orange-500" />
              office@qleentheme.com
            </a>

            {/* Rotating Arrow (visible only on md and up) */}
            <img
              src={ARROW_IMAGE_URL}
              alt="Rotating arrow"
              className="hidden md:block absolute right-8 md:right-12 bottom-8 md:bottom-12 w-12 md:w-16 opacity-90 animate-spin-slow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamBanner;
