import React from "react";

const VSeparator = (props) => {
  const { children, ...rest } = props;
  return <div className="w-px bg-opacity-30 bg-indigo-500" {...rest}></div>;
};

export default VSeparator;
