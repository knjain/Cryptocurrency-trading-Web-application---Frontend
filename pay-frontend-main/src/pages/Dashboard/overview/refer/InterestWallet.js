import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InterestWallet = ({ dashboardData, downlineCount }) => {
  // Calculate the total interest
  const Interest =
    Number(dashboardData?.sum_withdrawal_bonus) +
    Number(dashboardData?.sum_binary_business) +
    Number(dashboardData?.sum_direct_business);

  // Calculate the interest percentages with a default of 33.33% if any is 0
  const defaultPercentage = 33.33;
  const Withdraw =
    Math.floor((dashboardData?.sum_withdrawal_bonus / Interest) * 100) || 0;
  const earning =
    Math.floor((dashboardData?.sum_binary_business / Interest) * 100) || 0;
  const reward =
    Math.floor((dashboardData?.sum_direct_business / Interest) * 100) || 0;

  // Calculate the width based on percentages
  const widthWithdraw =
    Interest === 0 ? defaultPercentage * 2.5 : (Withdraw / 100) * 250;
  const widthEarning =
    Interest === 0 ? defaultPercentage * 2.5 : (earning / 100) * 250;
  const widthReward =
    Interest === 0 ? defaultPercentage * 2.5 : (reward / 100) * 250;

  return (
    <div className="w-full md:mx-2 md:w-2/3  lg:w-1/3 h-full flex flex-col justify-center items-center  rounded-lg  ">
      <div className="flex w-full justify-start relative px-2">
        <h1 className="text-xl mt-2 ">Interest Wallet Earning</h1>
        {/* <div className="text-lg font-medium">Interest wallet earning</div>
        <div className="text-[#2F66EE] text-xs font-normal">View All</div> */}
      </div>
      <div
        className="px-4 gap-6 pt-6 bg-[#141414] rounded-xl"
        style={{
          // backgroundImage: " url('/images/artboard.png')",
          backgroundImage: " url('images/dashboard/11.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // animation: "upDown 3s infinite", // adjust '3s' to control the speed
        }}
      >
        <div className="flex justify-start  items-center ">
          <div className="font-semibold text-4xl mb-4 font-santoshi w-full flex justify-center align">
            {Interest || 0}
          </div>
          {/* <div className="bg-[#18D83712] py-[3px] px-[8px] text-[#18D837] rounded-xl">
          +{Rate}%
        </div> */}
        </div>
        <div className="w-full flex mb-8 justify-center align-center">
          <div
            style={{ width: `${widthWithdraw}px` }}
            className="h-[5px] bg-[#2F66EE]"
          ></div>
          <div
            style={{ width: `${widthEarning}px` }}
            className="h-[5px] bg-[#FFC458]"
          ></div>
          <div
            style={{ width: `${widthReward}px` }}
            className="h-[5px] bg-[#D255D1]"
          ></div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 justify-center items-center font-normal text-sm text-[#969696]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#2F66EE]"></div>
              Withdrawal Interest
            </div>
            <div className="font-normal text-sm text-[#FFFFFF] font-satoshi ">
              {Withdraw}%
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 justify-center items-center font-normal text-sm text-[#969696]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#FFC458] "></div>
              Binary Interest
            </div>
            <div className="font-normal text-sm text-[#FFFFFF] font-satoshi">
              {earning}%
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4 justify-center items-center font-normal text-sm text-[#969696]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#D255D1]"></div>
              Direct Referral Interest
            </div>
            <div className="font-normal text-sm text-[#FFFFFF] font-satoshi">
              {reward}%
            </div>
          </div>
          <div className="w-full relative px-4 pb-2 flex flex-row gap-30  left-1/2 transform -translate-x-1/2 flex space-x-6 justify-between px-6">
            <div className="text-center w-1/3">
              <p style={{ fontWeight: 300 }}>Total Referrals</p>
              <p className="font-bold font-satoshi text-2xl">{downlineCount}</p>
            </div>
            <div className="text-center w-1/3 ">
              <p style={{ fontWeight: 300 }}>Last withdrawal </p>
              <p className="font-bold font-satoshi text-2xl">
                {dashboardData?.last_withdrawal_date}
              </p>
            </div>
            <div className="text-center w-1/3">
              <p style={{ fontWeight: 300 }}>Direct Business</p>
              <p className="font-bold font-satoshi text-2xl">
                {Math.floor(dashboardData?.direct_business) || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestWallet;
