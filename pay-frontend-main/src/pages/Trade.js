import React from "react";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Trade = () => {
  const navigate = useNavigate();
  return (
    <div class="overflow-x-hidden w-full flex flex-col justify-center align-center md:mt-28 lg:mt-0 md:pt-6 mb-4">
      {/* section 1 */}
      <div className="my-28 mb-44 md:mb-6 md:my-0 flex flex-col gap-3 mx-auto font-poppins relative w-full justify-center items-center">
        <video
          autoplay="true"
          loop="true"
          muted="true"
          class="z-0 w-auto min-w-full object-cover"
        >
          <source src="./images/video/tradepage.mp4" />
        </video>

        <div className="md:absolute top-0  md:top-[-1rem] lg:top-44 flex flex-col px-6 w-full bg-opacity-40 md:py-8 justify-center items-center">
          <m.h1
            className="text-3xl md:text-4xl lg:text-5xl text-center md:text-center font-semibold mb-6"
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
            Enhanced Trade Standards: <br />
            One Ozo Sets the Bar Higher for <br />
            Exceptional Investment Opportunities
          </m.h1>
          <m.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.4,
                ease: "anticipate",
              },
            }}
            className="text-md md:text-md md:text-center mb-6 leading-relaxed"
          >
            One Ozo is committed to raising the bar in trade standards, <br />
            providing exceptional investment opportunities that <br />
            surpass industry norms and deliver superior results for investors
          </m.p>

          <m.button
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "anticipate",
              },
            }}
            onClick={() => navigate("/signup")}
            className="rounded-full bg-white px-8 md:px-14 py-4 md:py-6"
          >
            <span className="text-black text-base md:text-2xl font-semibold">
              Get Connect
            </span>
          </m.button>
        </div>
      </div>

      {/* section 2 */}

      <div class="max-w-6xl text-white grid my-10 mx-auto lg:grid-cols-3 gap-6 sm:grid-cols-2 mt-5 md:mt-0 px-6">
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.0,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          class="w-full lg:max-w-[350px] min-h-[350px] py-6 rounded-xl flex flex-col items-center justify-center text-center bg-[#0a090d] px-3"
        >
          <img
            alt="Signup Background"
            src="./images/Transparency.png"
            class="bg-black p-4 w-24 rounded-full mb-6"
          />
          <h1 class="text-2xl mb-4 font-bold">Transparency</h1>
          <p class="text-gray-500 text-[16px]">
            One Ozo maintains transparency in all trading activities, providing
            clear visibility into investments and ensuring trust and confidence
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.0,
              delay: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          class="w-full lg:max-w-[350px] min-h-[350px] py-6 rounded-xl flex flex-col items-center justify-center text-center bg-[#0a090d] px-3"
        >
          <img
            alt="Signup Background"
            src="./images/Accessibility.png"
            class="bg-black p-4 w-24 rounded-full mb-6"
          />
          <h1 class="text-2xl mb-4 font-bold">Accessibility</h1>
          <p class="text-gray-500 text-[16px]">
            One Ozo offers a user-friendly platform, enabling easy access to
            trading opportunities, empowering investors to seize profitable
            moments
          </p>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.0,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
          class="w-full lg:max-w-[350px] min-h-[350px] py-6 rounded-xl flex flex-col items-center justify-center text-center bg-[#0a090d] px-3"
        >
          <img
            alt="Signup Background"
            src="./images/Reliability.png"
            class="bg-black p-4 w-24 rounded-full mb-6"
          />
          <h1 class="text-2xl mb-4 font-bold">Reliability</h1>
          <p class="text-gray-500 text-[16px]">
            One Ozo ensures reliable trade execution and dependable performance,
            backed by robust technology infrastructure and expert market
            analysis
          </p>
        </m.div>
      </div>

      {/* section 3 */}

      <div className="flex flex-col lg:flex-row items-center justify-center text-center w-full gap-4 px-6">
        <div className="sm:w-full lg:w-1/3 px-6 font-semibold lg:text-5xl sm:text-3xl flex flex-col gap-4 justify-center text-center items-center">
          <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <h1 className="mb-3">50,000</h1>
            <p className="text-xl text-purple-900">Active Investor Base</p>
          </m.div>

          <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <h1 className="mb-3">$500M</h1>
            <p className="text-xl text-purple-900">Investment Capital</p>
          </m.div>
          <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <h1 className="mb-3">100</h1>
            <p className="text-xl text-purple-900">Traders Team</p>
          </m.div>
          <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <h1 className="mb-3">85%</h1>
            <p className="text-xl text-purple-900">Trade Success Rate</p>
          </m.div>
          <m.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <h1 className="mb-3">97%</h1>
            <p className="text-xl text-purple-900">Investor Satisfaction</p>
          </m.div>
        </div>

        <div className="sm:w-full lg:w-1/3 p-6 flex justify-center items-center">
          <m.div
            initial={{ x: 50, opacity: 1 }}
            whileInView={{
              opacity: 0.4,
              x: 0,
              transition: {
                duration: 0.9,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="max-w-full min-h-full lg:max-w-[500px] lg:min-h-[80vh] z-0 rounded-2xl lg:w-full w-full"
          >
            <img
              alt="Signup Background"
              src="./images/trade1.png"
              className="w-full h-full object-cover"
            />
          </m.div>
        </div>
        <div className="lg:w-1/3 sm:w-full">
          <m.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              opacity: 2,
              x: 0,
              transition: {
                duration: 0.9,
                delay: 0.95,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="pl-6 max-w-[350px] top-6 md:top-22 text-left "
          >
            <h1 className="text-3xl font-semibold mb-4 tracking-wider">
              Impressive Investor Base and
              <br />
              Satisfaction Rates: <br />
              Unveiling One Ozo's Success
            </h1>
            <p className="max-w-[450px] font-medium text-sm tracking-wider w-full">
              One Ozo boasts a substantial number of investors, while
              maintaining a high percentage of satisfied clients. Our
              experienced team of traders ensures top-notch performance and
              service
            </p>
          </m.div>
        </div>
      </div>

      {/* section 4 */}
      {/*<img   alt="Signup Background" src="./images/security1.jpg" className="opacity-50 " /> */}
      <div className="w-full mt-10  px-6" id="service">
        <div className="w-full">
          <m.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="text-5xl mb-6 font-bold text-center "
          >
            Our Services
          </m.h1>
          <m.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                delay: 0.75,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="text-center max-w-[600px] text-xl mb-10 text-gray-500 lg:mx-auto sm:mx-10"
          >
            Tailored packages for busy individuals. Invest, earn rewards without
            research hassle. Your success, simplified.
          </m.p>
        </div>

        <div className="max-w-6xl text-white grid my-10 mx-auto lg:grid-cols-3 gap-6 sm:grid-cols-2 gap-3 px-6">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="w-full lg:max-w-[350px] min-h-[350px] py-6 rounded-xl flex flex-col justify-center text-center bg-[#0a090d] px-3 items-center"
          >
            <img
              alt="Signup Background"
              src="./images/Proven Trading Strategies.png"
              className="bg-black p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold">
              Proven Trading Strategies
            </h1>
            <p className="text-gray-500">
              One Ozo implements tried and tested trading strategies, developed
              by industry experts, to optimize investment performance and
              generate consistent returns.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="w-full lg:max-w-[350px] min-h-[350px] py-6 rounded-xl flex flex-col justify-center text-center bg-[#0a090d] px-3 items-center"
          >
            <img
              alt="Signup Background"
              src="./images/Advanced Market Analysis.png"
              className="bg-black p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold">
              {" "}
              Advanced Market Analysis
            </h1>
            <p className="text-gray-500">
              With cutting-edge market analysis tools and techniques, One Ozo
              stays ahead of market trends, enabling informed investment
              decisions for maximum profitability.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="w-full lg:max-w-[350px] min-h-[350px] py-6 rounded-xl flex flex-col justify-center text-center bg-[#0a090d] px-3 items-center"
          >
            <img
              alt="Signup Background"
              src="./images/Risk Management.png"
              className="bg-black p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold"> Risk Management</h1>
            <p className="text-gray-500">
              One Ozo emphasizes effective risk management strategies to
              mitigate potential losses, ensuring a balanced and secure approach
              to trading.
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="w-full lg:max-w-[350px] min-h-[350px] py-6 rounded-xl flex flex-col justify-center text-center bg-[#0a090d] px-3 items-center"
          >
            <img
              alt="Signup Background"
              src="./images/Competitive Trading Fees.png"
              className="bg-black p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold">
              {" "}
              Competitive Trading Fees
            </h1>
            <p className="text-gray-500">
              One Ozo offers competitive trading fees, enabling investors to
              maximize their returns by reducing costs and expenses associated
              with trading
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="w-full lg:max-w-[350px] min-h-[350px] py-6 rounded-xl flex flex-col justify-center text-center bg-[#0a090d] px-3 items-center"
          >
            <img
              alt="Signup Background"
              src="./images/Regulatory Compliance.png"
              className="bg-black p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold"> Regulatory Compliance</h1>
            <p className="text-gray-500">
              One Ozo operates in accordance with strict regulatory standards,
              ensuring legal compliance and providing a trustworthy and secure
              trading environment
            </p>
          </m.div>
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.9,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
            className="w-full lg:max-w-[350px] min-h-[350px] py-6 rounded-xl flex flex-col justify-center text-center bg-[#0a090d] px-3 items-center"
          >
            <img
              alt="Signup Background"
              src="./images/Continuous Innovation.png"
              className="bg-black p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold">Continuous Innovation</h1>
            <p className="text-gray-500">
              One Ozo is committed to continuous innovation, regularly
              introducing new features, tools, and investment opportunities to
              enhance the trading experience for investors.
            </p>
          </m.div>
        </div>
      </div>

      {/* <div></div> */}
    </div>
  );
};

export default Trade;
