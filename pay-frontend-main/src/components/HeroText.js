import React from "react";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-6 mt-1 w-full">
      {/* First */}
      <motion.div
        className="font-semibold text-4xl lg:text-7xl"
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        A future of limitless
        <motion.div
          className="bg-gradient-to-r from from-blue-600  via-purple-600 to-pink-300 w-3/4 h-[6px] mt-2  hidden md:block"
          initial={{ x: -600, width: 0 }}
          animate={{ x: 0, width: "71%" }}
          transition={{ duration: 2, delay: 1.8 }}
        ></motion.div>
      </motion.div>
      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-2 w-full">
        {/* second */}
        <motion.div
          className="w-full sm:w-1/3 text-sm leading-relaxed lg:text-xl text-left gap-3 md:gap-0"
          initial={{ x: -200, opacity: 0 }} // Initial position (left) and opacity
          animate={{ x: 0, opacity: 1 }} // Final position (center) and opacity
          exit={{ opacity: 1 }}
          transition={{ duration: 4, delay: 2.2 }} // Animation duration with delay
        >
          {/* Crafting a prosperous future, One Ozo guides your financial journey,
          where cryptocurrencies and forex unveil uncharted avenues to wealth. */}
          One Ozo is your trusted partner for a prosperous financial journey.
          <br />
          At One Ozo, we explore the exciting opportunities in cryptocurrencies
          {/* and forex to help you chart new paths to wealth. With One Ozo as your
          guide, you can navigate the uncharted avenues to financial success */}
        </motion.div>
        {/* third */}
        <motion.div
          className="font-semibold text-4xl lg:text-7xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
        >
          Opportunities
          <motion.div
            className="bg-gradient-to-r from from-blue-600  via-purple-600 to-pink-300 w-3/4 h-[6px] mt-2"
            initial={{ x: -50, width: 0, opacity: 0 }}
            animate={{ x: 0, width: "100%", opacity: 1 }}
            transition={{ duration: 2, delay: 2.8 }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;
