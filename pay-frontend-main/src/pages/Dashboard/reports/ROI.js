import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { getROIReport } from "../../../services/userService";
import TableComponent from "../../../components/TableComponent";
import Loader from "../../../components/Loader";

const ROI = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const columns = [
    { key: "id", label: "SI No" },
    { key: "investment.package.package_name", label: "Package" },
    { key: "investment.package.roi", label: "Percentage", append: "%" },
    {
      key: "investment.invested_amount",
      label: "Invested Amount",
      descend: "$",
    },
    { key: "date", label: "Date" },
    { key: "investment.expires_on", label: "Expiry Date" },
    { key: "amount", label: "ROI", descend: "$" },
  ];

  useEffect(() => {
    const fetchROIReport = async () => {
      setIsLoading(true);
      try {
        const response = await getROIReport();
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
    fetchROIReport();
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
            title={"ROI Report"}
          />
        </div>
      )}
    </>
  );
};

export default ROI;
