import React from "react";
import { motion as m } from "framer-motion";

const messages = [
  "ONE OZO is registered in the USA, UK, Canada and South Africa, ensuring regulatory compliance and trustworthiness.",
  "Earn up to 9.5% referral bonus through our multi-level referral program, rewarding you for expanding our community.",
  "Withdrawal gates of the ROI wallet open every Sunday for your convenience.",
  "Referral and binary wallet withdrawal gates are open daily from 9 am to 4 pm (UK timing).",
  "Enjoy round-the-clock backend support to assist you whenever you need it.",
  "Earn up to 256% total returns on your investments, maximizing your potential earnings.",
  "Get rewarded for not withdrawing funds for more than 2 weeks with compounding returns for up to 12 weeks.",
  "Unlock rewards for direct referrals and build a network of investors.",
];
const messages1 = [
  "Participate in our multi-level referral program to enhance your earning potential.",
  "Benefit from principal returns of up to 100% on your investments.",
  "Our platform is designed to be user-friendly, making it easy to navigate and use.",
  "Our team includes traders with over 10 years of experience, ensuring sound investment strategies.",
  "We embrace technology to provide a comprehensive and efficient platform.",
  "Our Comprehensive Investment Reward Program features different reward levels. In Level 1, investors who commit over $100,000 can enjoy a 3% reward in Ozo Tokens, encouraging larger investment contributions.",
  "Refer up to 640 people directly and earn $5000 or more in valuable benefits. For additional information, please visit our leadership or referral page to get all the details you need.",
  "Generate business up to $300,000 and earn a generous 10% cashback.",
  "Generate $1 million worth of business on both the right and left sides and earn an impressive $16,500 in rewards.",
];
const StarImage = () => (
  <img src="./images/stars.png" alt="star" className="w-[25px] object-cover" />
);
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
    className="flex gap-4 items-center leading-relaxed text-sm md:text-base font-normal"
  >
    <StarImage />
    {message}
  </m.div>
));
const Perks = () => {
  return (
    <div className="absolute top-4 w-full mx-5 h-full ">
      <div className="flex flex-col gap-4 mx-8">
        <div className="text-4xl text-left">Perks</div>
        <m.div
          className="flex bg-gradient-to-r from-newStart via-newMid to-newEnd w-32 h-[6px] mb-3" // Added mx-auto to center the line
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
        <div className="flex justify-center items-center gap-4 md:px-6 w-full">
          <div className="md:flex flex-col w-full md:w-1/2 gap-3 hidden">
            {messagesJSX}
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-3">
            {messages1JSX}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perks;
