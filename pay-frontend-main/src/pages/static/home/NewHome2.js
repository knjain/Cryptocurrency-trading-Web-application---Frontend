import React from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

const NewHome2 = () => {
  return (
    <div className="mb-8 w-full text-center  flex flex-col">
      <div className="flex flex-col md:flex-row w-full mb-8 md:mb-0">
        <div className="flex flex-col w-full md:w-[40%] pl-8 ">
          <h1 className=" text-xl md:text-4xl mb-4 flex mt-12 text-left">
            The World’s Premier
          </h1>
          <m.div
            className=" flex justify-start " // Added mx-auto to center the line
            initial={{ x: -100, opacity: 1 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.5,
              },
            }}
          >
            <h1 className="text-4xl md:text-7xl mb-4 font-bold text-left text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
              Assets <br /> Management <br />
              Platform
            </h1>
          </m.div>
          <h3 className="mt-8 flex w-full justify-start font-semibold">
            Download One Ozo app
          </h3>
          <div className="flex flex-col md:flex-row gap-6 pr-4 md:pr-0">
            <div className="mt-6 flex justify-center items-center border rounded-lg p-2 gap-2 px-6 min-w-[200px] ">
              <img src="/images/apple.png" alt="apple" className="w-8 h-8" />
              <h3>Coming Soon </h3>
            </div>
            <Link
              className="mt-6 flex justify-center items-center border rounded-lg p-2 gap-2 px-6 min-w-[200px]"
              to="https://play.google.com/store/apps/details?id=com.ozopay.oneozo"
              target="_blank"
            >
              <img src="/images/play.png" alt="play" className="w-6 h-6" />
              <h3>Download </h3>
            </Link>
          </div>
        </div>
        <div className="relative w-full md:w-[60%]  ">
          {/* <img
            alt="fx2"
            src="./images/Rectangle 3.png"
            className=" absolute w-full h-full z-0"
          /> */}
          <video autoPlay loop muted className="absolute w-full h-full z-0">
            <source src="./images/video/12.mp4" type="video/mp4" />
          </video>
          <div className="flex mt-12 relative  pr-6 md:pr-12 w-full justify-end flex-row gap-6 z-10">
            <div className="  text-center px-8 md:px-4 py-2 bg-[#01E576]">
              <Link className="text-sm text-center text-black " to="/signup">
                Register
              </Link>
            </div>
            <div className="text-center px-8 md:px-4 py-2 pulse-shadow-effect border border-green-500 ">
              <Link
                className="text-sm text-center text-white"
                to={localStorage.getItem("user_data") ? "/login" : "/login"}
              >
                &nbsp;{" "}
                {localStorage.getItem("user_data") ? "Dashboard" : "Login"}{" "}
                &nbsp;
              </Link>
            </div>
          </div>
          <div className="flex mt-44 md:mt-20 relative w-full justify-end  md:px-0 flex-row md:flex-col gap-4 md:gap-10 pb-6 z-10">
            <Link
              className="w-full flex justify-end pr-8 "
              to="https://www.myfxbook.com/reviews/crypto-exchanges/one-ozo/3107139,1"
            >
              <div className=" h-[60px] w-[60px] rounded-full  border bg-[#01E576] flex justify-center items-center">
                <img alt="fx 1" src="./images/fx 1.png" className="w-16 h-16" />
              </div>
            </Link>
            <Link
              className="w-full flex justify-end pr-8"
              to="https://www.google.com/search?client=ms-android-xiaomi-rvo2b&sca_esv=58652087346d5a22&hl=en-IN&cs=0&sxsrf=ACQVn09qJEfUlgYxw_pPl7cq9VPcNxgCeg%3A1710938439364&q=One%20Ozo&ludocid=11900068929394878342&ibp=gwp%3B0%2C7&lsig=AB86z5Xxj_cKuzxibqg8kGx6Dc37&kgs=bf0fdca40bc6247a&shndl=-1&shem=lcsnce%2Clnolc%2Clsp&source=sh%2Fx%2Floc%2Fact%2Fm1%2F4"
            >
              <div className=" h-[60px] w-[60px] rounded-full  border bg-[#fff] flex justify-center items-center">
                <img alt="fx2" src="./images/fx2.png" className="w-16 h-16" />
              </div>
            </Link>
            <Link
              className="w-full flex justify-end pr-8"
              to="https://play.google.com/store/apps/details?id=com.ozopay.oneozo"
            >
              <div className=" h-[60px] w-[60px] rounded-full  border bg-[#01E576] flex justify-center items-center">
                <img alt="fx3" src="./images/fx3.png" className="w-16 h-16" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-end  text-white  pr-2 mt-6 ">
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.0,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          className=" p-6  min-w-[250px] md:min-w-[350px]"
          style={{
            border: "1px solid #494949",
            borderRadius: "78px 78px 0 0 ",
          }}
        >
          <div className=" my-8 h-[90px] w-[90px] rounded-full  border bg-gray.600  flex justify-center items-center">
            <img alt="Background" src="./images/box1.png" className="" />
          </div>
          <h1 className=" text-2xl mb-4 font-bold text-left">
            Earn passive <br />
            income with oneozo.
          </h1>
          <div className="flex items-center mt-12">
            <div
              className="h-0 w-20 border-l  mr-2"
              style={{ border: "1px solid gray" }}
            ></div>
            <Link className="font-light cursor-pointer" to="/login">
              Activate Package
            </Link>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.0,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          className=" p-6  min-w-[250px] md:min-w-[350px]"
        >
          <div className=" my-8 h-[90px] w-[90px] rounded-full  border bg-gray.600  flex justify-center items-center">
            <img alt="Background" src="./images/box2.png" className="" />
          </div>
          <h1 className=" text-2xl mb-4 font-bold text-left">
            Refer One Ozo, <br />
            Earn Big!
          </h1>
          <div className="flex items-center mt-12 mb-8">
            <div
              className="h-0 w-20 border-l  mr-2"
              style={{ border: "1px solid gray" }}
            ></div>
            <Link className="font-light cursor-pointer" to="/login">
              Refer Now
            </Link>
          </div>
        </m.div>
        <div
          className="w-0 h-0 md:h-32 border-l mt-0 md:mt-32"
          style={{ border: "1px solid gray" }}
        ></div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.0,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          className=" p-6  min-w-[250px] md:min-w-[350px]"
        >
          <div className=" my-8 h-[90px] w-[90px] rounded-full  border bg-gray.600  flex justify-center items-center">
            <img alt="Background" src="./images/box3.png" className="" />
          </div>
          <h1 className=" text-2xl mb-4 font-bold text-left">
            Register in under
            <br /> 1 minute.
          </h1>
          <div className="flex items-center mt-12">
            <div
              className="h-0 w-20 border-l  mr-2"
              style={{ border: "1px solid gray" }}
            ></div>
            <Link className="font-light cursor-pointer" to="/signup">
              Register Now
            </Link>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default NewHome2;
