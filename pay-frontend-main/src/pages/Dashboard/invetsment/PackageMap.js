import React from "react";

const PackageMap = ({ setopen, setpackageID, setPackageName }) => {
  return (
    <>
      <h1 className="font-semibold text-2xl md:text-4xl  text-center text-white px-3">
        Affordable Pricing List
      </h1>

      <div className="w-full flex flex-wrap flex-col lg:flex-row  lg:flex-nowrap gap-2  py-12  justify-center items-center">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="image-effect w-full">
            <img src="/images/packages/9.png" alt="img1" className="pack-img" />
          </div>
          <div className="">
            <button
              name="Ozo Start"
              onClick={() => {
                setopen((prev) => !prev);
                setPackageName("Ozo Start");
                setpackageID(1);
              }}
              className={
                "w-full w-full bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3"
              }
              // disabled
              // style={{ cursor: "not-allowed", opacity: "0.65" }}
            >
              Purchase
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <div className="image-effect w-full">
            <img
              src="/images/packages/gold.png"
              alt="img1"
              className="pack-img"
            />
          </div>
          <button
            name="Ozo Gold"
            onClick={() => {
              setopen((prev) => !prev);
              setPackageName("Ozo Gold");
              setpackageID(5);
            }}
            className={
              "w-full w-full bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3"
            }
            // disabled
            // style={{ cursor: "not-allowed", opacity: "0.65" }}
          >
            Purchase
          </button>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="image-effect w-full">
            <img
              src="/images/packages/prime.png"
              alt="img1"
              className="pack-img"
            />
          </div>
          <button
            name="Ozo Prime"
            onClick={() => {
              setopen((prev) => !prev);
              setPackageName("Ozo Prime");
              setpackageID(7);
            }}
            className={
              "w-full w-full bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3"
            }
            // disabled
            // style={{ cursor: "not-allowed", opacity: "0.65" }}
          >
            Purchase
          </button>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="image-effect w-full">
            <img
              src="/images/packages/power.png"
              alt="img1"
              className="pack-img"
            />
          </div>
          <button
            name="Ozo Power"
            onClick={() => {
              setopen((prev) => !prev);
              setPackageName("Ozo Power");
              setpackageID(8);
            }}
            className={
              "w-full w-full bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3"
            }
            // disabled
            // style={{ cursor: "not-allowed", opacity: "0.65" }}
          >
            Purchase
          </button>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="image-effect w-full">
            <img
              src="/images/packages/thunder.png"
              alt="img1"
              className="pack-img"
            />
          </div>
          <button
            name="Ozo Striker"
            onClick={() => {
              setopen((prev) => !prev);
              setPackageName("Ozo Striker");
              setpackageID(9);
            }}
            className={
              "w-full w-full bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3"
            }
            // disabled
            // style={{ cursor: "not-allowed", opacity: "0.65" }}
          >
            Purchase
          </button>
        </div>
      </div>
    </>
  );
};

export default PackageMap;
