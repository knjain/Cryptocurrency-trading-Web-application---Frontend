import React from "react";
import "./static/investment/earning.css";
const Legal2 = () => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <img
          src="./images/new/legal.png"
          alt="map"
          className="w-full relative object-cover"
        />
      </div>
      <div className="max-w-[65px] max-h-[85px]">
        <a href="./pdf/One Ozo UK.pdf" download>
          <img
            src="./images/legal/uk.png"
            alt="uk"
            className="w-[45px] md:w-[65px] lg:w-[85px] h-auto absolute top-[4rem] left-[10rem] md:top-[10rem] md:left-[20rem] lg:top-[13rem] lg:left-[27rem] xl:top-[23rem] xl:left-[41rem]"
          />
        </a>
      </div>
      <div className="max-w-[65px] max-h-[85px]  ">
        <img
          src="./images/legal/Arrow 1.png"
          alt="arrow"
          className="absolute xl:top-[42rem] xl:left-[35rem] blinking-point"
        />
        <a href="./pdf/One Ozo USA.pdf" download>
          <img
            src="./images/legal/usa 1.png"
            alt="usa"
            className="w-[45px] md:w-[65px] lg:w-[85px] h-auto absolute top-[6rem] left-[4rem] md:top-[14rem] md:left-[8rem] lg:top-[18rem] lg:left-[12rem] xl:top-[31rem] xl:left-[18rem]"
          />
        </a>
      </div>
      <div className="max-w-[65px] max-h-[85px]">
        <a href="./pdf/One Ozo SA.pdf" download>
          <img
            src="./images/legal/sa 1.png"
            alt="usa"
            className="w-[45px] md:w-[65px] lg:w-[85px] h-auto absolute top-[10rem] left-[10.6rem] md:top-[22rem] md:left-[21.5rem] lg:top-[28rem] lg:left-[29rem] xl:top-[48rem] xl:left-[44rem]"
          />
        </a>
      </div>
      <p className="my-4 bg-gradient-to-r from-[#EF9DFF] from-100% to-[#47254D] bg-clip-text text-transparent blinking-point px-3">
        Please click the country's pin icon corresponding to the certificate you
        wish to download.
      </p>
    </div>
  );
};

export default Legal2;
