import React from "react";
import BusinessSlider from "./BusinessSlider";
const CarrierPlan = ({ dashboardData }) => {
  return (
    <div className="w-full p-8">
      <div className="mb-2 text-xl text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text font-semibold  ">
        Binary Rewards: Level {dashboardData?.binary_career_level}
      </div>
      <div
        className="relative flex flex-col rounded-lg gap-12"
        style={{ border: "1px solid #5F5F5F" }}
      >
        <div className="w-full flex flex-col md:flex-row relative h-full md:pr-8 gap-12">
          <div className="absolute flex w-full ">
            <div className="flex justify-end items-end w-full px-10">
              <div className="text-base text-[#FFFFFF] font-normal pt-4">
                Rank to be achieved: {dashboardData?.binary_career_level + 1}
              </div>
            </div>
          </div>
          <div
            className="flex-none w-full md:w-1/2 lg:w-1/3"
            // style={{
            //   flexBasis: "38%",

            //   backgroundImage: "url('/images/career/10.jpeg')",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "contain",
            //   marginTop: "-5.5rem",
            // }}
          >
            <img
              src="/images/dashboard/21.png"
              // src="/images/career/10.jpeg"
              // src="/images/new/binaryReward.jpg"
              alt="10"
              className="object-cover w-full h-auto "
            />
          </div>
          {/* <img src="/images/career/binary.png" className="cover mt-[-5.5rem] w-full md:w-[38%] h-auto" alt="carrer"/> */}
          <div className="flex-grow p-4 flex flex-col justify-center items-center gap-12 ">
            <div className="flex justify-between items-center w-full ">
              <div className="text-xl font-bold text-[#FFFFFF] ">
                Left business
              </div>
              <div className="bg-[#5F5F5F] h-[16px] md:h-[4px] w-[50px] rotate-90 self-stretch"></div>{" "}
              {/* self-stretch makes the div take full height */}
              <div className="text-xl font-bold text-[#FFFFFF] ">
                Right business
              </div>
            </div>

            <div className="flex flex-col w-full justify-end items-center text-right gap-4">
              <div className="px-6 w-full text-right text-base text-[#18D4A7]">
                Reward:${dashboardData?.binary_next_level_reward}
              </div>
              <BusinessSlider
                leftBusiness={
                  Number(dashboardData?.left_business) -
                  Number(
                    Number(dashboardData?.binary_next_level_actual_required) -
                      Number(dashboardData?.binary_next_level_business)
                  )
                }
                rightBusiness={
                  Number(dashboardData?.right_business) -
                  Number(
                    Number(dashboardData?.binary_next_level_actual_required) -
                      Number(dashboardData?.binary_next_level_business)
                  )
                }
                business={dashboardData?.binary_next_level_business}
              />
              <div className="px-6 w-full text-right text-base text-[#18D4A7] ">
                Target:${dashboardData?.binary_next_level_business}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarrierPlan;
