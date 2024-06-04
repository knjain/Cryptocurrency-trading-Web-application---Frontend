import React from "react";
import { motion as m } from "framer-motion";
import { FAQs } from "./faqData";

const FAQ = () => {
  return (
    <div
      className="background-image-custom1 mt-16 mb-20 flex flex-col  px-6 w-full items-center justify-center"
      id="faq"
    >
      <div className="relative font-poppins mx-auto max-w-6xl space-y-12 sm:mx-8 justify-center items-center">
        {/* <m.div
          initial={{ opacity: 0, overflow: "hidden" }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.2,
              ease: "circInOut",
            },
          }}
          className="border-none absolute top-[18px] left-[110px]  md:top-[1.1rem] lg:left-[26rem]  xl:left-[33rem] w-[30px] h-[30px] bg-gradient-to-r  from-purple-300 to-purple-200 rounded-tr-full"
        ></m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.1,
              ease: "circInOut",
            },
          }}
          className="border-none absolute top-[-30px] left-[80px]  md:top-[-1.9rem] lg:left-[24.2rem]  xl:left-[31.2rem] w-[30px] h-[30px] bg-purple-300 rounded-tl-full"
        ></m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1.3,
              ease: "circInOut",
            },
          }}
          className="border-none absolute left-[110px] md:top-[0rem] lg:left-[26rem] xl:left-[33rem] w-[30px] h-[30px] bg-gradient-to-br  from-purple-200 to-purple-100 rounded-br-full"
        ></m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 1,
              ease: "circInOut",
            },
          }}
          className="border-none absolute left-[80px] md:top-[0rem] lg:left-[24.2rem] xl:left-[31.2rem] w-[30px] h-[30px] bg-purple-300 rounded-bl-full"
        ></m.div> */}

        <h1 className="z-4 relative text-4xl text-center font-bold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
          FAQs
        </h1>
        {FAQs.map((faq, index) => (
          <div key={index} className="text-xl mb-6">
            <p className="font-semibold mb-4">
              {index + 1}. {faq.question}
            </p>
            <p className="text-gray-500">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
