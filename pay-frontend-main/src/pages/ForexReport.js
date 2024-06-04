import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import TableComponent from "../components/TableComponent";
import Loader from "../components/Loader";
import axiosInstance from "../services/axiosInstance";
import { baseURL } from "../constants/Constant";

function getReport() {
  return axiosInstance.get(`${baseURL}/api/kyc/report-forex`);
}
export const ForexReport = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const columns = [
    { key: "id", label: "ID", type: "increment" },
    { key: "Date", label: "Date" },
    { key: "Pair", label: "Pair" },
    { key: "Price", label: "Price ($)", prepend: "$" },
    { key: "Lots", label: "Lots" },
    { key: "Open_Price", label: "Open Price ($)", prepend: "$" },
    { key: "High_Price", label: "High Price ($)", prepend: "$" },
    { key: "Low_Price", label: "Low Price ($)", prepend: "$" },
    { key: "Pips", label: "Pips" },
    { key: "Profit_USD", label: "Profit (USD)", prepend: "$" },
  ];

  useEffect(() => {
    const fetchEIReport = async () => {
      setIsLoading(true);
      try {
        const response = await getReport();
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
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="mt-[-100px]">
          <Loader />
        </div>
      ) : (
        <div className="relative overflow-x-hidden flex flex-col justify-center my-20 mx-10 md:mx-20 lg:mx-32">
          <div
            className="rounded-xl tableline  bg-black hover:shadow-xl border-[1px] border-solid border-[#E8ADFF]"
            // style={{ border: "1px solid #E8ADFF " }}
          >
            <TableComponent
              tableData={data}
              columns={columns}
              title={"Forex report"}
            />
          </div>
        </div>
      )}
    </>
  );
};
