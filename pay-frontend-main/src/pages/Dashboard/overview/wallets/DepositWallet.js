const DepositWallet = ({ depositWallet, setDepositWalletModel }) => {
  return (
    <div
      className="rounded-xl lg:max-w-[210px] lg:max-h-[220px] md:w-1/4 w-full bg-zinc-900 p-4"
      style={{
        backgroundImage: "url('/images/dashboard/4.png')",
        // backgroundImage: "url('/images/new/deposite.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // animation: "slideBackground 3s linear infinite alternate",
      }}
    >
      <div className="w-full flex items-center justify-between">
        <h3 className="font-medium">Deposit wallet</h3>

        <div className="p-1 -400 w-[50px] flex justify-center items-center rounded-full">
          <img
            alt="Signup Background"
            src="../images/dashboard/wallet.png"
            className="p-2"
            style={{
              animation: "slideBackground 3s linear infinite alternate",
            }}
          />
        </div>
      </div>

      <div className="">
        <h2 className="font-mid mb-3 text-3xl font-satoshi">
          ${depositWallet}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setDepositWalletModel((prev) => !prev)}
            className=" w-1/2 bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-full px-2 py-2 text-xs text-black font-bold pulse-shadow-effect"
            // disabled
            // style={{ cursor: "not-allowed", opacity: "0.65" }}
          >
            Recharge
          </button>
        </div>
      </div>
    </div>
  );
};
export default DepositWallet;
