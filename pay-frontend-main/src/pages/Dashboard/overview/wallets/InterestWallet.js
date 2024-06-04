const InterestWallet = ({
  interestWallet,
  setWalletType,
  setWithdrawfrom,
  setWithdrawWalletModel,
  settransferModalOpen,
  setTransferfrom,
  dashboardData,
}) => {
  return (
    <div
      className="rounded-xl lg:max-w-[210px] lg:max-h-[220px] md:w-1/4 w-full bg-zinc-900 p-4"
      style={{
        backgroundImage: "url('/images/dashboard/7.png')",
        // backgroundImage: "url('/images/new/int.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // animation: "slideBackground 3s linear infinite alternate",
      }}
    >
      <div className="w-full flex items-center justify-between ">
        <h3 className=" ">Interest wallet</h3>

        <div className="p-1 -400 w-[50px] flex justify-center items-center rounded-full">
          <img
            alt="Signup Background"
            src="../images/dashboard/deposit.png"
            className="p-2"
          />
        </div>
      </div>
      <div className="">
        <h2 className="font-mid mb-3 text-3xl font-satoshi">
          ${interestWallet}
        </h2>
        <div className="flex space-x-2 justify-between">
          <button
            onClick={() => {
              setWalletType("Interest");
              setWithdrawfrom("Interest");
              setWithdrawWalletModel((prev) => !prev);
            }}
            className={`w-1/2 bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-full px-2 py-2 text-xs text-black font-bold ${
              dashboardData.status === "suspended" ||
              dashboardData.status === "suspected"
                ? "opacity-65 cursor-not-allowed"
                : ""
            }`}
            disabled={
              dashboardData.status === "suspended" ||
              dashboardData.status === "suspected"
            }
          >
            Withdraw
          </button>
          <button
            onClick={() => {
              setWalletType("Interest");
              setTransferfrom("Interest Wallet");
              settransferModalOpen(true);
            }}
            className="w-1/2  bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-full px-2 py-2 text-xs text-black font-bold"
            // disabled
            // style={{ cursor: "not-allowed", opacity: "0.65" }}
          >
            {" "}
            Transfer
          </button>
        </div>
      </div>
    </div>
  );
};
export default InterestWallet;
