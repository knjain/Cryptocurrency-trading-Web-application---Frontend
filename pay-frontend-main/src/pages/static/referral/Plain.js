import React from "react";
import { motion as m } from "framer-motion";

const Plain = () => {
  return (
    <div className="font-poppins">
      {/* section 1 */}

      <div className="w-full flex flex-col justify-center items-center relative">
        {/* <img
          alt="Signup Background"
          src="./images/earningreferral.jpg"
          className="w-full bg-opacity-60 max-h-[100vh]"
        /> */}
        <div className="  mb-8 px-6 mt-8 lg:left-14 top-3 lg:top-44 w-full text-center  flex justify-center flex-col lg:px-[300px]">
          <m.h1
            className="text-3xl md:text-4xl md:text-6xl relative font-semibold text-4xl text-center text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text mb-2"
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 1 }} // Adjust delay as per your requirement
          >
            OZO's Multi-Level Referral Journey: Earn Together, Succeed Together
          </m.h1>
          {/* <m.div
            className="mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-3/4 h-[6px] mt-3 mx-auto" // Added mx-auto to center the line
            initial={{ x: -600, width: 0 }}
            animate={{ x: 0, width: "87%" }}
            transition={{ duration: 1, delay: 2 }}
          ></m.div>{" "} */}
          <m.div
            className="mx-auto flex mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-full h-[6px] mt-3" // Added mx-auto to center the line
            // initial={{ x: -600, width: 0 }}
            // animate={{ x: 0, width: "55%" }}
            // transition={{ duration: 1, delay: 2 }}
            initial={{ x: -600, opacity: 1 }}
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
          <h2 className="text-sm md:text-xl md:text-2xl  text-white mb-4">
            {/* Earn up to 8% Referral Bonuses and Unlock Exciting Rewards */}
            Embark on a rewarding journey with OZO's unique Multi-Level Referral
            Programme. Join hands, refer friends, and grow together, earning
            exciting rewards every step of the way.
          </h2>
          {/* <button className="text-xl px-6 py-3 bg-red-900 rounded-lg mt-1">
            Refer now
          </button> */}
        </div>
        <img
          className="mt-8"
          alt="Multi-Level Referral Structure"
          src="./images/allnew/multilevel.jpg"
        />
      </div>
      <div className="space-y-6 mt-6 md:mt-28 px-12 lg:px-24 flex flex-col md:flex-row leading-relaxed">
        <div className="w-full lg:w-[60%]">
          <h1 className="text-3xl font-bold text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
            Understanding OZO's Multi-Tier Referral Bonus Structure
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
            <p className="font-semibold">
              OZO offers a multi-tier referral bonus structure across its four
              packages: START, GROWTH, PRO, and ELITE. Here's a breakdown:
            </p>
            <div className="my-4">
              <h6 className=" text-xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                OZO START Referral Bonus:
              </h6>
              <span>
                Level 1 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  5% Cash Bonus
                </span>
                ): Earn a 5% cash bonus for direct referrals.
              </span>
              <br />
              <span>
                Level 2 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  3% Cash Bonus
                </span>
                ): Receive a 3% cash bonus for referrals made by your direct
                recruits.
              </span>
              <br />
              <span>
                Level 3 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  1.5% Cash Bonus
                </span>
                ): Enjoy a 1.5% cash bonus for the referrals of your Level 2
                recruits.
              </span>
              <br />
              <span>
                Levels 4-7 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  5% OZO Tokens Bonus
                </span>
                ): Beyond Level 3, you earn a 5% bonus in OZO Tokens in your OZO
                Token Wallet.
              </span>
            </div>
            {/* <div className="mb-4">
              <h6 className="text-xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                OZO GROWTH Referral Bonus:
              </h6>
              <span>
                Level 1 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  6% Cash Bonus
                </span>
                ): You receive a 6% cash bonus for your personally referred
                members.
              </span>
              <br />
              <span>
                Level 2 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  4% Cash Bonus
                </span>
                ): Get a 4% cash bonus for referrals from your Level 1 recruits.
              </span>
              <br />
              <span>
                Level 3 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  2% Cash Bonus
                </span>
                ): Enjoy a 2% cash bonus for the referrals of your Level 2
                recruits.
              </span>
              <br />
              <span>
                Levels 4-7 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  5% OZO Tokens Bonus
                </span>
                ): Beyond Level 3, earn a 5% bonus in OZO Tokens in your OZO
                Token Wallet.
              </span>
            </div>
            <div className="mb-4">
              <h6 className="text-xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                OZO PRO Referral Bonus:
              </h6>
              <span>
                Level 1 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  7% Cash Bonus
                </span>
                ): Receive a 7% cash bonus for personally referred members.
              </span>
              <br />
              <span>
                Level 2 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  5% Cash Bonus
                </span>
                ): Get a 5% cash bonus for referrals from your Level 1 recruits.
              </span>
              <br />
              <span>
                Level 3 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  3% Cash Bonus
                </span>
                ): Enjoy a 3% cash bonus for the referrals of your Level 2
                recruits.
              </span>
              <br />
              <span>
                Levels 4-7 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  5% OZO Tokens Bonus
                </span>
                ): Beyond Level 3, you earn a 5% bonus in OZO Tokens in your OZO
                Token Wallet.
              </span>
            </div>
            <div className="mb-4">
              <h6 className="text-xl font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                OZO ELITE Referral Bonus:
              </h6>
              <span>
                Level 1 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  8% Cash Bonus
                </span>
                ): Earn an 8% cash bonus for your personally referred members.
              </span>
              <br />
              <span>
                Level 2 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  6% Cash Bonus
                </span>
                ): Get a 6% cash bonus for referrals from your Level 1 recruits.
              </span>
              <br />
              <span>
                Level 3 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  4% Cash Bonus
                </span>
                ): Enjoy a 4% cash bonus for the referrals of your Level 2
                recruits.
              </span>
              <br />
              <span>
                Levels 4-7 (
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  5% OZO Tokens Bonus
                </span>
                ): Beyond Level 3, earn a 5% bonus in OZO Tokens in your OZO
                Token Wallet.
              </span>
            </div> */}
            <p>
              This multi-tier structure rewards your efforts and incentivizes
              team-building, offering both cash rewards and the potential for
              accumulating valuable OZO Tokens.
            </p>
          </m.div>
        </div>
        <div className="w-full lg:w-[40%] ">
          <img
            className="md:mt-24"
            alt="Multi-Level Referral Structure"
            src="./images/Multilevel level.png"
          />
        </div>
      </div>
      {/* section 2 */}

      <div className="px-6 md:px-0 md:mt-32 mb-10 md:my-28 w-full max-w-[78rem] px-6 mx-auto">
        <div
          className="mt-24 flex flex-col md:flex-row gap-12 px-6"
          style={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <h1 className="text-3xl font-bold text-left text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
            What You Stand
            <br />
            to Gain
          </h1>
          <div className="space-y-4">
            <div className="bg-blue-gray-900 flex items-center rounded-xl border-2 px-6 py-4 gap-6">
              <img
                alt="Signup Background"
                src="./images/download.png"
                className="w-10  h-10 rounded-full p-2 flex justify-center items-center"
              />
              <p>
                Earn up to 18% referral bonuses on each successful referral,
                boosting your earnings.
              </p>
            </div>
            <div className="bg-blue-gray-900 items-center flex rounded-xl border-2 px-6 py-4 gap-6">
              <img
                alt="Signup Background"
                src="./images/download.png"
                className="w-10 h-10  rounded-full p-2 flex justify-center items-center"
              />
              <p>
                Enjoy exciting rewards and incentives through One Ozo's referral
                program.
              </p>
            </div>

            <div className="bg-blue-gray-900 rounded-xl  items-center flex border-2 px-6 py-4 gap-6">
              <img
                alt="Signup Background"
                src="./images/download.png"
                className="w-10  h-10 rounded-full p-2 flex justify-center items-center"
              />
              <p>
                The withdrawal gate for referral rewards is accessible daily
                from 9 AM to 5 PM, UK time, providing convenient access.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-6 md:px-0">
          <h3 className="text-4xl font-bold  mt-16 text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
            How Do I Make A Referral?
          </h3>
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
          <p>
            Referring your friends to the world's fastest and most secure
            cryptocurrency investment platform takes just seconds. Here's how:
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
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
              className="max-w-[350px] min-h-[312px] py-6 rounded-xl   px-6"
            >
              <div className="max-w-[110px] h-[110px] rounded-full mb-8  bg-white w-full flex justify-center items-center">
                {" "}
                <img
                  alt="Signup Background"
                  src="./images/icons/signup1.png"
                  className="w-16 "
                />
              </div>
              <h1 className="text-2xl mb-4 font-bold">Sign Up</h1>
              <p className="text-gray-500 text-[16px]">
                Sign up or sign in to the oneozo.com platform
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
              className="max-w-[350px] min-h-[312px] py-6 rounded-xl text-left  px-6"
            >
              <div className="max-w-[110px] mb-8 h-[110px] rounded-full  bg-white w-full flex justify-center items-center">
                {" "}
                <img
                  alt="Signup Background"
                  src="./images/icons/link.png"
                  className="  w-16 "
                />
              </div>
              <h1 className="text-2xl mb-4 font-bold">Referral Page</h1>
              <p className="text-gray-500 text-[16px]">
                Navigate to the Referral page under Events & Rewards to get your
                referral link.
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
              className="max-w-[350px] min-h-[312px] py-6 rounded-xl text-left  px-6"
            >
              <div className="max-w-[110px] mb-8 h-[110px] rounded-full  bg-white w-full flex justify-center items-center">
                {" "}
                <img
                  alt="Signup Background"
                  src="./images/icons/email.png"
                  className="  w-16 "
                />
              </div>
              <h1 className="text-2xl mb-4 font-bold">Send To Your Friends</h1>
              <p className="text-gray-500 text-[16px]">
                Copy these in one click and easily share them with your friends
                on social media or your favourite messaging apps
              </p>
            </m.div>
          </div>
        </div>
      </div>
      <div className="space-y-6 p-6 px-12 md:px-32">
        <m.h1
          className="text-3xl md:text-4xl md:text-6xl relative font-semibold text-4xl text-center text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
          // initial={{ y: -300, opacity: 0 }}

          initial={{ opacity: 0, overflow: "hidden" }}
          whileInView={{
            opacity: 1,

            animate: { y: 0, opacity: 1 },
            transition: { duration: 1, delay: 0.4 },
          }}
        >
          Maximizing Your Binary <br />
          Income Potential
        </m.h1>
        <m.div
          className="mx-auto flex mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-4/5 h-[6px] mt-3" // Added mx-auto to center the line
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
        {/* <m.div
          className="mb-8 bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd w-3/4 h-[6px] mt-2 mx-auto" // Added mx-auto to center the line
          // initial={{ x: -600, width: 0 }}
          initial={{ opacity: 0, x: -600, overflow: "hidden" }}
          whileInView={{
            opacity: 1,

            animate: { x: 0, width: "57%" },
            transition: { duration: 0.6, delay: 0.8 },
          }}'
        ></m.div> */}
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
          <p className=" pb-6 flex justify-center text-center text-xl">
            Experience financial growth with Ozo's 10% binary returns.
            <br />
            Discover the path to consistent income and financial stability with
            us
          </p>
          <div className="flex flex-col-reverse md:flex-row justify-center w-full gap-6 leading-relaxed">
            <div className="w-full md:w-[50%]">
              <p>
                The Binary Bonus program at One Ozo is a dynamic system designed
                to reward our members for their loyalty and empower them to earn
                extra income by referring new investors. This program operates
                on a binary structure, meaning that each member has two legs
                within their network: a left leg and a right leg. The bonus
                payments are determined based on
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  the volume of investments made
                </span>
                in each leg, specifically focusing on the weaker leg.
                <br /> <br /> To illustrate, let's say a member on the right
                side of your network contributes{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  $25,000
                </span>
                , while another on the left side invests $10,000. In this
                scenario, the maximum amount that can be matched is $10,000. The
                Binary Bonus, which is an enticing{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  10%
                </span>{" "}
                of this matched volume, would amount to $1,000. The remaining
                $15,000 from the stronger leg is carried forward to future
                periods, ensuring that you have the opportunity to maximize your
                earnings over time. Our Binary Bonus program pays out these
                rewards on a weekly basis, providing you with a{" "}
                <span className="font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
                  consistent and reliable stream of extra income.
                </span>{" "}
                This system is both simple to understand and highly lucrative,
                making it an attractive option for those looking to earn
                additional income while helping others discover the benefits of
                One Ozo's investment platform.
                <br />
                <br />
                Join One Ozo today to unlock the financial potential of our
                Binary Bonus program and embark on a journey towards financial
                freedom.
              </p>
            </div>

            <div className="w-full md:w-[50%] my-6">
              <img
                className=" "
                alt="Multi-Level Referral Structure"
                src="./images/demo 5.png"
              />
            </div>
          </div>
        </m.div>
      </div>

      {/* section 2 */}

      {/* <img
        className="w-full"
        alt="Multi-Level Referral Structure"
        src="./images/multilevel referra.png"
      /> */}
      {/* <div className="md:mb-0 w-full relative flex flex-col gap-6">
        <img
          alt="Signup Background"
          src="./images/referral2.jpg"
          className="w-full object-cover opacity-90"
        />

        <div className="px-3 md:absolute top-0 lg:top-44 flex flex-col justify-center items-center pb-6">
          <h2 className="text-xl leading-relaxed md:text-3xl text-center mb-6 font-medium md:font-bold">
            Join a thriving community of over 50 million passionate crypto
            investors, where knowledge, insights, and exciting opportunities
            converge.
          </h2>
          <div>
            <button className="px-6 py-3 text-2xl font-bold bg-black rounded-md hover:bg-transparent border hover:border-black">
              Invite now
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Plain;
