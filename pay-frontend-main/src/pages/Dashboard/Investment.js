import React, { useState } from "react";

import { getButtonClass } from "../../components/TabClass";
import Package from "./invetsment/Package";
import Downline from "./invetsment/Downline";

const Investment = () => {
  const [investmentState, setinvestmentState] = useState("Package");
  return (
    <>
      <div className="flex justify-center items-center">
        <div class="px-3 w-full md:w-auto absolute top-24 md:top-44 flex justify-center items-center">
          <div className="max-w-[40rem] gap-0 flex flex-wrap  w-full rounded-full border-2  ">
            <button
              onClick={() => setinvestmentState("Package")}
              className={`${getButtonClass({
                stateType: "Package",
                state: investmentState,
              })} w-1/2 sm:w-auto`} // Here's the change
            >
              Package activation
            </button>

            <button
              onClick={() => setinvestmentState("Downline")}
              className={`${getButtonClass({
                stateType: "Downline",
                state: investmentState,
              })} w-1/2 sm:w-auto`} // Here's the change
            >
              Downline activation
            </button>
          </div>
        </div>
        <div className="py-20 w-full bg-[#0a090d] md:px-2 md:mt-0">
          {investmentState === "Package" && <Package />}
          {/* {investmentState === "Offline" && <Offline />} */}
          {investmentState === "Downline" && <Downline />}
        </div>
      </div>
    </>
  );
};

export default Investment;
