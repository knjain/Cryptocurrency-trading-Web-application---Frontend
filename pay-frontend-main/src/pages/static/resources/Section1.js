import React from "react";

const Section1 = () => {
  return (
    <div className="mt-28 explore px-6">
      <div>
        <m.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.4,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          className="max-w-lg w-full mb-12 text-5xl font-extrabold explore_heading lg:px-5 sm:px-3"
        >
          Visual Assets
          <br /> for Trust: One <br />
          Ozo's Compelling Multimedia <br />
          Support
        </m.h1>

        <m.button
          initial={{ opacity: 0, y: -50 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.599,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          className="px-12 py-3 border-black border-4 bg-gradient-to-r from-gray-500 via-white to-black shadow-2xl rounded-3xl text-xl text-black font-bold mx-6"
        >
          Explore
        </m.button>
      </div>
      <div className="max-w-[600px] w-full pt-5 explore_content ">
        <div className="flex space-x-6">
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.63,
                delay: 0.52,
                ease: "anticipate",
              },
            }}
            className="border-b-2 max-w-[60px] 
                 max-h-[5vh] flex justify-center items-center w-full"
          >
            {" "}
          </m.p>
          <m.p
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.63,
                ease: "anticipate",
              },
            }}
            className="max-w-[400px] text-xs"
          >
            Elevate trust and confidence with One Ozo's extensive collection of
            visual assets. Immerse yourself in captivating images, compelling
            videos, attention-grabbing banners, and insightful business plan
            PDFs, reinforcing trust through engaging and informative multimedia
            support.
          </m.p>
        </div>

        <div className="mt-20 space-y-6">
          <div className="flex space-x-8">
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.69,
                  ease: "anticipate",
                },
              }}
              className="max-w-[150px] w-full min-h-[150px] bg-white "
            >
              <p className="text-transparent">lsfvs</p>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.79,
                  ease: "anticipate",
                },
              }}
              className="max-w-[150] min-h-[150px]  flex justify-center text-transparent  items-center rounded-full text-purple-500 bg-[#18D4A7] "
            >
              "fsvvsdkmvlsdm,wmw f,me ,m ea m, s"
            </m.div>
          </div>
          <div className="flex space-x-8">
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.89,
                  ease: "anticipate",
                },
              }}
              className="max-w-[150] min-h-[150px] text-transparent flex justify-center  items-center rounded-l-full text-gray-500 bg-gray-500 "
            >
              sdvhbsdvknakvlk aslv akvksvkkkjnvkjs,
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 1.0,
                  ease: "anticipate",
                },
              }}
              className="max-w-[150] min-h-[150px]  text-transparent flex justify-center  items-center rounded-full text-red-500 bg-red-500"
            >
              lkmcealmk;adnksvs
            </m.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
