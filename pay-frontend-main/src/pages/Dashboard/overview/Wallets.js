import React from "react";
import { useNavigate } from "react-router-dom";

const Wallets = ({ totalWithdrawal, totalInvestmentRevenue, totalReturns }) => {
  const navigate = useNavigate();
  return (
    <div className="flex md:flex-row flex-col w-full gap-3  mb-3 justify-center items-center ">
      {/* 1 */}
      <div
        className="relative rounded-xl max-w-[360px] max-h-[200px] w-full bg-[#0a090d] space-y-8 p-4"
        style={{
          backgroundImage: "url('/images/dashboard/1.png')",
          // backgroundImage: "url('/images/new/total_inv.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

          animation: "upDown 10s linear infinite alternate",
        }}
      >
        <div className="w-full flex items-center space-x-4">
          <div className="circleContainer">
            <div className="outerProgress"></div>
            <div className="innerProgress "></div>
            <img
              alt="Signup Background"
              src="../images/dashboard/investment.png"
              className="circleImage"
            />
          </div>

          <h3 className="font-medium text-lg ">Total investment</h3>
        </div>

        <div className="pl-2 flex flex-row items-center justify-center mb-2 gap-6">
          <h2 className="text-3xl font-medium  font-satoshi">
            ${totalInvestmentRevenue}
          </h2>
          <button
            className="text-[#D5C57F] px-4 py-2 rounded-full bg-[#053632] "
            onClick={() => {
              navigate(`/dashboard/download-deposit-certificate`);
            }}
          >
            Get Certificate
          </button>
        </div>
      </div>
      {/* 2bg-gradient-to-r from-gray-800 to-gray-100 */}
      {/* 2 */}
      <div
        className="relative rounded-xl max-w-[360px] max-h-[200px] w-full bg-[#0a090d] space-y-8 p-4"
        style={{
          backgroundImage: "url('/images/dashboard/2.png')",
          // backgroundImage: "url('/images/new/tot_ret.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          animation: "upDown 10s linear infinite alternate",
        }}
      >
        <div className="w-full flex items-center space-x-4">
          <div className="circleContainer">
            <div className="outerProgress"></div>
            <div className="innerProgress"></div>
            <img
              alt="Signup Background"
              src="../images/dashboard/growth.png"
              className="circleImage"
            />
          </div>
          <h3 className="font-medium text-lg ">Total returns</h3>
        </div>
        <div className="pl-2">
          <h2 className="text-3xl font-medium mb-2 font-satoshi">
            ${totalReturns}
          </h2>
          <p className="text-gray-500">
            {/* Target: */}
            {/* <span className="text-gray-500 font-bold">
                ${totalReturnsTarget}
            </span> */}
          </p>
        </div>
      </div>

      {/* 3 */}
      <div
        className="relative rounded-xl max-w-[360px] max-h-[200px] w-full bg-[#0a090d] space-y-8 p-4"
        style={{
          backgroundImage: "url('/images/dashboard/3.png')",
          // backgroundImage: "url('/images/new/tot_with2.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          animation: "leftRight 10s linear infinite alternate",
        }}
      >
        <div className="w-full flex items-center space-x-4">
          <div className="circleContainer">
            <div className="outerProgress"></div>
            <div className="innerProgress"></div>
            <img
              alt="Signup Background"
              src="../images/dashboard/growth.png"
              className="circleImage"
            />
          </div>
          <h3 className="font-medium text-lg">Total withdrawal</h3>
        </div>
        <div className="pl-2 flex flex-row items-center justify-center mb-2 gap-8">
          <h2 className="text-3xl font-medium  font-satoshi">
            ${totalWithdrawal}
          </h2>
          <button
            className="text-[#D5C57F] px-4 py-2 rounded-full bg-[#053632] "
            onClick={() => {
              navigate(`/dashboard/download-withdrawal-certificate`);
            }}
          >
            Get Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
