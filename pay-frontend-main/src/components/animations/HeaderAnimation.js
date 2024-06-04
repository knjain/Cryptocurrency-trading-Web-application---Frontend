import React from "react";
import { motion as m } from "framer-motion";

const HeaderAnimation = ({ title }) => {
  return (
    <>
      <m.h1
        className="px-6 mt-24 relative font-semibold text-4xl text-center text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }} // Adjust delay as per your requirement
      >
        {title}
      </m.h1>
      <m.div
        className="bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-3/4 h-[6px] mt-2 mx-auto" // Added mx-auto to center the line
        initial={{ x: -600, width: 0 }}
        animate={{ x: 0, width: "80%" }}
        transition={{ duration: 0.6, delay: 0.8 }}
      ></m.div>
    </>
  );
};

export default HeaderAnimation;
