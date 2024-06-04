import React, { useState, useEffect, useRef } from "react";

import { toast } from "react-hot-toast";

import {
  createTransactionDownline,
  fetchAllWalletsByUserId,
} from "../../../services/walletService";
import { FiLoader } from "react-icons/fi";
import { packages } from "../../data";
import PackageMap from "./PackageMap";
import { getDownlineReport } from "../../../services/userService";
import TableComponent from "../../../components/TableComponent";
import Loader from "../../../components/Loader";
const Downline = () => {
  // Modal state
  const [open, setopen] = useState(false);
  const [packageID, setpackageID] = useState("");
  const [loading, setLoading] = useState(false);

  const [sponser, setSponser] = useState("OZO-");
  const [tokenBalance, setTokenBalance] = useState(0);
  const [tokenContribution, setTokenContribution] = useState(0);
  const [depositContribution, setDepositContribution] = useState(0);
  const [depositWalletBalance, setDepositWalletBalance] = useState(0);
  const [newInvestedAmount, setNewInvestedAmount] = useState(0);

  const [downline, setDownline] = useState([]);

  // package Name
  const [packageName, setPackageName] = useState("");
  const [paymentAmount, setpaymentAmount] = useState("");
  const [packageDetailModal, setpackageDetailModal] = useState(false);

  let email = useRef();
  const validateAmount = (amount, range) => {
    //console.log(amount, range);
    const [min, max] = range
      ?.split("-")
      .map((str) => parseFloat(str.replace("$", "")));
    return amount >= min && amount <= max;
  };
  const calculateCompoundedAmount = (principal, rate, days) => {
    const rateDecimal = parseFloat(rate.replace("%", "")) / 100; // Convert percentage to a decimal
    const dailyRate = rateDecimal / 365; // Adjust this to 252 if considering only weekdays
    //console.log(dailyRate, rateDecimal, rate, days);
    const interest = principal * rateDecimal * days;

    return principal + interest; // Return the total amount after interest
  };

  // const handleModal = () => {
  //   if (paymentAmount !== "") {
  //     setopen((prev) => !prev);
  //     // setpackageDetailModal((prev) => !prev);
  //   }
  // };
  const handleModal = () => {
    const loggedInUserId = JSON.parse(localStorage.getItem("user_data")).userId;
    const loggedInUserNumeric = parseInt(loggedInUserId.split("-")[1], 10);
    const sponserNumeric = parseInt(sponser.split("-")[1], 10);
    //console.log(loggedInUserNumeric, sponserNumeric);
    if (loggedInUserNumeric > sponserNumeric) {
      toast.error("You can't activate a package for an upline.");
      return; // Exit the function early
    }
    const selectedPackage = packages.find((pkg) => pkg.name === packageName);
    const validatedAmount = parseFloat(paymentAmount);
    //console.log(parseFloat(paymentAmount), selectedPackage.priceRange);
    if (
      validateAmount(parseFloat(paymentAmount), selectedPackage.priceRange) ||
      (packageID === 5 && parseFloat(paymentAmount) === 5000) ||
      (packageID === 7 && parseFloat(paymentAmount) === 10000) ||
      (packageID === 9 && parseFloat(paymentAmount) === 2500) ||
      (packageID === 8 && parseFloat(paymentAmount) === 25000)
    ) {
      let allowableToken;
      if (useTokenWallet) {
        allowableToken = Math.min(
          paymentAmount * 0.5,
          parseFloat(tokenBalance)
        );
      } else {
        allowableToken = 0;
      }
      const depositFloat = parseFloat(depositWalletBalance);

      if (
        parseFloat(depositWalletBalance) + parseFloat(allowableToken) <
        paymentAmount
      ) {
        //console.log("first");
        toast.error(
          "Insufficient funds. Please add more amount to deposit wallet."
        );
        return;
      }

      setTokenContribution(allowableToken);
      setDepositContribution(paymentAmount - allowableToken);
      setopen((prev) => !prev);
      setpackageDetailModal((prev) => !prev);

      const getFeatureValue = (selectedPackage, label) => {
        const feature = selectedPackage.features.find((detail) =>
          detail.includes(label)
        );
        if (!feature) return null;
        return feature.split(":")[1].trim();
      };

      const roiValue = getFeatureValue(selectedPackage, "ROI");
      const durationValue = getFeatureValue(selectedPackage, "Duration");
      const days = parseInt(durationValue?.split(" ")[0]); // Extract the number of days from the string

      const roiReturn = calculateCompoundedAmount(
        parseFloat(paymentAmount),
        roiValue,
        days
      );

      setpackageDetailsForm({
        ...packageDetailsForm,
        packageNameField: selectedPackage.name,
        dailyReturnsFeild: roiValue,
        durationField: durationValue,
        amountToPay: paymentAmount,
        earning: `${roiReturn.toFixed(2)}$`,
      });
    } else {
      toast.error(
        `Please enter an amount between ${selectedPackage.priceRange}`
      );
    }
  };
  const [useTokenWallet, setUseTokenWallet] = useState(false);

  const columns = [
    { key: "id", label: "SI No" },
    { key: "user_id", label: "User" },
    { key: "package", label: "Package" },
    { key: "daysPassed", label: "Days", append: " days" },
    { key: "invested_amount", label: "Invested" },
    { key: "investment_date", label: "Investment Date" },
    { key: "expires_on", label: "Expiry" },
    { key: "deposit_amount", label: "Cash" },
    { key: "token_amount", label: "Token" },
    { key: "type", label: "Type" },
  ];
  const [packageDetailsForm, setpackageDetailsForm] = useState({
    packageNameField: " ",
    dailyReturnsFeild: "",
    durationField: "",
    amountToPay: "",
    earning: "",
  });

  const handlePackageDetail = async () => {
    const transactionData = {
      sponsor: sponser,
      package_id: Number(packageID),
      invested_amount: Number(paymentAmount),
      deposit_amount: Number(depositContribution),
      token_amount: Number(tokenContribution),
    };
    //console.log(packageID);
    setLoading(true);
    try {
      const response = await createTransactionDownline(transactionData);
      //console.log("Transaction created:", response);
      setpackageDetailModal((prev) => !prev);
      // Close modal and provide feedback to the user
      setpackageDetailModal(false);
      setLoading(false);

      toast.success("Transaction created successfully!");
    } catch (error) {
      setpackageDetailModal((prev) => !prev);
      setLoading(false);

      toast.error("Error creating transaction. Please try again.");
    } finally {
      setpackageDetailModal(false);
      setopen(false);
      setpaymentAmount("");
      setDepositContribution("");
      setTokenBalance("");
      setUseTokenWallet(false);
      setNewInvestedAmount("");
      setSponser("OZO-");
    }
  };

  useEffect(() => {
    setLoading(true);

    const fetchWallet = async () => {
      try {
        const { data } = await fetchAllWalletsByUserId();

        // Handle and use the data as required
        //console.log(data);
        setDepositWalletBalance(data.data[0].deposit_wallet_tec || 0);
        setTokenBalance(data.data[0].token_wallet || 0);
      } catch (error) {
        toast.error("Something went wrong! Please login again");
      }
    };
    fetchWallet();
    const fetchDownline = async () => {
      try {
        const response = await getDownlineReport();
        if (response.data.success) {
          setDownline(response.data.data);
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        console.log(error);
        if (
          error?.response?.data?.message ===
          "Token email does not match request email"
        ) {
          toast.error("Invalid Request");
        } else {
          toast.error("Something went wrong");
        }
      }
    };
    fetchDownline();
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000); // 10000 milliseconds = 10 seconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  return loading ? (
    <div className="mt-[-100px]">
      <Loader />
    </div>
  ) : (
    <div className="overflow-x-hidden min-h-[80vh] bg-[#0a090d]  w-full">
      <PackageMap
        setopen={setopen}
        setpackageID={setpackageID}
        setPackageName={setPackageName}
      />

      {open && (
        <div className="w-full flex  justify-center absolute top-0 left-0 max-h-full h-full  items-center bg-black bg-opacity-70  ">
          <div className="max-w-[450px] rounded-2xl bg-[#0a090d] p-6 min-h-[280px] relative">
            <button
              onClick={() => {
                setopen((prev) => !prev);
                setpaymentAmount("");
                setDepositContribution("");
                setTokenBalance("");
                setUseTokenWallet(false);
                setSponser("OZO-");
              }}
              className="rounded-full absolute -top-4 -right-4 w-10 p-3  bg-gradient-to-r text-white from-newStart via-newMid to-newEnd"
            >
              <img
                src="../images/icons/close.png"
                className="w-8"
                alt="Close"
              />
            </button>
            <p className="font-medium text-sm tracking-wider">{packageName}</p>

            <h1 className="text-4xl font-medium mb-10">Payment</h1>

            <label htmlFor="paymentamount" className="">
              Downline ID
            </label>
            <input
              id="downlineId"
              value={sponser}
              onChange={(e) => {
                setSponser(e.target.value);
              }}
              className="bg-black px-6 py-3 mt-4 mb-6 rounded-2xl w-full"
            />
            <label htmlFor="paymentamount" className="">
              Total Amount to Invest
            </label>
            <input
              id="paymentamount"
              value={paymentAmount}
              type="number"
              onChange={(e) => {
                const enteredValue = parseFloat(e.target.value);
                setpaymentAmount(enteredValue);
                // setNewInvestedAmount(enteredValue + enteredValue * 0.02);

                if (useTokenWallet) {
                  // Your logic to use token wallet and its current calculation of half
                  const allowableToken = Math.min(
                    enteredValue * 0.5,
                    parseFloat(tokenBalance)
                  );
                  setTokenContribution(allowableToken);
                  setDepositContribution(enteredValue - allowableToken);
                } else {
                  // Your logic to use deposit only
                  setTokenContribution(0);
                  setDepositContribution(enteredValue);
                }
              }}
              className="bg-black px-6 py-3 mt-4 mb-6 rounded-2xl w-full"
            />
            {/* {packageID !== 5 && packageID != 6 && ( */}
            {/* <>
              <label htmlFor="newInvestedAmount" className="">
                Package will be activated for
              </label>
              <input
                id="newInvestedAmount"
                value={newInvestedAmount}
                readOnly
                className="bg-black px-6 py-3 mt-4 mb-6 rounded-2xl w-full"
              />
            </> */}
            {/* )} */}
            {useTokenWallet && (
              <>
                <label htmlFor="tokenContribution" className="mt-1">
                  Amount from Token Wallet (Max: ${tokenBalance})
                </label>
                <input
                  id="tokenContribution"
                  value={tokenContribution}
                  className="bg-black px-6 py-3 mt-4 mb-6 rounded-2xl w-full"
                />
                <label htmlFor="depositContribution" className="">
                  Amount from Deposit Wallet
                </label>
                <input
                  id="depositContribution"
                  value={depositContribution}
                  readOnly
                  className="bg-black px-6 py-3 mt-4 mb-6 rounded-2xl w-full"
                />
              </>
            )}
            <div className="flex gap-2 align-center justify-center">
              <input
                type="checkbox"
                checked={useTokenWallet}
                onChange={(e) => setUseTokenWallet(e.target.checked)}
                className="bg-black  mb-6 rounded-full "
                style={{ width: "20px", height: "20px" }}
              />
              <label>Use Token Wallet</label>
            </div>
            <button
              onClick={handleModal}
              className="w-full bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {packageDetailModal && (
        <div className="w-full flex justify-center absolute top-0 left-0 max-h-full z-40 h-full  items-center bg-black bg-opacity-70  ">
          <div className="max-w-[450px] rounded-2xl bg-[#0a090d] p-6 min-h-[280px] relative">
            <button
              onClick={() => setpackageDetailModal((prev) => !prev)}
              className="rounded-full absolute -top-4 -right-4 w-10 p-3  bg-gradient-to-r text-white from-newStart via-newMid to-newEnd  "
            >
              <img src="../images/icons/close.png" className="w-8" />
            </button>

            <h1 className="text-4xl font-medium mb-6">Package Detail</h1>

            <label htmlFor="packageName" className="text-sm ">
              Package name
            </label>
            <input
              id="packageName"
              name="packageNameField"
              value={packageDetailsForm.packageNameField}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="dailyReturnsFeild" className="text-sm ">
              Daily returns
            </label>
            <input
              id="dailyReturnsFeild"
              name="dailyReturnsFeild"
              value={packageDetailsForm.dailyReturnsFeild}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="durationField" className="text-sm ">
              Package duration
            </label>
            <input
              id="durationField"
              name="durationField"
              value={packageDetailsForm.durationField}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />

            <label htmlFor="amountToPay" className="text-sm ">
              Amount to pay
            </label>
            <input
              id="amountToPay"
              name="amountToPay"
              value={packageDetailsForm.amountToPay}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />
            {/* {packageID !== 5 && packageID != 6 && ( */}
            {/* <>
              <label htmlFor="newInvestedAmount" className="">
                Package will be activated for
              </label>
              <input
                id="newInvestedAmount"
                value={newInvestedAmount}
                readOnly
                className="bg-black px-6 py-3 mt-4 mb-6 rounded-2xl w-full"
              />
            </> */}
            {/* )} */}
            <label htmlFor="earning" className="text-sm ">
              Earning
            </label>
            <input
              id="earning"
              name="earning"
              value={packageDetailsForm.earning}
              className="bg-black px-6 py-2 mt-2 mb-4  rounded-2xl w-full"
            />
            <button
              onClick={handlePackageDetail}
              className={`w-full  bg-gradient-to-r from-newStart via-newMid to-newEnd rounded-xl p-3
            flex justify-center item-center  
              ${loading ? "cursor-not-allowed opacity-70" : ""}
              
              `}
              disabled={loading}
            >
              {loading ? (
                <FiLoader className="animate-spin text-blue-500" size={24} />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </div>
      )}

      <TableComponent
        tableData={downline}
        columns={columns}
        title={"All Investments"}
      />
    </div>
  );
};

export default Downline;
