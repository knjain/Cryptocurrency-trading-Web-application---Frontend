import React, { useState } from "react";
import "./Profile.css";
import { toast } from "react-hot-toast";
import { baseURL } from "../../../constants/Constant";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { updatePinByUserId } from "../../../services/userService";
import { FiLoader } from "react-icons/fi";

const SecurityPasswordComponent = ({ currentPin, render, setRender }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentSecurity, setCurrentSecurity] = useState(null);
  const [pin, setPin] = useState(null);
  const [confirmPin, setConfirmPin] = useState(null);
  const handleSecurityChange = async (values) => {
    const { currentSecurity, pin, confirmPin } = values;
    //console.log(currentSecurity, pin, confirmPin);
    // Check if new pin and confirm pin match
    if (pin !== confirmPin) {
      toast.error("New pin and confirm pin do not match");
      return;
    }
    //console.log(currentSecurity, currentPin);
    const currentSecurityNumber = parseInt(currentSecurity, 10);
    // Check if current security pin is correct
    if (currentSecurityNumber !== currentPin) {
      toast.error("Current security pin is incorrect");
      return;
    }

    const formData = {
      newPin: pin,
      currentPin,
      currentSecurityNumber,
    };
    setIsLoading(true);
    try {
      const response = await updatePinByUserId(formData);

      if (response.data.success) {
        toast.success("Security pin updated successfully");
      } else {
        toast.error("Failed to update security pin");
      }
    } catch (error) {
      toast.error("An error occurred while updating the security pin");
    } finally {
      setCurrentSecurity(null);
      setPin(null);
      setConfirmPin(null);
      setRender((prev) => !prev);
      setIsLoading(false);
    }
  };

  const FormSchema = yup.object().shape({
    currentSecurity: yup
      .string()
      .required("Current security pin is required")
      .matches(/^\d+$/, "Current security pin should only contain digits"),
    pin: yup
      .string()
      .required("Pin is required")
      .matches(/^\d+$/, "Pin should only contain digits")
      .min(4, "Pin should be at least 4 digits"),
    confirmPin: yup
      .string()
      .required("Confirm Pin is required")
      .oneOf([yup.ref("pin"), null], 'Must match " New Pin" field value')
      .matches(/^\d+$/, "Confirm Pin should only contain digits"),
  });

  return (
    <Formik
      initialValues={{}}
      validationSchema={FormSchema}
      onSubmit={(values) => {
        handleSecurityChange(values);
      }}
    >
      {({ errors, setFieldValue }) => (
        <Form className="space-y-4">
          <h1 className="text-xl font-medium mb-4">Security Pin</h1>

          <div className="relative">
            <label htmlFor="currentSecurity">Current Security Pin</label>
            <Field
              type={showCurrentPassword ? "text" : "password"}
              className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
              id="currentSecurity"
              name="currentSecurity"
              value={currentSecurity || ""}
              onChange={(e) => {
                setCurrentSecurity(e.target.value);
                setFieldValue("currentSecurity", e.target.value);
              }}
            />
            <span
              className="absolute right-3 top-[3.25rem] transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
            >
              {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.currentSecurity && <p>{errors.currentSecurity}</p>}
          </div>

          <div className="relative">
            <label htmlFor="pin">New Security Pin</label>
            <Field
              type={showNewPassword ? "text" : "password"}
              className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
              id="pin"
              name="pin"
              value={pin || ""}
              onChange={(e) => {
                setPin(e.target.value);
                setFieldValue("pin", e.target.value);
              }}
            />
            <span
              className="absolute right-3 top-[3.25rem] transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.pin && <p>{errors.pin}</p>}
          </div>

          <div className="relative">
            <label htmlFor="confirmPin">Confirm Security Pin</label>
            <Field
              type={showConfirmPassword ? "text" : "password"}
              className="mt-2 px-4 py-2 rounded-xl bg-black w-full"
              id="confirmPin"
              name="confirmPin"
              value={confirmPin || ""}
              onChange={(e) => {
                setConfirmPin(e.target.value);
                setFieldValue("confirmPin", e.target.value);
              }}
            />
            <span
              className="absolute right-3 top-[3.25rem] transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPin && <p>{errors.confirmPin}</p>}
          </div>

          <button
            type="submit"
            className={`bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl px-12 py-3 text-white"
             flex justify-center item-center  
              ${isLoading ? "cursor-not-allowed opacity-70" : ""}
              
              `}
            disabled={isLoading}
          >
            {isLoading ? (
              <FiLoader className="animate-spin text-blue-500" size={24} />
            ) : (
              "Save"
            )}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default SecurityPasswordComponent;
