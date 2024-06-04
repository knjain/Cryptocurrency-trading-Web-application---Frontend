import React from "react";
import { data } from "./aboutData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hidden } from "@mui/material";
// import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion as m } from "framer-motion";

export function TeamMember() {
  //console.log("Component Render");
  const url = new URL(window.location.href);

  // Access query parameters by name
  const param1 = url.searchParams.get("id");
  return (
    <div className="md:mb-10 pt-20 w-full flex flex-col justify-center items-center">
      <div
        className="md:py-20 bg-top bg-[length:100%_100%] bg-no-repeat w-full text-center"
        style={{
          backgroundImage: `url("/images/team.jpg")`,
          zIndex: "1",
        }}
      >
        <div className="xl:container mx-auto px-6 md:px-12">
          <div className="mb-12 md:mb-28">
            <h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.21,
                  ease: "anticipate",
                },
              }}
              className="mb-4 text-center text-4xl  font-poppins  md:text-5xl text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
            >
              {data[param1].name}
            </h3>
            <div className="text-xl text-transparent font/semibold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text font-poppins  pb-4">
              <p>{data[param1].designation}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center p-4 ">
          <div className="md:w-1/3 p-4">
            <img
              src={"/" + data[param1].image}
              alt="Profile"
              className="rounded-full w-[650px] h-[450px]"
            />
            <div className="flex justify-center items-center">
              <img
                src={"/images/twitter.png"}
                style={{
                  width: "30px",
                  height: "30px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              />
              <img
                src={"/images/facebook.png"}
                style={{
                  width: "30px",
                  height: "30px",
                  margin: "10px",
                  cursor: "pointer",
                }}
              />
              <img
                src={"/images/instagram.png"}
                style={{
                  width: "30px",
                  height: "30px",

                  fill: "white",
                  margin: "10px",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div className="md:w-1/2 p-4 text-left">
            {/* <div className="text-xl pb-4">
              <p>{data[param1].designation}</p>
            </div> */}
            <div className="text-xm pb-4" style={{ display: "none" }}>
              <p style={{ color: "skyblue" }}>
                <span style={{ color: "white" }}>Email: </span>
                {data[param1].email}
              </p>
            </div>
            <div className="text-xm pb-4">
              <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent font-bold text-2xl mb-4">
                Brief Info:{" "}
              </span>
              <m.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.7,
                    delay: 0.5,
                    ease: "anticipate",
                  },
                }}
              >
                <p className="text-white-700 text-justify mt-8">
                  {data[param1].description}
                </p>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
