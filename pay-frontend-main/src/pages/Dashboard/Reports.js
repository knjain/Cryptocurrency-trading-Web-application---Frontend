import { React, useState } from "react";

import { EI } from "./reports/EI";
import { getButtonClass } from "../../components/TabClass";
import ROI from "./reports/ROI";
import { BI } from "./reports/BI";
import { RI } from "./reports/RI";
import { DepositsReport } from "./reports/DepositsReport";
import { TokenReport } from "./reports/TokenReport";
import { WithdrawalReport } from "./reports/WithdrawalReport";

const Reports = () => {
  const [reportState, setReportState] = useState("roi");

  return (
    <>
      <div className="flex justify-center items-center ">
        <div class="px-3 w-full md:w-auto absolute top-24 md:top-44 flex justify-center items-center">
          <div class="max-w-[38rem] md:max-w-full md:mx-0 flex items-center flex-wrap md:flex-row md:flex-nowrap justify-center w-full rounded-lg md:rounded-full border-2">
            <button
              onClick={() => setReportState("roi")}
              className={`${getButtonClass({
                stateType: "roi",
                state: reportState,
              })} w-1/3 md:w-auto`}
            >
              ROI Report
            </button>
            <button
              onClick={() => setReportState("bi")}
              className={`${getButtonClass({
                stateType: "bi",
                state: reportState,
              })} w-1/3 md:w-auto`}
            >
              BI Report
            </button>
            <button
              onClick={() => setReportState("ri")}
              className={`${getButtonClass({
                stateType: "ri",
                state: reportState,
              })} w-1/3 md:w-auto`}
            >
              RI Report
            </button>
            <button
              onClick={() => setReportState("di")}
              className={`${getButtonClass({
                stateType: "di",
                state: reportState,
              })} w-1/3 md:w-auto`}
            >
              Deposits Report
            </button>
            <button
              onClick={() => setReportState("ei")}
              className={`${getButtonClass({
                stateType: "ei",
                state: reportState,
              })} w-1/3 md:w-auto`}
            >
              Extra Income Report
            </button>
            <button
              onClick={() => setReportState("ti")}
              className={`${getButtonClass({
                stateType: "ti",
                state: reportState,
              })} w-1/3 md:w-auto`}
            >
              Tokens Report
            </button>
            <button
              onClick={() => setReportState("wi")}
              className={`${getButtonClass({
                stateType: "wi",
                state: reportState,
              })} w-1/3 md:w-auto`}
            >
              Withdrawal Report
            </button>
          </div>
        </div>

        <div className="overflow-x-hidden min-h-[100vh] pt-36 md:pt-10 pb-24 w-full bg-[#0a090d] 2 md:mt-0">
          {reportState === "roi" && <ROI />}
          {reportState === "bi" && <BI />}
          {reportState === "ri" && <RI />}
          {reportState === "ei" && <EI />}
          {reportState === "di" && <DepositsReport />}
          {reportState === "ti" && <TokenReport />}
          {reportState === "wi" && <WithdrawalReport />}
        </div>
      </div>
    </>
  );
};

export default Reports;
