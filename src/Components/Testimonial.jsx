import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    quote:
      "Great response time, staff was on time and got the job done pretty quickly. House looked great when they finished. If anyone needs a clean home contact them.",
    name: "Rebecca Howland",
    title: "Client",
    image:
      "https://img.freepik.com/free-photo/horizontal-shot-beautiful-confident-young-african-american-woman-dressed-stylish-purple-turtleneck-smiling-joyfully-showing-ok-gesture_344912-1015.jpg?w=1480",
  },
  {
    id: 2,
    quote:
      "Outstanding service! They paid attention to every detail and left our office sparkling clean. Highly professional and reliable team.",
    name: "John Doe",
    title: "Business Owner",
    image:
      "https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?w=740",
  },
  {
    id: 3,
    quote:
      "The best cleaning service we've ever used. The team is friendly, efficient, and the quality of work is consistently high. Highly recommend!",
    name: "Maria Garcia",
    title: "Homeowner",
    image:
      "https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg?w=740",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? testimonialsData.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonialsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div className="w-full  flex justify-center items-center py-10 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      <div className="w-full  md:h-[400px] max-w-4xl bg-white shadow-2xl rounded-lg p-6 sm:p-8 md:p-7 transition-all duration-500 ease-in-out text-center">
        {/* Header */}
        <p className="text-lg sm:text-xl font-bold text-orange-600 mb-3">
          Client Testimonials ({currentIndex + 1}/{testimonialsData.length})
        </p>

        {/* Quote */}
        <blockquote className="text-base sm:text-lg md:text-2xl italic text-gray-800 mb-3 border-l-4 border-orange-500 pl-4 sm:pl-6 min-h-[120px] flex items-center justify-center text-center">
          "{currentTestimonial.quote}"
        </blockquote>

        {/* Star Rating */}
        <div className="flex justify-center space-x-1 text-orange-500 mb-6">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          ))}
        </div>

        {/* Client Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
          <img
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
            className="w-20 h-20 sm:w-16 sm:h-16 rounded-full object-cover ring-2 ring-orange-500"
          />
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl font-bold text-gray-900">
              {currentTestimonial.name}
            </p>
            <p className="text-sm sm:text-md text-gray-500">
              {currentTestimonial.title}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-orange-600 w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 md:left-6 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition duration-300"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 md:right-6 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-orange-500 hover:text-white transition duration-300"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
};

export default Testimonial;
