import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {
  tokenCodesWithdrawal,
  tokensWithdrawal,
  tokensWithdrawalJapan,
  tokenCodesWithdrawalJapan,
} from "../data";
import { createWithdrawal } from "../../../../services/walletService";
import toast from "react-hot-toast";
import axios from "axios";
import { baseURL } from "../../../../constants/Constant";
import OtpModal from "./OtpModal";
import { sendOTP } from "../../../../services/userService";
import { DateTime } from "luxon";
const WithdrawModal = ({
  setWithdrawWalletModel,

  withdrwawfrom,
  data,
  walletType,
  setRender,
}) => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [openTOKEN, setOpenTOKEN] = useState(false);
  const [otpModal, setotpModal] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const handleOtpChange = (event) => {
    setOtpValue(event.target.value);
  };
  const handleWithdraw = async () => {
    //console.log(withdrawModalForm);
    let finalTokens, finalCodes;
    if (data[0]?.country === "Japan") {
      finalTokens = tokensWithdrawalJapan;
      finalCodes = tokenCodesWithdrawalJapan;
    } else {
      finalTokens = tokensWithdrawal;
      finalCodes = tokenCodesWithdrawal;
    }
    const tokenMap = finalTokens.reduce((map, token, index) => {
      map[token] = finalCodes[index];
      return map;
    }, {});

    const tokenCode = tokenMap[token];
    //console.log(withdrwawfrom);
    setIsLoading(true);
    try {
      const response = await createWithdrawal({
        amount: withdrawModalForm.withdrawAmount,
        currency: tokenCode,
        from_wallet: withdrwawfrom,
        otp: otpValue,
        security_pin: withdrawModalForm?.securityPin,
      });
      if (response.data.success) {
        toast.success("Withdrawal request created successfully");
      } else {
        toast.error("Error creating withdrawal request");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create withdrawal request. Please try again.");
    } finally {
      setIsLoading(false);
      setotpModal(false);
      setWithdrawWalletModel(false);
      setRender((prev) => !prev);
    }
  };
  const [withdrawModalForm, setwithdrawModalForm] = useState({
    withdrawAmount: "",
    cryptoCurrency: token,
    securityPin: "",
  });
  const handleWithdrawBasedOnRules = () => {
    if (Number(withdrawModalForm.withdrawAmount) < 15) {
      toast.error("Withdrawal amount should at least be 15.");
      setWithdrawWalletModel(false);
      return;
    }
    const currentDateInUK = DateTime.now().setZone("Europe/London");

    const dayOfWeek = currentDateInUK.weekday; // 1 is Monday, 7 is Sunday
    const dayOfMonth = currentDateInUK.day;
    const hourInUK = currentDateInUK.hour;

    // Condition for ROI: Only on Sundays
    if (walletType === "ROI" && dayOfWeek !== 7) {
      toast.error("Withdrawal from ROI wallet is only allowed on Sundays.");
      setWithdrawWalletModel(false);
      return;
    }

    // Condition for R&B: Not on weekends and only between 9 AM to 6 PM
    if (walletType === "R&B") {
      // if (dayOfWeek === 7 || dayOfWeek === 6) {
      //   toast.error("Withdrawal from R&B Wallet is not allowed on weekends.");
      //   setWithdrawWalletModel(false);

      //   return;
      // }

      if (hourInUK < 9 || hourInUK >= 16) {
        toast.error(
          "Withdrawal from R&B Wallet is only allowed between 9 AM and 4 PM UK time."
        );
        setWithdrawWalletModel(false);

        return;
      }
    }

    // Condition for Interest: Only on the 1st and 16th of the month
    // if (walletType === "Interest" && ![15, 29].includes(dayOfMonth)) {
    //   toast.error(
    //     "Withdrawal from Interest wallet is only allowed on the 15th and 30th of the month."
    //   );
    //   setWithdrawWalletModel(false);

    //   return;
    // }
    // Additional validations for each wallet type based on the available balance
    if (
      walletType === "ROI" &&
      parseFloat(data[0].roi_wallet_mac) <
        parseFloat(withdrawModalForm.withdrawAmount)
    ) {
      toast.error("Amount exceeds ROI Wallet.");
      setWithdrawWalletModel(false);

      return;
    }

    if (
      walletType === "R&B" &&
      Number(data[0].referral_binary_wallet) <
        Number(withdrawModalForm.withdrawAmount)
    ) {
      toast.error("Amount exceeds RnB Wallet.");
      setWithdrawWalletModel(false);

      return;
    }

    if (
      walletType === "Interest" &&
      Number(data[0].interest_wallet) < Number(withdrawModalForm.withdrawAmount)
    ) {
      toast.error("Amount exceeds Interest Wallet.");
      setWithdrawWalletModel(false);

      return;
    }

    validateWalletDetails();
  };

  const withdrawHandleChange = (e) => {
    setwithdrawModalForm({
      ...withdrawModalForm,
      [e.target.name]: e.target.value,
    });
  };

  const validateWalletDetails = async () => {
    const user = JSON.parse(localStorage.getItem("user_data"));
    // //console.log(user);
    if (user && user.token && user.email && user.userId) {
      const headers = {
        Authorization: user.token,
      };
      try {
        await axios
          .get(`${baseURL}/api/users/user?email=${user.email}`, {
            headers,
          })
          .then((response) => {
            const { data } = response;
            // //console.log("user data..", data.data);
            if (
              withdrawModalForm.withdrawAmount &&
              withdrawModalForm.securityPin
            ) {
              if (
                parseInt(withdrawModalForm.securityPin) ===
                data.data.security_pin
              ) {
                // //console.log("security pin is valid");
                handleSubmitWithDraw();
              } else {
                toast.error("Invalid security pin");
                return;
              }
            }
          });
      } catch (error) {
        //console.log(error);
        toast.error("Something went wrong");
        return;
      }
    }
  };

  const handleSubmitWithDraw = async () => {
    // e.preventDefault();

    if (
      withdrawModalForm.withdrawAmount &&
      withdrawModalForm.securityPin &&
      withdrwawfrom
    ) {
      //console.log(otpModal, "withdraw");
      // setWithdrawWalletModel(false);
      await sendOTP();
      setotpModal(true);
    } else {
      toast.error("Something is missing");
    }
  };

  return (
    <div className="w-full flex justify-center absolute top-0 left-0 max-h-full z-40 h-full  bg-black bg-opacity-70  ">
      <div className="max-w-[450px] rounded-2xl bg-[#0a090d] p-6 max-h-[650px] relative">
        <button
          onClick={() => {
            setWithdrawWalletModel((prev) => !prev);
            setwithdrawModalForm({
              withdrawAmount: "",
              cryptoCurrency: token,
              securityPin: "",
            });
          }}
          className="rounded-full absolute -top-0 -right-4 w-10 p-3  bg-gradient-to-r text-white from-newStart via-newMid to-newEnd  "
        >
          <img
            alt="Signup Background"
            src="../images/icons/close.png"
            className="w-8"
          />
        </button>

        <h1 className="text-4xl font-medium mb-6">Withdraw fund</h1>

        <label className="text-sm ">Wallet</label>
        <input
          defaultValue={withdrwawfrom}
          readOnly
          className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
        />

        <label htmlFor="withdrawAmount" className="text-sm ">
          Enter amount
        </label>
        <input
          id="withdrawAmount"
          name="withdrawAmount"
          type="number"
          onChange={withdrawHandleChange}
          value={withdrawModalForm.withdrawAmount}
          className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
        />

        <label htmlFor="cryptoCurrenyWithdraw" className="text-sm ">
          Choose CryptoCurrency
        </label>

        <div className="flex flex-col relative ">
          <button
            onClick={() => setOpenTOKEN((prev) => !prev)}
            onChange={withdrawHandleChange}
            value={withdrawModalForm.cryptoCurrency}
            className="flex items-center space-x-2 bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full "
          >
            <span> {token}</span>
            {!token ? (
              <AiOutlineCaretDown className="h-8 text-white" />
            ) : (
              <AiOutlineCaretUp className="h-8 text-white" />
            )}
          </button>
          {openTOKEN && (
            <div className="absolute p-4 z-10 text-sm no-scrollbar font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-[#0a090d] top-24 max-h-[400px] overflow-y-scroll  text-white">
              {data[0]?.country === "Japan"
                ? tokensWithdrawalJapan.map((token, index) => (
                    <div
                      key={index}
                      className="hover:bg-zinc-900px-4 py-3 rounded-lg"
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
                  ))
                : tokensWithdrawal.map((token, index) => (
                    <div
                      key={index}
                      className="hover:bg-zinc-900px-4 py-3 rounded-lg"
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

        <label htmlFor="securityPin" className="text-sm ">
          Security Pin
        </label>
        <input
          id="securityPin"
          onChange={withdrawHandleChange}
          name="securityPin"
          value={withdrawModalForm.securityPin}
          className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
        />

        <button
          onClick={handleWithdrawBasedOnRules}
          className="w-full bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3"
          disabled
        >
          Continue
        </button>
      </div>
      {otpModal && (
        <OtpModal
          otpModal={otpModal}
          setotpModal={setotpModal}
          otpValue={otpValue}
          handleOtpChange={handleOtpChange}
          handleWithdraw={handleWithdraw}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default WithdrawModal;
