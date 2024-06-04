import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import TableComponent from "../../../components/TableComponent";
import Loader from "../../../components/Loader";
import { getDIReport } from "../../../services/userService";

export const DepositsReport = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    { key: "id", label: "SI No" },

    { key: "txn_id", label: "Transaction ID" },
    // { key: "user_id", label: "User ID" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount", prepend: "$" },
    // { key: "charges", label: "Charges", prepend: "$" },
    { key: "crypto_type", label: "Crypto Type" },
    { key: "status", label: "Status" },
  ];

  useEffect(() => {
    const fetchDIReport = async () => {
      setIsLoading(true);
      try {
        const response = await getDIReport();
        //console.log(response);
        if (response.data.success) {
          setData(response.data.data);
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wromg");
      } finally {
        setIsLoading(false);
      }
    };
    fetchDIReport();
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
            title={"Deposit Transactions"}
          />
        </div>
      )}
    </>
  );
};
