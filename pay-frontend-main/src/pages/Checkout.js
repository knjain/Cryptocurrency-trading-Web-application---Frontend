import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import QRCode from "qrcode.react";
import { FiClipboard } from "react-icons/fi";
import axios from "../services/axiosInstance";

const Checkout = () => {
  const location = useLocation();
  const [cryptoAddress, setCryptoAddress] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState("");
  const [expirationTime, setExpirationTime] = useState(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const addressFromParams = searchParams.get("address");
    const dateFromParams = searchParams.get("date");

    if (addressFromParams && dateFromParams) {
      setCryptoAddress(addressFromParams);
      setError("");

      const eightHoursInMillis = 8 * 60 * 60 * 1000;
      const expirationDate = new Date(dateFromParams);
      expirationDate.setTime(expirationDate.getTime() + eightHoursInMillis);

      const now = new Date();
      const timeDifferenceInMillis = expirationDate.getTime() - now.getTime();
      const timeDifferenceInSeconds = Math.floor(timeDifferenceInMillis / 1000);

      setExpirationTime(expirationDate);
      setTimer(timeDifferenceInSeconds);
    } else {
      setError("Address or date not found in URL parameters");
    }
  }, [location.search]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        return Math.max(prevTimer - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}h ${minutes}m ${remainingSeconds}s`;
  };

  const handleCopyToClipboard = () => {
    if (cryptoAddress) {
      navigator.clipboard.writeText(cryptoAddress);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col items-center  font-poppins max-w-lg mx-auto p-6 ">
        {error && <p className="text-red-500 mt-2 font-poppins">{error}</p>}
        {!error && (
          <>
            <div className="mb-4 mt-10">
              <QRCode
                value={cryptoAddress}
                size={168}
                style={{
                  border: "1px solid #fff",
                }}
              />
            </div>

            <div className="relative mt-6 w-full flex items-center">
              <input
                type="text"
                value={cryptoAddress}
                readOnly
                style={{
                  color: "white",
                  background: "black",
                  border: "1px solid white",
                }}
                className="mt-2 rounded-md py-2 px-4 w-full"
              />
              <button
                onClick={handleCopyToClipboard}
                className="absolute right-2 top-4 cursor-pointer "
              >
                <FiClipboard className="h-6 w-6" />
              </button>
            </div>
            <div className="w-full flex items-center justify-between mt-4">
              <p>Waiting for funds to receive...</p>
              <p className="text-white font-poppins">{formatTime(timer)}</p>
            </div>

            <p className="text-xs mt-10 text-gray-700">
              <span className="text-red-800">*</span> Don't refresh or go back
              from the page. Your transaction details and timer will reset.
            </p>

            {isCopied && (
              <p className="text-green-500 mt-2 font-poppins">
                Copied to clipboard!
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
