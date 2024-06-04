import React from "react";
import { motion as m } from "framer-motion";
// import Type from "../../components/Type";
import { useNavigate } from "react-router";
import HeroText from "../../../components/HeroText";
import "./home.css";
const Main = () => {
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  const item = {
    hidden: { y: "10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="w-full flex flex-col md:flex-row mb-22 md:my-0 md:mt-10 lg:mt-[-20px] xl:mt-[-20px] relative font-poppins justify-center items-center">
      <m.div
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.8,
          ease: "anticipate",
        }}
      >
        <img
          alt="Signup Background"
          // src={isMobile ? "/images/home/mobile.png" : "/images/new/hero.jpg"}
          src={
            isMobile
              ? "/images/new/home_mobile.jpg"
              : "/images/new/home_desktop.jpg"
          }
          className="opacity-75"
        />
      </m.div>

      {/*<img   alt="Signup Background" src="./images/animation/mainintro.gif" className=""/> */}
      <div className="flex w-full max-w-8xl md:top-0  lg:top-48 md:absolute items-center px-14">
        <div className="relative w-full md:w-3/4 text-left sm:ml-4 mt-5">
          <m.div
            initial={{ opacity: 0, overflow: "hidden" }}
            whileInView={{
              opacity: 1,
              transition: {
                // repeat: Infinity,
                duration: 4.2,
                ease: "circInOut",
              },
            }}
            className="border-none absolute top-[-1.8rem] left-[0.4rem] w-[30px] h-[30px] bg-gradient-to-r  from-purple-300 to-purple-200 rounded-tr-full"
          ></m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                // repeat: Infinity,
                duration: 4.1,
                ease: "circInOut",
              },
            }}
            className="border-none absolute top-[-1.8rem] left-[-1.4rem] w-[30px] h-[30px] bg-purple-300 rounded-tl-full"
          ></m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                // repeat: Infinity,

                duration: 4.3,
                ease: "circInOut",
              },
            }}
            className="border-none absolute top-[1] left-[0.4rem] w-[30px] h-[30px] bg-gradient-to-br  from-purple-200 to-purple-100 rounded-br-full"
          ></m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                // repeat: Infinity,
                duration: 4,
                ease: "circInOut",
              },
            }}
            className="z-[4] border-none absolute top-[1] left-[-1.4rem] w-[30px] h-[30px] bg-purple-300 rounded-bl-full"
          ></m.div>
          {/* <Bubble top1={1} top2={-0.5} left1={1} left2={2.9} /> */}
          <m.div
            variants={item}
            initial={{ y: "-50vh", opacity: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
            // initial="hidden"
            // animate="visible"
            transition={{
              // delay: 0.3,
              duration: 4.5,
              ease: "anticipate",
            }}
          >
            <h1 className="text-8xl mt-0  mb-6 font-poppins relative">
              {/* Step into the World of <br></br> */}
              {/* <span className="font-extrabold font-poppins text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#ADB3FD] to-[#C5B1FE]">
                Invest in Your Future with Ozo:
              </span> */}
              {/* <div style={{ overflow: "hidden" }}> */}
              {/* <span style={{ color: "#E8ADFF" }}> */}
              {/* <Type /> */}
              {/* </span> */}
              <HeroText />
              {/* </div> */}
            </h1>
            {/* <img
                alt="Signup Background"
                src="./images/text2.png"
                className="mb-6 sm:mb-0 "
              /> */}
          </m.div>
          {/* <m.div
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 1.6,
              ease: "anticipate",
            }}
            className="font-poppins text-justify py-5 leading-loose text-lg md:text-base md:leading-normal"
          >
            Discover the power of one Ozo, the leading investment platform for
            crypto, forex, casino, and commodities. With tailored packages and
            impressive returns, One Ozo empowers investors to grow their wealth.
            Maximize your potential in the dynamic world of finance with One
            Ozo's innovative solutions. Start your journey towards financial
            success today!
          </m.div> */}

          <m.div
            initial={{ y: "20vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 4.8,
              ease: "anticipate",
            }}
            className="w-full md:w-1/2 flex flex-col md:flex-row space-x-0 mt-6 lg:mt-14 md:ml-14 gap-10"
          >
            <button
              className="flex-1 text-center text-white font-semibold text-lg tracking-wide py-3 rounded-xl transition ease-in-out delay-150 hover:scale-95 hover:translate-y-1  bg-gradient-to-r from-gradient-start to-gradient-end"
              style={{
                border: "1px solid transparent",
              }}
            >
              <a
                href={"https://oneozo.com/home/public/pdf/Business%20Plan.pdf"}
                download
                target="_blank"
                rel="noreferrer"
              >
                Business Plan
              </a>
            </button>
            <button
              onClick={() => navigate("login")}
              className="flex-1 text-center text-white font-semibold text-lg tracking-wide py-3 rounded-xl transition ease-in-out delay-150 hover:scale-95 hover:translate-y-1"
              style={{ border: "1px solid white" }}
            >
              Dashboard
            </button>
          </m.div>
        </div>

        {/* <div className="w-1/2 h-full  flex justify-center items-center">
           <img   alt="Signup Background" src="./images/video/logovideo.gif" className="max-w-[450px]" />
          </div> */}
      </div>
    </div>
  );
};

export default Main;
