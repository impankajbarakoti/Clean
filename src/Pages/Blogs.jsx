import BlogData from "./BlogData";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <div className="bg-stone-100 py-16 px-4">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BlogData.map((blog, idx) => (
              <div
                key={blog.id}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative p-6 bg-white rounded-xlcursor-pointer transition-transform duration-300 ease-in-out shadow-md ${
                  hoveredCard === idx ? "scale-105 shadow-xl" : "scale-100"
                }`}
              >
                {/* Image Wrapped in Link */}
                <Link to={`/blog/${blog.id}`} state={blog}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="object-cover w-full h-auto rounded-sm mb-4 transition-transform duration-300"
                  />
                </Link>

                <div className="relative z-10">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>

                  {/* Read More Link */}
                  <a
                    href={`/blog/${blog.id}`}
                    state={blog} // Note: `state` doesn't work with a regular <a> tag, remove it if unnecessary
                    className="text-lime-600 hover:text-lime-600 font-medium transition"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
