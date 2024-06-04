import React from "react";
import Rank from "./Rank";

export const Buisness = () => {
  return (
    <div className="w-full mx-auto p-8 flex flex-col gap-8">
      <div className="flex justify-end pr-24 text-base text-[#FFFFFF]">Rank to be achieved</div>
      <div className="bg-[#5F5F5F] w-full h-[1px]"></div>
      <div className="flex gap-44 justify-center items-center">
        <div className="text-xl text-[#FFFFFF] font-semibold">Left business</div>
        <div className="bg-[#5F5F5F] w-[50px] h-[1px] rotate-90"></div>
        <div className="text-xl text-[#FFFFFF] font-semibold">Right business</div>
      </div>
      {Array(8).fill().map((_, index) => (
        <Rank key={index} />
      ))}
    </div>
  );
};
