import React, { useState } from "react";
import {
  updateLTCWithdrawalWallet,
  updateWithdrawalWallet,
} from "../../../../services/walletService";
import { sendOTP } from "../../../../services/userService";
import { FiLoader } from "react-icons/fi";
import toast from "react-hot-toast";

const LTCWithdrawalWalletModel = ({ handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [modalForm, setModalForm] = useState({
    withdrawal_wallet: "",
    otp: "",
  });
  const handleChange = (e) => {
    setModalForm({
      ...modalForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const response = await updateLTCWithdrawalWallet(modalForm);
      console.log(response);
      if (response.data.success) {
        toast.success("Withdrawal wallet updated successfully");
      } else {
        toast.error("Error while updating withdrawal wallet");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create withdrawal request. Please try again.");
    } finally {
      setIsLoading(false);
      handleClose();
    }
  };
  const handleSendOTP = async () => {
    // e.preventDefault();
    try {
      const res = await sendOTP();
      console.log(res);
      if (res.data.success) {
        setIsOTPSent(true);
        toast.success("OTP sent on registered email address");
      } else {
        toast.error("Error sending OTP. Please try after some time");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full flex justify-center absolute top-0 left-0 max-h-full z-40 h-full  bg-black bg-opacity-70 ">
      {!isOTPSent ? (
        <div className="max-w-[450px] rounded-2xl bg-[#0a090d] p-6 max-h-[280px] relative">
          <button
            onClick={() => {
              setModalForm({
                withdrawal_wallet: "",
                otp: "",
              });
              handleClose();
            }}
            className="rounded-full absolute -top-0 -right-4 w-10 p-3  bg-gradient-to-r text-white from-newStart via-newMid to-newEnd  "
          >
            <img
              alt="Signup Background"
              src="/images/icons/close.png"
              className="w-8"
            />
          </button>

          <h4 className="font-medium mb-6">
            Please enter your Withdrawal Wallet Address <br />( Litecoin(LTC))
          </h4>

          <label htmlFor="withdrawAmount" className="text-sm ">
            Wallet Address
          </label>
          <input
            id="withdrawal_wallet"
            name="withdrawal_wallet"
            type="text"
            onChange={handleChange}
            value={modalForm.withdrawal_wallet}
            className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
          />

          {!isOTPSent && (
            <button
              onClick={handleSendOTP}
              className="w-full bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3"
            >
              Continue
            </button>
          )}
        </div>
      ) : (
        <div className="max-w-[450px] rounded-2xl bg-[#0a090d] p-6 max-h-[280px] relative">
          <button
            onClick={() => {
              setModalForm({
                withdrawal_wallet: "",
                otp: "",
              });
              handleClose();
            }}
            className="rounded-full absolute -top-0 -right-4 w-10 p-3  bg-gradient-to-r text-white from-newStart via-newMid to-newEnd  "
          >
            <img
              alt="Signup Background"
              src="/images/icons/close.png"
              className="w-8"
            />
          </button>
          <h4 className="font-medium mb-6">
            Please enter your Withdrawal Wallet Address <br />( Litecoin(LTC))
          </h4>

          <label htmlFor="otp" className="text-sm">
            Enter OTP
          </label>
          <input
            id="otp"
            name="otp"
            value={modalForm.otp}
            onChange={handleChange}
            className="bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full"
          />
          <button
            onClick={handleUpdate}
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
      )}
    </div>
  );
};

export default LTCWithdrawalWalletModel;
