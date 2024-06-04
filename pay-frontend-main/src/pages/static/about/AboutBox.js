import React from "react";
import { motion as m } from "framer-motion";

const AboutBox = ({ title, description, videoName, shortDescription }) => {
  return (
    <div
      className="relative  flex flex-col md:flex-row  w-[95%] md:w-[75%] mx-2 md:mx-40 my-16 rounded-lg p-8 md:p-20"
      style={{ backgroundColor: "#03010C", border: "1px solid #18D4A7" }}
    >
      <video
        autoPlay
        loop
        muted
        className="relative md:absolute left-[0%] md:left-[22%] w-full h-[76%] mt-[-1.5rem]"
      >
        <source src={`./images/video/${videoName}.mp4`} type="video/mp4" />
      </video>
      <div>
        <div className="relative">
          <div className="mb-6">
            <span className="text-xl " style={{ opacity: "0.8" }}>
              {title}
            </span>
          </div>
          <m.h1
            className="text-2xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "anticipate",
              },
            }}
          >
            {description.split("<br />").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </m.h1>
        </div>
        <m.p
          initial={{ x: 50, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "anticipate",
            },
          }}
          className="px-6 md:px-0 text-md mb-10 font-thin text-[#eeedf0]"
        >
          <div dangerouslySetInnerHTML={{ __html: shortDescription }} />
        </m.p>
      </div>
    </div>
  );
};

export default AboutBox;
