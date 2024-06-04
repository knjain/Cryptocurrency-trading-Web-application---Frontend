import React from "react";

const HSeparator = (props) => {
  const { children, ...rest } = props;
  return (
    <div className="h-px w-full bg-opacity-30 bg-indigo-500" {...rest}></div>
  );
};

export default HSeparator;
