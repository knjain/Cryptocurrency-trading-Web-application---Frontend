import axios from "axios";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { baseURL } from "../../../constants/Constant";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { FiLoader } from "react-icons/fi";

const KYCNav = ({}) => {
  const fileInputRef = useRef(null);
  const getButtonClassName = (docType) => {
    if (selectedDocumentType === docType) {
      return "rounded-full py-2 px-12 bg-gradient-to-r from-indigo-800 to-purple-700";
    } else {
      return "rounded-full py-2 px-12 hover:bg-gradient-to-r hover:from-indigo-800 hover:to-purple-700";
    }
  };
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDocumentType, setSelectedDocumentType] = useState("PASSPORT");
  const [selectedFile, setSelectedFile] = useState(null);
  const [termsChecked, setTermsChecked] = useState(false);
  const [infoChecked, setInfoChecked] = useState(false);
  const handleVerification = async () => {
    if (!termsChecked || !infoChecked) {
      toast.error(
        "Please ensure you have read and accepted the terms and conditions and verified your personal information."
      );
      return;
    }
    if (!selectedDocumentType || !selectedFile) {
      toast.error("Please select a document type and upload a document");
      return;
    }

    const userData = JSON.parse(localStorage.getItem("user_data"));

    if (userData && userData.token && userData.userId) {
      setIsLoading(true);

      const headers = {
        Authorization: userData.token,
      };

      const fileFormData = new FormData();
      fileFormData.append("docType", selectedDocumentType);
      fileFormData.append("file", selectedFile);

      try {
        const response = await axios.post(
          `${baseURL}/api/upload/${userData.userId}`,
          fileFormData,
          { headers }
        );

        if (response.data.success) {
          toast.success("Document uploaded successfully");
        } else {
          toast.error("Failed to upload document");
        }
      } catch (error) {
        if (error?.response?.status === 401) {
          localStorage.removeItem("user_data");
          window.location.reload();
        }
        toast.error("An error occurred while uploading the document");
      } finally {
        setSelectedDocumentType("");
        setInfoChecked(false);
        setTermsChecked(false);
        setIsLoading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }
    } else {
      toast.error("Please sign in again");
    }
  };
  return (
    <div className="pt-10 md:mt-0 overflow-x-hidden w-full px-6  md:px-16 pb-16 bg-[#0a090d] font-poppins ">
      <h1 className="uppercase text-4xl pt-10  font-semibold text-center">
        User Verification
      </h1>
      <div className="my-8 font-medium text-lg">
        <h3 className="text-2xl font-semibold my-8 ">Verify your identity</h3>
        <p className="text-justify mb-5">
          To comply with regulation each participant will have to go through
          identity verification to prevent fraud causes. you have not submitted
          your necessary documents to verify your identity. In order to continue
          investing, please verify your identity.
        </p>
        <p className="mb-3 text-indigo-700">
          In order to complete, please upload any one of the following personal
          documents
        </p>

        <p className="mb-3">
          To avoid delays when verifying account, Please make sure follow:
        </p>
        <p>
          Documents should be good condition and clearly visible.
          <br />
          Make sure that there is no light glare on the card.
        </p>
      </div>

      <div className="w-full flex  justify-center mb-12 items-center min-h-[10vh]">
        <div className="max-w-2xl text-xl flex flex-wrap gap-3 w-full md:rounded-full md:border-2  ">
          <button
            className={getButtonClassName("PASSPORT")}
            onClick={() => setSelectedDocumentType("PASSPORT")}
          >
            Passport
          </button>
          <button
            className={getButtonClassName("NATIONAL_ID")}
            onClick={() => setSelectedDocumentType("NATIONAL_ID")}
          >
            National ID
          </button>
          <button
            className={getButtonClassName("DRIVING_LICENSE")}
            onClick={() => setSelectedDocumentType("DRIVING_LICENSE")}
          >
            Driving License
          </button>
        </div>
      </div>

      <div className="w-full rounded-lg bg-neutral-800 py-6 md:px-10 px-3">
        <h2 className="font-medium">Upload your document here</h2>
        <div className="flex md:flex-row flex-col w-full my-5 gap-3">
          <div className="w-full md:w-3/4 border-dotted border-4 rounded-lg px-4  flex items-center">
            <div className="w-full">
              <input
                type="file"
                className="mt-2 px-4 py-2 border rounded-xl bg-black w-full"
                id="document"
                name="document"
                ref={fileInputRef}
                onChange={(e) => setSelectedFile(e.target.files[0])}
              />
            </div>
          </div>
          <div className="w-1/4 mx-auto">
            <img
              alt="Signup Background"
              src="/images/document.png"
              className="max-w-[70px] md:max-w-[280px]"
            />
          </div>
          <div></div>
        </div>
      </div>

      <div className="my-6 px-10 ">
        <div className="flex  items-center mb-4 ">
          <input
            type="checkbox"
            className="rounded-sm p-2 mr-4 border-2"
            checked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
          />
          <p>I Have Read The Terms and Condition And Privacy Policy</p>
        </div>
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            className="rounded-sm p-2 mr-4 border-2"
            onChange={(e) => setInfoChecked(e.target.checked)}
            checked={infoChecked}
          />

          <p>All The Personal Information I have Entered Is Correct.</p>
        </div>

        <button
          className={`flex items-center justify-center px-12 rounded-full py-2 bg-gradient-to-r gap-1 ${
            isLoading
              ? "cursor-not-allowed from-indigo-400 to-fuchsia-700 opacity-70"
              : "from-indigo-400 to-fuchsia-700"
          }`}
          onClick={handleVerification}
          disabled={isLoading}
        >
          {isLoading ? (
            <FiLoader className="animate-spin text-blue-500" size={24} />
          ) : (
            "Verify"
          )}
        </button>
      </div>
    </div>
  );
};

export default KYCNav;
