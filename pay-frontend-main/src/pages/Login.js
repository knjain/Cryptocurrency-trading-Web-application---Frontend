import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiLoader } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../constants/Constant";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Login = ({ setIsLoggedIn }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    let user_data = localStorage.getItem("user_data");
    if (user_data) {
      navigate("/dashboard");
    }
  }, []);

  const [loginForm, setLoginState] = useState({
    userId: "OZO-",
    password: "",
    otp: "",
  });

  const handleChange = (e) => {
    setLoginState({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${baseURL}/api/users/login-otp`,
        loginForm
      );
      if (response.data.success) {
        toast.success("OTP sent to registered email");
        setShowOTP(true);
      } else {
        toast.error("Invalid user id or password");
      }
    } catch (error) {
      console.log(error);
      if (
        error?.response?.data?.message === "Password is incorrect." ||
        error?.response?.data?.message ===
          "Invalid user id or you are a new user"
      ) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("error");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${baseURL}/api/users/signin`,
        loginForm
      );
      if (response.data.success && response.data.token) {
        if (response.data.data.verified) {
          toast.success("Login Successful");
          const userData = {
            token: response.data.token,
            email: response.data.data.email,
            userId: response.data.data.userId,
          };
          localStorage.setItem("user_data", JSON.stringify(userData));
          // localStorage.setItem('login', true);  // Added by sid
          setIsLoggedIn(true);
          navigate("/dashboard"); // Redirect to the dashboard upon successful login
        } else {
          toast.error("Account not verified yet");
        }
      } else {
        toast.error("Invalid user id or password");
      }
    } catch (error) {
      console.log(error);
      if (
        error?.response?.data?.message === "Password is incorrect." ||
        error?.response?.data?.message ===
          "Invalid user id or you are a new user"
      ) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("error");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full lg:max-h-[100vh] font-poppins flex flex-col md:flex-row relative">
      {/* Logo placement */}
      <div className="absolute top-4 flex w-full justify-between px-5 md:px-8">
        <img
          // src="./images/logo.png"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          alt="Logo"
          className="max-h-10 min-w-10 pt-2 pl-2 cursor-pointer"
          src="./images/navlogo.png"
          // className=" w-24 h-12"
        />
        <p className="mb-4" style={{ color: "#f" }}>
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
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img
          // src="./images/signup.jpg"
          src="/images/register/login.jpg"
          alt="Signup Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content part */}
      <div className="w-full md:w-1/2 px-4 md:px-8 py-4 md:py-8 my-auto">
        <div className="mx-auto max-w-[450px]">
          {/* Gradient Title */}
          <h1 className="mb-4 md:mb-6 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
            Sign in to your account
          </h1>

          {/* Horizontal Line */}
          <div className="h-[2px] bg-gray-300 w-6 mb-2 md:mb-4"></div>

          {/* Subtitle */}
          <p
            className="mb-2 md:mb-4 font-manrope text-xs md:text-sm font-normal"
            style={{ color: "#7A86A1" }}
          >
            Enter your userid & password to login
          </p>

          {/* Input Fields */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            {!showOTP ? (
              <>
                {" "}
                <div className="flex flex-col w-full md:w-1/2">
                  <label>User ID</label>
                  <input
                    placeholder="User ID"
                    type="text"
                    style={{
                      color: "white",
                      background: "black",
                      border: "1px solid white",
                    }}
                    className="mt-2 rounded-md py-2 px-4"
                    name="userId"
                    value={loginForm.userId}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 relative">
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className="mt-2 rounded-md py-2 px-4"
                    name="password"
                    style={{
                      color: "white",
                      background: "black",
                      border: "1px solid white",
                    }}
                    value={loginForm.password}
                    onChange={handleChange}
                  />
                  <div
                    className="absolute inset-y-2 right-2 top-10 flex items-center cursor-pointer"
                    style={{ color: "black" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col w-full md:w-1/2">
                <label>OTP</label>
                <input
                  placeholder="Enter OTP"
                  type="text"
                  style={{
                    color: "white",
                    background: "black",
                    border: "1px solid white",
                  }}
                  className="mt-2 rounded-md py-2 px-4"
                  name="otp"
                  value={loginForm.otp}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <span
              className="cursor-pointer underline"
              style={{ color: "#18D4A7" }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              className={`w-full py-2 rounded-lg bg-gradient-to-r from-newStart via-newMid to-newEnd shadow-lg
              flex justify-center item-center  
              ${isLoading ? "cursor-not-allowed opacity-70" : ""}
              
              `}
              onClick={showOTP ? handleOTPSubmit : handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <FiLoader className="animate-spin text-blue-500" size={24} />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
