import React from "react";
import { FiLoader } from "react-icons/fi";

const OtpModal = ({
  otpModal,
  setotpModal,
  otpValue,
  handleOtpChange,
  handleWithdraw,
  isLoading,
}) => {
  return (
    <div className="w-full flex justify-center absolute top-0 left-0 max-h-full h-full  z-40  bg-black bg-opacity-70  ">
      <div className="max-w-[450px] rounded-2xl bg-[#0a090d] p-6 max-h-[350px]  relative">
        <button
          onClick={() => setotpModal((prev) => !prev)}
          className="rounded-full absolute -top-0 -right-4 w-10 p-3  bg-gradient-to-r text-white from-newStart via-newMid to-newEnd  "
        >
          <img
            alt="Signup Background"
            src="../images/icons/close.png"
            className="w-8"
          />
        </button>

        <h1 className="text-4xl font-medium mb-10">Enter OTP</h1>
        <p className="font-medium text-sm tracking-wider text-center mb-6">
          One time password is send to you registered email inbox check it
        </p>

        <label htmlFor="otp" className="text-sm">
          Enter OTP
        </label>
        <input
          id="otp"
          name="otp"
          value={otpValue}
          onChange={handleOtpChange}
          className="bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full"
        />
        <button
          onClick={handleWithdraw}
          className={`w-full  bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3
       flex justify-center item-center  
              ${isLoading ? "cursor-not-allowed opacity-70" : ""}
              
              `}
          disabled={isLoading}
        >
          {isLoading ? (
            <FiLoader className="animate-spin text-blue-500" size={24} />
          ) : (
            "Confirm"
          )}
        </button>
      </div>
    </div>
  );
};

export default OtpModal;
