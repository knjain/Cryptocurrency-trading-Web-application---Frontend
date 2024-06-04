import React from "react";
import { motion as m } from "framer-motion";

const StarImage = () => (
  <img src="./images/stars.png" alt="star" className="w-[25px] object-cover" />
);
const messages = [
  "Withdrawal gates for the ROI wallet open every Sunday.",
  "Withdrawal gates for the referral and binary wallet are accessible daily from 9 am to 4 pm (UK timing).",
  "There are no fees for internal transfers, but The withdrawal fees will vary, ranging from 3% to 10%.",
  "Reinvestment requires a minimum of 50% cash.",
  "Interest wallet withdrawal gates are active on the 15th and 30th of each month.",
  "Users have the option to utilize Ozo Tokens for reinvestment.",
  "Reinvestment funds can be sourced from the ROI wallet, referral wallet, or interest wallet.",
  "Binary returns will be credited at 1 am uk time and ROI is 12 am uk time.",
];

const messages1 = [
  "Direct referral rewards are exclusively available for level referral persons.",
  "To invest in a package, you must first deposit funds into your wallet.",
  "In our multilevel referral program, levels 4-7 earn 5% Ozo Tokens at each level.",
  "Earn up to an impressive 20% bonus on your ROI amount by maintaining twelve consecutive weeks without withdrawals, with compounding returns for up to 12 weeks.",
  "If you wish to feature your photo on our website, submit it for review and inclusion in our company profile.",
  "Our Total Investment Reward Plan offers tiered rewards, with Level 1 providing a 3% Ozo Token reward for investments over $100,000, incentivizing higher investment amounts.",
];

const messagesJSX = messages.map((message, index) => (
  <m.div
    key={index}
    initial={{ x: -50, opacity: 0 }}
    whileInView={{
      x: 0,
      opacity: 1,
      transition: { duration: 0.75, easings: "easeInOut" },
    }}
    className="flex gap-4 items-center leading-relaxed text-lg font-normal"
  >
    <StarImage />
    {message}
  </m.div>
));

const messages1JSX = messages1.map((message, index) => (
  <m.div
    key={index}
    initial={{ x: -50, opacity: 0 }}
    whileInView={{
      x: 0,
      opacity: 1,
      transition: { duration: 0.75, easings: "easeInOut" },
    }}
    className="flex gap-4 items-center leading-relaxed text-lg font-normal"
  >
    <StarImage />
    {message}
  </m.div>
));
const Terms = () => {
  return (
    <div className="absolute top-4 md:top-12 w-full mx-5 h-full ml-0">
      <div className="flex flex-col gap-4 mx-8">
        <div className="text-4xl text-left">TERMS</div>
        <m.div
          className="flex bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-32 h-[6px] mb-3" // Added mx-auto to center the line
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
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:px-6 w-full">
          <div className="flex flex-col w-full md:w-1/2 gap-3">
            {messagesJSX}
          </div>
          <div className="md:flex flex-col w-full md:w-1/2 gap-3 hidden ">
            {messages1JSX}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
