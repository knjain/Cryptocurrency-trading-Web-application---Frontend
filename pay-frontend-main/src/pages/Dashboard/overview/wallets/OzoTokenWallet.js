import { useNavigate } from "react-router";

const OzoTokenWallet = ({ ozoToken, setDepositWalletModel }) => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-xl lg:max-w-[210px]  relative md:w-1/4 w-full text-black   bg-gradient-to-b from-indigo-300 to-fuchsia-400  p-4 "
      style={{
        backgroundImage: "url('/images/dashboard/8.png')",
        // backgroundImage: "url('/images/new/ozo token.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h3 className="font-semibold text-xl absolute top-6 text-white">
        OZO Token
      </h3>
      {/* <div className="w-full flex items-center justify-between ">
        <h3 className="font-semibold text-xl">OZO Token</h3>

        {/* <div className="p-1 pt-2 -400 w-[50px] flex justify-center items-center rounded-full">
          <img
            alt="Signup Background"
            src="../images/navlogo.png"
            className="p-2 text-gray-900 "
          />
        </div>
      </div> */}
      <div className="pt-12">
        <h2 className="font-bold mb-3 text-white text-3xl font-satoshi">
          ${ozoToken}
        </h2>
        <button
          onClick={() => navigate("/dashboard/investment")}
          // onClick={() => setDepositWalletModel((prev) => !prev)}
          className=" w-1/2 cursor-pointer bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-full px-2 py-2 text-xs text-black font-bold "
          // disabled
          // style={{ cursor: "not-allowed", opacity: "0.65" }}
        >
          Reinvest
        </button>
      </div>
    </div>
  );
};
export default OzoTokenWallet;
