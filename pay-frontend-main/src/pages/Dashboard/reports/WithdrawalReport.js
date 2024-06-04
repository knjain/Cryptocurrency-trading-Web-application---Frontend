import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import TableComponent from "../../../components/TableComponent";
import Loader from "../../../components/Loader";
import { getWIReport } from "../../../services/userService";

export const WithdrawalReport = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    { key: "id", label: "Transaction ID" },
    // { key: "user_id", label: "User ID" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount", descend: "$" },
    { key: "charges", label: "Charges", append: "%" },
    { key: "merchant", label: "Merchant" },

    { key: "crypto_type", label: "Crypto Type" },
    { key: "wallet_type", label: "Wallet Type" },
    { key: "final_amount", label: "Final Amount", descend: "$" },

    { key: "status", label: "Status" },
    // { key: "txn_date", label: "Transaction Date" },
  ];

  useEffect(() => {
    const fetchDIReport = async () => {
      setIsLoading(true);
      try {
        const response = await getWIReport();
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
            title={"Withdrawal Report"}
          />
        </div>
      )}
    </>
  );
};
