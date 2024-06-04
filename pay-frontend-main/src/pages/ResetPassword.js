import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../constants/Constant";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom/dist";
const ResetPassword = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const [loginForm, setLoginState] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setLoginState({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(loginForm, "login data ");
    loginForm.to = loginForm.userId;
    loginForm.subject = "Forgot Password";
    loginForm.message = "Forgot Password";
    try {
      const response = await axios.post(
        `${baseURL}/api/users/forgot-password/email`,
        loginForm
      );
      //console.log(response);
    } catch (error) {
      toast.error("error");
    }
  };
  return (
    <div className="overflow-y-hidden w-full max-w-full font-poppins max-h-[100vh] flex flex-col md:flex-row relative">
      {/* Logo placement */}
      <div className="absolute top-7 flex w-full justify-between px-4 md:px-8">
        <img src="./images/logo.png" alt="Logo" className=" w-24 h-12" />
        <p className="mb-4 text-sm md:text-base" style={{ color: "#8A8DC8" }}>
          New user?&nbsp;
          <span
            className="cursor-pointer underline"
            style={{ color: "#E2AEFF" }}
            onClick={() => navigate("/signup")}
          >
            Create an account
          </span>
        </p>
      </div>

      {/* Image part */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="./images/interpretation.png"
          alt="Signup Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content part */}
      <div className="w-full md:w-1/2 px-8 py-8 md:my-auto">
        <div className="mx-auto max-w-[450px]">
          {/* Gradient Title */}
          <h1 className="mb-6 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
            Reset Password
          </h1>

          {/* Subtitle */}
          <p
            className="mb-4 font-manrope text-sm font-normal"
            style={{ color: "#7A86A1" }}
          >
            Please enter new password
          </p>

          {/* Input Fields */}
          <div className="flex flex-col mb-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label>Password</label>
              <input
                placeholder="Password"
                type="text"
                style={{ color: "white", background: "black" }}
                className="mt-2 rounded-md py-2 px-4"
                name="userid"
                value={loginForm.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex flex-col w-full md:w-1/2">
              <label>Confirm Password</label>
              <input
                placeholder="Confirm Password"
                type="text"
                style={{ color: "white", background: "black" }}
                className="mt-2 rounded-md py-2 px-4"
                name="userid"
                value={loginForm.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="w-full md:w-1/2 py-2 rounded-lg bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end shadow-lg"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
