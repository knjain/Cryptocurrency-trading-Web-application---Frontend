import axios from "axios";
import { baseURL } from "../../../constants/Constant";
import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import Loader from "../../../components/Loader";
import TableComponent from "../../../components/TableComponent";
import { getBIReport } from "../../../services/userService";

export const BI = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const columns = [
    { key: "id", label: "SI No" },
    { key: "date", label: "Date" },
    {
      key: "amount",
      label: "Amount",
      descend: "$",
    },

    // { key: "position", label: "Position" },
    { key: "percentage", label: "Percentage", append: "%" },
    // { key: "referral_user_id", label: "Downline ID" },
    { key: "status", label: "Status" },
    // { key: "daily_capping_limit", label: "Daily capping limit" },
  ];
  useEffect(() => {
    const fetchBIReport = async () => {
      setIsLoading(true);
      try {
        const response = await getBIReport();
        //console.log(response);
        if (response.data.success) {
          setData(response.data.data);
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wromg");
      } finally {
        // setIsLoading(false);
      }
    };
    fetchBIReport();
    // Automatically set isDataLoaded after 10 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 10000 milliseconds = 10 seconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="mt-[-100px]">
          <Loader />
        </div>
      ) : (
        <div className="mt-12 md:px-12">
          <TableComponent
            tableData={data}
            columns={columns}
            title={"Binary Transactions "}
          />
        </div>
      )}
    </>
  );
};
