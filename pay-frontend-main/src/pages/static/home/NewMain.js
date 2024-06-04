import React from "react";
import { motion as m } from "framer-motion";
const item = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const NewMain = () => {
  return (
    <div className="w-full relative font-poppins justify-center items-center mb-40 md:mb-[-8rem] ">
      <video autoPlay loop muted className="w-full h-full relative">
        <source src="./images/video/1.mp4" type="video/mp4" />
      </video>
      <div
        className="overlay-text flex flex-wrap flex-col md:flex-row w-full  absolute top-[90%] md:top-[60%] justify-between px-8 md:px-20"
        style={{ alignItems: "center" }}
      >
        <m.div
          className="w-full md:w-[40%] "
          initial={{ x: -100, opacity: 1 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "anticipate",
              delay: 0.5,
            },
          }}
        >
          <h1 className="    ">
            <span className="text-3xl"> The World’s Leading</span>
            <br />
            <span className=" text-2xl md:text-5xl  text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text font-bold ">
              {" "}
              Cryptocurrency Investment Platform
            </span>
          </h1>
        </m.div>
        <m.div
          className="w-full md:w-[40%] pl-0 md:pl-12"
          initial={{ x: -100, opacity: 1 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              ease: "anticipate",
              delay: 0.5,
            },
          }}
        >
          <p
            className="text-white text-sm md:text-lg font-thin"
            style={{ color: "#eeedf0" }}
          >
            Experience the ultimate financial and entertainment convergence with
            our all-in-one platform—seamlessly integrating cryptocurrency,
            forex, and casino investments. Unleash the power of diversified
            opportunities with just one click!
          </p>
        </m.div>
      </div>
    </div>
  );
};

export default NewMain;
