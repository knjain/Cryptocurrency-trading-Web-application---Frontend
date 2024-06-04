import React from "react";
import FormPasswordComponent from "./FormPasswordComponent";
import SecurityPasswordComponent from "./SecurityPasswordComponent";

const Security = ({
  // currentpasswordcorrect,
  currentPin,
  render,
  setRender,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <FormPasswordComponent
          // currentpasswordcorrect={currentpasswordcorrect}
          render={render}
          setRender={setRender}
        />
      </div>
      <SecurityPasswordComponent
        currentPin={currentPin}
        render={render}
        setRender={setRender}
      />
    </div>
  );
};

export default Security;
