import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../constants/Constant";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const FotgotPassword = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isOTPSent, setIsOTPSent] = useState(false);
  useEffect(() => {
    let user_data = localStorage.getItem("user_data");
    if (user_data) {
      navigate("/dashboard");
    }
  }, []);

  const [loginForm, setLoginForm] = useState({
    userId: "OZO-",
    otpentered: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(loginForm, "login data ");
    if (!isOTPSent) {
      loginForm.userId = loginForm.userId;
      try {
        const response = await axios.post(
          `${baseURL}/api/users/forgot-password`,
          loginForm
        );
        if (response.status === 200) {
          setIsOTPSent(true);
          toast.success("OTP sent on registered email");
        } else {
          toast.error("Error Sending OTP");
        }
      } catch (error) {
        toast.error("Error sending OTP");
      }
    } else if (isOTPSent) {
      if (loginForm.password === loginForm.confirmPassword) {
        try {
          loginForm.otp = loginForm.otpentered;

          const response = await axios.post(
            `${baseURL}/api/users/forgot-password-reset`,
            loginForm
          );
          console.log(response);
          if (response.data.success) {
            toast.success("Password Updated successfully");
            navigate("/login");
          } else {
            toast.error("Error changing password");
          }
        } catch (error) {
          console.log(error);
          toast.error("Error changing password");
        }
      } else {
        toast.error("Passwords do not match");
      }
    }
  };
  return (
    <div className="overflow-y-hidden w-full max-w-full font-poppins max-h-[100vh] flex flex-col md:flex-row relative">
      {/* Logo placement */}
      <div className="absolute top-7 flex w-full justify-between px-4 md:px-8">
        <img
          src="/images/logo.png"
          alt="Logo"
          onClick={() => navigate("/")}
          className=" w-24 h-12 cursor-pointer"
        />
        <p className="mb-4 text-sm md:text-base" style={{ color: "#f" }}>
          New user?&nbsp;
          <span
            className="cursor-pointer underline"
            style={{ color: "#18D4A7" }}
            onClick={() => navigate("/signup")}
          >
            Create an account
          </span>
        </p>
      </div>

      {/* Image part */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="/images/forogt.png"
          alt="Signup Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content part */}
      <div className="w-full md:w-1/2 px-8 py-8 md:my-auto">
        <div className="mx-auto max-w-[450px]">
          {/* Gradient Title */}
          <h1 className="mb-6 text-2xl md:text-3xl font-semibold text-white">
            Forgot Password
          </h1>

          {/* Subtitle */}
          <p
            className="mb-4 font-manrope text-sm font-normal"
            style={{ color: "#7A86A1" }}
          >
            Enter the user id address you used when you joined and we'll send
            you instructions to reset your password.
          </p>

          {/* Input Fields */}
          <div className="flex flex-col mb-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label>User ID</label>
              <input
                placeholder="User ID"
                type="text"
                style={{ color: "white", background: "black" }}
                className="mt-2 rounded-md py-2 px-4"
                name="userId"
                value={loginForm.userId}
                onChange={handleChange}
              />
            </div>
          </div>
          {isOTPSent && (
            <>
              <div className="flex flex-col mb-4">
                <div className="flex flex-col w-full md:w-1/2">
                  <label>OTP</label>
                  <input
                    placeholder="OTP"
                    type="text"
                    style={{ color: "white", background: "black" }}
                    className="mt-2 rounded-md py-2 px-4"
                    name="otpentered"
                    value={loginForm.otpentered}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mb-4 space-x-0 md:space-x-4">
                <div className="flex flex-col w-full md:w-1/2">
                  <label>New Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    style={{ color: "white", background: "black" }}
                    className="mt-2 rounded-md py-2 px-4"
                    name="password"
                    value={loginForm.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <label>Confirm Password</label>
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    style={{ color: "white", background: "black" }}
                    className="mt-2 rounded-md py-2 px-4"
                    name="confirmPassword"
                    value={loginForm.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="w-full md:w-1/2 py-2 rounded-lg bg-gradient-to-r  bg-gradient-to-r from-newStart via-newMid to-newEnd shadow-lg"
              onClick={handleSubmit}
            >
              {!isOTPSent ? "Submit" : "Change Password"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotgotPassword;
