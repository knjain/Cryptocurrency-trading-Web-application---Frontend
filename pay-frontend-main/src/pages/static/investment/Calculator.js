import { terminal } from "fontawesome";
import React, { useState, useEffect } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Calculator = ({ packages, navigate, isCalci }) => {
  const [term, setTerm] = useState("180");
  const [cro, setCRO] = useState("");
  // const [token, setToken] = useState("Bitcoin");
  const [amount, setAmount] = useState(10000);
  const [dailyReturn, setDailyReturn] = useState();
  const [referral, setReferral] = useState();
  const [referralLevel1, setReferralLevel1] = useState(5);
  const [referralLevel2, setReferralLevel2] = useState(3);
  const [referralLevel3, setReferralLevel3] = useState(2);

  const [capping, setCapping] = useState();
  const [principle, setPrinciple] = useState();
  const [monthlyReturn, setMonthlyReturn] = useState();
  const [totalReturn, setTotalReturn] = useState();

  useEffect(() => {
    const result = getPackagesDetails(amount);
    result.totalReturn = Number(result?.totalReturn);
    result.monthlyReturn = Number(result?.monthlyReturn);
    if (result) {
      const roundedDaily = parseFloat((result?.roi * 100).toFixed(2));
      setDailyReturn(roundedDaily);
      const roundedMonthly = parseFloat(result?.monthlyReturn?.toFixed(2));
      setMonthlyReturn(roundedMonthly);
      const roundedTotal = parseFloat(result?.totalReturn?.toFixed(2));
      setTotalReturn(roundedTotal);
    } else {
      //console.log("Invalid inputs or no matching package found.");
    }
  }, [amount]); // Depend on these states
  const getPackagesDetails = (amount) => {
    let selectedPackage = null;
    let roi = 0;
    // Determine the selected package based on the amount
    if (parseFloat(amount) === 5000) {
      selectedPackage = packages[1];
      setReferral(6);
      setReferralLevel1(10);
      setReferralLevel2(0);
      setReferralLevel3(0);

      setCapping(3000);
      setPrinciple(100);
      setCRO("Ozo Gold");
      setTerm("100");
    } else if (parseFloat(amount) === 10000) {
      selectedPackage = packages[2];
      // setCRO("$15000-$34999");
      setReferral(7);
      setReferralLevel1(10);
      setReferralLevel2(0);
      setReferralLevel3(0);
      setCapping(6000);
      setPrinciple(100);
      setCRO("Ozo Prime");
      setTerm("100");
    } else if (parseFloat(amount) === 25000) {
      selectedPackage = packages[3];
      // setCRO("$35000-$100000");
      setReferral(8);
      setCapping(1200);
      setReferralLevel1(10);
      setReferralLevel2(0);
      setReferralLevel3(0);
      setPrinciple(100);
      setCRO("Ozo Power");
      setTerm("100");
    } else if (parseFloat(amount) === 2500) {
      selectedPackage = packages[4];
      // setCRO("$35000-$100000");
      setReferral(10);
      setCapping(100);
      setReferralLevel1(10);
      setReferralLevel2(0);
      setReferralLevel3(0);
      setPrinciple(100);
      setCRO("Ozo Striker");
      setTerm("150");
    } else {
      selectedPackage = packages[0];
      setCRO("Ozo Start");
      setReferral(5);
      setReferralLevel1(5);
      setReferralLevel2(3);
      setReferralLevel3(1.5);
      setCapping(1000);
      setPrinciple(100);
      setTerm("200");
    }

    if (selectedPackage) {
      roi =
        parseFloat(
          selectedPackage.features[0].split(":")[1].trim().slice(0, -1)
        ) / 100;
      const packageDuration = parseInt(
        selectedPackage.features[1].split(":")[1].trim().split(" ")[0]
      );

      // Convert termValue to its equivalent duration in days
      let userSelectedDuration;

      userSelectedDuration = packageDuration;

      const dailyReturn = Number(amount) * Number(roi);

      const monthlyReturn = Number(dailyReturn) * 30; // Approximated to 30 days for simplicity
      const totalReturn =
        Number(dailyReturn) * Number(userSelectedDuration) + Number(amount); // Original amount returned as principle

      return {
        roi,
        monthlyReturn,
        totalReturn,
      };
    }
    return null;
  };

  const options = [
    { label: "Less than 4,000", value: "Less than 4,000" },
    { label: "4,000 to 15,000", value: "4,000 to 15,000" },
    { label: "15,000 to 35,000", value: "15,000 to 35,000" },
    { label: "35,000 or more", value: "35,000 or more" },
  ];

  return (
    <div className="w-full mt-33 pt-10  text-center ">
      {isCalci && (
        <>
          <h1 className="px-6 text-5xl font-medium mb-4 text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
            Calculate Your Earning
          </h1>
          <h3 className="px-6 text-xl font-medium ">
            Select a Package, amount and duration
            <br /> to calculate your earning
          </h3>
        </>
      )}

      <div className="mx-auto max-w-5xl p-4 font-Montserrat Alternates">
        <div className="flex flex-col max-w-4xl mx-auto px-6 borderOuter py-6">
          <h1 className="flex space-x-4 pl-3 my-2 text-left text-[#FFFFFF] font-semibold leading-relaxed text-2xl font-Montserrat Alternates">
            <span>Profit calculator</span>
            <span className="text-[#18D4A7]">{cro}</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-2 justify-center items-center py-2 z-[1]">
            <div className="flex flex-col w-full md:w-1/2 text-left gap-4">
              <div className="customeBorder flex justify-between">
                <p className="ml-3 text-[#C5C3C3]">Daily Returns</p>
                <span className="mr-3 text-white text-lg">{dailyReturn}%</span>
              </div>
              {/* <div className="customeBorder flex justify-between">
                <p className="ml-3 text-[#C5C3C3]">Referal</p>
                <span className="mr-3 text-white text-lg">{referral}%</span>
              </div> */}
              <div className="customeBorder flex justify-between">
                <span className="ml-3 text-[#C5C3C3]">Capping</span>
                <span className="mr-3 text-white text-lg">${capping}</span>
              </div>
              <div className="customeBorder flex justify-between">
                <span className="ml-3 text-[#C5C3C3]">Duration</span>
                <span className="mr-3 text-white text-lg">{term}</span>
              </div>
              {/* <div className="customeBorder flex justify-between">
                <span className="ml-3 text-[#C5C3C3]">Package</span>
                <span className="mr-3 text-white text-lg">{cro}</span>
              </div> */}
            </div>
            <div className="flex flex-col w-full md:w-1/2 text-left gap-5 p-0">
              <div className="customeBorder2 flex justify-between">
                <p className="ml-3 text-[#C5C3C3]">Total earnings</p>
                <span className="mr-3 text-white text-lg">${totalReturn}</span>
              </div>
              <div className="customeBorder2 flex justify-between">
                <span className="ml-3 text-[#C5C3C3]">Binary</span>
                <span className="mr-3 text-white text-lg">10%</span>
              </div>
              <div className="customeBorder2 flex justify-between">
                <span className="ml-3 text-[#C5C3C3]">Principal returns</span>
                <span className="mr-3 text-white text-lg">{principle}%</span>
              </div>
              {/* <div className="customeBorder2 flex justify-between">
                <span className="ml-3 text-[#C5C3C3]">Duration</span>
                <span className="mr-3 text-white text-lg">{term}</span>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col gap-2 py-1 pb-2">
            <div
              className="w-full border-image flex justify-between p-4 bg-[#0E0E0E] rounded-3xl"
              style={{ borderRadius: "30px" }}
            >
              <span className="text-left w-1/4 text-[#C5C3C3]">Referral</span>

              <div className="w-3/4 bg-transparent border-1 rounded-md flex justify-between items-center text-[#C5C3C3]">
                <span>Level-1: {referralLevel1}%</span>
                <span>Level-2: {referralLevel2}%</span>
                <span>Level-3: {referralLevel3}%</span>
              </div>
            </div>

            <div
              className=" border-image flex justify-between  p-4 bg-[#0E0E0E] rounded-3xl"
              style={{ borderRadius: "30px" }}
            >
              <span
                className="text-left  w-full text-[#C5C3C3] flex align justify-center"
                style={{ alignItems: "center" }}
              >
                Enter amount (USD)
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => {
                  let value;
                  if (e.target.value > 5000 && e.target.value < 10000) {
                    value = 5000;
                  } else if (e.target.value > 10000 && e.target.value < 25000) {
                    value = 10000;
                  } else if (e.target.value > 25000) {
                    value = 25000;
                  } else {
                    value = e.target.value;
                  }
                  setAmount(value);
                }}
                className="w-full bg-transparent border-1 rounded-md text-center"
              />
            </div>
            <div
              className="cursor-pointer bg-gradient-to-r from-gradient-start-btn from-5% to-gradient-end-btn to-95% p-4 rounded-full"
              onClick={() => navigate("/signup")}
            >
              <span className="uppercase text-white underline text-[700]">
                Invest Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
