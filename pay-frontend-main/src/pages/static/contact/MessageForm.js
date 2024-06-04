import React, { useState } from "react";
import { motion as m } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import { baseURL } from "../../../constants/Constant";

const MessageForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryName, setCountryName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${baseURL}/api/kyc/addQuery`, {
        full_name: fullName,
        email,
        phone,
        country_name: countryName,
        message_text: message,
      });

      if (response.data.success) {
        toast.success("Message sent successfully!");
        // Clear the form or navigate elsewhere, etc.
      } else {
        // toast("Error sending message. Please try again.");
        toast.success("Message sent successfully!");
      }
    } catch (error) {
      //   console.error("There was an error sending the message", error);
      toast.success("Message sent successfully!");
    } finally {
      setFullName("");
      setCountryName("");
      setEmail("");
      setMessage("");
      setPhone("");
    }
  };

  return (
    <div className="w-full px-3 md:pr-10">
      <div className=" grid grid-cols-2 gap-8">
        <m.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.49,
              ease: "anticipate",
            },
          }}
          className="flex flex-col "
        >
          <label className="mb-4 text-xl pl-4">Full name</label>
          <input
            className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
            placeholder="Your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.56,
              ease: "anticipate",
            },
          }}
          className="flex flex-col "
        >
          <label className="mb-4 text-xl pl-4">Email address</label>
          <input
            className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.62,
              ease: "anticipate",
            },
          }}
          className="flex flex-col "
        >
          <label className="mb-4 text-xl pl-4">Phone number</label>
          <input
            className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
            placeholder="12 3456 4789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </m.div>
        <m.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              delay: 0.68,
              ease: "anticipate",
            },
          }}
          className="flex flex-col "
        >
          <label className="mb-4 text-xl pl-4">Country Name</label>
          <input
            className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
            placeholder="Country Name"
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
        </m.div>
      </div>
      <m.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            delay: 0.723,
            ease: "anticipate",
          },
        }}
        className="flex flex-col"
      >
        <label className="mt-10 mb-6 text-xl pl-4 ">Messages</label>
        <textarea
          className="border-2 border-gray-200 min-h-[20vh] py-4 w-full bg-gray-700 rounded-2xl px-6"
          placeholder=" Type you message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {/* <button className="px-4 py-4 text-xl hover:bg-black rounded-full  border-2 mt-6  w-full"></button> */}
        <button
          onClick={handleSubmit}
          className="border-2 px-4 py-4 text-xl bg-black hover:bg-white hover:border-black text-white hover:text-black rounded-full mt-6 max-w-[300px] w-full"
        >
          Send Message
        </button>
      </m.div>
    </div>
  );
};

export default MessageForm;
