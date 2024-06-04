import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import TableComponent from "../components/TableComponent";
import Loader from "../components/Loader";
import axiosInstance from "../services/axiosInstance";
import { baseURL } from "../constants/Constant";

function getReport() {
  return axiosInstance.get(`${baseURL}/api/kyc/report`);
}
function getReportForex() {
  return axiosInstance.get(`${baseURL}/api/kyc/report-forex`);
}
export const TradeReport = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const columns = [
    { key: "TradeId", label: "Trade ID", type: "increment" },
    { key: "TradeDate", label: "Trade Date" },
    { key: "Pair", label: "Pair" },
    { key: "BuyingPrice", label: "Buying Price ($)", prepend: "$" },
    { key: "OpenPrice", label: "Open Price ($)", prepend: "$" },
    { key: "HighPrice", label: "High Price ($)", prepend: "$" },
    { key: "LowPrice", label: "Low Price ($)", prepend: "$" },
    { key: "Volume", label: "Volume" },
    { key: "ProfitLoss", label: "Profit / Loss", prepend: "$" },
    { key: "ProfitPercent", label: "Profit (%)", append: "%" },
    // { key: "AccumulatedProfit", label: "Accumulated Profit ($)", prepend: "$" },
  ];
  const forexColumn = [
    { key: "id", label: "ID", type: "increment" },
    { key: "Date", label: "Date" },
    { key: "Pair", label: "Pair" },
    { key: "Price", label: "Price ($)", prepend: "$" },
    { key: "Lots", label: "Lots" },
    { key: "OpenPrice", label: "Open Price ($)", prepend: "$" },
    { key: "HighPrice", label: "High Price ($)", prepend: "$" },
    { key: "LowPrice", label: "Low Price ($)", prepend: "$" },
    { key: "Pips", label: "Pips" },
    { key: "Profit", label: "Profit (USD)", prepend: "$" },
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
        const response1 = await getReportForex();
        //console.log(response1);
        if (response1.data.success) {
          setData1(response1.data.data);
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
              title={"Crypto Trading Report"}
            />
          </div>
          <div
            className="rounded-xl tableline  bg-black hover:shadow-xl border-[1px] border-solid border-[#E8ADFF] mt-20"
            // style={{ border: "1px solid #E8ADFF " }}
          >
            <TableComponent
              tableData={data1}
              columns={forexColumn}
              title={"Forex report"}
            />
          </div>
        </div>
      )}
    </>
  );
};
