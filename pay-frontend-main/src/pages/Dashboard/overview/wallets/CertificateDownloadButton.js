// CertificateDownloadButton.js
import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchUserDepositData,
  fetchUserWithdrawalData,
} from "../../../../services/userService";

const CertificateDownloadButton = () => {
  const [data, setData] = useState([]);
  const authToken = JSON.parse(localStorage.getItem("user_data"));

  const location = useLocation();
  console.log(location.pathname.includes("deposit"));
  useEffect(() => {
    const getUserWithdrawalData = async () => {
      try {
        let res;
        if (location.pathname.includes("deposit")) {
          res = await fetchUserDepositData();
        } else if (location.pathname.includes("withdrawal")) {
          res = await fetchUserWithdrawalData("total");
        }
        console.log(res);
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserWithdrawalData();
  }, []);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // const downloadCertificate = () => {
  //   const inputElement = inputRef.current;
  //   // const inputElement = document.getElementById("certificate-content");

  //   // Set the canvas height to match the content height
  //   html2canvas(inputElement).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "PNG", 0, 0);
  //     pdf.save("certificate.pdf");
  //   });
  // };
  const downloadCertificate = () => {
    const inputElement = inputRef.current;

    html2canvas(inputElement).then((canvas) => {
      // Convert canvas to blob
      canvas.toBlob((blob) => {
        // Create a temporary anchor element
        const anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(blob);
        anchor.download = "certificate.png"; // Set the download filename
        anchor.click(); // Trigger the download
        URL.revokeObjectURL(anchor.href); // Clean up
      }, "image/png"); // Specify the image/png MIME type
    });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-10">
      <h1 className="text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text font-semibold mb-6 mr-28 text-center">
        Share this certificate on your social media feed and tag One Ozo.
        <br /> We will reward you with $5 worth of Ozo tokens. <br />
        After sharing, please send us a screenshot to claim your reward.
      </h1>
      <div className="flex flex-row gap-8 justify-center items-center">
        <div
          ref={inputRef}
          className="bg-gradient-to-b from-[#051421] via-[#052228] to-[#053632] w-[800px] p-8  "
        >
          <div className="flex flex-col border border-solid border-2 p-8 gap-4">
            <div className="flex flex-row  items-center justify-start">
              <img alt="logo" src="/images/logo.png" className="w-16 h-8" />
              <h5 className="mt-1 ml-[-6px] font-semibold">One Ozo</h5>
            </div>
            <h2 className="font-bold text-4xl text-[#D5C57F]">
              {location.pathname.includes("deposit")
                ? "DEPOSIT"
                : location.pathname.includes("withdrawal")
                ? "WITHDRAWAL"
                : ""}{" "}
              <br /> CERTIFICATE
            </h2>
            <div className="flex flex-col  w-full justify-end">
              <div className="w-full text-right">
                {data?.wallet} Total{" "}
                {location.pathname.includes("deposit")
                  ? "Deposit"
                  : location.pathname.includes("withdrawal")
                  ? "Withdrawal"
                  : ""}
              </div>
              <div className="w-full text-right text-6xl font-extrabold">
                ${parseFloat(data?.amount).toFixed(2) || 0}
              </div>
            </div>
            <div className="font-thin text-sm">
              This certificate is proudly presented to
            </div>
            <div className="text-2xl font-semiold mt-[-1rem]">
              {authToken?.userId}
            </div>

            <div className="text-5xl font-bold ">{data?.name}</div>
            <div className="w-[200px] bg-gray-200 h-[1px]"></div>
            <div className="font-thin text-sm">Presented this on</div>
            <div className="mt-[-1rem] text-lg">{data?.today_date}</div>
            <div className="flex w-full justify-end items-end flex-col ">
              <img
                alt="logo"
                src="/images/sign.png"
                className="w-32 h-16 text-right mr-[60px] "
              />
              <div className="w-[200px] bg-gray-200 h-[1px] mt-[2px] text-right"></div>
              <div className="text-sm  text-right mr-[60px] mt-[2px] ">
                Signature
              </div>
            </div>
          </div>
        </div>
        <button
          className="text-[#D5C57F] px-4 py-2 rounded-full bg-[#053632] mt-4"
          onClick={downloadCertificate}
        >
          Download Certificate
        </button>
      </div>
      <div className="flex flex-row mr-28">
        <button
          className="text-[#fff] px-4 py-2 rounded-full bg-[#053632] mt-4 mb-16"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CertificateDownloadButton;
