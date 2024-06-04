import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-hot-toast";
import { baseURL } from "../constants/Constant";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router";
import Select from "react-select";
import countryList from "react-select-country-list";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Signup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loader from "../components/Loader";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { sponsorId, positionVal } = useParams();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);
  const [msgPass, setMsgPas] = useState(false);
  const [sponsorOption, setSponsorOption] = useState("no");
  const [positionOption, setPositionOption] = useState("left");

  const [formData, setFormData] = useState({
    sponsor: "",
    sponsorId: sponsorId || "OZO-100029",
    sponsorName: "One Ozo",
    position: "left",
    firstName: "",
    lastName: "",
    country: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    confirmEmail: "",
    userNotFound: false,
    terms: "",
    mails: "",
  });

  // Email and Password
  const emailValidation = (e) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
    var emailValue = e.target.value;
    setEmail(emailValue);
    if (pattern.test(emailValue)) {
      // Here, test emailValue instead of email
      setMessage(true);
      setFormData((prevFormData) => ({
        ...prevFormData,
        email: emailValue,
      }));
    } else {
      setMessage(false);
    }
  };

  const passwordValidation = (e) => {
    const pattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/;
    var passValue = e.target.value;
    setPassword(passValue);
    if (pattern.test(password)) {
      setMsgPas(true);
      setFormData((prevFormData) => ({
        ...prevFormData,
        password: passValue,
      }));
    } else {
      setMsgPas(false);
    }
  };

  // Country dropdown
  const changeHandler = (value) => {
    setValue(value);
    // //console.log(value.label);
    setFormData({ ...formData, country: value.label });
  };
  const options = useMemo(() => countryList().getData(), []);
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "bg-[#0a090d]",
      color: "#FFFFFF",
      border: 0,
      outline: "1px solid white",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: "black",
        color: "#FFFFFF",
        // cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    singleValue: (styles) => ({
      ...styles,
      color: "#FFFFFF", // Change the text color to white for the selected value
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
      border: "1px solid black",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid black",
      },
    }),
  };

  // useEffect(() => {
  //   let login = localStorage.getItem("login");
  //   if (login) {
  //     navigate("/dashboard");
  //   }
  // }, []);

  useEffect(() => {
    //console.log(sponsorId, positionVal);
    if (positionVal) {
      setPositionOption(positionVal);
      setSponsorOption("yes");
    }
    if (sponsorId && sponsorId.length === 10) {
      fetchSponsorName(sponsorId);
    }
  }, [sponsorId]);

  // useEffect(() =>{
  //   // //console.log(userId);
  //   //console.log(position);
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     sponsorId : sponsorId,
  //   }))
  //   setSponsorOption("yes");
  //   setPositionOption(position);
  // }, [sponsorId, position])

  const fetchUserData = (userId) => {
    axios.get(baseURL + `/api/users/${userId}`).then((response) => {
      const { data } = response;
      //console.log("user data..", response);
    });
  };

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // //console.log(e.target.name);
    if (e.target.name === "terms") {
      setFormData({
        ...formData,
        terms: e.target.checked, // this will be true if the checkbox is checked, false otherwise
      });
    } else if (e.target.name === "mails") {
      setFormData({
        ...formData,
        mails: e.target.checked, // this will be true if the checkbox is checked, false otherwise
      });
    } else if (e.target.name === "position") {
      setPositionOption(e.target.value);
    } else if (e.target.name === "sponsor") {
      const isSponsorSelected = e.target.value === "yes";

      if (!isSponsorSelected) {
        // Set sponsor details to default values when "No" is selected
        setFormData({
          ...formData,
          sponsor: "no",
          sponsorId: "OZO-100029",
          sponsorName: "One Ozo",
        });
      }
      setSponsorOption(e.target.value);
    } else if (e.target.name === "sponsorId") {
      const newSponsorId = e.target.value;
      setFormData({
        ...formData,
        sponsorId: newSponsorId,
        sponsorName: "", // Clear the sponsor name when the sponsor ID is changed
        userNotFound: false, // Reset the userNotFound state
      });

      if (newSponsorId.length === 10) {
        // //console.log(newSponsorId.length);
        fetchSponsorName(newSponsorId);
      }

      // if (userId) {
      //   setFormData({
      //     ...formData,
      //     sponsor: "yes",
      //   });
      // }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  const [emailError, setEmailError] = useState("");
  const [confirmEmailError, setConfirmEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [termsError, setTermsError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset the email error state
    setEmailError("");
    setConfirmEmailError("");
    setNameError("");
    setCountryError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setTermsError("");
    // Check if email is not entered
    if (!formData.firstName) {
      setNameError("Please enter your name");
      return;
    }
    if (!formData.country) {
      setCountryError("Please enter your country");
      return;
    }
    if (!formData.email) {
      setEmailError("Email is required");
      return;
    }
    if (!formData.confirmEmail) {
      setConfirmEmailError("Please confirm your email");
      return;
    }

    if (formData.confirmEmail !== formData.email) {
      setConfirmEmailError("Email addresses do not match.");
      return;
    }
    if (!formData.password) {
      setPasswordError("Password is required");
      return;
    }
    if (!formData.confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      return;
    }

    if (formData.confirmPassword !== formData.password) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    // //console.log(formData);
    if (!formData.terms) {
      setTermsError("Please accept the terms and conditions to proceed.");
      // toast.error("Please accept the terms and conditions to proceed.");
      return;
    }
    if (formData.confirmEmail === formData.email) {
      if (formData.password === formData.confirmPassword) {
        setLoading(true);
        const newPosition =
          positionOption !== undefined ? positionOption : "left";
        const requestData = {
          referrer_id:
            formData.sponsor === "no" || !formData.sponsorId
              ? "OZO-100029"
              : formData.sponsorId,
          position: newPosition,
          username: `${formData.firstName} ${formData.lastName}`,
          country: formData.country,
          phone: formData.contactNumber,
          email: formData.email,
          password: formData.confirmPassword,
        };
        //console.log(requestData);
        // Send the data to the backend API
        axios
          .post(`${baseURL}/api/users/signup`, requestData)
          .then((response) => {
            // //console.log(response);
            setLoading(false); // Stop loading

            if (response.data.success) {
              // axios
              //   .post(baseURL + "/api/send-mail", {
              //     email: formData.email,
              //     userId: response.data.data.userId,
              //   })
              //   .then((response) => {
              //     //console.log(response);
              //   })
              //   .catch((error) => {
              //     //console.log(error);
              //     // toast.error("Something went wromg1");
              //   });

              // Change to mail sent successfully
              // toast.success("Registration successful");
              toast.success(
                "VERIFICATION MAIL HAS BEEN SENT TO YOUR REGISTERED EMAIL ADDRESS, KINDLY VERIFY YOU ACCOUNT TO LOG IN"
              );
              setFormData({
                sponsorId: "OZO-100029",
                sponsorName: "One Ozo",
                sponsorName: "",
                position: "",
                firstName: "",
                lastName: "",
                country: "",
                contactNumber: "",
                email: "",
                password: "",
                confirmPassword: "",
                confirmEmail: "",
                userNotFound: false,
                terms: false,
                mails: false,
              });
              setEmail("");
              setPassword("");
              // window.location.reload();
              localStorage.removeItem("user_data");
              navigate(`/login`);
            } else {
              toast.error("Something went wromg2");
            }
          })
          .catch((error) => {
            //console.log(error);
            // if(formData.email === ""){
            //   toast.error("Enter email");
            // }
            if (error?.response?.data?.message === "Email already in use") {
              toast.error("Email exists");
            } else {
              toast.error("ERROR ");
              // navigate('/login');
            }
            setLoading(false);
          });
      } else {
        toast.error("Passwords do not match");
      }
    } else {
      toast.error("Email addresses do not match.");
    }
  };

  const fetchSponsorName = (sponsorId) => {
    axios
      .get(baseURL + `/api/users/name/${sponsorId}`)
      .then((response) => {
        const { data } = response;
        //console.log("response", response);

        if (data.success) {
          setFormData({
            ...formData,
            sponsorId: sponsorId,
            sponsorName: data.data.name,
            // position: position,
            userNotFound: false, // Reset the userNotFound state when the user is found
          });
          setSponsorOption("yes");
        } else {
          setFormData({
            ...formData,
            sponsorId: "OZO-100029",
            sponsorName: "One Ozo", // Clear the sponsor name when the user is not found
            userNotFound: true, // Set the userNotFound state to true
          });
        }
      })
      .catch((error) => {
        setFormData({
          ...formData,
          sponsorId: "OZO-100029",
          sponsorName: "One Ozo", // Clear the sponsor name in case of an error
          userNotFound: true, // Set the userNotFound state to true
        });
      });
  };

  return loading ? (
    <div className="mt-[-100px]">
      <Loader />
    </div>
  ) : (
    <div className="w-full max-w-full lg:max-h-[100vh] font-poppins flex flex-col md:flex-row relative">
      {/* Logo placement */}
      <div className="absolute top-4 flex w-full justify-between px-5">
        <img
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          alt="Logo"
          className="max-h-10 min-w-10 pt-2 pl-2 cursor-pointer"
          src="/images/navlogo.png"
        />
        <p className="mb-4" style={{ color: "#f" }}>
          Already a member?&nbsp;
          <span
            className="cursor-pointer underline"
            style={{ color: "#18D4A7" }}
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </p>
      </div>
      {/* Image part */}
      <div className="w-full md:w-1/2 md:mb-0">
        <img
          src="/images/register/register.jpg"
          alt="Signup Background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 px-4 md:px-20 pt-4 md:pt-16 my-auto flex flex-col">
        <h1 className="  text-2xl md:text-3xl font-semibold bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
          Sign up
        </h1>

        {/* Subtitle */}
        <p
          className="mb-2 md:mb-4 font-manrope text-xs md:text-sm font-normal"
          style={{ color: "#7A86A1" }}
        >
          Register if you don't have an account
        </p>

        <div className="flex mb-4 space-x-6 max-w-[350px] text-center font-semibold items-center">
          <p className="text-sm">Do you have a sponsor?</p>
          <div className="space-x-3">
            <input
              type="radio"
              name="sponsor"
              id="yes"
              value="yes"
              className=""
              checked={sponsorOption === "yes"}
              onChange={handleChange}
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="space-x-3">
            <input
              type="radio"
              name="sponsor"
              id="no"
              value="no"
              className=""
              checked={sponsorOption === "no"}
              onChange={handleChange}
            />

            <label htmlFor="no">No</label>
          </div>
        </div>

        <div className="max-w-1/2 w-full">
          <h1 className="text-md text-left font-semibold mb-2">
            Sponsor Details
          </h1>

          <div className="grid grid-cols-2 gap-4 ">
            <div className="flex flex-col ">
              <label className="block mb-1 text-sm">Sponsor ID</label>
              <input
                placeholder="Sponsor ID"
                className="w-full border border-solid rounded-md bg-[#0a090d] py-1 px-4"
                name="sponsorId"
                value={formData.sponsorId}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label className="block mb-1 text-sm">Sponsor Name</label>
              <input
                placeholder="Sponsor Name"
                className="w-full border border-solid bg-[#0a090d] rounded-md b py-1 px-4"
                name="sponsorName"
                value={formData.sponsorName}
                onChange={handleChange}
                readOnly
              />
            </div>
          </div>

          {formData.userNotFound && (
            <p className="text-red-500">
              User not found. Please enter a valid Sponsor ID.
            </p>
          )}

          <div className="flex space-x-6 mb-4 mt-2 max-w-[350px] font-semibold items-center">
            <p className=" text-sm">Position</p>
            <div className="space-x-3">
              <input
                type="radio"
                name="position"
                id="right"
                value="right"
                className=""
                checked={positionOption === "right"}
                onChange={handleChange}
              />
              <label htmlFor="right font-light ">Right</label>
            </div>
            <div className="space-x-3">
              <input
                type="radio"
                name="position"
                id="left"
                value="left"
                className=""
                checked={positionOption === "left" || !positionOption} // Auto-select if formData.position is "left" or position is "left"
                onChange={handleChange}
              />

              <label htmlFor=" font-light  left">Left</label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 relative">
            <input
              placeholder="First name"
              type="text"
              className="w-full border border-solid rounded-md bg-[#0a090d] py-1 px-4 relative"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {nameError && (
              <p className="text-xs text-red-500  absolute top-[2.25rem] left-0">
                {nameError}
              </p>
            )}
            <input
              placeholder="Last name"
              type="text"
              className="w-full border border-solid rounded-md bg-[#0a090d] py-1 px-4"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <div className="flex flex-col relative">
              <label className="block mb-1 text-sm">Country</label>
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                className="w-full rounded-md bg-[#0a090d] relative border border-solid "
                styles={colourStyles}
                placeholder="Select Country"
                required
              />
            </div>
            {countryError && (
              <p className="text-xs text-red-500  absolute top-[7rem] left-0">
                {countryError}
              </p>
            )}
            <div className="flex flex-col">
              <label className="block mb-1 text-sm">Phone</label>
              <input
                placeholder="Contact number"
                type="text"
                className="w-full border border-solid rounded-md bg-[#0a090d] py-1 px-4"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <div className="flex flex-col relative">
                <label className="block mb-1 text-sm"> Email</label>

                <input
                  placeholder="Email"
                  type="email"
                  className="w-full border border-solid rounded-md bg-[#0a090d] py-1 px-4"
                  name="email"
                  value={email}
                  onChange={emailValidation}
                  required
                />
              </div>
              {emailError && (
                <p className="text-xs text-red-500  absolute top-[3.75rem] left-0">
                  {emailError}
                </p>
              )}
              <div
                className={`absolute top-8 right-2 w-4 h-4 flex justify-center items-center ${
                  email.length === 0
                    ? ""
                    : message
                    ? "check-color"
                    : "error-color"
                }`}
              >
                <i
                  className={
                    email.length === 0
                      ? ""
                      : message
                      ? "fa fa-check-circle"
                      : "fa fa-xmark-circle"
                  }
                  aria-hidden="true"
                ></i>
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col relative">
                <label className="block mb-1 text-sm">Confirm Email</label>
                <input
                  placeholder="Confirm Email"
                  type="email"
                  className="w-full border border-solid rounded-md bg-[#0a090d] py-1 px-4"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              {confirmEmailError && (
                <p className="text-xs text-red-500  absolute top-[3.75rem] left-0">
                  {confirmEmailError}
                </p>
              )}
            </div>
            <div className="relative">
              <div className="flex flex-col relative">
                <label className="block mb-1 text-sm">Password</label>

                <input
                  placeholder="Create password"
                  type="text"
                  className="w-full border border-solid rounded-md bg-[#0a090d] py-1 px-4 relative"
                  name="password"
                  value={formData.password}
                  // onChange={passwordValidation}
                  onChange={handleChange}
                  required
                />

                {/* <div className="relative">
                <div
                  className={`absolute bottom-2 right-2 w-4 h-4 flex justify-center items-center ${
                    password.length === 0
                      ? ""
                      : msgPass
                      ? "check-color"
                      : "error-color"
                  }`}
                >
                  <i
                    className={
                      password.length === 0
                        ? ""
                        : msgPass
                        ? "fa fa-check-circle"
                        : "fa fa-xmark-circle"
                    }
                    aria-hidden="true"
                  ></i>
                </div>
              </div> */}
              </div>

              {passwordError && (
                <p className="text-xs text-red-500   left-0 ">
                  {passwordError}
                </p>
              )}
            </div>
            <div className="relative">
              <div className="flex flex-col relative">
                <label className="block mb-1 text-sm relative">
                  Confirm Password
                </label>

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full border border-solid rounded-md bg-[#0a090d] py-1 px-4 relative"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />

                <span
                  className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {confirmPasswordError && (
                <p className="text-xs text-red-500  absolute top-[3.75rem] left-0">
                  {confirmPasswordError}
                </p>
              )}
            </div>
          </div>
          <div className="relative"></div>

          {/* <p className="mt-2 text-xs text-red-500 mb-6">
            Password must contain 1 letter, 1 number, 1 special (@, $, !, %, *,
            #, ?, &), min 6 chars.
          </p> */}
          <div className="flex items-center mt-6 mb-2 relative">
            <input
              type="checkbox"
              id="terms"
              className="mr-2 relative"
              required
              name="terms"
              value={formData.terms}
              onChange={handleChange}
            />
            <label htmlFor="terms" className="text-sm">
              I accept the{" "}
              <a
                href="/terms-and-conditions"
                className="text-indigo-600 underline cursor-pointer"
              >
                terms and conditions
              </a>
            </label>
            {termsError && (
              <p className="text-xs text-red-500  absolute top-[1.25rem] left-0">
                {termsError}
              </p>
            )}
          </div>
          <div className="flex items-center mt-6 mb-2 relative">
            <input
              type="checkbox"
              id="mails"
              className="mr-2 relative"
              required
              name="mails"
              value={formData.mails}
              onChange={handleChange}
            />
            <label htmlFor="mails" className="text-sm">
              I consent to receiving promotional emails and updates from One Ozo
            </label>
          </div>
          <button
            className="w-full py-3 mt-3 bg-gradient-to-r from-newStart via-newMid to-newEnd text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
            onClick={handleSubmit}
          >
            Sign up
            {loading && (
              <div className="flex items-center justify-center mt-4">
                <FiLoader className="animate-spin text-blue-500" size={24} />
                <span className="ml-2">Loading...</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
