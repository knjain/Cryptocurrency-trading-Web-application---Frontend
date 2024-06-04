import React from "react";
import "./earning.css";
import { motion as m } from "framer-motion";

const WithdrawalDetails = () => {
  return (
    <div className="space-y-6 px-12  md:px-24 md:mt-24">
      <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
        The Weekly Withdrawal Bonus: A Path to Greater Earnings
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
        <p className="font-semibold pt-4 leading-relaxed mb-3">
          We understand that achieving financial goals requires patience and
          strategy. That's why we're incentivizing you to keep your total ROI
          amount in your ROI wallet without frequent withdrawals. The longer you
          hold your earnings, the bigger your rewards.
        </p>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="w-full md:w-[60%]">
            <h5>How it Works: </h5>
            <div className="pr-3 py-3 mt-8">
              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    2 Consecutive Weeks: Refrain from withdrawing for two
                    consecutive weeks, and you'll receive a generous{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    1% bonus
                  </span>
                  <span> on your ROI amount for that period.</span>
                </div>
              </div>
              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    3 Consecutive Weeks: Extend it to three consecutive weeks
                    without any withdrawals, and we'll boost your ROI with a{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    2% bonus
                  </span>
                  <span> for that three-week duration.</span>
                </div>
              </div>

              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    4 Consecutive Weeks: Commit to four consecutive weeks
                    without withdrawals, and you'll enjoy an impressive{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    4% bonus
                  </span>
                  <span> on your ROI amount for those four weeks.</span>
                </div>
              </div>

              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    5 Consecutive Weeks: Go even further with five consecutive
                    weeks without withdrawals, and we'll reward your patience
                    with a substantial{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    6% bonus
                  </span>
                </div>
              </div>

              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    6 Consecutive Weeks: Keep your funds untouched for six
                    consecutive weeks, and you'll experience an{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    8% bonus
                  </span>
                  <span> on your ROI amount for that six-week period.</span>
                </div>
              </div>

              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    7 Consecutive Weeks: Achieve seven consecutive weeks without
                    withdrawals, and we'll grant you a remarkable{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    10% bonus
                  </span>
                  <span> on your ROI amount for that seven-week duration.</span>
                </div>
              </div>

              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    8 Consecutive Weeks: Hold strong for eight consecutive weeks
                    without withdrawals, and you'll be amazed by a{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    12% bonus
                  </span>
                  <span> on your ROI amount for that eight-week duration.</span>
                </div>
              </div>

              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    9 Consecutive Weeks: Reach nine consecutive weeks without
                    any withdrawals, and we'll reward your commitment with a
                    substantial{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    14% bonus
                  </span>
                </div>
              </div>

              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    10 Consecutive Weeks: Push the limits to ten consecutive
                    weeks without withdrawals, and you'll enjoy an impressive{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    16% bonus
                  </span>
                  <span> on your ROI amount for that ten-week period.</span>
                </div>
              </div>

              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    11 Consecutive Weeks: Keep the momentum going for eleven
                    consecutive weeks without withdrawals, and we'll grant you
                    an enticing{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    18% bonus
                  </span>
                </div>
              </div>

              <div className="mb-2 flex ">
                <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    12 Consecutive Weeks: Achieve an incredible milestone by
                    maintaining twelve consecutive weeks without withdrawals,
                    and you'll be entitled to a phenomenal{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    20% bonus
                  </span>
                </div>
              </div>
            </div>

            <p className="leading-relaxed mt-8">
              This multi-tier structure rewards your efforts and incentivizes
              team-building, offering both cash rewards and the potential for
              accumulating valuable OZO Tokens.
            </p>
          </div>
          <div className="flex justify-center w-full md:w-[40%]">
            <img
              className=""
              alt="Multi-Level Referral Structure"
              src="./images/final 2.png"
            />
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default WithdrawalDetails;
