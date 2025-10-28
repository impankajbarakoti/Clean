import React from "react";

// Reusable Input Component
const FormInput = ({
  type = "text",
  placeholder,
  required = true,
  name,
  value,
  onChange,
  className = "",
}) => (
  <input
    type={type}
    placeholder={placeholder}
    required={required}
    name={name}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ${className}`}
  />
);

// Reusable Select Component
const FormSelect = ({ name, options, value, onChange }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 cursor-pointer"
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

const BookingFormSection = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "Residential",
    bedrooms: "1",
    bathrooms: "1",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Booking request sent! (Check console for data)");
  };

  return (
    <section className="relative -mt-0 sm:-mt-32 pb-24 z-10 overflow-hidden bg-[#f9f7f0]">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        {/* Card Container */}
        <div className="relative bg-white p-3 md:p-10 mt-10 lg:p-16 rounded-[2.5rem] shadow-xl mx-auto">
          {/* Decorative Images (Hidden on Mobile) */}

          {/* Left Bucket Image */}
          <img
            src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_02_contact.png"
            alt="Cleaning supplies bucket"
            className="absolute -left-16 sm:-left-32 -bottom-20 w-40 sm:w-56 h-auto hidden md:block z-20 pointer-events-none"
          />

          {/* Right Cleaning Lady Image */}
          <img
            src="https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2025/07/image_01_contact.png"
            alt="Smiling cleaning professional with mop"
            className="absolute -right-16 md:-right-50 -bottom-0 w-48 sm:w-auto h-full hidden md:block z-20 pointer-events-none"
          />

          {/* Form Header */}
          <div className="text-center mb-8 md:mb-10">
            <p className="text-lg md:text-xl italic text-orange-500 mb-2">
              Get in touch
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              Book Your Clean Today
            </h2>
          </div>

          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 sm:gap-5 md:gap-6"
          >
            {/* Row 1: First Name / Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                placeholder="First Name*"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <FormInput
                placeholder="Last Name*"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Row 2: Email / Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                type="email"
                placeholder="Your E-mail*"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <FormInput
                type="tel"
                placeholder="Phone Number*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Row 3: Service Type */}
            <div>
              <FormSelect
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                options={[
                  {
                    value: "Residential",
                    label: "Type of service: Residential",
                  },
                  { value: "Commercial", label: "Type of service: Commercial" },
                  { value: "Deep Clean", label: "Type of service: Deep Clean" },
                ]}
              />
            </div>

            {/* Row 4: Bedrooms / Bathrooms */}
            <div className="grid grid-cols-2 gap-4">
              <FormSelect
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
                options={[
                  { value: "1", label: "1 Bedroom" },
                  { value: "2", label: "2 Bedrooms" },
                  { value: "3", label: "3 Bedrooms" },
                  { value: "4+", label: "4+ Bedrooms" },
                ]}
              />
              <FormSelect
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleChange}
                options={[
                  { value: "1", label: "1 Bathroom" },
                  { value: "2", label: "2 Bathrooms" },
                  { value: "3+", label: "3+ Bathrooms" },
                ]}
              />
            </div>

            {/* Row 5: Message */}
            <div>
              <textarea
                placeholder="Type your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y transition duration-150"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-200 shadow-md"
              >
                Send
              </button>
            </div>

            {/* Note */}
            <p className="text-sm text-gray-500 mt-2 text-center sm:text-left">
              * Required fields
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
