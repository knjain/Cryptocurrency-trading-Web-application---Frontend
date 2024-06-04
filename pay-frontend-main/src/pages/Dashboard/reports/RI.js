import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { getRIReport } from "../../../services/userService";
import TableComponent from "../../../components/TableComponent";
import Loader from "../../../components/Loader";

export const RI = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    { key: "id", label: "SI No" },
    { key: "date", label: "Date" },
    { key: "referral_user_id", label: "Referral User" },
    { key: "position", label: "Position" },
    { key: "package", label: "Package" },
    { key: "percentage", label: "Percentage", append: "%" },
    { key: "amount", label: "Referral Amount", descend: "$" },
  ];

  useEffect(() => {
    const fetchRIReport = async () => {
      setIsLoading(true);
      try {
        const response = await getRIReport();
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
    fetchRIReport();
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
            title={"Referral Transactions"}
          />
        </div>
      )}
    </>
  );
};
