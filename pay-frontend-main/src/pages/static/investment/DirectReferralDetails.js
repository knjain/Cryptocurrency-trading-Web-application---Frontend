import React from "react";
import { motion as m } from "framer-motion";

const DirectReferralDetails = () => {
  return (
    <div className="space-y-6 p-6 px-2 md:px-12  md:px-24 md:mt-24">
      <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text px-12">
        Level 1 Referral Achievement Rewards: Unleash Your Potential
      </h1>
      <m.div
        className="flex mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-4/5 h-[6px] mt-3 px-12" // Added mx-auto to center the line
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
        <p className="font-semibold py-6 leading-relaxed px-12">
          As a Level 1 referral, you're on the path to extraordinary success.
          Let's explore the incredible rewards that await you as you actively
          build our community:
        </p>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="w-full md:w-[55%] px-12">
            <div className="flex  mb-2">
              <span className="mt-2 blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                •
              </span>
              <div>
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  Level 1: 20 Active Direct Referrals
                </span>
                <div>
                  <span>
                    Your journey begins here. Achieve Level 1 by bringing in 20
                    active direct referrals, and you'll unlock a rewarding
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $50
                  </span>
                  <span>
                    {" "}
                    package to celebrate your impressive accomplishment.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mb-2">
              <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                •
              </span>
              <div>
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  Level 2: 40 Active Direct Referrals
                </span>
                <div>
                  <span>
                    Elevate your success to Level 2 with 40 active direct
                    referrals, and the rewards grow even more substantial.
                    You'll receive a
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $200
                  </span>
                  <span> package and gain access to </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $250
                  </span>
                  <span>
                    {" "}
                    in cash support. Use this support to conduct events and
                    meetings that further boost your success. Plus, enjoy the
                    prestige of having your photo featured on our website, where
                    your achievements are showcased for the world to see.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex mb-2">
              <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                •
              </span>
              <div>
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  Level 3: 80 Active Direct Referrals
                </span>
                <div>
                  <span>
                    Level 3 is where your dedication truly shines. With 80
                    active direct referrals, you'll enjoy an
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $400
                  </span>
                  <span> package and receive </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $500
                  </span>
                  <span>
                    {" "}
                    in cash support to supercharge your events and meetings.
                    Your photo will be proudly displayed on our website, a
                    testament to your commitment to building our thriving
                    community.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex mb-2">
              <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                •
              </span>
              <div>
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  Level 4: 160 Active Direct Referrals
                </span>
                <div>
                  <span>
                    At Level 4, you're reaching new heights with an impressive
                    160 active direct referrals. Your reward is a
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $800
                  </span>
                  <span> package and access to </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $1,000
                  </span>
                  <span>
                    {" "}
                    in cash support. Use this support to create impactful events
                    and meetings that contribute to your success. Your photo
                    will also be featured prominently on our website, a symbol
                    of your dedication.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex mb-2">
              <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                •
              </span>
              <div>
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  Level 5: 320 Active Direct Referrals
                </span>
                <div>
                  <span>
                    Level 5 is where exceptional rewards come into play. With
                    320 active direct referrals, you'll receive a generous
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $2500
                  </span>
                  <span> package and </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $52,500
                  </span>
                  <span>
                    {" "}
                    in cash support to elevate your events and meetings to the
                    next level. Your photo will take center stage on our
                    website, a recognition of your remarkable achievements.
                  </span>
                </div>
              </div>
            </div>

            <div className="flex mb-2">
              <span className="blinking-point mt-2 text-transparent bg-[#18D4A7] mr-2 w-2 rounded-full h-2">
                •
              </span>
              <div>
                <span className="text-xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  Level 6: 640 Active Direct Referrals
                </span>
                <div>
                  <span>
                    Achieving Level 6 is reaching the pinnacle of success with
                    an astonishing 640 active direct referrals. Your reward is a
                    remarkable
                  </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $5000
                  </span>
                  <span> package and an impressive </span>
                  <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                    $5,000
                  </span>
                  <span>
                    {" "}
                    in cash support. Plus, you'll earn the prestigious title of
                    Agent Membership, solidifying your reputation within our
                    community. Your photo will stand prominently on our website,
                    a symbol of your extraordinary dedication.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-[45%]">
            <img
              className="h-[450px] md:h-auto"
              alt="Multi-Level Referral Structure"
              src="./images/allnew/direct.png"
            />
          </div>
        </div>

        <p className="leading-relaxed">
          As a Level 1 referral, these achievements and rewards are well within
          your reach. Your commitment to building our community is not only
          recognized but celebrated. Embrace this opportunity to unleash your
          potential and savor the exclusive benefits of your Level 1 referral
          status at One Ozo.
        </p>
      </m.div>
    </div>
  );
};

export default DirectReferralDetails;
