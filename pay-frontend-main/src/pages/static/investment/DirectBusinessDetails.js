import React from "react";
import { motion as m } from "framer-motion";

const DirectBusinessDetails = () => {
  return (
    <div className="space-y-6 p-6 px-12 md:px-24 md:mt-24">
      <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
        Strategies for Success: Our Direct Referral Programme
      </h1>
      <m.div
        className="flex mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-3/5 h-[6px] mt-3" // Added mx-auto to center the line
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
        <p className="font-semibold pt-6">
          At One Ozo, we're thrilled to introduce our Direct Referral Programme,
          designed to reward you for actively building our community,
          exclusively for level referrals. Here's an in-depth look at how this
          program works and the incredible benefits you can unlock:
        </p>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="p-3">
              <h2 className="text-xl font-bold">
                Cashback Tiers: Earning as You Grow
              </h2>
              <p className="font-semibold pb-6 leading-relaxed">
                Our Cashback Tiers are structured to acknowledge your efforts as
                you generate direct business. The more you contribute, the
                greater your cashback rewards, available to level referrals:
              </p>
              <div className="flex">
                <span className="mt-2 blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>Generate $20,000 in direct business and earn </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    1%
                  </span>
                  <span> cashback.</span>
                </div>
              </div>

              <div className="flex">
                <span className="mt-2 blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>Reach $30,000 in direct business and receive </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    1.5%
                  </span>
                  <span> cashback.</span>
                </div>
              </div>

              <div className="flex">
                <span className="mt-2 blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>Achieve $40,000 in direct business and enjoy </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    2%
                  </span>
                  <span> cashback.</span>
                </div>
              </div>

              <div className="flex mb-2">
                <span className="blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2 mt-2">
                  •
                </span>
                <div>
                  <span>
                    Go even further with $50,000 in direct business, and you'll
                    earn
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    2.5%
                  </span>
                  <span> cashback.</span>
                </div>
              </div>

              <div className="flex">
                <span className="mt-2 blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    Aim for $60,000 in direct business to receive an impressive{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    3%
                  </span>
                  <span> cashback.</span>
                </div>
              </div>

              <div className="flex">
                <span className="mt-2 blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    Keep building at $70,000 in direct business for a rewarding{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    3.5%
                  </span>
                  <span> cashback.</span>
                </div>
              </div>

              <div className="flex">
                <span className="mt-2 blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    Scale up to $80,000 in direct business and get a generous{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    4%
                  </span>
                  <span> cashback.</span>
                </div>
              </div>

              <div className="flex">
                <span className="blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2 mt-2">
                  •
                </span>
                <div>
                  <span>
                    Reach $90,000 in direct business to earn an attractive{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    4.5%
                  </span>
                  <span> cashback.</span>
                </div>
              </div>

              <div className="flex mb-2">
                <span className="blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2 mt-2">
                  •
                </span>
                <div>
                  <span>
                    The pinnacle awaits at $100,000 in direct business, with an
                    incredible{" "}
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    5%
                  </span>
                  <span> cashback.</span>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-8">
              {" "}
              Bonus Tiers: Elevate Your Earnings
            </h2>
            <p className="font-semibold leading-relaxed">
              For those who aim higher, our Bonus Tiers offer even more
              lucrative rewards, available to level referrals:
            </p>
            <div className="p-3">
              <div className="flex  mb-2">
                <span className="mt-2 blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    Generate $150,000 in direct business to earn an impressive
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    &nbsp;7%&nbsp;
                  </span>
                  <span>cashback.</span>
                </div>
              </div>

              <div className="flex items-center mb-2">
                <span className="blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    Reach $200,000 in direct business and enjoy a substantial
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    &nbsp;8%&nbsp;
                  </span>
                  <span>cashback.</span>
                </div>
              </div>

              <div className="flex  mb-2">
                <span className="mt-2 blinking-point text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                  •
                </span>
                <div>
                  <span>
                    Scale to new heights with $300,000 in direct business, and
                    you can earn a maximum of
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    &nbsp;10%&nbsp;
                  </span>
                  <span>cashback.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex justify-center w-full">
              <img
                className="  w-[400px] h-[600px] md:w-[700px] md:h-[700px]"
                style={{ maxWidth: "fit-content" }}
                alt="Multi-Level Referral Structure"
                src="./images/allnew/direct1.png"
              />
            </div>
          </div>
        </div>

        <p className="leading-relaxed">
          Our Direct Referral Programme is a testament to our commitment to
          rewarding your dedication and contribution to the One Ozo community.
          Start referring today and watch your cashback rewards grow as you help
          our platform flourish, exclusively for level referrals.
        </p>
      </m.div>
    </div>
  );
};

export default DirectBusinessDetails;
