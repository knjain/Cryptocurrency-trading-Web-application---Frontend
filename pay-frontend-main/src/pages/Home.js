import React, { useEffect, useRef, useState } from "react";
import { motion as m } from "framer-motion";
import "swiper/css";
// import Bubble from "../components/Bubble";
import YouTubeCard from "../components/YouTubeCard";
import Main from "./static/home/Main";
import HomeCalculator from "./static/home/HomeCalculator";
import Perks from "./static/home/Perks";
import Terms from "./static/home/Terms";
import { Link } from "react-router-dom";
import NewMain from "./static/home/NewMain";
import ThreeBoxes from "./static/home/ThreeBoxes";
import { tree } from "fontawesome";
import { Popup } from "../components/Popup";
import NewHome2 from "./static/home/NewHome2";

// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// };
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
const item = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Home = () => {
  const isMobile = useIsMobile();
  const [popups, setPopups] = useState([
    // { imageSrc: "/images/11march.jpeg", visible: true },
    { imageSrc: "/images/6may.png", visible: true },
    // { imageSrc: "/images/10apr2.png", visible: false },
    // { imageSrc: "/images/4march3.jpeg", visible: false },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closePopup = (index) => {
    const updatedPopups = [...popups];
    updatedPopups[index].visible = false;
    setPopups(updatedPopups);
  };

  const nextPopup = (index) => {
    if (index < popups.length - 1) {
      const updatedPopups = [...popups];
      updatedPopups[index + 1].visible = true;
      setPopups(updatedPopups);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" w-full">
      {popups.map(
        (popup, index) =>
          popup.visible && (
            <Popup
              key={index}
              imageSrc={popup.imageSrc}
              closePopup={() => closePopup(index)}
              nextPopup={() => nextPopup(index)}
            />
          )
      )}
      {/* Main Page  */}
      {/* <Main /> */}

      {/* <NewMain /> */}
      <NewHome2 />
      {/* What is OZo Trade  */}
      <div className="w-full flex flex-col relative justify-center items-center">
        <div className="flex flex-col justify-between items-center gap-4 mt-[10%] text-center">
          <div className="md:w-1/2 md:flex"></div>
          <div className="relative  mt-0 md:w-1/2  md:px-6 px-12">
            <m.h1
              className="text-3xl lg:text-5xl relative  mb-12 font-bold font-poppins text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
              initial={{ y: "20vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.1,
                  ease: "anticipate",
                },
              }}
              viewport={{ once: true }}
            >
              Maximize Wealth with<br></br>{" "}
              <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                One Ozo
              </span>
            </m.h1>
            <m.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.6,
                  ease: "anticipate",
                },
              }}
              className="font-poppins text-base lg:text-lg  leading-relaxed "
            >
              Dive into diverse investment opportunities with One Ozo, a leading
              platform. Empower your portfolio with cryptocurrencies, forex,
              casino, and commodities. Our user-friendly interface caters to all
              levels of investors, providing tools for informed decisions. Join
              today for innovative and secure solutions, fostering financial
              success and wealth growth
              <span className="sm:display">
                <br />
                <br />
              </span>
              {/* One Ozo takes pride in offering a user-friendly platform, ensuring
              a seamless investment experience. Whether you're an experienced
              investor or just entering the market, our platform equips you with
              the tools and resources needed to make well-informed investment
              decisions. Join us today and tap into the potential of these
              dynamic markets. With One Ozo's innovative and secure investment
              solutions, you can grow your wealth and strive for financial
              success. */}
            </m.p>
            <m.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.2,
                  ease: "anticipate",
                },
              }}
              className="cursor-pointer text-white w-56 border-2 bg-gradient-to-r from-newStart via-newMid to-newEnd  py-4 shadow-grey-700 shadow-2xl  hover:text-black transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide"
            >
              <Link to="/aboutus">Read More</Link>
            </m.button>
          </div>
          <video autoPlay loop muted className="relative w-full h-full">
            <source src="./images/video/2ndpagevideo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col justify-center items-center px-6 md:my-24 md:mt-0 xl:bottom-0 top-0 xl:top-[60rem] ">
          <div className="relative p-2">
            {/* <m.div
              initial={{ opacity: 0, overflow: "hidden" }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: "circInOut",
                },
              }}
              className="border-none absolute top-[4rem] left-[1rem] w-[30px] h-[30px] bg-purple-300 rounded-tr-full"
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
              className="border-none absolute top-[4rem] left-[-0.8rem] w-[30px] h-[30px] bg-purple-300 rounded-tl-full"
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
              className="border-none absolute top-[5.8rem] left-[1rem] w-[30px] h-[30px] bg-gradient-to-br  from-purple-200 to-purple-100 rounded-br-full"
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
              className="z-[2] border-none absolute top-[5.8rem] left-[-0.8rem] w-[30px] h-[30px] bg-purple-300 rounded-bl-full"
            ></m.div> */}
            <m.h1
              initial={{ y: -50, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  delay: 0.7,
                  ease: "anticipate",
                },
              }}
              className="text-4xl text-center mt-20 font-poppins font-bold w-full text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
            >
              Why Choose One Ozo for{" "}
              <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                Your Investment?
              </span>
            </m.h1>
          </div>
          <m.div
            initial={isMobile ? {} : { opacity: 0, scale: 0 }}
            whileInView={
              isMobile
                ? {}
                : {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delayChildren: 0.3,
                      staggerChildren: 0.1,
                    },
                  }
            }
            className="grid md:grid-cols-2 sm:grid-cols-1 mt-24 mb-24 max-w-7xl gap-x-16 gap-y-12"
          >
            {/* 1  */}
            <m.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.4,
                  ease: "anticipate",
                },
              }}
              className="max-w-[480px]  relative space-x-6 w-full flex items-center"
            >
              {/* left  */}
              <img
                alt="Signup Background"
                src="./images/animation/circleanimation.png"
                className="animate-spin-slow absolute left-0 w-32"
              />

              <img
                alt="Signup Background"
                src="./images/icons/profit.png"
                className="w-16 pl-2 "
              />
              {/* right  */}
              <div className="font-poppins pl-6   text-lg">
                <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                  Strong Performance:
                </span>
                <p className="font-poppins mt-2 text-base leading-loose md:leading-normal">
                  One Ozo consistently delivers impressive investment
                  performance, ensuring optimal returns for our clients'
                  portfolios.
                </p>
              </div>
            </m.div>
            {/* 2  */}
            <m.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "anticipate",
                },
              }}
              className="max-w-[480px] space-x-6 relative w-full flex items-center"
            >
              {/* left  */}
              <img
                alt="Signup Background"
                src="./images/animation/circleanimation.png"
                className="animate-spin-slow absolute left-0 w-32"
              />
              <img
                alt="Signup Background"
                src="./images/icons/interface.png"
                className="w-16 pl-2 "
              />
              {/* right  */}
              <div className="font-poppins pl-6 text-lg">
                <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                  Diverse Investment Options:
                </span>
                <p className="font-poppins mt-2 text-base leading-loose md:leading-normal">
                  With One Ozo, investors gain access to a wide range of
                  investment opportunities, including cryptocurrencies, forex,
                  casino, and commodities.
                </p>
              </div>
            </m.div>
            {/* 3 */}
            <m.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: "anticipate",
                },
              }}
              className="max-w-[420px] relative space-x-6  w-full flex items-center"
            >
              {/* left  */}
              <img
                alt="Signup Background"
                src="./images/animation/circleanimation.png"
                className="animate-spin-slow absolute left-0 w-32"
              />

              <img
                alt="Signup Background"
                src="./images/icons/secure.png"
                className="w-16 pl-2 "
              />
              {/* right  */}
              <div className="font-poppins pl-6 text-lg">
                <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                  Expert Guidance:
                </span>
                <p className="font-poppins mt-2 text-base leading-loose md:leading-normal">
                  Our team of experienced professionals provides expert guidance
                  and market insights to help investors make informed decisions.
                </p>
              </div>
            </m.div>
            {/* 4 */}
            <m.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.6,
                  ease: "anticipate",
                },
              }}
              className="max-w-[480px] relative space-x-6  w-full flex items-center"
            >
              {/* left  */}
              <img
                alt="Signup Background"
                src="./images/animation/circleanimation.png"
                className="animate-spin-slow absolute left-0 w-32"
              />

              <img
                alt="Signup Background"
                src="./images/icons/api.png"
                className="w-16 pl-2 "
              />
              {/* right  */}
              <div className="font-poppins pl-6   text-lg">
                <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                  User-Friendly Platform:
                </span>
                <p className="font-poppins mt-2 text-base leading-loose md:leading-normal">
                  One Ozo offers a user-friendly platform, making it easy for
                  investors to manage their portfolios and track their
                  investments.
                </p>
              </div>
            </m.div>
            {/* 5 */}
            <m.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 2.0,
                  ease: "anticipate",
                },
              }}
              className="max-w-[480px]  relative space-x-6  w-full flex items-center"
            >
              {/* left  */}
              <img
                alt="Signup Background"
                src="./images/animation/circleanimation.png"
                className="animate-spin-slow absolute left-0 w-32"
              />

              <img
                alt="Signup Background"
                src="./images/icons/analytics.png"
                className="w-16 pl-2 "
              />
              {/* right  */}
              <div className="font-poppins pl-6   text-lg">
                <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                  Security and Trust:
                </span>
                <p className="font-poppins mt-2 text-base leading-loose md:leading-normal">
                  One Ozo prioritizes the security of clients' funds and
                  personal information, building trust and confidence in our
                  platform.
                </p>
              </div>
            </m.div>
            {/* 6 */}
            <m.div
              initial={{
                y: 20,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 2.4,
                  ease: "anticipate",
                },
              }}
              className="max-w-[480px]  relative space-x-6  w-full flex items-center"
            >
              {/* left  */}
              <img
                alt="Signup Background"
                src="./images/animation/circleanimation.png"
                className="animate-spin-slow absolute left-0 w-32"
              />

              <img
                alt="Signup Background"
                src="./images/icons/certified.png"
                className="w-16 pl-2 "
              />
              {/* right  */}
              <div className="font-poppins pl-6  text-lg">
                <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                  Exceptional Customer Support:
                </span>
                <p className="font-poppins mt-2 text-base leading-loose md:leading-normal">
                  Our dedicated customer support team is available to assist
                  clients with any queries or concerns promptly and effectively.
                </p>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>

      {/* Finance */}

      <div className="flex flex-col gap-3 justify-start sm:justify-center items-center pt-10 md:mb-10 md:mt-20 md:mb-0 font-poppins max-w-full  w-full max-h-[110vh] px-6">
        {/* <Bubble top1={2.6} top2={0.8} left1={-1} left2={0.8} /> */}
        <div className="relative mx-12">
          {/* <m.div
            initial={{ opacity: 0, overflow: "hidden" }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "circInOut",
              },
            }}
            className="border-none absolute top-[-1.8rem] left-[0.2rem] w-[30px] h-[30px] bg-gradient-to-r  from-purple-300 to-purple-200 rounded-tr-full"
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
            className="border-none absolute top-[-1.8rem] left-[-1.6rem] w-[30px] h-[30px] bg-purple-300 rounded-tl-full"
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
            className="border-none absolute top-[0rem] left-[0.2rem] w-[30px] h-[30px] bg-gradient-to-br  from-purple-200 to-purple-100 rounded-br-full"
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
            className="z-[4] border-none absolute top-[0rem] left-[-1.6rem] w-[30px] h-[30px] bg-purple-300 rounded-bl-full"
          ></m.div> */}
          <m.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay: 0.25,
                ease: "anticipate",
              },
            }}
            className="text-3xl md:text-6xl pb-3 md:pb-0 md:py-3 text-left md:text-center font-semibold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
          >
            Finance simplified,
            <br />
            <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
              in your language
            </span>
          </m.h1>
        </div>

        <div className="w-full md:mt-24 flex justify-center space-x-14 items-center">
          <m.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: "anticipate",
              },
            }}
            className="cursor-pointer text-white w-56 border-2 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd py-4 shadow-grey-700 shadow-2xl  hover:text-white transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide"
          >
            <Link
              to="https://www.youtube.com/channel/UCfsWoYIDhB7qrsSTkynSbaQ"
              target="_blank"
            >
              Youtube
            </Link>
          </m.button>
          {/* <m.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.4,
                delay: 0.4,
                ease: "anticipate",
              },
            }}
            className="text-white w-56 border-2 py-4 shadow-grey-700 shadow-2xl  hover:text-white transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide"
          >
            Blogs 
          </m.button>*/}
        </div>
      </div>

      {/* images */}
      {/* <div className="hidden md:block my-44 font-poppins flex w-full relative text-black px-6">
        <div className="max-w-[380px] max-h-[280px] ease-in-out z-10 duration-300 h-full hover:rotate-0 hover:z-50 hover:cursor-pointer transform transition delay-300 hover:-translate-y-36 absolute left-[280px] bottom-6  -rotate-6 px-6 py-8 w-full bg-white rounded-2xl shadow-xl">
          <h2 className="mb-4 text-gray-600">Lorem ipsum</h2>
          <p>
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="max-w-[420px] absolute z-20 left-[500px] ease-in-out  duration-300 bottom-0 hover:z-50  hover:rotate-0 hover:cursor-pointer transform transition delay-300 hover:-translate-y-36  rotate-12 max-h-[250px] h-full  rounded-2xl bg-white  p-3">
          <img
            alt="Signup Background"
            src="./images/yt2.jpg"
            className="rounded-2xl"
          />
        </div>
        <div className="max-w-[420px] absolute z-30 bottom-12 hover:rotate-0  duration-300 ease-in-out hover:z-50 hover:cursor-pointer transform transition delay-300 hover:-translate-y-36 -rotate-3 right-[500px]  max-h-[250px] h-full rounded-2xl bg-white  p-3">
          <img
            alt="Signup Background"
            src="./images/yt1.jpg"
            className="rounded-2xl"
          />
        </div>

        <div className="max-w-[380px] rotate-6 hover:rotate-0 hover:z-50  duration-300 ease-in-out hover:cursor-pointer transform delay-300 hover:-translate-y-36 z-40 -bottom-12 absolute right-[320px]  px-6 py-8   w-full bg-white rounded-2xl shadow-xl">
          <h2 className="mb-4 text-gray-600">Word of the day</h2>
          <h2 className="mb-4 text-3xl">Additionally Survillence Measure</h2>

          <p className="text-gray-500">
            rem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-full min-h-[250px] h-full my-[10px] z-0 px-6 py-0  bg-black  shadow-xl"></div>
      </div> */}
      <YouTubeCard />

      {/*Ozo Token Unlock*/}
      <div className="flex bg-black flex-col md:flex-row font-poppins relative w-full justify-center items-center mt-20 px-6 md:px-0">
        <video
          autoplay="true"
          loop="true"
          muted="true"
          class="md:absolute w-full opacity-75 h-full scale-150 md:scale-110"
        >
          <source src="./images/video/ozotoken.mp4" />
        </video>
        <div className="w-full flex justify-start items-center px-6 md:ml-14 my-4">
          <div className="relative max-w-2xl w-full text-left pt-10">
            {/* <m.div
              initial={{ opacity: 0, overflow: "hidden" }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: "circInOut",
                },
              }}
              className="border-none absolute top-[0.8rem] left-[0.6rem] w-[30px] h-[30px] bg-gradient-to-r  from-purple-300 to-purple-200 rounded-tr-full"
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
              className="border-none absolute top-[0.8rem] left-[-1.2rem] w-[30px] h-[30px] bg-purple-300 rounded-tl-full"
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
              className="border-none absolute top-[2.6rem] left-[0.6rem] w-[30px] h-[30px] bg-gradient-to-br  from-purple-200 to-purple-100 rounded-br-full"
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
              className="z-[4] border-none absolute top-[2.6rem] left-[-1.2rem] w-[30px] h-[30px] bg-purple-300 rounded-bl-full"
            ></m.div> */}
            {/* <Bubble top1={2.6} top2={0.8} left1={-0.8} left2={1} /> */}
            <m.h1
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: "anticipate",
                },
              }}
              className="mb-6 font-bold font-poppins text-3xl md:text-5xl text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
            >
              {/* OZO Token: Unlock Lucrative Promotions */}
              Unlock Lucrative <br />
              <span className="text-2xl md:text-4xl font-medium text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                with Ozo Token for Smart Investors
              </span>{" "}
            </m.h1>
            <m.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                  ease: "anticipate",
                },
              }}
              className="text-base mb-6 leading-relaxed"
            >
              Discover a world of exclusive promotions and lucrative rewards
              tailored to smart investors with OZO Token.
            </m.p>

            <div className="space-y-6 ">
              <m.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.5,
                    delay: 0.3,
                    ease: "anticipate",
                  },
                }}
                className="flex items-center space-x-4"
              >
                <img
                  alt="Signup Background"
                  src="./images/transfer-money.png"
                  className="w-12"
                />
                <div className="font-poppins  text-xl ">
                  <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                    Multilevel Referral Rewards:
                  </span>
                  <p className="font-poppins text-base leading-relaxed font-thin ">
                    Participate in our comprehensive multi-level referral
                    program and unlock attractive referral bonuses and OZO Token
                    rewards. It's a fantastic way to earn more as you invite
                    others to join.
                  </p>
                </div>
              </m.div>
              <m.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.5,
                    delay: 0.5,
                    ease: "anticipate",
                  },
                }}
                className="flex items-center space-x-4"
              >
                <img
                  alt="Signup Background"
                  src="./images/debit.png"
                  className="w-12"
                />
                <div className="font-poppins  text-xl">
                  <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                    Investment Level Rewards:
                  </span>
                  <p className="font-poppins text-base font-thin">
                    As you progress through different investment levels, OZO
                    Token rewards await you. Higher investment levels offer even
                    more generous percentages based on your total investment
                    amount.
                  </p>
                </div>
              </m.div>
              <m.div
                initial={{ y: -50, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 1.5,
                    delay: 0.7,
                    ease: "anticipate",
                  },
                }}
                className="flex items-center space-x-4"
              >
                <img
                  alt="Signup Background"
                  src="./images/safety.png"
                  className="w-12"
                />
                <div className="font-poppins  text-xl">
                  <span className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
                    Weekly Withdrawal Options and Bonuses :
                  </span>
                  <p className="font-poppins text-base font-thin">
                    Enjoy the flexibility of weekly withdrawal options while
                    also reaping additional bonuses for choosing not to
                    withdraw. These bonuses accumulate in your Extra Income
                    wallet.
                  </p>
                </div>
              </m.div>
            </div>
          </div>

          {/* right  */}
          {/* <div className=" pl-2  flex justify-center items-center">
           <img   alt="Signup Background" src="./images/ai.png" className=" " />
          
          </div> */}
        </div>
      </div>
      <HomeCalculator className="w-full h-screen" />
      {/* Design 2  */}
      <ThreeBoxes />

      {/* calculator */}

      {/* youtube videos page  */}

      <div className="w-full flex flex-col relative h-screen align-center justify-center ">
        <img
          alt="terms"
          // src="./images/termsBg.png"
          src="./images/bs22.png"
          className="relative max-w-full object-cover w-full opacity-85 h-full"
        />
        <Terms />
      </div>
      <div className="w-full h-screen relative flex flex-col align-center justify-center my-48 md:my-0">
        <img
          alt="perks"
          // src="./images/perks1.png"
          src="./images/allnew/perks.jpg"
          className="relative max-w-full object-cover w-full opacity-40 h-full"
        />
        <Perks />
      </div>
      {/* FAQ  */}
    </div>
  );
};

export default Home;
