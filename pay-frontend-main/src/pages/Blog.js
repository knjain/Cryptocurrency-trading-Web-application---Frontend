import React from "react";
import BlogCard from "../components/Card";
import { motion as m } from "framer-motion";
const Blog = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <div className="w-full max-w-6xl mx-auto mt-24 ">
        <m.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.7,

              ease: "anticipate",
            },
          }}
          className="text-purple-800 border-b-2 pb-6 text-3xl font-semibold px-6"
        >
          WHAT’S TRENDING
        </m.h1>
        <div className="my-6 w-full flex flex-col sm:flex-row pb-6 border-b-2 justify-center items-center">
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
            className="w-full sm:w-1/2 mb-6 sm:mb-0 px-6 "
          >
            <img alt="Signup Background" src="./images/blog/1.webp" />
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.9,
                ease: "anticipate",
              },
            }}
            className="w-full sm:w-1/2 px-6 flex flex-col text-left"
          >
            <div className="space-y-3 text-base  ">
              {" "}
              <p>EVENT / PROMOTIONS - JUN 14, 2023</p>
              <p className="text-xl font-semibold">
                Crypto.com x Aston Martin F1 Team Co-Branded Merchandise
                Giveaway
              </p>
              <p className="text-lg ">
                Celebrating Crypto.com’s partnership with Aston Martin F1 in the
                lead-up to the Canada Grand Prix
              </p>
              <p>Read More - (1 minute)</p>
            </div>

            <div className="mt-8 sm:mt-24 ">
              <p className="text-sm">JUN 14 - 18, 2023</p>
            </div>
          </m.div>
        </div>

        <div className="flex flex-wrap items-center justify-between divide-x-2  border-b-2 pb-6">
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.95,
                ease: "anticipate",
              },
            }}
            className="max-w-[380px] px-6 my-6"
          >
            <img alt="Signup Background" src="./images/blog/2.webp" />
            <div className="space-y-3 my-6">
              <p>EVENT / PROMOTIONS</p>

              <p className="text-xl font-semibold sm:truncate">
                Win Premium Hospitality Tickets & More!
              </p>
              <p>JUN 14, 2023</p>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 1.1,
                ease: "anticipate",
              },
            }}
            className="max-w-[380px] px-6 my-6"
          >
            <img alt="Signup Background" src="./images/blog/3.jpg" />
            <div className="my-6 space-y-3">
              <p>UNIVERSITY / BLOCKCHAIN</p>
              <p className="text-xl font-semibold">
                What Are Blockchain Forks?
              </p>
              <p>JUN 14, 2023</p>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 1.5,
                ease: "anticipate",
              },
            }}
            className="max-w-[380px] px-6 my-6"
          >
            <img alt="Signup Background" src="./images/blog/4.webp" />
            <div className="space-y-3 my-6 ">
              <p>EVENT / AMAS</p>

              <p className="sm:truncate text-xl font-semibold">
                Live Video AMA with Jason Ma, Director of Business Development
                at Axelar on Crypto.com’s Official YouTube, Facebook & Twitter
              </p>

              <p>JUN 14, 2023</p>
            </div>
          </m.div>
        </div>

        <div className="my-24 flex flex-col px-6">
          <m.h1
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
            className="text-purple-800 border-b-2 pb-6 text-3xl font-semibold"
          >
            ALL STORIES
          </m.h1>
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.623,
                ease: "anticipate",
              },
            }}
            className="my-6 w-full flex flex-col sm:flex-row pb-6 border-b-2"
          >
            <div className="w-full sm:w-1/2">
              <img alt="Signup Background" src="./images/blog/1.webp" />
            </div>
            <div className="w-full sm:w-1/2 px-6 flex flex-col text-left">
              <div className="space-y-6 my-6 text-base ">
                {" "}
                <p>EVENT / PROMOTIONS - JUN 14, 2023</p>
                <p className="text-xl font-semibold">
                  Crypto.com x Aston Martin F1 Team Co-Branded Merchandise
                  Giveaway
                </p>
                <p className="text-lg ">
                  Celebrating Crypto.com’s partnership with Aston Martin F1 in
                  the lead-up to the Canada Grand Prix
                </p>
                <p>Read More - (1 minute)</p>
              </div>

              <div className="mt-8 sm:mt-24 ">
                <p className="text-sm">JUN 14 - 18, 2023</p>
              </div>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.678,
                ease: "anticipate",
              },
            }}
            className="my-6 w-full flex flex-col sm:flex-row pb-6 border-b-2"
          >
            <div className="w-full sm:w-1/2">
              <img alt="Signup Background" src="./images/blog/1.webp" />
            </div>
            <div className="w-full sm:w-1/2 px-6 flex flex-col text-left">
              <div className="space-y-6 my-6 text-base ">
                {" "}
                <p>EVENT / PROMOTIONS - JUN 14, 2023</p>
                <p className="text-xl font-semibold">
                  Crypto.com x Aston Martin F1 Team Co-Branded Merchandise
                  Giveaway
                </p>
                <p className="text-lg ">
                  Celebrating Crypto.com’s partnership with Aston Martin F1 in
                  the lead-up to the Canada Grand Prix
                </p>
                <p>Read More - (1 minute)</p>
              </div>

              <div className="mt-8 sm:mt-24 ">
                <p className="text-sm">JUN 14 - 18, 2023</p>
              </div>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.623,
                ease: "anticipate",
              },
            }}
            className="my-6 w-full flex flex-col sm:flex-row pb-6 border-b-2"
          >
            <div className="w-full sm:w-1/2">
              <img alt="Signup Background" src="./images/blog/1.webp" />
            </div>
            <div className="w-full sm:w-1/2 px-6 flex flex-col text-left">
              <div className="space-y-6 my-6 text-base ">
                {" "}
                <p>EVENT / PROMOTIONS - JUN 14, 2023</p>
                <p className="text-xl font-semibold">
                  Crypto.com x Aston Martin F1 Team Co-Branded Merchandise
                  Giveaway
                </p>
                <p className="text-lg ">
                  Celebrating Crypto.com’s partnership with Aston Martin F1 in
                  the lead-up to the Canada Grand Prix
                </p>
                <p>Read More - (1 minute)</p>
              </div>

              <div className="mt-8 sm:mt-24 ">
                <p className="text-sm">JUN 14 - 18, 2023</p>
              </div>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.623,
                ease: "anticipate",
              },
            }}
            className="my-6 w-full flex flex-col sm:flex-row pb-6 border-b-2"
          >
            <div className="w-full sm:w-1/2">
              <img alt="Signup Background" src="./images/blog/1.webp" />
            </div>
            <div className="w-full sm:w-1/2 px-6 flex flex-col text-left">
              <div className="space-y-6 my-6 text-base ">
                {" "}
                <p>EVENT / PROMOTIONS - JUN 14, 2023</p>
                <p className="text-xl font-semibold">
                  Crypto.com x Aston Martin F1 Team Co-Branded Merchandise
                  Giveaway
                </p>
                <p className="text-lg ">
                  Celebrating Crypto.com’s partnership with Aston Martin F1 in
                  the lead-up to the Canada Grand Prix
                </p>
                <p>Read More - (1 minute)</p>
              </div>

              <div className="mt-8 sm:mt-24 ">
                <p className="text-sm">JUN 14 - 18, 2023</p>
              </div>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.623,
                ease: "anticipate",
              },
            }}
            className="my-6 w-full flex flex-col sm:flex-row pb-6 border-b-2"
          >
            <div className="w-full sm:w-1/2">
              <img alt="Signup Background" src="./images/blog/1.webp" />
            </div>
            <div className="w-full sm:w-1/2 px-6 flex flex-col text-left">
              <div className="space-y-6 my-6 text-base ">
                {" "}
                <p>EVENT / PROMOTIONS - JUN 14, 2023</p>
                <p className="text-xl font-semibold">
                  Crypto.com x Aston Martin F1 Team Co-Branded Merchandise
                  Giveaway
                </p>
                <p className="text-lg ">
                  Celebrating Crypto.com’s partnership with Aston Martin F1 in
                  the lead-up to the Canada Grand Prix
                </p>
                <p>Read More - (1 minute)</p>
              </div>

              <div className="mt-8 sm:mt-24 ">
                <p className="text-sm">JUN 14 - 18, 2023</p>
              </div>
            </div>
          </m.div>
        </div>

        <m.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.7,

              ease: "anticipate",
            },
          }}
          className="text-purple-800 border-b-2 pb-6 text-3xl font-semibold px-6 sm:px-0"
        >
          ALL EVENTS
        </m.h1>
        <div className="flex flex-wrap items-center justify-between divide-x-2 py-6 mb-24 border-b-2 ">
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.623,
                ease: "anticipate",
              },
            }}
            className="max-w-[380px] px-6 my-6"
          >
            <img alt="Signup Background" src="./images/blog/2.webp" />
            <div className="mt-4 space-y-6">
              <p>EVENT / PROMOTIONS</p>

              <p className="text-xl font-semibold sm:truncate">
                Win Premium Hospitality Tickets & More!
              </p>
              <p>JUN 14, 2023</p>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.67,
                ease: "anticipate",
              },
            }}
            className="max-w-[380px] px-6 my-6"
          >
            <div className="mt-4  space-y-6">
              <p>UNIVERSITY / BLOCKCHAIN</p>
              <p className="text-xl font-semibold">
                Crypto.com x Aston Martin F1 Team Co-Branded Merchandise
                Giveaway
              </p>
              <p>JUN 14, 2023</p>
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.723,
                ease: "anticipate",
              },
            }}
            className="max-w-[380px] px-6 my-6"
          >
            <div className="space-y-6 mt-4 ">
              <p>EVENT / AMAS</p>

              <p className=" text-xl font-semibold">
                Live Video AMA with Jason Ma, Director of Business Development
                at Axelar on Crypto.com’s Official YouTube, Facebook & Twitter
              </p>

              <p>JUN 14, 2023</p>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
