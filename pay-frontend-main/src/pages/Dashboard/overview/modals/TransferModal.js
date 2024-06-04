import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FiLoader } from "react-icons/fi";
import { interWalletTransfer } from "../../../../services/walletService";
import toast from "react-hot-toast";

const TransferModal = ({
  transferModalOpen,
  settransferModalOpen,

  walletType,
  setTransferfrom,
  Transferto,
  setTransferto,
  Transferfrom,
  rbWallet,
  interestWallet,
  setRender,
  roiWallet,
}) => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [openTOKEN, setOpenTOKEN] = useState(false);
  const [transferForm, settransferForm] = useState({
    from: "",
    to: "",
    amount: "",
    amountrecieve: "",
  });

  const transferHandleChange = (e) => {
    settransferForm({
      ...transferForm,
      [e.target.name]: e.target.value,
    });
  };

  const [transferToOpen, settransferToOpen] = useState(false);

  const transferAmount = async (walletType, amount) => {
    let walletBalance;
    switch (walletType) {
      case "ROI":
        walletBalance = parseFloat(roiWallet);
        break;
      case "R&B":
        walletBalance = parseFloat(rbWallet);
        break;
      case "Interest":
        walletBalance = parseFloat(interestWallet);
        break;
      default:
        return;
    }
    const enteredAmount = parseFloat(amount);
    if (enteredAmount > walletBalance) {
      toast.error("Entered amount exceeds wallet balance.");
      return; // Exit function early
    }
    try {
      setIsLoading(true);
      const response = await interWalletTransfer({
        amount_sent: amount,
        from_wallet: walletType,
        to_wallet: "Token",
      });
      if (response.data.success) {
        toast.success("Transfer successful");
        setRender((prev) => !prev);
        settransferModalOpen(false);
        settransferForm({
          from: "",
          to: "",
          amount: "",
          amountrecieve: "",
        });
      } else {
        toast.error("Transfer failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Transfer failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full flex justify-center absolute top-0 left-0 max-h-full z-40 h-full  bg-black bg-opacity-70  ">
      <div className="max-w-[450px] rounded-2xl bg-[#0a090d] p-6 max-h-[450px] relative">
        <button
          onClick={() => {
            settransferModalOpen((prev) => !prev);
            settransferForm({
              from: "",
              to: "",
              amount: "",
              amountrecieve: "",
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

        <h1 className="text-4xl font-medium mb-6">Transfer fund</h1>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="from" className="text-sm ">
              From
            </label>
            <div className="flex flex-col relative ">
              <button
                onClick={() => setOpenTOKEN((prev) => !prev)}
                className="flex items-center space-x-2 bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full "
              >
                <span> {Transferfrom}</span>
                {!token ? (
                  <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                  <AiOutlineCaretUp className="h-8 text-white" />
                )}
              </button>
              {openTOKEN && (
                <div className="absolute p-4 z-10 text-sm no-scrollbar font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-[#0a090d] top-24 max-h-[400px] overflow-y-scroll  text-white">
                  <div className="hover:bg-zinc-900px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        setOpenTOKEN((prev) => !prev);
                        setTransferfrom(walletType);
                      }}
                    >
                      {walletType} Wallet
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="to" className="text-sm ">
              to
            </label>
            <div className="flex flex-col relative ">
              <button
                onClick={() => settransferToOpen((prev) => !prev)}
                className="flex items-center space-x-2 bg-black px-6 py-3 mt-4 mb-6  rounded-2xl w-full "
              >
                <span> {Transferto}</span>
                {!token ? (
                  <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                  <AiOutlineCaretUp className="h-8 text-white" />
                )}
              </button>
              {transferToOpen && (
                <div className="absolute p-4 z-10 text-sm no-scrollbar font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-[#0a090d] top-24 max-h-[400px] overflow-y-scroll  text-white">
                  <div className="hover:bg-zinc-900px-4 py-3 rounded-lg">
                    <button
                      onClick={() => {
                        settransferToOpen((prev) => !prev);
                        setTransferto("Token");
                      }}
                    >
                      Token Wallet
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="amount" className="text-sm ">
              Enter amount
            </label>
            <input
              id="amount"
              name="amount"
              onChange={transferHandleChange}
              value={transferForm.amount}
              className="bg-black px-4 py-2 mt-2 mb-4  rounded-2xl w-full"
            />
          </div>

          <div>
            <label htmlFor="amountrecieve" className="text-sm ">
              Amount you recieve
            </label>
            <input
              id="amountrecieve"
              name="amountrecieve"
              disabled
              // onChange={transferHandleChange}
              value={transferForm.amount}
              className="bg-black px-4 py-2 mt-2 mb-4  rounded-2xl w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs">Available amount</p>
          <p className="text-xs font-semibold">
            {walletType} wallet: $
            {walletType === "ROI"
              ? parseFloat(roiWallet)
              : walletType === "R&B"
              ? parseFloat(rbWallet)
              : parseFloat(interestWallet)}
          </p>
          {/* <p className="text-xs text-purple-500 ">
                (you can transfer your ROI wallet money only on sunday)
              </p> */}
          {/* <p className="text-xs">Interest wallet: $12345678</p> */}
        </div>

        <button
          onClick={() => transferAmount(walletType, transferForm.amount)}
          className={`w-full  bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3
          flex justify-center item-center  
              ${isLoading ? "cursor-not-allowed opacity-70" : ""}
              
              `}
          disabled={isLoading}
        >
          {isLoading ? (
            <FiLoader className="animate-spin text-blue-500" size={24} />
          ) : (
            "Transfer"
          )}
        </button>
      </div>
    </div>
  );
};

export default TransferModal;
