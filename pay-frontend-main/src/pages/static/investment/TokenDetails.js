import React from "react";
import { motion as m } from "framer-motion";

const TokenDetails = () => {
  return (
    <div className="space-y-6 p-6 px-12 md:px-24 md:mt-24">
      <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
        Unlocking Your Investment Potential: One Ozo's Total Investment Plan
      </h1>
      <m.div
        className="flex mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-4/5 h-[6px] mt-3" // Added mx-auto to center the line
        // initial={{ x: -600, width: 0 }}
        // animate={{ x: 0, width: "55%" }}
        // transition={{ duration: 1, delay: 2 }}
        initial={{ x: -50, opacity: 0.4 }}
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
        <p className="font-semibold py-6">
          At One Ozo, we believe in rewarding our investors. Our Total
          Investment Plan offers three distinct levels, each designed to provide
          you with enticing Ozo Token rewards as you invest more in our
          platform. Here's a detailed explanation of how it works:
        </p>
        <div className="flex justify-center w-full">
          <img
            className=""
            alt="Multi-Level Referral Structure"
            src="./images/allnew/13.png"
          />
        </div>
        {/* <h5>How it Works: </h5> */}
        <div className="p-3">
          <p className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
            Level 1: The $25,000 Milestone
          </p>
          <div className="flex">
            <span className="blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2 mt-2">
              •
            </span>
            <div>
              <span>
                When your total investment reaches $25,000 or more, you qualify
                for Level 1. As a Level 1 investor, you'll receive
              </span>
              <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                &nbsp;1% of Ozo Tokens&nbsp;
              </span>
              <span>
                based on your total investment amount. This means you'll be
                rewarded with Ozo Tokens equivalent to 1% of the value of your
                investments. It's a great way to start earning extra benefits as
                you grow your investment portfolio.
              </span>
            </div>
          </div>
        </div>

        <div className="p-3">
          <p className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
            Level 2: The $60,000 Achievement
          </p>
          <div className="flex ">
            <span className="mt-2 blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
              •
            </span>
            <div>
              <span>
                For investors who reach a total investment of $60,000 or more,
                Level 2 awaits. As a Level 2 investor, you'll enjoy an even
                higher reward of
              </span>
              <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                &nbsp;2% of Ozo Tokens&nbsp;
              </span>
              <span>
                . This means you'll receive Ozo Tokens equivalent to 2% of the
                value of your investments. Level 2 is designed to incentivize
                substantial investments and provide you with more substantial
                rewards.
              </span>
            </div>
          </div>
        </div>

        <div className="p-3">
          <p className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
            Level 3: The $100,000 Pinnacle{" "}
          </p>
          <div className="flex ">
            <span className="mt-2 blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
              •
            </span>
            <div>
              <span>
                Level 3 is the ultimate investment level, reserved for those who
                have a total investment exceeding $100,000. As a Level 3
                investor, you'll receive the highest reward of
              </span>
              <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                &nbsp;3% of Ozo Tokens&nbsp;
              </span>
              <span>
                . This translates to Ozo Tokens equivalent to 3% of the value of
                your investments. Level 3 offers you the most significant
                incentives and is perfect for investors seeking top-tier
                rewards.
              </span>
            </div>
          </div>
        </div>

        <p className="leading-relaxed">
          These investment levels and rewards are strategically designed to
          encourage higher investments while providing additional benefits to
          our valued investors. The more you invest, the higher your level, and
          the greater the Ozo Token rewards you'll receive. It's a win-win
          opportunity that allows you to unlock your investment potential and
          enjoy the rewards of being a part of One Ozo's thriving community.
          Start investing today to experience the full benefits of our Total
          Investment Plan.
        </p>
      </m.div>
    </div>
  );
};

export default TokenDetails;
