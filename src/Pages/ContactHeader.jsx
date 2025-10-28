import React from "react";

const ContactHeader = () => {
  return (
    // Section container with a light background to match the original image
    <section className="bg-[#f9f7f0] pt-14 md:py-24 lg:py-32">
      <div className="container px-4 lg:px-8 max-w-7xl">
        <h1
          className="text-4xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] 
                     font-extrabold uppercase text-center text-[#345f3c] 
                     leading-none tracking-tight"
          style={{
            // Custom font weight/style to closely match the heavy, blocky appearance
            fontWeight: 900,
            // Ensures the text doesn't get cut off on small screens if it's too large
            wordBreak: "break-word",
            // In case a custom font is not loaded, this makes it look closer
            fontFamily: "system-ui, sans-serif",
          }}
        >
          contact us
        </h1>
      </div>
    </section>
  );
};

export default ContactHeader;
