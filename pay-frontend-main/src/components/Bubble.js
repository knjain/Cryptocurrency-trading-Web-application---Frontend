import React from "react";
import { motion as m, useScroll, useAnimation } from "framer-motion";

const Bubble = (props) => {
  const { top1, top2, left1, left2 } = props;

  return (
    <>
      <m.div
        initial={{ opacity: 0, overflow: "hidden" }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1.2,
            ease: "circInOut",
          },
        }}
        className={`border-none absolute top-[${top2}rem] left-[${left2}rem] w-[30px] h-[30px] bg-gradient-to-r  from-newwhite to-newwhite rounded-tr-full`}
      ></m.div>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1.1,
            ease: "circInOut",
          },
        }}
        className={`border-none absolute top-[${top2}rem] left-[${left1}rem] w-[30px] h-[30px] bg-purple-300 rounded-tl-full`}
      ></m.div>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1.3,
            ease: "circInOut",
          },
        }}
        className={`border-none absolute top-[${top1}rem] left-[${left2}rem] w-[30px] h-[30px] bg-gradient-to-br  from-purple-200 to-purple-100 rounded-br-full`}
      ></m.div>
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
            ease: "circInOut",
          },
        }}
        className={`border-none absolute top-[${top1}rem] left-[${left1}rem] w-[30px] h-[30px] bg-purple-300 rounded-bl-full`}
      ></m.div>
    </>
  );
};

export default Bubble;
