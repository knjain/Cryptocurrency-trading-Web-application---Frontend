import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ThreeBoxes = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className=" relative  flex flex-col md:flex-row  w-[95%] md:w-[75%] mx-2 md:mx-40 my-16 rounded-lg p-8 md:p-20"
        style={{ backgroundColor: "#03010C", border: "1px solid #18D4A7" }}
      >
        <video
          autoPlay
          loop
          muted
          className="relative md:absolute left-[0%] md:left-[22%] w-full h-[76%] mt-[-1.5rem]"
        >
          <source src="./images/video/analog1.mp4" type="video/mp4" />
        </video>
        <div>
          <div className="relative">
            <m.h1
              className="text-2xl md:text-5xl font-bold mb-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "anticipate",
                },
              }}
              // viewport={{ once: true }}
            >
              {/* <Bubble className="z-[1]" top1={1} top2={-0.8} left1={-4} left2={0.2} /> */}
              Security first.
              <br />
              and second.
            </m.h1>
          </div>
          <m.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.4,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
            className="text-lg md:text-xl font-semibold mb-6   "
          >
            What’s yours remains only yours.
          </m.p>
          <m.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,

                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
            className="px-6 md:px-0 text-md  mb-10 font-thin text-[#eeedf0] "
          >
            At One Ozo, your security and privacy are our top priorities.
            <br />
            We take rigorous measures to ensure:
            <br />
            <span
              style={{
                color: "#18D4A7",
              }}
            >
              Robust Encryption:
            </span>{" "}
            We employ cutting-edge encryption technology <br />
            and stringent security protocols to safeguard your financial assets
            data.
            {/* This means that your information
        is always protected from unauthorized access. */}
            <br />{" "}
            <span
              style={{
                color: "#18D4A7",
              }}
            >
              Absolute Confidentiality:
            </span>{" "}
            Your personal and financial information is treated
            <br /> with the utmost confidentiality. What's yours remains
            exclusively yours.
            {/* We never compromise on the privacy of our
        users, offering you peace of mind. */}
          </m.p>
          <m.button
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "anticipate",
              },
            }}
            onClick={() => navigate("signup")}
            className="rounded-full bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd px-10 py-3 md:px-8 md:py-4 mb-[2%]"
          >
            <span className="text-white text-2xl font-semibold">
              Become a member
            </span>{" "}
          </m.button>
        </div>
      </div>
      {/*Design 2 new*/}
      <div
        className=" relative  flex flex-col md:flex-row  w-[95%] md:w-[75%] mx-2 md:mx-40 my-16 rounded-lg p-8 md:p-20"
        style={{ backgroundColor: "#03010C", border: "1px solid #18D4A7" }}
      >
        <video
          autoPlay
          loop
          muted
          className="relative md:absolute left-[0%] md:left-[22%] w-full h-[76%] mt-[-1.5rem]"
        >
          <source src="/images/video/design5.mp4" type="video/mp4" />
        </video>
        <div>
          <div className="relative">
            <m.h1
              className="text-2xl md:text-5xl font-bold mb-6"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: "anticipate",
                },
              }}
            >
              The story of One Ozo
              <br />
              Begins with Trust
            </m.h1>
          </div>
          <m.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,

                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
            className="px-6 md:px-0 text-md  mb-10 font-thin text-[#eeedf0] "
          >
            Through unwavering dedication to our promises,
            <br /> offering secure investment opportunities,
            <br />
            and putting client satisfaction at the forefront,
            <br /> we've garnered the trust of investors from across the globe.
            <br /> Trust isn't just a word to us, it's a daily commitment we
            uphold. <br />
          </m.p>
          <m.button
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "anticipate",
              },
            }}
            onClick={() => navigate("signup")}
            className="rounded-full bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd px-10 py-3 md:px-8 md:py-4 mb-[2%]"
          >
            <Link src={"/signup"} className="text-white text-xl font-semibold">
              Register
            </Link>
          </m.button>
        </div>
      </div>
      <div
        className=" relative  flex flex-col md:flex-row  w-[95%] md:w-[75%] mx-2 md:mx-40 my-16 rounded-lg p-8 md:p-20"
        style={{ backgroundColor: "#03010C", border: "1px solid #18D4A7" }}
      >
        <video
          autoPlay
          loop
          muted
          className="relative md:absolute left-[0%] md:left-[22%] w-full h-[76%] mt-[-1.5rem]"
        >
          <source src="./images/video/moneymatter1.mp4" type="video/mp4" />
        </video>
        <div>
          <m.h1
            className="text-2xl md:text-5xl font-bold mb-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
          >
            We take your money <br />
            matters seriously
          </m.h1>
          <m.p
            className="px-6 md:px-0 text-lg md:text-xl font-semibold mb-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.4,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
          >
            so that you don’t have to.
          </m.p>
          <m.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.6,
                ease: "anticipate",
              },
            }}
            className="px-6 md:px-0 text-md  mb-10 font-thin text-[#eeedf0]  "
          >
            At One Ozo, we are dedicated to expertly managing your money
            matters,
            <br /> providing a secure and reliable platform, so you can have
            peace of mind <br />
            and enjoy worry-free financial stability.
          </m.p>
          <m.button
            className="rounded-full bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd px-10 py-3 md:px-8 md:py-4 mb-[2%]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 2.0,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
            onClick={() => navigate("signup")}
          >
            <span className="text-white text-lg md:text-2xl font-semibold">
              Experience the upgrade
            </span>{" "}
          </m.button>
        </div>
      </div>
    </>
  );
};

export default ThreeBoxes;
