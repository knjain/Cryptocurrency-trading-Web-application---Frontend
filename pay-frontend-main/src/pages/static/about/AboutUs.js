import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import { data } from "./aboutData.js";
import { Link } from "react-router-dom";
import RoadMap from "./RoadMap.js";
import Modal from "./Modal.js";
import { useNavigate } from "react-router-dom";
import AboutBox from "./AboutBox.js";
const AboutUs = () => {
  const [showModel, setShowModel] = useState(false);
  const closeModal = () => {
    setShowModel(false);
  };
  const [index, setIndex] = useState(0);

  const instructions = (index) => {
    //console.log(index);
    setIndex(index);
    setShowModel(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [values, setValues] = useState([
    "think",
    "resource",
    "stay",
    "big",
    "take",
    "remain",
  ]);

  const [currentValueIndex, setCurrentValueIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex((prevIndex) => (prevIndex + 1) % values.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear the interval when the component is unmounted
  }, [values]);
  const navigate = useNavigate();
  return (
    <>
      {showModel && (
        <Modal className="w-full" closeModal={closeModal} index={index} />
      )}
      <div className="md:mb-10 overflow-x-hidden pt-20 bg-black w-full flex flex-col justify-center items-center">
        <div className="md:py-20">
          <div className="xl:container mx-auto px-6 md:px-12">
            <div className="mb-12 md:mb-28">
              <m.h2
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
                className="mb-4 text-left text-4xl  font-poppins font-bold  md:text-5xl text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
              >
                One Ozo Team
              </m.h2>
            </div>
            <div
              id="team"
              className="flex flex-wrap justify-center items-center gap-6 font-poppins"
            >
              {data.map((member, index) => {
                return (
                  <m.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.7,
                        delay: 0.25,
                        ease: "anticipate",
                      },
                    }}
                    className="group space-y-4 text-center"
                  >
                    <div className="mx-auto h-60 w-60  overflow-hidden rounded-full md:h-40 md:w-40 lg:h-56 lg:w-56">
                      <img
                        className="mx-auto h-full w-full  scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                        src={member.image}
                        alt="woman"
                        loading="lazy"
                        width="640"
                        height="805"
                      />
                    </div>
                    <div className="pt-4">
                      <h4 className="text-2xl text-gray-400 font-semibold dark:text-white">
                        {member.name}
                      </h4>
                      <span className="block text-sm text-gray-500 font-semibold ">
                        {member.designation}
                      </span>
                    </div>

                    <div>
                      <Link to={"/team" + "/?id=" + index}>
                        <button class="bg-gradient-to-r from-newStart via-newMid to-newEnd hover:bg-white hover:text-black border-2 border-white-400 py-2 px-8 rounded-full">
                          Info
                        </button>
                      </Link>
                    </div>
                    <div>
                      <button
                        class="bg-transparent hover:bg-black hover:text-white border-2 border-[#28DFBE] py-2 px-8 rounded-full"
                        onClick={() => instructions(index)}
                      >
                        Intro
                      </button>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
        <AboutBox
          title="Our Vision"
          description="Empowering Financial <br /> Success, Innovatively."
          shortDescription="We strive to redefine possibilities, fostering prosperity <br/> through cutting-edge solutions and unwavering commitment."
          videoName="design5"
        />
        <AboutBox
          title="Our Mission"
          description="Empowering Investors  <br /> with
    Innovative Solutions "
          shortDescription="Transforming investors' financial landscape through cutting-edge solutions <br/> in cryptocurrency. Achieve lasting prosperity with our innovative and strategic <br/> investment approaches in the dynamic world of cryptocurrency markets."
          videoName="mission1"
        />
        <AboutBox
          title=" WHY IT MATTERS"
          description="Bolster your <br /> investment portfolio."
          shortDescription="Unlock the growth potential of cryptocurrency and forex markets
    <br /> to bolster your investment portfolio. <br />
    Secure your financial independence through strategic <br /> investments in
    cryptocurrency and forex."
          videoName="why1"
        />

        {/* Second Section */}
        <div className="md:mt-10 lg:mt-0 max-w-full w-full relative flex flex-col md:flex-row items-center justify-center lg:py-14">
          <div className="flex flex-col justify-center items-center z-8 px-6 sm:px-10 lg:px-20 py-5 text-center">
            <m.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.2,
                  ease: "anticipate",
                },
              }}
              className="text-2xl mt-10 md:mt-16 text-fuchsia-900 text-center mb-6 font-semibold uppercase font-poppins text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text"
            >
              Our Unwavering Commitment to Excellence
            </m.p>
            <m.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }}
              className="max-w-screen-xl text-xl sm:text-4xl text-center mb-20 font-semibold font-poppins"
            >
              At One Ozo, our pursuit of excellence is unwavering. We're
              dedicated to constantly enhancing our services, ensuring they
              provide unmatched value and satisfaction to our investors.
            </m.h1>
            <m.button
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }}
              className=" bg-gradient-to-r from-newStart via-newMid to-newEnd  text-white w-56 border-2 font-poppins hover:bg-white hover:opacity-80 hover:border-2 py-4 hover:text-black shadow-grey-700 shadow-2xl transition ease-in-out delay-150 hover:scale-95 hover:translate-y-1 rounded-full font-semibold text-lg tracking-wide"
            >
              Learn More
            </m.button>
          </div>
        </div>
        {/* Leadership  */}
        <div className="w-full mb-5 font-poppins">
          <div className="w-full max-w-5xl mx-auto flex justify-center items-center flex-col">
            <h1 className="text-5xl font-semibold mb-20 text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
              Our Values
            </h1>
            <div className="w-full flex space-x-10 flex-wrap sm:flex-nowrap">
              <div className="max-w-[380px] border-l-2 text-[28px] font-semibold">
                <ul className="space-y-6 px-8 text-gray-600 ">
                  <div
                    className={`text-left hover:text-white focus:text-white cursor-pointer ${
                      currentValueIndex === 0 ? "text-white" : "text-gray-600"
                    }`}
                    onClick={() => setCurrentValueIndex(0)}
                  >
                    Effective Communication
                  </div>
                  <div
                    className={`text-left hover:text-white focus:text-white cursor-pointer ${
                      currentValueIndex === 1 ? "text-white" : "text-gray-600"
                    }`}
                    onClick={() => setCurrentValueIndex(1)}
                  >
                    Innovative Problem Solving
                  </div>
                  <div
                    className={`text-left hover:text-white focus:text-white cursor-pointer ${
                      currentValueIndex === 2 ? "text-white" : "text-gray-600"
                    }`}
                    onClick={() => setCurrentValueIndex(2)}
                  >
                    Unwavering Resolve
                  </div>
                  <div
                    className={`text-left hover:text-white focus:text-white cursor-pointer ${
                      currentValueIndex === 3 ? "text-white" : "text-gray-600"
                    }`}
                    onClick={() => setCurrentValueIndex(3)}
                  >
                    Bold Innovation
                  </div>
                  <div
                    className={`text-left hover:text-white focus:text-white cursor-pointer ${
                      currentValueIndex === 4 ? "text-white" : "text-gray-600"
                    }`}
                    onClick={() => setCurrentValueIndex(4)}
                  >
                    Empowered Ownership
                  </div>
                  <div
                    className={`text-left hover:text-white focus:text-white cursor-pointer ${
                      currentValueIndex === 5 ? "text-white" : "text-gray-600"
                    }`}
                    onClick={() => setCurrentValueIndex(5)}
                  >
                    Humility First
                  </div>
                </ul>
              </div>

              <div className="text-2xl sm:text-3xl flex justify-center items-center font-semibold min-h-[380px] py-8">
                {values[currentValueIndex] === "think" && (
                  <m.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.7,

                        ease: "anticipate",
                      },
                    }}
                  >
                    At One Ozo, we understand that clear, concise, and
                    articulate communication is the bedrock of our collaborative
                    environment. <br />
                    <br />
                    We make it our priority to convey messages with utmost
                    clarity, simplicity, and effectiveness,
                    <br />
                    ensuring a shared understanding that drives impactful
                    outcomes.
                  </m.p>
                )}{" "}
                {values[currentValueIndex] === "resource" && (
                  <m.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.7,

                        ease: "anticipate",
                      },
                    }}
                  >
                    At One Ozo, resourcefulness is our superpower. <br />
                    <br />
                    We delve deep to gain a comprehensive understanding of
                    challenges.With creativity and determination, we harness
                    available resources and foster collaboration.
                    <br />
                    <br /> We believe that valuable ideas can emerge from
                    anyone, irrespective of rank or experience.
                  </m.p>
                )}{" "}
                {values[currentValueIndex] === "stay" && (
                  <m.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.7,

                        ease: "anticipate",
                      },
                    }}
                  >
                    {" "}
                    At One Ozo, we persevere and provide unwavering support to
                    one another when faced with challenges, recognizing the
                    resilience within our team.
                    <br />
                    <br />
                    We embrace the significance of building an impactful
                    company, finding joy in every step of the journey.
                    <br />
                    <br />
                    Together, we celebrate milestones, rejuvenate our spirits,
                    and reaffirm our shared purpose.
                  </m.p>
                )}{" "}
                {values[currentValueIndex] === "big" && (
                  <m.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.7,

                        ease: "anticipate",
                      },
                    }}
                  >
                    {" "}
                    At One Ozo, we dare to envision the extraordinary.
                    <br />
                    <br />
                    We dream big and take calculated risks to pioneer uncharted
                    territories, making bold decisions in alignment with our
                    long-term goals.
                    <br />
                    <br />
                    We firmly believe that unwavering determination can turn the
                    seemingly impossible into reality.
                  </m.p>
                )}{" "}
                {values[currentValueIndex] === "take" && (
                  <m.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.7,

                        ease: "anticipate",
                      },
                    }}
                  >
                    {" "}
                    At One Ozo, we wholeheartedly embrace initiative, taking
                    decisive actions and full ownership of our endeavors.
                    <br />
                    <br />
                    Our vibrant culture attracts exceptional talent, uniting the
                    sharpest minds in our pursuit of excellence.
                    <br />
                    <br />
                    We are dedicated to astonishing and igniting, consistently
                    delivering swift, high-quality decision-making that
                    surpasses expectations.
                  </m.p>
                )}{" "}
                {values[currentValueIndex] === "remain" && (
                  <m.p
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.7,

                        ease: "anticipate",
                      },
                    }}
                  >
                    {" "}
                    At One Ozo, we choose to prioritize our company and users
                    over seeking the spotlight.
                    <br />
                    <br />
                    Egos are left at the door as we embrace lessons from
                    missteps, acknowledging the strength of our collective
                    efforts.
                    <br />
                    <br />
                    We exercise fiscal prudence in our expenditures while boldly
                    investing in what truly matters, nurturing growth and
                    prosperity.
                  </m.p>
                )}
              </div>
            </div>
          </div>
        </div>
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
              className="text-5xl mb-6 font-bold text-center text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
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
              Tailored packages for busy individuals. Invest, earn rewards
              without research hassle. Your success, simplified.
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
                One Ozo implements tried and tested trading strategies,
                developed by industry experts, to optimize investment
                performance and generate consistent returns.
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
                mitigate potential losses, ensuring a balanced and secure
                approach to trading.
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
              <h1 className="text-2xl mb-4 font-bold">
                {" "}
                Regulatory Compliance
              </h1>
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
        <RoadMap />
      </div>
    </>
  );
};

export default AboutUs;
{
  /* Parent  */
}
{
  /* <div className="flex max-w-7xl p-8 mb-12 w-full  justify-center items-center">
    
        <div className="w-1/2 text-left ">
          <h1 className="font-semibold font-poppins text-4xl mb-6">
            Stunning Crypto Platform <br />
            <span>It's Great For Your Icon</span>{" "}
          </h1>
          <p className=" font-poppins text-lg mb-6">
            From day one we designed and built a modern crypto template for
            beginners and experts alike. Make easy deposits and withdrawals,
            measure the performance of your portfolio, and track all your
            cryptocurrencies in one place.
          </p>

          <div className="space-y-2 px-4">
            <li className="">
              
                You can follow cryptos by investing from all banking platforms.
            
            </li>
            <li>
             
              
                You can quickly buy and transfer cryptocurrencies with your
                credit card.
              
            </li>
            <li>
            
              
                You can exchange and send tokens in complete safety.
             
            </li>
          </div>
        </div>

    
        <div className="w-1/2 pl-2  flex justify-center items-center">
          <img src="./images/aboutusImage.png" className="w-4/5 " />
        </div>
      </div> */
}

{
  /* <div className="flex justify-center px-16  min-h-[90vh] flex-col items-center w-full">
        
          <div className="w-full max-w-7xl relative  object-cover">
            <h1 className=" text-4xl absolute top-10 left-1/2  -translate-x-1/2 my-12 font-poppins'">
              WHO WE ARE
            </h1>

            <img src="./images/about.jpg" className="-z-10  " />
            <div className="font-poppins max-w-5xl w-full absolute top-1/2 left-1/2  bg-black/10  backdrop-blur-md p-16 rounded-xl -translate-x-1/2 -translate-y-1/2 ">
              <p className=" text-xl text-white ">
                {" "}
                A complete platform offering opportunities for financial success
                on a global scale. Our primary business is trading in
                cryptocurrencies and foreign exchange, with potential expansion
                across a variety of industries.The revolutionary trading
                approach is based on constant personal development. This system
                will be excellent for people looking for a straightforward but
                reliable way to invest in forex and cryptocurrencies. Each user
                who signs up with TecmacTrade receives two personalised referral
                links that give them access to the dashboard. Copy the link to
                your referral give your network access to your individual
                referral connections. Watch out for your recommendations keep
                track of your referral system to manage them effectively.
                Receive benefits and rewards if your referrals bring business to
                Tecmactrade, you'll get upto 15% of their deposits. Meet the
                requirements, establish new relationships.
              </p>
            </div>
          
        </div>
      </div> */
}

{
  /* <div className="w-full min-h-[100vh] font-poppins  relative  ">
        <img
          src="./images/holobg.jpg"
          className="z-0  object-cover opacity-90 "
        />
        <div className="absolute  flex justify-around items-center top-32 min-h-[80vh] w-full">
          <div className="w-1/2 flex justify-center items-center  py-12 px-10 ">
            <img
              src="./images/hologrambg.png"
              className="w-4/5 relative opacity-90 animate-pulse "
            />
            <img src="./images/navAbout_logo.png" className="absolute w-96 mt-8" />
          </div>
          <div className=" w-1/2 min-h-[80vh] py-16 px-16  flex flex-col justify-center ">
            <m.h1  initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.25,
                  ease: "anticipate",
                },
              }}  className="text-3xl mb-3  ">PERKS OF CONNECTING</m.h1>
            <m.p initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.31,
                  ease: "anticipate",
                },
              }}  className="text-6xl mb-8">with Ozo One</m.p>
            <div className="text-lg space-y-3">
              {" "}
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.37,
                  ease: "anticipate",
                },
              }} >Minimum investment starting from $100 for accessible entry.
              </m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.41,
                  ease: "anticipate",
                },
              }} >Earn up to 1.8% daily ROI, maximizing investment growth.</m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.47,
                  ease: "anticipate",
                },
              }}>
                Enjoy 100% principle returns on all investment packages.
              </m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.52,
                  ease: "anticipate",
                },
              }}>Benefit from high capping limits for ample earning opportunities.
              </m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.57,
                  ease: "anticipate",
                },
              }}>Lucrative referral program, earning bonuses on multiple levels.</m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.61,
                  ease: "anticipate",
                },
              }}>Transparent and well-defined investment structure for clarity and confidence.</m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.67,
                  ease: "anticipate",
                },
              }}>Flexible package durations from 140 to 200 days for convenience.</m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.71,
                  ease: "anticipate",
                },
              }}>Additional benefits with transferable Ozo Tokens to Ozo Token Wallet.
              </m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.77,
                  ease: "anticipate",
                },
              }}>24/7 professional and responsive customer support for assistance.
              </m.li>
              <m.li initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.81,
                  ease: "anticipate",
                },
              }}>Registered business in multiple countries, establishing credibility and trust
              </m.li>
            </div>
          </div>
        </div>
      </div> 

      <div className="w-full min-h-[110vh] relative  flex justify-center items-center flex-col mx-auto h-full">
        <div className="w-full absolute top-20 sm:top-40 flex flex-col mx-auto mx-w-6xl justify-center items-center">
          <m.p initial={{ opacity: 0,y:-50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.21,
                  ease: "anticipate",
                },
              }} className="text-xl mt-0 text-fuchsia-800 text-center mb-3 sm:mb-12 font-semibold uppercase font-poppins">
            Our Team
          </m.p>
          <m.h1 initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.27,
                  ease: "anticipate",
                },
              }} className="text-2xl sm:text-5xl text-center mb-3 sm:mb-6 font-semibold uppercase font-poppins">
            One vision.
            <br />
          </m.h1>
          <m.span initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.32,
                  ease: "anticipate",
                },
              }} className="text-2xl sm:text-5xl text-center mb-6 sm:mb-12 font-semibold uppercase font-poppins">
            One global team.
          </m.span>
          <m.h1 initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.37,
                  ease: "anticipate",
                },
              }} className="text-lg sm:text-xl text-center mb-12 font-semibold  font-poppins">
         Driven team of experts behind One Ozo's <br/>revolutionary investment platform
          </m.h1>

          <div className="flex flex-wrap justify-center items-center gap-12 text-light-blue-700">
            <div className="text-center">
              <m.h1 initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.42,
                  ease: "anticipate",
                },
              }} className="text-6xl sm:text-8xl text-center font-semibold uppercase font-poppins">
               50,000
              </m.h1>
              <m.span initial={{ opacity: 0,x:-50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.47,
                  ease: "anticipate",
                },
              }} className="text-lg text-white text-center   font-poppins">
                Active Investors
              </m.span>
            </div>
            <div className="text-center">
              <m.h1 initial={{ opacity: 0,y:50 }}
              whileInView={{
                y:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.46,
                  ease: "anticipate",
                },
              }} className="text-6xl sm:text-8xl text-center font-semibold uppercase font-poppins">
                120
              </m.h1>
              <m.span initial={{ opacity: 0,x:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.52,
                  ease: "anticipate",
                },
              }} className="text-lg text-white text-center   font-poppins">
                Countries
              </m.span>
            </div>
          </div>
          
          <m.button initial={{ opacity: 0,y:50 }}
              whileInView={{
                x:0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.52,
                  ease: "anticipate",
                },
              }} className="text-white w-56 border-2 font-poppins hover:bg-black hover:opacity-80 hover:border-2 py-4 shadow-grey-700 shadow-2xl  transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide">
            Start the Journey
          </m.button>
        </div>
      </div>
            */
}
