import React from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";

const DepositModal = ({
  setDepositWalletModel,
  amount,
  setamount,
  token,
  setOpenTOKEN,
  openTOKEN,
  tokens,
  setToken,
  handleDeposit,
  isDepositLoading,
}) => {
  return (
    <div className="mt-3 w-full flex justify-center absolute top-0 left-0 max-h-full z-40 h-full   bg-black bg-opacity-70  ">
      <div className="max-w-[450px] rounded-2xl bg-[#0a090d] p-6 max-h-[400px] relative">
        <button
          onClick={() => {
            setDepositWalletModel((prev) => !prev);
            setamount("");
            setToken("");
            setOpenTOKEN(false);
          }}
          className="rounded-full absolute -top-0 -right-4 w-10 p-3  bg-gradient-to-r text-white from-newStart via-newMid to-newEnd  "
        >
          <img
            alt="Signup Background"
            src="../images/icons/close.png"
            className="w-8"
          />
        </button>

        <h1 className="text-4xl font-medium mb-10">Payment</h1>

        <label htmlFor="depositAmount" className="text-sm">
          Enter amount (USD)
        </label>
        <input
          id="depositAmount"
          name="depositAmount"
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          className="bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full"
        />
        <label htmlFor="crypto" className="text-sm">
          Choose CryptoCurrency
        </label>
        <div className="flex flex-col relative px-2">
          <button
            onClick={() => setOpenTOKEN((prev) => !prev)}
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
            <div className="absolute p-4 z-10 text-sm  font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-[#0a090d] top-24 max-h-[400px] overflow-y-scroll  text-white">
              {tokens.map((token, index) => (
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
        <button
          onClick={handleDeposit}
          className={`w-full  bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3
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

export default DepositModal;
