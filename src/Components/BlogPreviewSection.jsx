import React from "react";

// Sample data for the blog posts
const blogPosts = [
  {
    id: 1,
    date: "July 20, 2025",
    title: "How to Clean All Types of Cutting Boards",
    imageUrl:
      "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2018/09/post_01-925x660.jpg", // Placeholder image 1
    link: "/blog/cutting-boards",
    isRounded: false,
  },
  {
    id: 2,
    date: "July 10, 2025",
    title: "How To Clean and Maintain Your Sofa Bed",
    imageUrl:
      "https://images.pexels.com/photos/19050702/pexels-photo-19050702.jpeg", // Placeholder image 2
    link: "/blog/clean-sofa-bed",
    isRounded: true, // Specific rounded style for the middle card
  },
  {
    id: 3,
    date: "June 30, 2025",
    title: "Best Robot Vacuums for Pet Hair in 2025",
    imageUrl:
      "https://qleen.bold-themes.com/demo-01/wp-content/uploads/sites/2/2022/03/post_11-925x660.jpg", // Placeholder image 3
    link: "/blog/robot-vacuums",
    isRounded: false,
  },
];

// Sub-Component for a Single Blog Card
const BlogCard = ({ date, title, imageUrl, link, isRounded }) => {
  // Define custom classes for the middle rounded card
  const cardClasses = isRounded
    ? "rounded-3xl shadow-xl transform scale-105" // More prominent shadow and slight scale up
    : "rounded-xl shadow-lg";

  const imageClasses = isRounded ? "rounded-t-3xl h-60" : "rounded-t-xl h-60";

  return (
    <a
      href={link}
      className={`block bg-white ${cardClasses} overflow-hidden hover:shadow-2xl transition-all duration-300`}
    >
      {/* Image Container */}
      <div
        className={`${imageClasses} bg-cover bg-center`}
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-label={`Image for blog post: ${title}`}
      >
        {/* We use the image URL as a background image to ensure clean cropping */}
      </div>

      {/* Text Content */}
      <div className="p-6">
        <p className="text-sm font-semibold text-orange-500 mb-2">{date}</p>
        <h3 className="text-xl font-bold text-gray-800 leading-snug">
          {title}
        </h3>
      </div>
    </a>
  );
};

// Main Component
const BlogPreviewSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <p className="text-lg font-medium text-orange-500 mb-2">
          Get to know our
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
          Cleaning Tips And Hacks
        </h2>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              date={post.date}
              title={post.title}
              imageUrl={post.imageUrl}
              link={post.link}
              isRounded={post.isRounded}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="/blog" // Link to the main blog page
            className="inline-block px-10 py-4 bg-orange-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewSection;
