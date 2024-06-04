import React, { useEffect } from "react";
import Legal3 from "./Legal3";

const Legal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{ marginLeft: 0, marginRight: 0 }}
      className="relative py-6 overflow-x-hidden sm:gap-6 mt-20 mb-20 mx-auto flex-col flex-wrap md:flex-nowrap justify-center items-center lg:mx-32 xl:mx-0"
    >
      <div className=" w-full flex flex-col  bg-opacity-40  justify-center items-center">
        <div className="text-3xl md:text-5xl text-center md:text-center font-semibold mb-6 ">
          OZO: A Global Presence
        </div>
        <div
          style={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "36px",
            textAlign: "center",
          }}
        >
          OZO's global reach spans across the UK, USA, Canada, and South Africa,
          ensuring accessibility and
          <br /> opportunities for investors worldwide.
        </div>
        <div className="text-xl my-6 mb-12">Legal Countries</div>
      </div>

      <Legal3 />
    </div>
  );
};

export default Legal;
