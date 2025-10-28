import React from "react";

// Placeholder SVG for Phone/Headset Icon
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-orange-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.355c0-.18-.083-.37-.205-.513l-1.163-1.455a1.125 1.125 0 00-1.48-.214l-.547.342a1.125 1.125 0 01-1.272-.186L10.375 7.726a11.25 11.25 0 01-3.344 3.344L6.22 8.448a1.125 1.125 0 01-.187-1.272l.342-.547a1.125 1.125 0 00-.214-1.48L3.09 2.458A.75.75 0 002.25 2.25v2.25Z"
    />
  </svg>
);

// Placeholder SVG for Location Pin Icon
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-orange-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

// Placeholder SVG for Social Media Globe Icon (or similar "connect" icon)
const ConnectIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-white"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10.5m-6 2.25L12 12m0 0l6-3.75M12 12v3.75m-6-6h12m-6 2.25h.008v.008H12v-.008ZM12 12l6 3.75m-6 2.25L6 12V6m18 6c0 5.426-3.69 9.941-8.775 11.161M12 3c5.426 0 9.941 3.69 11.161 8.775"
    />
  </svg>
);

const ContactInfoSection = () => {
  return (
    <section className="py-20 md:py-32 bg-[#f9f7f0]">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* Heading and Subheading */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xl italic text-orange-500 mb-2">Get in touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Have questions or ready to book a cleaning?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you need a one-time deep clean or recurring service, our
            friendly team is just a message away.
          </p>
        </div>

        {/* Three Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Customer Service */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <PhoneIcon />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Customer Service
              </h3>
              <p className="text-gray-600 mb-4">
                Call or text us anytime during business hours
              </p>
            </div>
            <div>
              <p className="text-gray-800 font-semibold mt-6 mb-2">
                Monday to Saturday:
              </p>
              <p className="text-gray-600">8:00 AM – 6:00 PM</p>
              <p className="text-orange-500 font-bold text-lg mt-2">
                (844) 242-0464
              </p>
            </div>
          </div>

          {/* Card 2: Find Us Here */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <LocationIcon />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Find Us Here
              </h3>
              <p className="text-gray-600 mb-6">
                Qleen Cleaning Services <br />
                1234 Myrtle Avenue, Suite 2B <br />
                Brooklyn, NY 11221
              </p>
            </div>
            <a
              href="#" // Replace with actual map link
              className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-200 text-center"
            >
              View Map
            </a>
          </div>

          {/* Card 3: Contact Online / Social Media (Green Card with Image) */}
          <div className="relative bg-green-700 p-8 rounded-[2.5rem] overflow-hidden shadow-lg text-white flex flex-col justify-between">
            {/* Background Image: Orange Glove */}
            <img
              src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/orange_glove_01.png"
              alt="Orange cleaning glove"
              className="absolute  right-12 bottom-0 md:bottom-6 h-48 w-auto opacity-100 rotate-3 z-0 pointer-events-none"
              style={{
                transform: "rotate(10deg) translateX(20%) translateY(20%)",
              }} // Adjust to match exact position
            />
            {/* "Light ray" effect behind the hand could be a subtle gradient or another SVG */}
            {/* For now, I'll use a simple absolute div */}
            <div className="absolute right-0 bottom-0 w-32 h-32 bg-white opacity-10 rounded-full z-0 transform translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
              {" "}
              {/* Ensure text is above glove */}
              <div className="w-12 h-12 bg-green-800 rounded-full flex items-center justify-center mb-6">
                <ConnectIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Contact us online or via social media
              </h3>
              <p className="mb-6">
                <a
                  href="mailto:office@qleentheme.com"
                  className="hover:underline"
                >
                  office@qleentheme.com
                </a>
              </p>
              {/* Social Media Icons */}
              <div className="flex space-x-3 mt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-200"
                >
                  {/* Facebook Icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-200"
                >
                  {/* Instagram Icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.269.087 3.85.048 4.703.01 5.555 0 5.827 0 8s.01 2.444.048 3.297c.04.852.174 1.433.372 1.942.205.526.478.95.923 1.417.444.453.878.72 1.417.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.297-.048c.852-.04 1.433-.174 1.942-.372a3.927 3.927 0 001.417-.923c.445-.47.717-.893.923-1.417.198-.51.333-1.09.372-1.942.038-.853.048-1.125.048-3.297s-.01-2.445-.048-3.297c-.04-.852-.174-1.433-.372-1.942a3.917 3.917 0 00-.923-1.417A3.927 3.927 0 0013.24 0.42c-.51-.198-1.09-.333-1.942-.372C10.445.01 10.173 0 8 0zm0 2.16c2.16 0 2.414.008 3.25.046.78.035 1.204.166 1.486.275.373.145.64.318.92.599.28.28.453.546.598.92.11.281.24.705.275 1.486.038.836.046 1.09.046 3.25s-.008 2.414-.046 3.25c-.035.78-.166 1.204-.275 1.486a2.478 2.478 0 01-.599.92c-.28.28-.546.453-.92.598-.281.11-.705.24-1.486.275-.836.038-1.09.046-3.25.046s-2.414-.008-3.25-.046c-.78-.035-1.204-.166-1.486-.275a2.478 2.478 0 01-.92-.599c-.28-.28-.453-.546-.598-.92-.11-.281-.24-.705-.275-1.486C2.16 10.445 2.152 10.173 2.152 8s.008-2.414.046-3.25c.035-.78.166-1.204.275-1.486a2.478 2.478 0 01.599-.92c.28-.28.546-.453.92-.598.281-.11.705-.24 1.486-.275C5.555 2.16 5.827 2.152 8 2.152zm0 3.66c-2.345 0-4.246 1.902-4.246 4.247S5.655 14.305 8 14.305s4.247-1.903 4.247-4.247S10.345 5.82 8 5.82zm0 2.16a2.087 2.087 0 110 4.174 2.087 2.087 0 010-4.174z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-200"
                >
                  {/* X (Twitter) Icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454L9.913 8.373 16 15.25h-4.937L7.682 9.54l-4.72 5.71H0L6.711.75h5.89zM1.996 2.038L7.042 9.474l-.994.49L1.002 2.528z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition duration-200"
                >
                  {/* LinkedIn Icon SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542V13.394h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.874 1.232-.874.864 0 1.258.655 1.258 1.671v3.114h2.401V9.2c0-.216.015-.432.08-.586.173-.431.568-.874 1.232-.874.864 0 1.258.655 1.258 1.671v3.114h2.401V9.359c0-.216.016-.432.08-.586.173-.431.568-.874 1.232-.874.864 0 1.258.655 1.258 1.671v3.114h2.401V9.359c0-.216.015-.432.08-.586.173-.431.568-.874 1.232-.874.864 0 1.258.655 1.258 1.671v3.114h2.401V9.359c0-.216.016-.432.08-.586.173-.431.568-.874 1.232-.874.864 0 1.258.655 1.258 1.671v3.114h2.401V9.359c0-.216.015-.432.08-.586.173-.431.568-.874 1.232-.874.864 0 1.258.655 1.258 1.671v3.114h.084V6.169H8.057v3.18a.505.505 0 01.082-.584c.12-.24.3-.404.538-.404.14 0 .274.025.39.065V8.127c-.235-.045-.47-.06-.708-.06-.863 0-1.543.56-1.543 1.747V13.394h-2.401z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
