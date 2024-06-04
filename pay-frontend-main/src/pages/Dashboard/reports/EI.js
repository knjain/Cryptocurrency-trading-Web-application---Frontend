import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import TableComponent from "../../../components/TableComponent";
import Loader from "../../../components/Loader";
import { getEIReport } from "../../../services/userService";

export const EI = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const columns = [
    { key: "id", label: "SI No", type: "increment" },
    { key: "achievement", label: "Achievement" },
    { key: "reward_amount", label: "Reward Amount($)", prepend: "$" },
    // { key: "reward_type", label: "Reward Type", prepend: "$" },
    { key: "date", label: "Date" },
  ];

  useEffect(() => {
    const fetchEIReport = async () => {
      setIsLoading(true);
      try {
        const response = await getEIReport();
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
    fetchEIReport();
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
            title={"Carrer Reward Transactions"}
          />
        </div>
      )}
    </>
  );
};
