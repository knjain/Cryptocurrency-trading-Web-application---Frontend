import React from "react";
import { motion as m } from "framer-motion";

const MidHeaderAnimation = ({ title }) => {
  return (
    <>
      <m.h1
        className="text-3xl md:text-4xl md:text-6xl relative font-semibold text-4xl text-center text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
        // initial={{ y: -300, opacity: 0 }}

        initial={{ opacity: 0, overflow: "hidden" }}
        whileInView={{
          opacity: 1,

          animate: { y: 0, opacity: 1 },
          transition: { duration: 1.4, delay: 0.4 },
        }}
      >
        Maximizing Your Binary <br />
        Income Potential
      </m.h1>
      <m.div
        className="mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-3/4 h-[6px] mt-2 mx-auto" // Added mx-auto to center the line
        // initial={{ x: -600, width: 0 }}
        initial={{ opacity: 0, overflow: "hidden" }}
        whileInView={{
          opacity: 1,
          animate: { x: 0, width: "57%" },
          transition: { duration: 1, delay: 1.4 },
        }}
      ></m.div>
    </>
  );
};

export default MidHeaderAnimation;
