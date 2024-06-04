import React, { useState, useEffect } from "react";
import "./Profile.css";
import { toast } from "react-hot-toast";
import { baseURL } from "../../../constants/Constant";
import axios from "axios";
import bcrypt from "bcryptjs";
import { getButtonClass } from "../../../components/TabClass";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import { updatePasswordByUserId } from "../../../services/userService";
import { FiLoader } from "react-icons/fi";

const FormPasswordComponent = ({
  // currentpasswordcorrect,
  render,
  setRender,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentpassword, setcurrentpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const handleChangePassword = async (
    currentpassword,
    newpassword,
    confirmpassword,
    resetForm
  ) => {
    //console.log(currentpassword, newpassword, confirmpassword);
    // Check if new password and confirm password match
    if (newpassword !== confirmpassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    // // Check if current password is correct
    // const passwordMatch = await bcrypt.compare(
    //   currentpassword,
    //   currentpasswordcorrect
    // );

    // if (!passwordMatch) {
    //   toast.error("Current password is incorrect");
    //   return;
    // }
    const formData = {
      currentPassword: currentpassword,
      newPassword: newpassword,
    };
    setIsLoading(true);
    try {
      const response = await updatePasswordByUserId(formData);
      if (response.data.success) {
        toast.success(
          "Password updated successfully. Please login again with the new password."
        );
        localStorage.removeItem("user_data");

        navigate("/");
      } else {
        toast.error("Failed to update password");
      }
    } catch (error) {
      toast.error("An error occurred while updating the password");
    } finally {
      setcurrentpassword("");
      setnewpassword("");
      setconfirmpassword("");
      setRender((prev) => !prev);
      setIsLoading(false);
    }
  };

  const FormSchema = yup.object().shape({
    pass: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    confirm: yup
      .string()
      .oneOf([yup.ref("pass"), null], 'Must match "password" field value'),
  });
  return (
    <Formik
      initialValues={{}}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        // handleChangePassword(values);
      }}
    >
      {({ errors, resetForm }) => {
        return (
          <Form className="space-y-4">
            <div className="relative">
              <label htmlFor="currentpassword">Current Password</label>
              <input
                type={showCurrentPassword ? "text" : "password"}
                className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
                id="currentpassword"
                value={currentpassword}
                onChange={(e) => setcurrentpassword(e.target.value)}
                name="currentpassword"
              />
              <span
                className="absolute right-3 top-[3.25rem] transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="relative">
              <label htmlFor="newpassword">New Password</label>
              <Field
                type={showNewPassword ? "text" : "password"}
                name="newpassword"
                id="newpassword"
                value={newpassword}
                className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
                onChange={(e) => setnewpassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-[3.25rem] transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.pass && <p>{errors.pass}</p>}
            </div>

            <div className="relative">
              <label htmlFor="confirmpassword">Confirm Password</label>
              <Field
                type={showConfirmPassword ? "text" : "password"}
                name="confirmpassword"
                id="confirmpassword"
                value={confirmpassword}
                className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-[3.25rem] transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {errors.confirm && <p>{errors.confirm}</p>}
            </div>

            <button
              type="submit"
              className={`bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl px-12 py-3 text-white"
               flex justify-center item-center  
              ${isLoading ? "cursor-not-allowed opacity-70" : ""}
              
              `}
              disabled={isLoading}
              onClick={() =>
                handleChangePassword(
                  currentpassword,
                  newpassword,
                  confirmpassword,
                  resetForm
                )
              }
            >
              {isLoading ? (
                <FiLoader className="animate-spin text-blue-500" size={24} />
              ) : (
                "Save"
              )}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormPasswordComponent;
