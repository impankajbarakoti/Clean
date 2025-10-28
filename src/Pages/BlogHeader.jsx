import Blogs from "./Blogs";

const BlogHeader = () => {
  return (
    <>
      {" "}
      <section
        className="relative py-16 px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6197117/pexels-photo-6197117.jpeg')",
        }}
      >
        {/* Optional overlay to darken the background image for better readability */}
        {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Blogs</h2>
          <p className="lg:text-2xl text-sm "></p>
        </div>
      </section>
      <Blogs />
    </>
  );
};

export default BlogHeader;
