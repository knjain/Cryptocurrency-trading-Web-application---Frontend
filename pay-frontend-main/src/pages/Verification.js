import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-hot-toast";
import { baseURL } from "../constants/Constant";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Select from "react-select";
import { async } from "off";
import { Params } from "react-router";
import Loader from "../components/Loader";

const Verification = () => {
  const { userId } = useParams();
  // ()=>navigate("/login")
  // const {userId} = useParams()
  const { userIdPlaceholder } = useParams();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    verifyUser(userId);
  }, []);
  const verifyUser = async (userId) => {
    try {
      // Use fetch or axios to send the userId to your backend
      const response = await fetch(baseURL + `/api/users/verify/${userId}`, {
        method: "POST",
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Credentials have been sent to registered email");
        navigate("/login");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Error verifying user:");
    }
  };

  // const verifyUser = async () => {
  //   // const {data}  = await axios.get(`${baseURL}/api/users/${userId}`);
  //   //console.log("verify click");
  // }

  return (
    <>
      {!isDataLoaded ? (
        <div className="bg-transparent">
          <div className="mt-[-100px]">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="w-full font-poppins py-40">
          <div className="w-full max-w-5xl mx-auto ">
            <div className="w-full flex mb-44 text-justify">
              <div className="w-1/2 flex flex-col  justify-center px-6">
                <h1 className="text-5xl font-medium mb-4">
                  Welcome to a <br /> World Where
                  <br /> <span className="text-blue-500">
                    Dreams
                  </span> Transform <br />
                  into{" "}
                  <span className="text-purple-500">
                    Investment <br />
                    Success
                  </span>
                </h1>
                <p className="text-xl mb-4">
                  You're just a step away from getting
                  <br /> started! Please click the button below to
                  <br /> confirm your email. In case of issues, copy
                  <br /> and paste the URL into your browser
                </p>
                <button
                  onClick={verifyUser}
                  className="px-6 py-3 max-w-[250px] text-xl  rounded-lg font-semibold uppercase bg-purple-700"
                >
                  Click to Verify
                </button>
              </div>
              <div className="w-1/2">
                <img
                  alt="Signup Background"
                  src="../images/email.png"
                  className=""
                />
              </div>
            </div>

            <div className="w-full px-6">
              <div className="flex md:flex-row flex-col justify-between w-full">
                {" "}
                <h2 className="text-4xl mb-4">Why choose one ozo</h2>{" "}
                <button className="px-8 border rounded-full py-1">
                  Invest now
                </button>
              </div>

              <p className="text-xl mt-3">
                Choose One Ozo for unparallel investment opportunities, <br />
                exceptional rewards, trust reliability, and dedicated support.
              </p>

              <div className="w-full my-24 flex md:flex-row flex-col gap-3 justify-between ">
                <div className="max-w-[250px] w-full">
                  <div className="bg-purple-700 rounded-xl p-2 max-w-[60px] w-full max-h-[60px]  mb-4 flex justify-center items-center">
                    <img
                      alt="Signup Background"
                      src="../images/icons/wallet.png"
                      className="w-9 h-9"
                    />
                  </div>
                  <p className="font-semibold text-lg mb-2">Trust</p>
                  <p className="text-gray-500">
                    {" "}
                    Experience a trusted investment platform with a <br />{" "}
                    proven track record.
                  </p>
                </div>
                <div className="max-w-[250px] w-full">
                  <div className="bg-purple-700 rounded-xl p-2 max-w-[60px] w-full max-h-[60px]  mb-4 flex justify-center items-center">
                    <img
                      alt="Signup Background"
                      src="../images/icons/image.png"
                      className="w-9 h-9"
                    />
                  </div>
                  <p className="font-semibold text-lg mb-2">Rewards</p>
                  <p className="text-gray-500">
                    {" "}
                    Enjoy attractive
                    <br /> rewards and bonuses <br /> for your investments
                    <br /> and loyalty.
                  </p>
                </div>

                <div className="max-w-[250px] w-full">
                  <div className="bg-purple-700 rounded-xl p-2 max-w-[60px] w-full max-h-[60px]  mb-4 flex justify-center items-center">
                    <img
                      alt="Signup Background"
                      src="../images/icons/flexible.png"
                      className="w-9 h-9"
                    />
                  </div>
                  <p className="font-semibold text-lg mb-2">Flexibility</p>
                  <p className="text-gray-500">
                    Receive expert guidance <br /> and personalized support{" "}
                    <br /> throughout to your
                    <br /> preferences.
                  </p>
                </div>

                <div className="max-w-[250px] w-full">
                  <div className="bg-purple-700 rounded-xl p-2 max-w-[60px] w-full max-h-[60px]  mb-4 flex justify-center items-center">
                    <img
                      alt="Signup Background"
                      src="../images/icons/support.png"
                      className="w-9 h-9"
                    />
                  </div>
                  <p className="font-semibold text-lg mb-2">Support</p>
                  <p className="text-gray-500">
                    {" "}
                    Experience a trusted investment platform with a <br />{" "}
                    proven track record.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl  bg-gradient-to-tr  from-blue-gray-800 to-neutral-900 w-full  p-12">
                <div className="w-full flex md:flex-row flex-col justify-between items-center mb-8">
                  <h1 className="text-4xl font-semibold mb-4">
                    Limitless Earning through
                    <br />
                    One Ozo's Referral Program
                  </h1>
                  <button className="px-6 py-4  max-w-[250px] text-xl  rounded-lg font-semibold uppercase bg-purple-700">
                    Refer now
                  </button>{" "}
                </div>

                <p className="text-xl font-medium">
                  {" "}
                  Join our referral progra, earn up to 7 levels of bonuses,
                  <br /> and unlock limitless income potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Verification;
