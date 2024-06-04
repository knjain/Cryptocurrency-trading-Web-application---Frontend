import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import axios from "../services/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Deposit = () => {
  const [isDepositLoading, setIsDepositLoading] = useState(false);
  const [openToken, setIsOpenToken] = useState(false);
  const [amount, setAmount] = useState(0);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const coins = [
    { name: "Bitcoin", code: "btc" },
    { name: "Ethereum", code: "eth" },
    { name: "Tron (TRX)", code: "trx" },
    { name: "Tron USDT (TRC-20)", code: "tusdt" },
    { name: "Binance Coin (BNB Chain)", code: "bnb" },
    { name: "Binance USDT (BEP-20)", code: "busdt" },
    { name: "Ethereum USDT (ERC-20)", code: "usdt" },
  ];

  const handleDeposit = async () => {
    const userData = JSON.parse(localStorage.getItem("user_data"));
    try {
      const formData = {
        cryptoCode: token.code,
        amountInUSD: amount,
        name: userData?.email,
        userId: userData?.userId,
      };
      setIsDepositLoading(true);
      const response = await axios.post("/api/bitium/address", formData);

      if (response.status === 201 && response?.data?.data?.address) {
        await axios.put("/api/bitium/updateCheckoutUrl", {
          address: response?.data?.data?.address,
          newCheckoutUrl: `https://oneozo.com/checkout?address=3LU8p7qNdEFCsJCzCSeykQYuMj7pnfRxNo&date=2023-11-26T14:28:05.000Z`,
        });

        setIsDepositLoading(false);
        navigate(
          `/checkout?address=${response?.data?.data?.address}&date=${response?.data?.data?.createdAt}`
        );
      } else {
        setIsDepositLoading(false);
        toast.error("Error creating transaction:");
      }
    } catch (error) {
      setIsDepositLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-3 w-full flex justify-center absolute top-0 left-0 max-h-full z-40 h-full   bg-black bg-opacity-70  ">
      <div className="max-w-[450px] rounded-2xl bg-[#0a090d] p-6 max-h-[400px] relative">
        <h1 className="text-4xl font-medium mb-10">Payment</h1>
        <label htmlFor="depositAmount" className="text-sm">
          Enter amount (USD)
        </label>
        <input
          id="depositAmount"
          name="depositAmount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full"
        />
        <label htmlFor="crypto" className="text-sm">
          Choose CryptoCurrency
        </label>
        <div className="flex flex-col relative px-2">
          <button
            onClick={() => setIsOpenToken((prev) => !prev)}
            className="flex items-center space-x-2 bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full "
          >
            <span> {token.name}</span>
            {!token ? (
              <AiOutlineCaretDown className="h-8 text-white" />
            ) : (
              <AiOutlineCaretUp className="h-8 text-white" />
            )}
          </button>
          {openToken && (
            <div className="absolute p-4 z-10 text-sm no-scrollbar font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-[#0a090d] top-24 max-h-[400px] overflow-y-scroll  text-white">
              {coins.map((token, index) => (
                <div
                  key={index}
                  className="hover:bg-zinc-900px-4 py-3 rounded-lg"
                >
                  <button
                    onClick={() => {
                      setIsOpenToken((prev) => !prev);
                      setToken(token);
                    }}
                    to="earning"
                  >
                    {token.name}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          onClick={handleDeposit}
          className={`w-full  bg-gradient-to-r text-white from-indigo-700 to-fuchsia-700 rounded-xl p-3
      flex justify-center item-center  
              ${isDepositLoading} ? "cursor-not-allowed opacity-70" : ""}
              
              `}
          disabled={isDepositLoading}
        >
          {isDepositLoading ? (
            <FiLoader className="animate-spin text-blue-500" size={24} />
          ) : (
            "Continue"
          )}
        </button>
      </div>
    </div>
  );
};

export default Deposit;
