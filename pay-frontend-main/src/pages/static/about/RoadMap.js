import React from "react";

const left = [
  {
    date: "Year 1: 2023",
    title: "Assess, Optimize, and Support",
  },
  {
    date: "December 2023",
    title: "User Growth Fine-tuning ",
    desc: "Improve our user acquisition strategies based on initial data, focusing on trading, cryptocurrencies, forex, commodities, and casino investments.",
  },
  {
    date: "Year2: 2024",
    title: "Expand and Enhance",
  },
  {
    date: "Q3-Q4: 2024",
    title: "Performance Excellence",
    desc: "Invest in platform optimization for speed and stability, vital for cryptocurrency trading.",
  },
  {
    date: "Q1-Q2: 2025",
    title: "Mobile App Launch",
    desc: "Launch our mobile app, extending trading, forex, commodities, and casino investments to users on the go.",
  },
  {
    date: "Ongoing",
    title: "Profit Strategy",
    desc: "Refine our monetization plan across various financial sectors.",
  },
  {
    date: "Q1: 2026",
    title: "App Unveiling",
    desc: "Introduce our mobile app, making access to diversified financial services easy and promote it actively.",
  },
  {
    date: "Q4: 2026",
    title: "User-Centric Improvements ",
    desc: "Continuously improve using user feedback for long-term relationships and financial success.",
  },
  {
    date: "Q1-Q2: 2027",
    title: "Market Leadership",
    desc: "Strive for market leadership with superior service, innovation, and competitive fees.",
  },
];

const right = [
  {
    date: "December 2023",
    title: "Post-Launch Evaluation",
    desc: "Review One Ozo's performance since our November 2023 launch in the UK, USA, and South Africa.",
  },
  {
    date: "Ongoing",
    title: "User-Centric Support ",
    desc: "Deliver top-notch user support and gather feedback for a seamless experience that aligns with our services.",
  },
  {
    date: "Q1-Q2: 2024",
    title: "User Expansion",
    desc: "Boost user acquisition, emphasizing trading and cryptocurrencies.",
  },
  {
    date: "Year 3: 2025",
    title: "Go Mobile and Grow ",
  },
  {
    date: "Q3-Q4: 2025",
    title: "Global Reach",
    desc: "Explore expansion into new markets with our trading and forex expertise.",
  },
  {
    date: "Year 4: 2026",
    title: "Innovate and Adapt",
  },
  {
    date: "Q2-Q3: 2026",
    title: "Pioneering Features",
    desc: "Invest in cutting-edge features to stand out, catering to evolving user needs in trading and commodities.",
  },
  {
    date: "Year 5: 2027",
    title: "Lead the Market and Plan Ahead ",
  },
  {
    date: "Q3-Q4: 2027",
    title: "Future Vision ",
    desc: "Develop a long-term strategy for sustainable growth and expansion beyond the next five years.",
  },
];

const RoadMap = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col max-w-screen-lg  justify-center items-center mx-auto gap-8">
        <div className="flex flex-col justify-center items-center gap-4">
          {/* <div>img</div> */}
          <div className="text-4xl text-white font-bold">Roadmap</div>
          <div className="text-gray-500 text-base text-center">
            The timeline details our funding and
            <br /> development goals
          </div>
        </div>
        <div className=" flex flex-row gap-16">
          <div className="flex flex-col gap-12">
            {left.map((content, id) => (
              <div
                key={id}
                className="relative flex flex-row justify-end items-end w-[250px]"
              >
                <div className="w-[40px] absolute top-[0.5rem] right-[-4rem] h-[1px] bg-blue-gray-500"></div>
                <div className="flex flex-col justify-end items-end w-[250px]">
                  <div className="text-gray-500 text-sm">{content.date}</div>
                  <div className="text-white text-sm">{content.title}:</div>
                  <div className="text-white text-xs text-right">
                    {content.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="w-[8px] h-[146px] bg-[#18D4A7]"></div>
            <div className="w-[8px] h-[87%] bg-gray-800"></div>
          </div>
          <div className="flex flex-col gap-12 mt-8">
            {right.map((content, id) => (
              <div
                key={id}
                className="relative flex flex-row justify-start items-start w-[250px]"
              >
                <div className="w-[40px] absolute top-[0.5rem] left-[-4rem] h-[1px] bg-blue-gray-500"></div>
                <div className="flex flex-col justify-start items-start w-[250px]">
                  <div className="text-gray-500 text-sm">{content.date}</div>
                  <div className="text-white text-sm">{content.title}:</div>
                  <div className="text-white text-xs">{content.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          Simplify, strengthen, and streamline your journey with One Ozo!
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
