import React, { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-hot-toast";
import FinalTree from "./FinalTree";
import { Referral } from "./Referral";
import { getButtonClass } from "../../components/TabClass";
import { useLocation } from "react-router";
const Genealogy = () => {
  const location = useLocation();
  const initialState = location.state?.genealogyType || "Referral";

  const [genealogyState, setgenealogyState] = useState(initialState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex justify-center items-center ">
        <div class="px-2 w-full md:w-auto absolute top-24 md:top-44 flex justify-center items-center">
          <div class="max-w-[38rem] md:max-w-full md:mx-0 flex items-center flex-row justify-center w-full rounded-full border-2">
            <button
              onClick={() => setgenealogyState("Referral")}
              className={`${getButtonClass({
                stateType: "Referral",
                state: genealogyState,
              })} w-1/2 sm:w-auto`}
            >
              Referral
            </button>
            <button
              onClick={() => setgenealogyState("Binary")}
              className={`${getButtonClass({
                stateType: "Binary",
                state: genealogyState,
              })} w-1/2 sm:w-auto`}
            >
              Binary tree
            </button>
          </div>
        </div>
        <div className="overflow-x-auto min-h-[100vh] py-20 w-full bg-[#0a090d] md:px-12 md:mt-0">
          {genealogyState === "Referral" && <Referral />}
          {genealogyState === "Binary" && <FinalTree />}
        </div>
      </div>
    </>
  );
};
export default Genealogy;
