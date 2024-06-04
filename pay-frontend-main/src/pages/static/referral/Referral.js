import React, { useState, useEffect } from "react";
import Binary from "./Binary";
import Plain from "./Plain";
const Referral = () => {
  const [referral, setReferral] = useState("Plain");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-10 lg:mt-14 py-4">
      {/* section top */}
      {/* <div className="w-full flex justify-center bg-gradient-to-r from-deep-purple-900 to-fuchsia-800 items-center min-h-[15vh] px-6 py-6">
        <div className="max-w-[20rem]   flex justify-between w-full rounded-full border-2  ">
          <button
            onClick={() => setReferral("Plain")}
            className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r focus-within:from-neutral-900 focus-within:to-black"
          >
            Referral
          </button>
          <button
            onClick={() => setReferral("Binary")}
            className=" rounded-full py-2 px-8  focus-within:bg-gradient-to-r  focus-within:from-neutral-900 focus-within:to-black"
          >
            Binary Referral
          </button>
        </div>
      </div>
      {referral == "Plain" && <Plain />}
      {referral == "Binary" && <Binary />} */}
      <Plain />
      <Binary />
    </div>
  );
};

export default Referral;
