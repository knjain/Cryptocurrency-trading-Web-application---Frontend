import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaGoogleWallet } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

const Dashboard_old = () => {
  return (
    <div className="  w-full  ">
      {/* Carousel  */}

      <div className="max-w-7xl w-full mx-auto  ">
        <Carousel>
          <div className="rounded-lg">
            <img src="./images/Carousel/ad1.jpg" alt="carousel1" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div className="rounded-lg">
            <img src="./images/Carousel/ad3.jpg"  alt="carousel1"/>
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div className="rounded-lg">
            <img src="./images/Carousel/ad4.jpg" alt="carousel1" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div className="rounded-lg">
            <img src="./images/Carousel/ad5.jpg" alt="carousel1" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div className="rounded-lg">
            <img src="./images/Carousel/ad13.jpg" alt="carousel1" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div className="rounded-lg">
            <img src="./images/Carousel/ad14.jpg" alt="carousel1" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
          <div className="rounded-lg">
            <img src="./images/Carousel/ad15.jpg" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>
      
      {/* Heading  */}
      <h1 className="font-semibold text-5xl mb-6 pt-10  text-white text-center ">
        Analysis
      </h1>

      <div className="grid grid-cols-3 gap-y-6  w-full max-w-7xl mx-auto">
        <div className="max-w-[400px] h-80 bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md rounded-lg flex flex-col justify-around items-center p-6">
          <FaGoogleWallet fontSize="120px" />
          <p className="flex flex-col font-semibold text-2xl text-center">
            TEC Wallet <span>$0.00</span>
          </p>
        </div>
        <div className="max-w-[400px]  h-80 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md rounded-lg flex flex-col  justify-around items-center p-6">
          <FaGoogleWallet fontSize="96px" />
          <p className="flex flex-col  font-semibold text-2xl text-center">
            MAC Wallet <span>$0.00</span>
          </p>
        </div>
        <div className="max-w-[400px] h-80 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md rounded-lg flex flex-col  justify-around items-center p-6">
          <FaGoogleWallet fontSize="96px" />
          <p className="flex flex-col  font-semibold text-2xl text-center">
            TRADE Wallet <span>$0.00</span>
          </p>
        </div>

        <div className="max-w-[400px] h-80 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-md rounded-lg flex flex-col  justify-around items-center p-6">
          <FaGoogleWallet fontSize="96px" />
          <p className="flex flex-col  font-semibold text-2xl text-center">
            Total Investments <span>$0.00</span>
          </p>
        </div>
        <div className="max-w-[400px] h-80  bg-gradient-to-r from-sky to-indigo-500 text-white shadow-md rounded-lg flex flex-col  justify-around items-center p-6">
          <FaGoogleWallet fontSize="96px" />
          <p className="flex flex-col  font-semibold text-2xl text-center">
            Total Earnings<span>$0.00</span>
          </p>
        </div>
        <div className="max-w-[400px] h-80 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md  flex flex-col  justify-around items-center p-6">
          <FaGoogleWallet fontSize="96px" />
          <p className="flex flex-col  font-semibold text-2xl text-center">
            Total Withdrawals <span>$0.00</span>
          </p>
        </div>
      </div>

      {/* Refrel  */}

      <div className="w-full flex mx-auto py-16 justify-evenly text-white ">
        {/* Left refrel  */}
        <div className=" max-w-[450px] w-full">
          <button className="rounded-full bg-[#1B1D21] py-5  w-full flex items-center justify-around">
            <FiLink fontSize="54px" />

            <p className="font-semibold text-lg ">
              Click to copy left refrral link
            </p>
          </button>
        </div>
        {/* Right refrel  */}
        <div className=" max-w-[450px] w-full">
          <button className="rounded-full bg-[#1B1D21] w-full py-5 flex items-center justify-around">
            <FiLink fontSize="54px" />
            <p className="font-semibold text-lg ">
              Click to copy left refrral link
            </p>
          </button>
        </div>
      </div>

      {/* Career Progression  */}

      <div className="w-full rounded-xl  bg-gradient-to-r from-red-600 to-orange-700 text-white flex flex-col justify-center items-center  shadow-xl max-w-7xl mx-auto py-6 px-20 my-12">
        <h3 className="font-semibold text-2xl">Career Progression</h3>
        <div className="flex justify-around w-full h-72">
          {/* left business  */}
          <div className="flex flex-col justify-center space-y-2 items-center">
            <p className="font-semibold text-gray-300">
              (Level 1 achieved left business)
            </p>
            <p className="font-bold text-2xl">Left Business</p>

            <span className="font-bold text-2xl">$0</span>
          </div>

          {/* right business  */}
          <div className="flex flex-col justify-center space-y-2 items-center">
            <p className="font-semibold text-gray-300">
              (Level 1 achieved right business)
            </p>
            <p className="font-bold text-2xl">Right Business</p>

            <span className="font-bold text-2xl">$0</span>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between mb-2 px-2 font-semibold">
            <p className="text-xl">Level 1</p>
            <p className="text-black text-xl">Reward: $300</p>
          </div>
          <div className="max-w-7xl mb-2 bg-gray-100 rounded-full ">
            <p className="opacity-0">""</p>
          </div>
          <p className="text-right pr-2 text-xl text-black font-semibold">
            Target: $3000
          </p>
          <div className="flex justify-center py-4">
          <p className="text-center text-xl font-semibold max-w-[500px]">
            Career rewards will be paid in your TRADE Wallet on 15th and 30th of
            every month
          </p>
            </div>
         
        </div>
      </div>

      {/* Course  */}
      <div className="w-full rounded-lg shadow-md max-w-7xl mx-auto ">
        <img src="./images/Techmactrade.jpg" className="rounded-xl" />
      </div>
    </div>
  );
};

export default Dashboard_old;