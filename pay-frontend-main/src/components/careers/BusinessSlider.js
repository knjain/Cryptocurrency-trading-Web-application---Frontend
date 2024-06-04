import React from "react";
function calculateWidth(value, target) {
  return (value / target) * 50; // Since we want it to take at most half the width.
}

const BusinessSlider = ({ leftBusiness, rightBusiness, business }) => {
  let leftWidth = calculateWidth(leftBusiness, Number(business));
  let rightWidth = calculateWidth(rightBusiness, Number(business));
  if (leftBusiness >= Number(business)) {
    leftWidth = calculateWidth(business * 2, Number(business));
  }
  if (rightBusiness >= Number(business)) {
    rightWidth = calculateWidth(business * 2, Number(business));
  }
  //console.log(leftBusiness, rightBusiness, business, leftWidth, rightWidth);
  return (
    <div className="flex flex-row relative w-full mt-4">
      <div className="w-1/2 text-center relative">
        <div className="bg-[#5F5F5F] h-[4px] w-full"></div>

        {/* Left Business Progress */}
        {/* Left Business Progress */}
        <div
          style={{
            width: `${leftWidth}%`,
            background: "linear-gradient(180deg, #0be355 0%, #b7dac3 100%)",
            boxShadow: "0px 0px 4px 0px #83dba1",
          }}
          className="absolute top-0 left-0 h-[4px]"
        >
          {/* Circle for Left Business */}
          <div
            style={{
              boxShadow: "1px 1px 7px 3px #b7dac3",
              background: "linear-gradient(180deg, #0be355 0%, #83dba1 100%)",
              height: "16px",
              width: "16px",
              borderRadius: "50%",
              position: "absolute",
              top: "-6px",
              right: "-4px",
            }}
          ></div>
        </div>

        <div className="absolute left-0 bottom-4 text-[#FFFFFF] font-satoshi">
          ${Math.max(0, leftBusiness)}
        </div>
        {/* <div className="absolute right-0 bottom-4 text-[#FFFFFF] font-satoshi">
          ${business}
        </div> */}
      </div>

      <div className="w-1/2 text-center relative">
        <div className="bg-[#5F5F5F] h-[4px] w-full"></div>

        {/* Right Business Progress */}
        {/* Left Business Progress */}
        <div
          style={{
            width: `${rightWidth}%`,
            boxShadow: "1px 1px 7px 3px #b7dac3",
            background: "linear-gradient(180deg, #0be355 0%, #83dba1 100%)",
            // background: "linear-gradient(180deg, #FA74C2 0%, #D7CDF6 100%)",
            // boxShadow: "0px 0px 4px 0px #EE86FFBF",
          }}
          className="absolute top-0 right-0 h-[4px]"
        >
          {/* Circle for Left Business */}
          <div
            style={{
              boxShadow: "1px 1px 7px 3px #b7dac3",
              background: "linear-gradient(180deg, #0be355 0%, #83dba1 100%)",
              height: "16px",
              width: "16px",
              borderRadius: "50%",
              position: "absolute",
              top: "-6px",
              left: "-4px",
            }}
          ></div>
        </div>

        {/* <div className="absolute left-0 bottom-0 text-[#FFFFFF]">
          ${business}
        </div> */}
        <div className="absolute right-0 bottom-4 text-[#FFFFFF] font-satoshi">
          ${Math.max(0, rightBusiness)}
        </div>
      </div>
    </div>
  );
};

export default BusinessSlider;
