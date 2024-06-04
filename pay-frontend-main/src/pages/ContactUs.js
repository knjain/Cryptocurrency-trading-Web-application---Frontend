import React, { useEffect } from "react";
import { motion as m } from "framer-motion";
import "./contact.css";
import { useNavigate } from "react-router";
import MessageForm from "./static/contact/MessageForm";
import { Link } from "react-router-dom";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden font-poppins w-full">
      {/* <div className="w-full flex flex-wrap items-center justify-center min-h-[450px] mx-0 px-30 space-x-10  bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500"> */}
      <div className="text-center w-full  bg-gradient-to-r from-newStart via-newMid to-newEnd section_top mt-32">
        <div>
          <m.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0,
                ease: "anticipate",
              },
            }}
            className="text-6xl mb-6 font-semibold pl-3 pr-3 mx-2"
          >
            Contact Us
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.2,
                ease: "anticipate",
              },
            }}
            className="font-semibold mx-2 pl-2 pr-2"
          >
            Questions? Comments? Want to schedule <br />a demo? We'd love to
            chat!
          </m.p>
        </div>

        <div className="contact_card">
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.33,
                ease: "anticipate",
              },
            }}
            className="max-w-[380px] bg-black rounded-2xl flex justify-center items-center px-10 py-8"
          >
            <div className="w-14 bg-white p-2 rounded-full">
              <img
                alt="Signup Background"
                src="./images/icons/gmail.png"
                className="w-16"
              />
            </div>
            <div className="pl-2">
              <h1 className="text-2xl">Email us</h1>
              <span className="text-lg">Info@oneozo.com</span>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.39,
                ease: "anticipate",
              },
            }}
            className="max-w-[380px] bg-black  rounded-2xl flex justify-center items-center px-10 py-8"
          >
            <div className="w-14 bg-white p-2 rounded-full">
              <img
                alt="Signup Background"
                src="./images/icons/call.png"
                className="w-16"
              />
            </div>
            <div className="pl-2">
              <h1 className="text-2xl">Phone number</h1>
              <span className="text-lg">+44 7452 118915</span>
            </div>
          </m.div>
        </div>
      </div>
      {/* w-full max-w-7xl mt-24 mb-44 mx-auto flex space-x-10 */}
      <div className="mx-auto w-full flex flex-col md:flex-row mt-24 py-5 justify-between items-center">
        <div className="w-full md:w-1/2 text-center px-10">
          <m.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.33,
                ease: "anticipate",
              },
            }}
            className="text-5xl md:text-6xl font-semibold mb-6"
          >
            Send Us A <br /> Message
          </m.h1>
          <m.span
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                delay: 0.39,
                ease: "anticipate",
              },
            }}
            viewport={{ once: true }}
            className="text-xl text-gray-500"
          >
            Fill out the form and our team will get <br />
            back to you as quickly as we can.
          </m.span>

          <div className="flex flex-col my-10 gap-6 justify-center items-center">
            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.46,
                  ease: "anticipate",
                },
              }}
              viewport={{ once: true }}
              className="flex justify-start items-center space-x-6 "
            >
              <Link
                to="https://www.facebook.com/profile.php?id=61552974897638&mibextid=9R9pXO"
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  alt="Signup Background"
                  src="./images/icons/facebook.png"
                  className="w-10 h-10"
                />
              </Link>
              <p className="text-xl">
                Facebook <br />
                <span className="text-base text-gray-500">One ozo</span>
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.49,
                  ease: "anticipate",
                },
              }}
              viewport={{ once: true }}
              className="flex justify-start items-center space-x-6 "
            >
              <Link
                to="https://www.instagram.com/officialoneozo/"
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  alt="Signup Background"
                  src="./images/icons/instagram.png"
                  className="w-10 h-10"
                />
              </Link>
              <p className="text-xl text-gray-500 ">
                Instagram
                <br />
                <span className="text-base">One ozo</span>
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.53,
                  ease: "anticipate",
                },
              }}
              viewport={{ once: true }}
              className="flex justify-start items-center space-x-6 "
            >
              <Link
                to="https://www.youtube.com/channel/UCfsWoYIDhB7qrsSTkynSbaQ"
                target="_blank"
                className="cursor-pointer"
              >
                <img
                  alt="Signup Background"
                  src="./images/icons/youtube.png"
                  className="w-10 h-10"
                />
              </Link>
              <p className="text-xl">
                Youtube
                <br />
                <span className="text-base text-gray-500     ">One ozo</span>
              </p>
            </m.div>
          </div>
        </div>
        <MessageForm />
      </div>
      <div className="mx-5 md:mx-10 my-28 px-3">
        <m.div
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.89,
              delay: 0.23,
              ease: "anticipate",
            },
          }}
          style={{ border: "4px solid #18D4A7" }}
          className="w-full max-w-6xl mb-44 min-h-[450px] mx-auto shadow-2xl shadow-green-400 rounded-2xl bg-[#0a090d] flex justify-center items-center flex-col text-center"
        >
          <button
            className="text-xl px-3 py-2 my-6 bg-gradient-to-r from-newStart via-newMid to-newEnd text-white hover:text-black font-semibold rounded-full"
            onClick={() => navigate("/signup")}
          >
            Join us now
          </button>
          <h1 className="text-4xl font-semibold">
            Invest in the Digital <br />
            Connected Era for Promising Returns
          </h1>
          <p className="text-gray-400 font-medium max-w-[600px] mt-6">
            Unlock the potential of the digital connected era with a new
            investment opportunity. Explore growth prospects and maximize
            returns in this interconnected digital landscape.
          </p>

          <div className="px-3 flex flex-col md:flex-row w-full max-w-[450px] space-x-0 md:space-x-6 mb-20">
            <button
              className="px-4 py-4 text-xl hover:bg-black rounded-full  border-2 mt-6  w-full"
              onClick={() => navigate("/login")}
              style={{ border: "1px solid #12E55A" }}
            >
              Login
            </button>
            <button
              className="px-4 py-4 text-xl  rounded-full  border-2 mt-6  w-full bg-gradient-to-r from-newStart via-newMid to-newEnd text-white hover:text-black"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default ContactUs;
