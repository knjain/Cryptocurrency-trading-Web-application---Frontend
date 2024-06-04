import React from "react";
import { motion as m } from "framer-motion";
import Calculator from "../investment/Calculator";
import { useNavigate } from "react-router";
import { packages } from "../investment/data";
import "./calci.css";
const HomeCalculator = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mb-0 w-full relative font-poppins">
      <img
        alt="Signup Background"
        src="./images/new/story.png"
        className="absolute w-full h-full object-cover"
      />
      {/* <div className="bg-black relative w-full h-full p-6"></div> */}
      <div className="flex flex-col md:flex-row px-0 md:px-6">
        <div
          className="w-full md:w-1/2  py-8 md:px-8 pl-0"
          style={{ zIndex: "0" }}
        >
          <Calculator packages={packages} navigate={navigate} />
        </div>{" "}
        <div className="w-full md:w-1/2  font-poppins rounded-2xl flex align-center md:ml-10 flex-col gap-6">
          <div className="flex gap-8 md:flex-row flex-row items-center justify-center">
            <div className="p-4 lg:px-8">
              <m.h1
                initial={{
                  x: 75,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.75,
                    easings: "easeInOut",
                  },
                }}
                className="mb-6  uppercase font-bold text-[#18D4A7] text-xl"
              >
                Ozo earn
              </m.h1>
              <div className="relative">
                {/* <m.div
                  initial={{ opacity: 0, overflow: "hidden" }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 1.2,
                      ease: "circInOut",
                    },
                  }}
                  className="border-none absolute top-[-0.8rem] left-[0.8rem] w-[30px] h-[30px] bg-gradient-to-r  from-purple-300 to-purple-200 rounded-tr-full"
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
                  className="border-none absolute top-[-0.8rem] left-[-1.0rem] w-[30px] h-[30px] bg-purple-300 rounded-tl-full"
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
                  className="border-none absolute top-[1rem] left-[0.8rem] w-[30px] h-[30px] bg-gradient-to-br  from-purple-200 to-purple-100 rounded-br-full"
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
                  className="border-none absolute top-[1rem] left-[-1.0rem] w-[30px] h-[30px] bg-purple-300 rounded-bl-full"
                ></m.div> */}
                {/* <Bubble top1={1} top2={-0.8} left1={-5} left2={3} /> */}
                <m.h1
                  initial={{
                    x: 75,
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.75,
                      easings: "easeInOut",
                    },
                  }}
                  className="z-5 relative mb-6 text-3xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
                >
                  Maximize asset potential.
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                    Optimize returns with peace of mind.
                  </span>
                </m.h1>
                <m.h1
                  initial={{
                    x: 75,
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.75,
                      easings: "easeInOut",
                    },
                  }}
                  className="mb-6 text-xl font-regular"
                >
                  Compute your earnings using our income calculator.
                </m.h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-0">
            <div className="flex flex-row px-4 md:px-12">
              <div className="mt-6 grid grid-cols-4 gap-4">
                <img
                  src="/images/calci/8.png"
                  alt="Icon 1"
                  className="w-24 h-24 moveUp "
                  style={{ zIndex: "1" }}
                />
                <img
                  src="/images/calci/1.png"
                  alt="Icon 2"
                  className="w-24 h-24 moveUp "
                  style={{ zIndex: "1" }}
                />
                <img
                  src="/images/calci/7.png"
                  alt="Icon 3"
                  className="w-24 h-24 moveUp"
                  style={{ zIndex: "1" }}
                />
                <img
                  src="/images/calci/6.png"
                  alt="Icon 4"
                  className="w-24 h-24 moveUp "
                  style={{ zIndex: "1" }}
                />
                <img
                  src="/images/calci/4.png"
                  alt="Icon 5"
                  className="w-24 h-24 moveDown "
                  style={{ zIndex: "1" }}
                />
                <img
                  src="/images/calci/9.png"
                  alt="Icon 6"
                  className="w-24 h-24 moveDown"
                  style={{ zIndex: "1" }}
                />
                <img
                  src="/images/calci/2.png"
                  alt="Icon 7"
                  className="w-24 h-24 moveDown "
                  style={{ zIndex: "1" }}
                />
                <img
                  src="/images/calci/5.png"
                  alt="Icon 8"
                  className="w-24 h-24 moveDown"
                  style={{ zIndex: "1" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCalculator;
