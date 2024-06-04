import React, { useState } from "react";
import Security from "./Security";
import Notification from "./Notification";
import PI from "./PI";
import { useRef } from "react";
import toast from "react-hot-toast";
import { getButtonClass } from "../../../components/TabClass";
import axios from "axios";
import { baseURL } from "../../../constants/Constant";
import { FaPencilAlt } from "react-icons/fa";

const ProfileNav = ({
  data,
  profileForm,
  handleLogout,
  userID,
  securityPIN,
  sponsorName,
  sponsorID,
  totalInvestment,
  totalProfit,
  netIncome,

  handleChange,
  handleSubmit,
  left,
  right,
  total,
  open,
  setopen,
  // currentpasswordcorrect,
  render,
  setRender,
  withdrawalWallet,
  ltcwithdrawalWallet,
}) => {
  const [profileState, setProfileState] = useState("pi");
  const profilePicRef = useRef(null);
  const coverPicRef = useRef(null);

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

  return (
    <div className="md:mt-0 overflow-x-hidden bg-neutral-950 w-full pt-20 pb-10  font-poppins px-6">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="space-y-4 w-full md:w-[30%]">
          <div className="max-w-[350px] w-full rounded-xl space-y-2 bg-[#0a090d]  p-4">
            {/*<h1 className="text-xl font-semibold">
              {profileForm.fName} {profileForm.lName}
            </h1>
            <div className="flex justify-between">
              <div>
                <p>User ID</p>
                <p> PIN</p>
                <p>Sponsor ID</p>
                <p>Sponsor name</p>
              </div>
              <div className="text-right">
                <p>{userID}</p>
                <p>{securityPIN}</p>
                <p>{sponsorID}</p>
                <p>{sponsorName}</p>
              </div>
            </div> */}
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
                  backgroundImage: data?.profile_cover
                    ? `url(${data?.profile_cover})`
                    : // : "url(/images/profilebg.jpg)",
                      "url(/images/new/referearn.jpg)",
                  borderRadius: "8% 8% 0 0",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute bottom-2 right-2 cursor-pointer">
                  <FaPencilAlt size={24} color="#FFF" />
                </div>
                <div
                  className="absolute bottom-6 right-[7rem] cursor-pointer"
                  style={{ zIndex: 10 }}
                >
                  <FaPencilAlt size={24} color="blue" />
                </div>
              </div>

              <img
                src={data?.profile_picture || "/images/logo.png"}
                alt="Profile"
                onClick={handleProfilePicClick}
                className="absolute bottom-[55%] left-1/2 transform -translate-x-1/2 w-20 h-16 rounded-full border-4 border-white"
              />

              <div className="relative mt-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                {/* Replace 'John Doe' and 'UID12345' with dynamic values if needed */}
                <div className="flex flex-col items-center space-x-1 justify-center">
                  <div className="flex items-center justify-center">
                    <p className="text-white font-bold">
                      {profileForm.fName} {profileForm.lName}
                    </p>
                    <img
                      src="/images/verified.png"
                      alt="Verified"
                      className="w-4 h-4"
                    />
                  </div>
                  <p className="text-white font-bold">{userID}</p>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p> PIN</p>
                    <p>Sponsor ID</p>
                    <p>Sponsor name</p>
                    <p>Wallet address</p>
                    {profileForm?.country === "Japan" && (
                      <p>LTC Wallet address</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p>{securityPIN}</p>
                    <p>{sponsorID}</p>
                    <p>{sponsorName}</p>
                    <p>{withdrawalWallet ? withdrawalWallet : "NA"}</p>
                    {profileForm?.country === "Japan" && (
                      <p>{ltcwithdrawalWallet ? ltcwithdrawalWallet : "NA"}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] w-full rounded-xl  bg-[#0a090d]  p-4 flex justify-center  align-center">
            <div
              className="flex  flex-col align-center justify-center w-full"
              style={{ alignItems: "center" }}
            >
              <h1 className=" font-semibold">Total Investment</h1>
              <p>${totalInvestment}</p>
            </div>
            <div
              className="flex flex-col justify-center align-center w-full "
              style={{ alignItems: "center" }}
            >
              <h1 className=" font-semibold">Total Profit</h1>
              <p>${totalProfit}</p>
              {/* <div className="flex  flex-col align-center justify-center w-full">
                <h1 className=" font-semibold"> Net Income</h1>
                <p>${netIncome}</p>
              </div> */}
            </div>
          </div>
          <div className="max-w-[350px] space-y-5 flex-col flex items-center text-center w-full rounded-xl bg-[#0a090d]  p-4">
            <h1 className="text-3xl font-semibold">
              {left} <br />
              <span className="text-xl">Left User</span>
            </h1>
            <h1 className="text-3xl font-semibold">
              {right} <br />
              <span className="text-xl">Right User</span>
            </h1>

            <h1 className="text-3xl font-semibold">
              {total} <br />
              <span className="text-xl">Total User</span>
            </h1>
          </div>
        </div>
        <div className="w-full md:w-[70%]">
          <div
            class="px-1.5 my-2 w-full md:w-fit flex justify-start items-center"
            // style={{ width: "fit-content" }}
          >
            <div class="mb-4 mt-2 max-w-[38rem] md:max-w-auto md:mx-0 flex items-center flex-wrap md:flex-row md:flex-nowrap gap-2 md:gap-0 justify-center w-full rounded-full border-2">
              <button
                className={`${getButtonClass({
                  stateType: "pi",
                  state: profileState,
                })} pl-8 pr-8`}
                onClick={() => setProfileState("pi")}
              >
                Personal information
              </button>
              <button
                onClick={() => setProfileState("security")}
                className={`${getButtonClass({
                  stateType: "security",
                  state: profileState,
                })} pl-8 pr-8`}
              >
                Security
              </button>
              <button
                onClick={() => setProfileState("notification")}
                className={`${getButtonClass({
                  stateType: "notification",
                  state: profileState,
                })} pl-8 pr-8`}
              >
                Notification
              </button>
            </div>
          </div>

          {profileState === "pi" && (
            <PI
              profileForm={profileForm}
              open={open}
              setopen={setopen}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRender={setRender}
            />
          )}
          {profileState === "security" && (
            <Security
              // currentpasswordcorrect={currentpasswordcorrect}
              currentPin={securityPIN}
              render={render}
              setRender={setRender}
            />
          )}
          {profileState === "notification" && <Notification />}
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
