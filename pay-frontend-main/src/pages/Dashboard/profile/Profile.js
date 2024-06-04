import React, { useState, useEffect } from "react";
import "./Profile.css";
import { toast } from "react-hot-toast";
import { baseURL } from "../../../constants/Constant";
import axios from "axios";
import bcrypt from "bcryptjs";
import { getButtonClass } from "../../../components/TabClass";

import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import ProfileNav from "./ProfileNav";
import KYCNav from "./KYCNav";
import { render } from "@testing-library/react";
import {
  fetchBinaryTreeData,
  fetchDirectRefearralsData,
  fetchUserData,
  fetchWalletData,
} from "../../../services/userService";
const Profile = () => {
  const [profileStateNav, setprofileStateNav] = useState("Profile");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user_data");
    toast.success("Logged Out successful");
    // isLoggedIn = false;
    navigate("/login");
  };

  // profileformstate
  const [profileForm, setProfileForm] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNo: "",
    country: "",
    pinCode: "",
    userID: "",
  });
  const [totalInvestment, setTotalInvestment] = useState("");
  const [totalProfit, setTotalProfit] = useState("");
  const [withdrawalWallet, setWithdrawalWallet] = useState("");
  const [ltcwithdrawalWallet, setLtcwithdrawalWallet] = useState("");
  const [netIncome, setNetIncome] = useState("");
  const [data, setData] = useState([]);
  // Profile Card
  const [userID, setUserID] = useState("");
  const [securityPIN, setSecurityPIN] = useState("");
  const [sponsorName, setSponsorName] = useState("");
  const [sponsorID, setSponsorID] = useState("");
  const [currentpasswordcorrect, setCurrentpasswordcorrect] = useState("");
  const [render, setRender] = useState(false);
  // referral
  const [left, setLeft] = useState("0");
  const [right, setRight] = useState("0");
  const [total, setTotal] = useState("0");
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetchUserData();
        //console.log(response);
        if (response.data.success) {
          const responseData = response.data.data;
          let names = responseData.name ? responseData.name.split(/\s+/) : [];
          let fName = names.length > 0 ? names[0] : "";
          let lName = names.length > 1 ? names.slice(1).join(" ") : "";
          setProfileForm({
            fName: fName,
            lName: lName,
            email: responseData.email,
            phoneNo: responseData.phone || "",
            country: responseData.country || "",
            pinCode: responseData.security_pin || "",
            userID: responseData.userId,
          });
          setUserID(responseData.userId);
          setSecurityPIN(responseData.security_pin);
          setSponsorName(responseData.sponsorName || "One Ozo");
          setSponsorID(responseData.sponsorId);
          // setCurrentpasswordcorrect(responseData.password);
          setData(responseData);
        } else {
          toast.error("Something went wrong");
        }

        const response1 = await fetchWalletData();
        //console.log(response1.data);
        if (response1.data.success) {
          const walletData = response1.data.data[0];
          console.log(walletData);
          const referralWallet = parseFloat(walletData.referral_wallet_trade);
          const binaryWallet = parseFloat(walletData.binary_wallet);
          const totalInvestment = parseFloat(walletData.total_investment);
          const roiWallet = parseFloat(walletData.roi_wallet_mac);
          const totalDeposit = parseFloat(walletData.deposit_wallet_tec);

          const totalProfit = roiWallet - totalDeposit;
          const netIncome = referralWallet + binaryWallet + totalProfit;

          setTotalInvestment(walletData?.total_investment);
          setTotalProfit(walletData?.total_earning);
          setNetIncome(netIncome.toFixed(2));
          setLeft(walletData.left_downlines);
          setRight(walletData.right_downlines);
          setWithdrawalWallet(walletData.withdrawal_wallet);
          setLtcwithdrawalWallet(walletData?.ltc_withdrawal_wallet);
          setTotal(
            Number(walletData.left_downlines) +
              Number(walletData.right_downlines)
          );
        } else {
          toast.error("Something went wrong");
        }

        // const response2 = await fetchDirectRefearralsData();
        // //console.log(response2);
        // if (response2.data.success) {
        //   const binaryTreeData = response2.data.data;
        //   const leftCount = binaryTreeData.filter(
        //     (node) => node.referral.position === "left"
        //   ).length;
        //   const rightCount = binaryTreeData.filter(
        //     (node) => node.referral.position === "right"
        //   ).length;
        //   const totalCount = binaryTreeData.length;
        //   //console.log(left, right, total);

        // } else {
        //   toast.error("Something went wrong");
        // }
      } catch (error) {
        if (
          error?.response?.data?.message ===
          "Token email does not match request email"
        ) {
          toast.error("Invalid Request");
        } else {
          toast.error("Something went wrong");
        }
      }
    };

    fetchAllData();
  }, [render]);

  // cardinvestment

  //model state
  const [open, setopen] = useState(false);

  const handleChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Profile Form", profileForm);
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <div class="px-1.5 w-full md:w-auto absolute top-24 md:top-44 flex justify-center items-center">
          <div class="max-w-[38rem] md:max-w-full md:mx-0 flex items-center flex-row justify-center w-full rounded-full border-2">
            <button
              onClick={() => setprofileStateNav("Profile")}
              className={`${getButtonClass({
                stateType: "Profile",
                state: profileStateNav,
              })} w-1/2 sm:w-auto`}
            >
              Profile
            </button>
            <button
              onClick={() => setprofileStateNav("kyc")}
              className={`${getButtonClass({
                stateType: "kyc",
                state: profileStateNav,
              })} w-1/2 sm:w-auto`}
            >
              KYC
            </button>
          </div>
        </div>
      </div>
      {profileStateNav === "Profile" && (
        <ProfileNav
          profileForm={profileForm}
          handleLogout={handleLogout}
          userID={userID}
          securityPIN={securityPIN}
          sponsorName={sponsorName}
          sponsorID={sponsorID}
          totalInvestment={totalInvestment}
          totalProfit={totalProfit}
          netIncome={netIncome}
          handleChange={handleChange}
          left={left}
          right={right}
          total={total}
          open={open}
          setopen={setopen}
          render={render}
          setRender={setRender}
          withdrawalWallet={withdrawalWallet}
          ltcwithdrawalWallet={ltcwithdrawalWallet}
          // currentpasswordcorrect={currentpasswordcorrect}
          data={data}
        />
      )}
      {profileStateNav === "kyc" && <KYCNav />}
    </>
  );
};

export default Profile;
