import React from "react";

const Legal3 = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center mb-20 w-full gap-20">
        <div className="flex justify-center items-center flex-col w-[30%] max-h-[400px]">
          <img
            className="w-full mb-[10px] p-4 bg-[#292929] rounded-xl"
            src="/images/OneOzosa.png"
            alt="Image 1"
          />
          <div className="flex justify-center items-center flex-col gap-4 w-full">
            <button
              className="w-[50%] px-4 py-2 flex gap-2 md:font-xm justify-center align-center rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, #12E55A 0%, #18D4A7 95.85%)",
              }}
            >
              <img src="/images/sa.png" className="w-[20px]" />
              SOUTH AFRICA
            </button>
            <div
              className="flex justify-center align-center w-[50%] py-2 px-6 border-solid border-white rounded-lg cursor-pointer"
              style={{ border: "1px solid #12E55A" }}
            >
              <a href="./pdf/One Ozo SA.pdf" download>
                Download
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col w-[30%]">
          <img
            className="w-full mb-[10px] p-4 bg-[#292929] rounded-xl"
            src="/images/OneOzoUsa.png"
            alt="Image 2"
          />
          <div className="flex justify-center items-center flex-col gap-4 w-full">
            <button
              className=" w-[50%] px-4 py-2 flex gap-2 md:font-xm justify-center align-center rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, #12E55A 0%, #18D4A7 95.85%)",
              }}
            >
              <img src="/images/usa.png" className="w-[20px]" />
              USA
            </button>
            <div
              className="flex justify-center align-center w-[50%] py-2 px-6 border-solid border-white rounded-lg cursor-pointer"
              style={{ border: "1px solid #12E55A" }}
            >
              <a href="./pdf/One Ozo USA.pdf" download>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-20">
        <div className="flex justify-center items-center flex-col w-[30%]">
          <img
            className="w-full mb-[10px] p-4 bg-[#292929] rounded-xl h-[700px]"
            src="/images/oneozouk.png"
            alt="Image 3"
          />
          <div className="flex justify-center items-center flex-col gap-4 w-full">
            <button
              className=" w-[50%] px-4 py-2 flex gap-2 md:font-xm justify-center align-center rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, #12E55A 0%, #18D4A7 95.85%)",
              }}
            >
              <img src="/images/uk.png" className="w-[20px]" />
              UK
            </button>
            <div
              className="flex justify-center align-center w-[50%] py-2 px-6 border-solid border-white rounded-lg cursor-pointer"
              style={{ border: "1px solid #12E55A" }}
            >
              <a href="./pdf/One Ozo UK.pdf" download>
                Download
              </a>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-center items-center flex-col w-[30%]">
          <img
            className="w-full mb-[10px] p-4 bg-[#292929] rounded-xl h-[700px]"
            src="/images/oneozocanada.png"
            alt="Image 3"
          />
          <div className="flex justify-center items-center flex-col gap-4 w-full">
            <button
              className=" w-[50%] px-4 py-2 flex gap-2 md:font-xm justify-center align-center rounded-lg"
              style={{
                background:
                  "linear-gradient(90deg, #12E55A 0%, #18D4A7 95.85%)",
              }}
            >
              <img src="/images/canada.png" className="w-[20px]" />
              Canada
            </button>
            <div
              className="flex justify-center align-center w-[50%] py-2 px-6 border-solid border-white rounded-lg cursor-pointer"
              style={{ border: "1px solid #12E55A" }}
            >
              <a href="./pdf/One Ozo Canada.pdf" download>
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal3;
