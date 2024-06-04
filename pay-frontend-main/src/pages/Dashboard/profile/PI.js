import React, { useEffect, useState } from "react";

import toast from "react-hot-toast";
import { updateProfileDetails } from "../../../services/userService";
import { FiLoader } from "react-icons/fi";

const PI = ({
  profileForm,
  open,
  setopen,

  setRender,
}) => {
  const [tempProfileForm, setTempProfileForm] = useState({ ...profileForm });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTempProfileForm(profileForm);
  }, [profileForm]);
  const handleChange1 = (e) => {
    setTempProfileForm({ ...tempProfileForm, [e.target.name]: e.target.value });
  };
  const handleSaveProfile = async () => {
    setopen((prev) => !prev);

    tempProfileForm.name = `${tempProfileForm.fName} ${tempProfileForm.lName}`;
    // tempProfileForm.emailTobeUpdated = `${tempProfileForm.email}`;
    setIsLoading(true);
    //console.log(tempProfileForm);
    try {
      const response = await updateProfileDetails(tempProfileForm);
      //console.log(response);

      if (response.data.success) {
        toast.success("Profile saved successfully");
        // Update the actual tempProfileForm state with the edited values
      } else {
        toast.error("Failed to save profile");
      }
      setRender((prev) => !prev);
    } catch (error) {
      //console.log(error);
      toast.error("An error occurred while saving the profile");
    } finally {
      setIsLoading(false);
    }
  };
  const handleCancel = () => {
    // Reset the tempProfileForm to the original tempProfileForm
    //console.log(profileForm);
    setTempProfileForm(profileForm);
    setopen((prev) => !prev);
  };
  return (
    <div>
      <div className="w-full grid grid-cols-2 gap-4">
        <div>
          <label className="text-gray-600" htmlFor="fn">
            First name
          </label>
          <input
            name="fName"
            value={profileForm.fName}
            readOnly
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="fName"
          />
        </div>
        <div>
          <label className="text-gray-600" htmlFor="ln">
            Last name
          </label>
          <input
            name="lName"
            readOnly
            value={profileForm.lName}
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="lName"
          />
        </div>
        <div>
          <label className="text-gray-600" htmlFor="fn">
            User ID
          </label>
          <input
            name="userId"
            // onChange={handleChange}
            readOnly
            value={profileForm.userID}
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
          />
        </div>
        <div>
          <label className="text-gray-600" htmlFor="fn">
            Phone number
          </label>
          <input
            name="phoneNo"
            readOnly
            value={profileForm.phoneNo}
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="phoneNo"
          />
        </div>
        <div>
          <label className="text-gray-600" htmlFor="fn">
            Country
          </label>
          <input
            name="country"
            readOnly
            value={profileForm.country}
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="country"
          />
        </div>
        <div>
          <label className="text-gray-600" htmlFor="fn">
            Email
          </label>
          <input
            name="email"
            readOnly
            value={profileForm.email}
            className=" px-4 py-1 rounded-lg text-black font-medium w-full"
            id="email"
          />
        </div>
      </div>
      <div className="w-full flex justify-end space-x-6 mt-4 mb-40 md:mb-0">
        <button
          onClick={() => setopen((prev) => !prev)}
          className="px-6 py-2 bg-blue-600 rounded-lg text-white"
        >
          Edit
        </button>
      </div>

      {open && (
        <div className="w-full flex justify-center absolute top-0 left-0 max-h-full h-full  items-center bg-black bg-opacity-70  ">
          <div className="max-w-[550px] rounded-2xl bg-[#0a090d] p-6  relative">
            <h1 className="text-4xl font-medium mb-10">Edit Your Profile</h1>

            <div className="w-full grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600" htmlFor="fn">
                  First name
                </label>
                <input
                  name="fName"
                  value={tempProfileForm.fName}
                  onChange={handleChange1}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="fName"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="ln">
                  Last name
                </label>
                <input
                  name="lName"
                  onChange={handleChange1}
                  value={tempProfileForm.lName}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="lName"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="fn">
                  User ID
                </label>
                <input
                  name="userId"
                  // onChange={handleChange}
                  readOnly
                  value={tempProfileForm.userID}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  // id="email"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="fn">
                  Phone number
                </label>
                <input
                  name="phoneNo"
                  onChange={handleChange1}
                  value={tempProfileForm.phoneNo}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="phoneNo"
                />
              </div>
              <div>
                <label className="text-gray-600" htmlFor="fn">
                  Country
                </label>
                <input
                  name="country"
                  onChange={handleChange1}
                  value={tempProfileForm.country}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="country"
                />
              </div>
              {/* <div>
                <label className="text-gray-600" htmlFor="fn">
                  Email
                </label>
                <input
                  name="email"
                  onChange={handleChange1}
                  value={tempProfileForm.email}
                  className=" px-4 py-1 rounded-lg text-black font-medium w-full"
                  id="email"
                />
              </div> */}
            </div>
            <div className="w-full flex justify-end space-x-6 mt-4 ">
              <button
                onClick={handleCancel}
                className="px-6 py-2 bg-rose-600 rounded-lg text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProfile}
                className={`px-6 py-2 bg-blue-600 text-white rounded-lg
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PI;
