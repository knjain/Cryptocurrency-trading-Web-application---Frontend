import React from "react";
import BusinessSlider from "./BusinessSlider";
function calculateWidth(value, target) {
  return (value / target) * 100; // Since we want it to take at most half the width.
}

const CareerPlanReferral = ({ dashboardData }) => {
  const leftBusiness =
    Number(dashboardData?.direct_business) -
    Number(
      Number(dashboardData?.direct_business_actual_required) -
        Number(dashboardData?.direct_business_next_level_amount)
    );

  const business = dashboardData?.direct_business_next_level_amount;
  let leftWidth = calculateWidth(leftBusiness, business);
  if (leftBusiness > Number(business)) {
    leftWidth = calculateWidth(business, Number(business));
  }
  return (
    <div className="w-full p-8">
      <div className="mb-2 text-xl text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text font-semibold ">
        Direct Business Rewards: Level{" "}
        {dashboardData?.direct_business_career_level}
      </div>
      <div
        className="relative flex flex-col rounded-lg gap-12"
        style={{ border: "1px solid #5F5F5F" }}
      >
        <div className="w-full flex flex-col md:flex-row relative h-full md:pr-8 gap-12">
          <div className="absolute flex w-full ">
            <div className="flex justify-end items-end w-full px-10">
              <div className="text-base text-[#FFFFFF] font-normal pt-4">
                Rank to be achieved:
                {dashboardData?.direct_business_career_level + 1}
              </div>
            </div>
          </div>
          <div
            className="flex-none w-full md:w-1/2 lg:w-1/3"
            // style={{
            //   flexBasis: "38%",

            //   backgroundImage: "url('/images/career/2.jpeg')",
            //   backgroundRepeat: "no-repeat",
            //   backgroundSize: "contain",
            //   marginTop: "-5.5rem",
            // }}
          >
            <img
              // src="/images/career/2.jpeg"
              src="/images/dashboard/23.png"
              alt="2"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* <img src="/images/career/2.jpeg" className="cover mt-[-5.5rem] w-full md:w-[38%] h-auto" alt="carrer"/> */}
          <div className="flex-grow p-4 flex flex-col justify-center items-center gap-10 ">
            <div className="w-full flex justify-center items-center">
              <div className="text-xl text-bold text-[#FFFFFF] ">
                Direct business
              </div>
            </div>
            <div className="flex flex-col w-full justify-end items-center text-right gap-4">
              <div className="px-6 w-full text-right text-base text-[#18D4A7] mb-6">
                Reward:${dashboardData?.direct_business_reward_amount}
              </div>
              <div className="w-full text-center relative">
                <div className="bg-[#5F5F5F] h-[4px] w-full"></div>

                {/* Left Business Progress */}
                <div
                  style={{
                    width: `${leftWidth}%`,
                    boxShadow: "1px 1px 7px 3px #b7dac3",
                    background:
                      "linear-gradient(180deg, #0be355 0%, #83dba1 100%)",
                  }}
                  className="absolute top-0 left-0 h-[4px]"
                >
                  {/* Circle for Left Business */}
                  <div
                    style={{
                      boxShadow: "1px 1px 7px 3px #b7dac3",
                      background:
                        "linear-gradient(180deg, #0be355 0%, #83dba1 100%)",
                      height: "16px",
                      width: "16px",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "-6px",
                      right: "-4px",
                    }}
                  ></div>
                </div>

                <div className="absolute left-0 bottom-4 text-[#FFFFFF] font-santoshi">
                  ${leftBusiness}
                </div>
                <div className="absolute right-0 bottom-4 text-[#FFFFFF] font-santoshi">
                  ${business}
                </div>
              </div>
              <div className="px-6 w-full text-right text-base text-[#18D4A7]  font-santoshi">
                Target:${business}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPlanReferral;
