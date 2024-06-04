import axios from "axios";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { baseURL } from "../../constants/Constant";
import { getReferralReport } from "../../services/userService";
import TableComponent from "../../components/TableComponent";
import { Filters } from "./Filters";

export const Referral = ({ isDashboard }) => {
  // Referral Links
  // left link
  // right link
  const [LeftReferral, setLeftReferral] = useState("left");
  const [RightReferral, setRightReferral] = useState("right");
  const [copyState, setcopyState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    userId: "",
    country: "",
    status: "",
    emailVerified: false,
  });
  const [allReferralData, setAllReferralData] = useState([]);
  const [referralData, setReferralData] = useState([]);

  const referralColumns = [
    { key: "id", label: "SI No" },
    {
      key: "userData",
      label: "User",
      formatter: (value) => (
        <>
          {value.userId} <br />
          {value.name} <br />
          {value.email}
        </>
      ),
    },
    {
      key: "userData",
      label: "Country/phone",
      formatter: (value) => (
        <>
          {value.country} <br />
          {value.phone}
        </>
      ),
    },

    { key: "referral.position", label: "Position" },
    { key: "referral.registered_on", label: "Registered on" },
    { key: "userData.verified", label: "Status" },
    {
      key: "walletData.0.total_investment",
      label: "Investment",
      prepend: "$",
    },
  ];
  const applyFilters = (data) => {
    //console.log(data, filters);
    return data.filter((item) => {
      return (
        (!filters.userId ||
          item.referral.referred_id.includes(filters.userId)) &&
        (!filters.country || item.userData.country === filters.country) &&
        (!filters.status || item.userData.status === filters.status) &&
        (!filters.emailVerified ||
          item.userData.verified === Number(filters.emailVerified))
      );
    });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  useEffect(() => {
    const fetchReferralData = async () => {
      setIsLoading(true);
      try {
        const response = await getReferralReport();

        if (response.data.success) {
          //console.log(response);
          setAllReferralData(response.data.data);
          setReferralData(response.data.data);
        } else {
          toast.error("Failed to fetch referral data");
        }
      } catch (error) {
        toast.error("An error occurred while fetching referral data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReferralData();

    const userData = JSON.parse(localStorage.getItem("user_data"));

    setLeftReferral(
      `https://oneozo.com/signup/${userData.userId}/${LeftReferral}`
    );
    setRightReferral(
      `https://oneozo.com/signup/${userData.userId}/${RightReferral}`
    );
  }, []);
  useEffect(() => {
    if (allReferralData.length > 0) {
      //console.log(filters, allReferralData);
      // Ensure that data has been fetched before filtering
      const filteredData = applyFilters(allReferralData);
      //console.log(filteredData);
      setReferralData(filteredData);
    }
  }, [filters]);
  return (
    <div className="overflow-x-hidden min-h-[90vh] bg-[#0a090d] pt-4 pb-16 px-2 md:px-6  w-full">
      <Filters onFilter={handleFilterChange} />
      {!isDashboard && (
        <div className="w-full mx-auto">
          <h1 className="text-5xl mt-12 mb-6 font-semibold">Invite Friends</h1>

          <div className="w-full grid grid-cols-2 gap-x-2 md:gap-x-8">
            <div>
              <p className="mb-4 text-center">Left Referral Link</p>
              <CopyToClipboard
                text={LeftReferral}
                onCopy={() => {
                  setcopyState(true);
                  if (copyState)
                    toast.success("Left Referral Link Copy Successfully");
                }}
              >
                <button className="text-center px-6 py-4 rounded-lg bg-gradient-to-r from-newStart via-newMid to-newEnd w-full font-bold">
                  👉 Click here to copy the Left Referral link
                </button>
              </CopyToClipboard>{" "}
            </div>
            <div className="">
              <p className="mb-4 text-center">Right Referral Link</p>
              <CopyToClipboard
                text={RightReferral}
                onCopy={() => {
                  setcopyState(true);
                  if (copyState)
                    toast.success("Right Referral Link Copy Successfully");
                }}
              >
                <button className="text-center px-6 py-4 rounded-lg bg-gradient-to-r from-newStart via-newMid to-newEnd w-full font-bold">
                  👉 Click here to copy the Right Referral link
                </button>
              </CopyToClipboard>{" "}
            </div>
          </div>
        </div>
      )}
      <TableComponent
        tableData={referralData}
        columns={referralColumns}
        title={"Referral Details"}
      />
    </div>
  );
};
