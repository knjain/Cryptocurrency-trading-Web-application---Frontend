import React from "react";

const Section2 = () => {
  return (
    <>
      {" "}
      <m.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            delay: 0.66,
            ease: "anticipate",
          },
        }}
        className="text-3xl font-semibold mb-8 text-center mt-44"
      >
        Browse by Category
      </m.h1>{" "}
      <div className="px-6">
        <div className="category_div">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.75,
                ease: "anticipate",
              },
            }}
            className="category_card "
          >
            Videos
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.96,
                ease: "anticipate",
              },
            }}
            className="category_card cursor-pointer"
            onClick={() => {
              navigate("/photos");
            }}
          >
            Photo
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.86,
                ease: "anticipate",
              },
            }}
            className="category_card"
          >
            Posters
          </m.div>
        </div>
      </div>
    </>
  );
};

export default Section2;
