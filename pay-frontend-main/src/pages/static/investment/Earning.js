import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Packages from "./Packages";
// import CarrierPlan from "../../../components/CarrierPlan";
import "../../../index.css";
// import Content from "./Content";
import { packages } from "./data";
import Calculator from "./Calculator";
import { motion as m } from "framer-motion";
import HeaderAnimation from "../../../components/animations/HeaderAnimation";

const Earning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateCursor = (e) => {
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);

    document.documentElement.style.setProperty("--cursorX", x + "px");
    document.documentElement.style.setProperty("--cursorY", y + "px");
  };

  useEffect(() => {
    // Add event listeners for mouse and touch events
    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("touchmove", updateCursor);

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("touchmove", updateCursor);
    };
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const navigate = useNavigate();

  return (
    <div className="w-full font-poppins flex flex-col justify-center items-center">
      {/* section 1 */}
      {/* <Content readMore={readMore} setreadMore={setreadMore} /> */}
      {/* img section */}
      <HeaderAnimation title={"The Essence of OZO: Explore Our Packages"} />
      {/* <m.div
        initial={{ x: 3780, width: "100%" }}
        animate={{ x: 0, width: "100%" }}
        transition={{ duration: 1, delay: 0.8 }}
      > */}
      <div className="px-6 relative gap-6 w-full md:w-1/2 lg:w-full flex py-12 flex-wrap lg:flex-nowrap justify-center items-center ">
        <div className="image-effect lg:w-1/4">
          <img src="./images/packages/9.png" alt="pack1" className="pack-img" />
        </div>

        <div className="image-effect lg:w-1/4">
          <img
            src="./images/packages/gold.png"
            alt="pack3"
            className="pack-img"
          />
        </div>
        <div className="image-effect lg:w-1/4">
          <img
            src="./images/packages/prime.png"
            alt="pack4"
            className="pack-img"
          />
        </div>

        <div className="image-effect lg:w-1/4">
          <img
            src="./images/packages/power.png"
            alt="pack4"
            className="pack-img"
          />
        </div>
        <div className="image-effect lg:w-1/4">
          <img
            src="./images/packages/thunder.png"
            alt="pack4"
            className="pack-img"
          />
        </div>
      </div>
      {/* </m.div> */}
      {/* <Packages/> */}
      {/* section 2 */}
      <Calculator packages={packages} navigate={navigate} isCalci={true} />
      {/* section 4 */}
      <div className="w-full mt-24 relative">
        <img
          src="./images/investment1.jpg"
          className="w-full h-[60vh] md:h-full object-cover opacity-100"
          alt="Contact"
        />

        <div className="flex flex-col md:flex-row absolute max-w-5xl w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  md:left-101 justify-between items-center px-4 md:px-8">
          <div className="mb-4 md:mb-0 p-6 xl:ml-[-5rem]">
            <h2 className="text-3xl md:text-5xl font-bold leading-10 p-6 max-w-[500px] text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
              Contact us for <br /> deeply information and <br />
              services customize.
            </h2>
          </div>

          <div className="lg:mr-44">
            {/* border mb-6 px-12 text-xl py-3 font-medium rounded-full */}
            <button
              className="xl:ml-[-15rem] border px-6 py-3 text-2xl font-bold rounded-md hover:bg-black"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earning;
//old anmations
{
  /* <div className="mydiv"><img src="./images/pak 1 PNG.png" alt="pack1" className="z-[-1] w-[500px] h-full"/><div class="spotlight1" id="spotlight1"></div></div>
        <div className="mydiv"><img src="./images/pak 2.png" alt="pack2" className="z-[-1] w-[500px] h-full"/><div class="spotlight2" id="spotlight2"></div></div>
        <div><img src="./images/pak 3.png" alt="pack3" className="w-[500px] h-full"/></div>
        <div><img src="./images/pak 4.png" alt="pack4" className="w-[500px] h-full"/></div> */
}
// old calculator
{
  /* <div className="max-w-5xl text-xl mt-16 mb-6 text-left bg-[#0a090d] px-16 mx-auto rounded-3xl divide-x-2 py-2 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center font-medium uppercase">
          <div className="flex flex-col relative px-2">
            <span>Packages</span>
            <button
              onClick={() => setOpenTOKEN((prev) => !prev)}
              className="flex items-center space-x-2"
            >
              <span> {token}</span>
              {!token ? (
                <AiOutlineCaretDown className="h-8 text-white" />
              ) : (
                <AiOutlineCaretUp className="h-8 text-white" />
              )}
            </button>
            {openTOKEN && (
              <div className="absolute z-10 text-sm no-scrollbar font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-[#0a090d] top-24 max-h-[400px] overflow-y-scroll  text-white">
                {tokens.map((token, index) => (
                  <div
                    key={index}
                    className="hover:bg-gray-900 px-4 py-3 rounded-lg"
                  >
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setToken(token);
                      }}
                      to="earning"
                    >
                      {token}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col px-6">
            <span>AMOUNT (USD)</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => {
                const newAmount = Math.max(100, parseFloat(e.target.value));
                setAmount(newAmount);
              }}
              className="bg-transparent border-0 focus-within:border-none"
            />
          </div>
          <div className="flex flex-row md:flex-col px-6 relative">
            <span>Package Details</span>
            <div>
              <button
                onClick={() => setOpenCro((prev) => !prev)}
                className="flex items-center space-x-2"
              >
                <span> {cro} USD</span>
                {!openCRO ? (
                  <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                  <AiOutlineCaretUp className="h-8 text-white" />
                )}
              </button>
            </div>

            {openCRO && (
              <div className="absolute z-10 text-xl font-medium min-w-[200px] space-y-2 w-full rounded-lg bg-[#0a090d] top-24 text-white">
                {options.map((option) => (
                  <div
                    key={option.value}
                    className="hover:bg-gray-900 px-4 py-3 rounded-lg"
                  >
                    <button
                      onClick={() => {
                        setCRO(option.value);
                        setOpenCro((prev) => !prev);
                      }}
                    >
                      {option.label}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="px-6 flex flex-row md:flex-col relative">
            <span>dURATION</span>
            <div>
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center space-x-2"
              >
                <span> {term}</span>
                {!open ? (
                  <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                  <AiOutlineCaretUp className="h-8 text-white" />
                )}
              </button>
            </div>
            {open && (
              <div className="absolute z-10 text-xl font-medium min-w-[200px] space-y-2 w-full rounded-lg bg-[#0a090d] top-24 text-white">
                {terms.map((term) => (
                  <div
                    key={term.value}
                    className="hover:bg-gray-900 px-4 py-3 rounded-lg"
                  >
                    <button
                      onClick={() => {
                        setTerm(term.value);
                        setOpen((prev) => !prev);
                      }}
                    >
                      {term.label}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div> */
}

{
  /* <p className="text-center text-sm mb-10">
          Click here to learn more about our tiered rewards rate structure.
        </p> */
}

{
  /* section 3 */
}

{
  /* <div className="max-w-4xl mb-20 w-full mx-auto  flex flex-col md:flex-row justify-between py-8 px-5">
          <div>
            <h2 className="text-6xl md:text-7xl  font-medium">Earn</h2>
            <p className="text-7xl md:text-9xl font-semibold">
              ${totalReturn}
              <span className="text-xs">usd</span>
            </p>
            <p className="text-2xl font-medium">total returns </p>
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-5xl font-medium">{dailyReturn}%</h2>

              <p className="text-2xl">Daily returns </p>
            </div>
            <div>
              <h2 className="text-5xl font-medium">
                ${monthlyReturn}
                <span className="text-xs">USD</span>
              </h2>
              <p className="text-2xl">Monthly returns </p>
            </div>
          </div>
        </div> */
}
//old packages
{
  /* {packages.map((p, index) => (
          <div className="relative">
            <div
              key={index}
              className={`relative max-w-[340px] rounded-2xl p-4 flex flex-col items-center space-y-4 ${p.gradient}`}
            >
              {/* Package Image */
}
{
  /* <img src={p.image} alt={p.name} className="w-32 h-32 pb-0 mb-0" /> */
}

{
  /* Package Name */
}
{
  /* <h3
                className="font-semibold text-lg "
                style={{ color: "#6D9AFF", marginTop: 0 }}
              >
                {p.name}
              </h3> */
}

{
  /* Price Range */
}
{
  /* <h4
                className="gradient-text "
                style={{ marginTop: 0, fontWeight: "700" }}
              >
                {p.priceRange}
              </h4> */
}

{
  /* Invest Now Button */
}
{
  /* <button className="mt-4 w-full max-w-[250px] font-bold text-white rounded-xl p-3    bg-gradient-to-r from-newStart via-newMid to-newEnd ">
                {p.buttonText}
              </button> */
}
{
  /* Features */
}
{
  /* <div
                className="w-full flex flex-col space-y-2 border border-#697DFB rounded-lg p-6 gap-2"
                style={{ borderColor: "#697DFB" }}
              >
                {p.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex gap-2  justify space-x-2"
                  >
                    <img
                      src="/images/star.png"
                      className="w-6 h-6"
                      alt="Feature Icon"
                    />
                    <p className="font-semibold text-white">{feature}</p>
                  </div>
                ))}
              </div> */
}
{
  /* </div> */
}
{
  /* <div class="light"></div> */
}
{
  /* </div> */
}
{
  /* ))} */
}
