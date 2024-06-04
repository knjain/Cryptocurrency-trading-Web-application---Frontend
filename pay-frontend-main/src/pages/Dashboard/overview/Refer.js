import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Binary } from "../BinaryNode";
import toast from "react-hot-toast";
import InterestWallet from "./refer/InterestWallet";
import { useRef } from "react";
import axios from "axios";
import { baseURL } from "../../../constants/Constant";

const Refer = ({
  dashboardData,
  getNodeByI,

  navigate,
  data,
  downlineCount,
  LeftReferral,
  RightReferral,
}) => {
  const handleProfilePicClick = () => {
    profilePicRef.current.click();
  };

  const handleCoverPicClick = () => {
    coverPicRef.current.click();
  };

  const handleProfilePicChange = async (e) => {
    if (e.target.files[0]) {
      const fileFormData = new FormData();
      fileFormData.append("docType", "PROFILE");
      fileFormData.append("file", e.target.files[0]);
      const authToken = JSON.parse(localStorage.getItem("user_data"));

      try {
        const fileUploadResponse = await axios.post(
          `${baseURL}/api/upload/${authToken?.userId}`,
          fileFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (fileUploadResponse.data.success) {
          toast.success("Profile picture uploaded successfully");
        }

        // Save the returned URL or path to state or some variable
      } catch (error) {
        toast.error("Error uploading profile picture:", error);
      }
    }
  };

  const handleCoverPicChange = async (e) => {
    if (e.target.files[0]) {
      const fileFormData = new FormData();
      fileFormData.append("docType", "PROFILE_COVER");
      fileFormData.append("file", e.target.files[0]);
      const authToken = JSON.parse(localStorage.getItem("user_data"));

      try {
        const fileUploadResponse = await axios.post(
          `${baseURL}/api/upload/${authToken?.userId}`,
          fileFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (fileUploadResponse.data.success) {
          toast.success("Profile cover uploaded successfully");
        }

        // Save the returned URL or path to state or some variable
      } catch (error) {
        toast.error("Error uploading profile picture:", error);
      }
    }
  };

  const profilePicRef = useRef(null);
  const coverPicRef = useRef(null);
  return (
    <>
      <div
        className="w-full flex flex-col lg:flex-nowrap lg:flex-row  justify-center items-center gap-3"
        style={{ borderRadius: "5%" }}
      >
        {/* left  */}
        <div className="relative w-full md:w-2/3  lg:w-1/3  flex flex-col justify-center items-center bg-neutral-950 rounded-lg">
          <div className="flex w-full justify-start relative px-2">
            <h1 className="text-xl mt-2 ">Refer and Earn</h1>
          </div>
          <div className=" relative h-full">
            <input
              ref={profilePicRef}
              type="file"
              className="hidden"
              onChange={handleProfilePicChange}
            />
            <input
              ref={coverPicRef}
              type="file"
              className="hidden"
              onChange={handleCoverPicChange}
            />
            {/* Profile Image in the middle bottom of background */}

            <div
              onClick={handleCoverPicClick}
              className="relative h-[140px] bg-center bg-contain"
              style={{
                backgroundImage: dashboardData?.profile_cover
                  ? `url(${dashboardData?.profile_cover})`
                  : // : "url(/images/profilebg.jpg)",
                    // "url(/images/new/referearn.jpg)",
                    "url(/images/dashboard/9.png)",
                borderRadius: "8% 8% 0 0",
                backgroundRepeat: "no-repeat",
              }}
            ></div>

            <img
              src={dashboardData?.profile_picture || "/images/logo.png"}
              alt="Profile"
              onClick={handleProfilePicClick}
              className="absolute bottom-[55%] left-1/2 transform -translate-x-1/2 w-20 h-16 rounded-full border-4 border-white"
            />

            <div className="relative mt-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              {/* Replace 'John Doe' and 'UID12345' with dynamic values if needed */}
              <div className="flex items-center space-x-1">
                <span className="text-white font-bold">{data[0]?.name}</span>
                {/* <span className="text-white font-bold">ABC DEF</span> */}
                {/* You can use an SVG or an image for the verified icon */}
                <img
                  src="/images/verified.png"
                  alt="Verified"
                  className="w-4 h-4"
                />
              </div>
              <span className="text-white">{data[0]?.userId}</span>
            </div>
            <div className="px-6 w-full mt-2 center left-1/2  space-x-2 flex flex-row  justify align-items">
              <CopyToClipboard
                text={LeftReferral}
                onCopy={() => {
                  toast.success("Left referral link copied!"); // Assuming you're using react-toastify
                }}
              >
                <button className="bg-newblue w-1/2 bg-gradient-to-r from-newStart via-newMid to-newEnd text-white px-4 py-2 rounded-lg">
                  Left Link
                </button>
              </CopyToClipboard>

              <CopyToClipboard
                text={RightReferral}
                onCopy={() => {
                  toast.success("Right referral link copied!"); // Assuming you're using react-toastify
                }}
              >
                <button className="bg-newblue w-1/2 bg-gradient-to-r from-newStart via-newMid to-newEnd text-white px-4 py-2 rounded-lg">
                  Right Link
                </button>
              </CopyToClipboard>
            </div>

            <div className=" pb-2 flex flex-row  mt-2 space-x-6 justify-between px-6">
              <div className="text-center flex flex-col ">
                <p style={{ fontWeight: 300 }}>Left Business</p>
                <p className="fboldont- font-satoshi text-2xl">
                  {Math.floor(data[0]?.left_business) || 0}
                </p>
              </div>
              <div className="text-center flex flex-col ">
                <p style={{ fontWeight: 300 }}>
                  Total <br /> Business
                </p>
                <p className="font-bold font-satoshi text-2xl">
                  {Math.floor(
                    Number(data[0]?.right_business) +
                      Number(data[0]?.left_business)
                  ) || 0}
                </p>
              </div>
              <div className="text-center flex flex-col">
                <p style={{ fontWeight: 300 }}>Right Business</p>
                <p className="font-bold font-satoshi text-2xl">
                  {Math.floor(data[0]?.right_business) || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* middle */}
        <div
          className="w-full md:w-2/3  lg:w-1/3 h-full flex flex-col justify-center items-center bg-neutral-950 rounded-lg
        "
          style={{
            // backgroundImage: " url('/images/artboard.png')",
            backgroundImage: " url('images/dashboard/10.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            animation: "upDown 3s infinite", // adjust '3s' to control the speed
          }}
        >
          <div className="flex w-full justify-start relative px-2">
            <h1 className="text-xl mt-2  ">Binary Status</h1>
            {/* <span className="bg-green-500 text-white px-2 py-1 rounded">
              Active
            </span> */}
          </div>

          {/* Divider */}
          {/* <hr className="border-white my-2" /> */}
          <div className="h-full  mt-2 py-[0.75rem] flex flex-col">
            {/* Binary Tree */}
            <div className="flex flex-col items-center">
              <Binary data={getNodeByI(1)} first={true} ofTwo={true} />
              <div style={{ width: 234 }} className="bg-white h-1 "></div>
              <div className="flex" style={{ gap: 110 }}>
                <Binary data={getNodeByI(2)} last={true} ofTwo={true} />
                <Binary data={getNodeByI(3)} last={true} ofTwo={true} />
              </div>
            </div>

            {/* Details */}
            {/* <div className="flex justify mt-4 w-full gap-4"> */}
            <div className=" w-full mt-2 center left-1/2  space-x-2 flex flex-row gap-4 justify align-items">
              <div className="bg-newblue w-1/2 bg-gradient-to-r from-newStart to-newEnd text-white px-2 py-2 rounded-lg flex justify-center text-center flex flex-col ">
                <p style={{ fontWeight: 300 }}>Total Downline</p>
                <p className="font-bold font-satoshi text-2xl">
                  {downlineCount || 0}
                </p>
              </div>
              <div className="bg-newblue w-1/2 bg-gradient-to-r from-newStart to-newEnd text-white px-2 py-2 rounded-lg flex justify-center text-center flex flex-col ">
                <p style={{ fontWeight: 300 }}> Direct Downline</p>
                <p className="font-bold font-satoshi text-2xl">
                  {data[0]?.level_1_referrals || 0}
                </p>
              </div>
              {/* </div> */}
              {/* <div className="px-4 w-full mt-2 center left-1/2  space-x-2 flex flex-row gap-10 justify align-items"> */}
            </div>
            {/* </div> */}

            {/* Divider */}
            {/* <hr className="border-gray-500 my-4" />  */}

            {/* Button */}
            <div className=" w-full mt-6  left-1/2  space-x-2 flex justify-center align-items">
              <button
                className="   bg-newblue w-1/2 bg-gradient-to-r from-newStart to-newEnd text-white px-4 py-2 rounded-lg"
                style={{ borderRadius: "8px" }}
                onClick={() => {
                  navigate("/dashboard/genealogy");
                }}
              >
                Binary Network
              </button>
            </div>
          </div>
        </div>
        <InterestWallet
          dashboardData={dashboardData}
          downlineCount={data[0]?.level_1_referrals || 0}
        />
      </div>
    </>
  );
};

export default Refer;
//quick action
{
  /* right  */
}
{
  /* <div
          className="bg-zinc-900  w-full  max-h-full h-full px-6 py-6 rounded-3xl"
          style={{
            backgroundImage: "url('/images/quick.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-xl pl-2 mb-2">Quick Actions</h1>
          <div className="flex flex-col mt-5 md:flex-row gap-3 mb-2">
            <button
              onClick={() => setDepositWalletModel((prev) => !prev)}
              className="border-1 px-4 py-2 rounded-xl flex justify-between w-full items-center"
              style={{ border: "1px solid white" }}
            >
              <img
                alt="Signup Background"
                src="../images/dashboard/investment2.png"
                className="w-6 "
              />
              <p className="text-xs">Deposit</p>
              <img
                alt="Signup Background"
                src="../images/dashboard/next.png"
                className="w-5 h-5 "
              />
            </button>
            <button
              // onClick={() => setNav("Investment")}
              className="border-1 px-4 py-2 rounded-xl flex justify-between w-full items-center"
              style={{ border: "1px solid white" }}
            >
              <img
                alt="Signup Background"
                src="../images/dashboard/investment2.png"
                className="w-6 "
              />
              <p className="text-xs">Package</p>
              <img
                alt="Signup Background"
                src="../images/dashboard/next.png"
                className="w-5 h-5 "
              />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-10 md:grid-cols-4 gap-4 text-[15px] min-h-[100px]  ">
            <button
              onClick={() => {
                setWithdrawWalletModel((prev) => !prev);
                setWithdrawfrom("ROI Wallet");
              }}
              className="border-1 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  gap-1"
              style={{ border: "1px solid white" }}
            >
              <img
                alt="Signup Background"
                src="../images/dashboard/investment2.png"
                className="w-6 "
              />
              <p className="text-xs">Withdraw</p>
            </button>
            <button
              onClick={() => settransferModalOpen((prev) => !prev)}
              className="border-1 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  gap-1"
              style={{ border: "1px solid white" }}
            >
              <img
                alt="Signup Background"
                src="../images/dashboard/investment2.png"
                className="w-6 "
              />
              <p className="text-xs">Transfer</p>
            </button>
            <button
              onClick={() => setWithdrawWalletModel((prev) => !prev)}
              className="border-1 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  gap-1"
              style={{ border: "1px solid white" }}
            >
              <img
                alt="Signup Background"
                src="../images/dashboard/investment2.png"
                className="w-6 "
              />
              <p className="text-xs">ROI Wallet</p>
            </button>
            <button
              onClick={() => setWithdrawWalletModel((prev) => !prev)}
              className="border-1 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  gap-1"
              style={{ border: "1px solid white" }}
            >
              <img
                alt="Signup Background"
                src="../images/dashboard/investment2.png"
                className="w-6 "
              />
              <p className="text-xs">Wallet</p>
            </button>

            <button
              onClick={() => navigate("/dashboard/tickets")}
              className="border-1 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  gap-1"
              style={{ border: "1px solid white" }}
            >
              <img
                alt="Signup Background"
                src="../images/dashboard/investment2.png"
                className="w-6 "
              />
              <p className="text-xs">Ticket</p>
            </button>
            <button
              onClick={() => navigate("/dashboard/genealogy")}
              className="border-1 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  gap-1"
              style={{ border: "1px solid white" }}
            >
              <img
                alt="Signup Background"
                src="../images/dashboard/investment2.png"
                className="w-6 "
              />
              <p className="text-xs">Binary tree</p>
            </button>
            <button
              onClick={() => navigate("/dashboard/genealogy")}
              className="border-1 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  gap-1"
              style={{ border: "1px solid white" }}
            >
              <img
                alt="Signup Background"
                src="../images/dashboard/investment2.png"
                className="w-6 "
              />
              <p className="text-xs">Invite</p>
            </button>
            <button
              onClick={() => navigate("/dashboard/tickets")}
              className="border-1 px-[3px] py-[6px] rounded-xl flex flex-col justify-center items-center  gap-1"
              style={{ border: "1px solid white" }}
            >
              <img
                alt="Signup Background"
                src="../images/dashboard/investment2.png"
                className="w-6 "
              />
              <p className="text-xs">Support</p>
            </button>
          </div>
        </div> */
}
