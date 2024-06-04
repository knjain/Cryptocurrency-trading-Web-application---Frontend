import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import { Link, Outlet, Route, useNavigate } from "react-router-dom";
import WithdrawalDetails from "./static/investment/WithdrawalDetails";
import TokenDetails from "./static/investment/TokenDetails";
import DirectBusinessDetails from "./static/investment/DirectBusinessDetails";
import DirectReferralDetails from "./static/investment/DirectReferralDetails";

const ExrtaBonus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden w-full font-poppins">
      {/* section 1 */}
      {/* <div className="flex flex-col md:flex-row mx-auto font-poppins relative w-full justify-end md:justify-center items-center md:mb-20">
        <img
          alt="Signup Background"
          src="./images/extrabonus.jpg"
          className="z-0 object-cover w-full h-full md:max-w-full md:h-auto "
        />
        <div className="relative  md:absolute px-8 lg:px-44 w-full bg-opacity-40 py-8">
          <m.h1
            className="text-3xl md:relative top-[-13rem] md:top-0 md:text-4xl md:text-5xl font-semibold text-4xl text-left text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 1 }} // Adjust delay as per your requirement
          >
            Accelerate
            <br /> Your Earnings:
            <br /> Unlock Ozo's
            <br /> Investment Advantage!
          </m.h1>
          <m.div
            className="mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-3/4 h-[6px] mt-2 " // Added mx-auto to center the line
            initial={{ x: -600, width: 0 }}
            animate={{ x: 0, width: "52%" }}
            transition={{ duration: 1, delay: 2 }}
          ></m.div>{" "}
          <p className="max-w-[520px] w-full font-medium mb-6">
            Maximize Your Investments with One Ozo's Rewarding Investment
            Levels. Earn Ozo Tokens based on your investment amount, enjoy
            weekly withdrawals, and unlock bonus rewards for not withdrawing.
            Start earning today!
          </p>
          <div className="my-6 flex flex-col md:flex-row gap-8">
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-3 bg-white md:bg-black rounded-xl font-bold  bg-opacity-30 md:bg-opacity-20"
              style={{ border: "1px solid #E8ADFF" }}
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-3 bg-white md:bg-black bg-opacity-30 rounded-xl font-bold  bg-gradient-to-r from-gradient-start to-gradient-end text-black"
            >
              Register
            </button>
          </div>
        </div>
      </div> */}

      {/* section 2 */}

      {/* section 3 */}

      <WithdrawalDetails />
      <TokenDetails />
      <DirectBusinessDetails />
      <DirectReferralDetails />
      {/* section 4 */}
      <div className="space-y-6  p-8 px-12 md:px-24 md:mt-24">
        <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
          Binary Rewards: Ascend the Earnings Ladder
        </h1>
        <m.div
          className="flex mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-4/5 h-[6px] mt-3" // Added mx-auto to center the line
          // initial={{ x: -600, width: 0 }}
          // animate={{ x: 0, width: "55%" }}
          // transition={{ duration: 1, delay: 2 }}
          initial={{ x: -100, opacity: 1 }}
          // animate={{ x: 0, opacity: 1 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              // ease: "anticipate",
              delay: 0.5,
            },
          }}
        ></m.div>
        <m.div
          // key={index}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.75, easings: "easeInOut" },
          }}
          className=""
        >
          <p className="font-semibold leading-relaxed">
            Our Binary Rewards program offers you a clear path to financial
            success. Starting at Level 1 as a Pro, you can earn cash rewards as
            high as $16,500 by growing your network. Achieve milestones, unlock
            higher levels, and watch your earnings soar as you build your
            business.
          </p>
        </m.div>
      </div>
      <div className="flex justify-center w-full md:px-40">
        <img
          className="w-full object-cover"
          alt="Multi-Level Referral Structure"
          src="/images/ozo career[1].png"
        />
      </div>
      <div className="my-8  text-center w-full px-6 pt-16">
        <h1 className="text-4xl mb-4 font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
          Investment Advantages at One Ozo
        </h1>
        <m.div
          className="flex mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-1/2 h-[6px] mt-3 mx-auto" // Added mx-auto to center the line
          // initial={{ x: -600, width: 0 }}
          // animate={{ x: 0, width: "55%" }}
          // transition={{ duration: 1, delay: 2 }}
          initial={{ x: -100, opacity: 1 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 1,
              // ease: "anticipate",
              delay: 0.5,
            },
          }}
        ></m.div>
        <p className="max-w-4xl mx-auto w-full">
          Discover the benefits of investing with One Ozo. Earn Ozo Tokens based
          on your investment level, enjoy weekly withdrawals, and unlock bonus
          rewards for not withdrawing. Maximize your earnings today!
        </p>

        <div className="max-w-6xl text-white grid my-20 mx-auto lg:grid-cols-3 gap-6 sm:grid-cols-2 gap-3">
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
            className="max-w-[350px] border  min-h-[350px] py-6 rounded-xl   px-6"
          >
            <div className=" mb-5 h-[110px] rounded-full  bg-gray.600 w-full flex justify-center items-center">
              {" "}
              <img
                alt="Signup Background"
                src="./images/OzoTokenReward.png"
                className="w-16 h-[100px] w-[100px] "
              />
            </div>
            <h1 className="text-2xl mb-4 font-bold">Ozo Token Rewards</h1>
            <p className="text-gray-500 text-[16px]">
              Earn Ozo Tokens equivalent to a percentage of your investment,
              based on your investment level.
            </p>
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
            className="max-w-[350px] border  min-h-[350px] py-6 rounded-xl text-left  px-6"
          >
            <div className=" mb-5 h-[110px] rounded-full  bg-gray.600 w-full flex justify-center items-center">
              {" "}
              <img
                alt="Signup Background"
                src="./images/Weekly Withdrawals.png"
                className=" h-[100px] w-[100px] w-16 "
              />
            </div>
            <h1 className="text-2xl mb-4 font-bold">Weekly Withdrawals</h1>
            <p className="text-gray-500 text-[16px]">
              Access and withdraw your earnings on a weekly basis, allowing you
              to manage and utilize your returns effectively.
            </p>
          </m.div>
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
            className="max-w-[350px] border  min-h-[350px] py-6 rounded-xl text-left  px-6"
          >
            <div className=" mb-5 h-[140px] rounded-full  bg-black w-full flex justify-center items-center">
              {" "}
              <img
                alt="Signup Background"
                src="./images/Bonus for Holding.png"
                className=" h-[100px] w-[100px] w-16 "
              />
            </div>
            <h1 className="text-2xl mb-4  font-bold">
              Investment Tiers Unleashed: Earn More!
            </h1>
            <p className="text-gray-500 text-[16px]">
              Boost your earnings with One Ozo's investment tiers. Invest more,
              earn more Ozo Tokens. Explore the rewards of higher investments
              today.
            </p>
          </m.div>
        </div>
      </div>
      <div className="my-20 flex flex-col justify-center items-center px-6">
        <h2 className="text-center font-medium text-3xl">
          Take the Leap to Become a Top Investor{" "}
        </h2>
        <p className="text-xl font-medium text-center mb-16">
          Join Us Today and Sign Up Now!
        </p>
        <button
          className="bg-gradient-to-r from-newStart via-newMid to-newEnd text-white hover:text-black  px-8 py-3 rounded"
          onClick={() => navigate("/signup")}
        >
          Register now
        </button>
      </div>
    </div>
  );
};

export default ExrtaBonus;
// removed

{
  /* <div className="mt-44 px-6">
        <h1 className="text-5xl text-center font-medium">
          Unlocking Exclusive Programme Benefits & Perks
        </h1>
        <div className="max-w-6xl text-white grid my-10 mx-auto lg:grid-cols-3 gap-6 sm:grid-cols-2 gap-3">
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
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl   px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img
                alt="Signup Background"
                src="./images/TOKEN BONUSES.png"
                className="  w-16 "
              />
            </div>
            <h1 className="text-sm mb-4 font-medium  uppercase">
              Token Bonuses <span className="text-red-800">*</span>
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Earn additional Ozo Tokens through exclusive bonus offers,
              maximizing your overall investment returns.
            </p>
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
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl text-left  px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img
                alt="Signup Background"
                src="./images/PRIORITY ACCESS.png"
                className="  w-16 "
              />
            </div>
            <h1 className="text-sm mb-4 font-medium uppercase">
              Priority Access
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Gain early access to new investment opportunities, ensuring you
              stay ahead in the market.
            </p>
          </m.div>
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
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl text-left  px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img
                alt="Signup Background"
                src="./images/PERSONALIZED SUPPORT.png"
                className="  w-16 "
              />
            </div>
            <h1 className="text-sm mb-4 uppercase font-medium">
              Personalized Support
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Receive dedicated assistance from our team of experts, guiding you
              throughout your investment journey.
            </p>
          </m.div>

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
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl   px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img
                alt="Signup Background"
                src="./images/EXCLUSIVE EVENTS.png"
                className="  w-16 "
              />
            </div>
            <h1 className="text-sm mb-4  uppercase font-medium">
              Exclusive Events
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Enjoy invitations to exclusive events, networking opportunities,
              and industry insights.
            </p>
          </m.div>

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
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl   px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img
                alt="Signup Background"
                src="./images/FLEXIBLE WITHDRAWALS.png"
                className="  w-16 "
              />
            </div>
            <h1 className="text-sm mb-4 uppercase font-medium">
              Flexible Withdrawals
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Benefit from flexible withdrawal options, allowing you to access
              your earnings when needed.
            </p>
          </m.div>

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
            className="max-w-[350px]   min-h-[350px] py-6 rounded-xl   px-6"
          >
            <div className="max-w-[80px] mb-5 h-[110px] rounded-full   w-full flex justify-center items-center">
              {" "}
              <img
                alt="Signup Background"
                src="./images/REFERRAL REWARDS.png"
                className="  w-16 "
              />
            </div>
            <h1 className="text-sm mb-4 uppercase font-medium">
              Referral Rewards
            </h1>
            <p className="text-gray-500 font-semibold text-[16px]">
              Earn rewards by referring others to join the programme, expanding
              your earning potential.
            </p>
          </m.div>
        </div>
        {/* <h2 className="text-sm text-center">
          <span className="text-red-800">*</span> Subject to jurisdictional
          limitations
        </h2> 
      </div> */
}
