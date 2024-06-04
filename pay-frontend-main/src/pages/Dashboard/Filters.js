import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

export const Filters = ({ onFilter }) => {
  const options = useMemo(() => countryList().getData(), []);

  const [filters, setFilters] = useState({
    userId: "",
    country: "",
    status: "",
    emailVerified: false,
  });
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "bg-[#0a090d]",
      color: "#FFFFFF",
      border: 0,
      outline: "1px solid white",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: "black",
        color: "#FFFFFF",
        // cursor: isDisabled ? 'not-allowed' : 'default',
      };
    },
    singleValue: (styles) => ({
      ...styles,
      color: "#FFFFFF", // Change the text color to white for the selected value
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
    }),
    input: (provided) => ({
      ...provided,
      color: "white",
      border: "1px solid black",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid black",
      },
      borderRadius: "8px",
    }),
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (selectedOption, meta) => {
    //console.log(selectedOption, meta);
    setFilters((prev) => ({
      ...prev,
      [meta.name]: selectedOption ? selectedOption.label : "",
    }));
  };

  const handleSubmit = () => {
    //console.log(filters);
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters({
      userId: "",
      country: "",
      status: "",
      emailVerified: false,
    });
    onFilter({});
  };

  return (
    <div className="flex flex-col md:flex-row align-center gap-4 my-4 mx-8">
      <div className="flex flex-col w-full md:w-auto ">
        <label className="mb-1 text-md font-semibold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
          Search By user id
        </label>

        <input
          type="text"
          name="userId"
          placeholder="Search by User ID"
          value={filters.userId}
          onChange={handleInputChange}
          className="flex-grow px-4 pr-40 rounded bg-[#0a090d] text-white text-left py-2 md:py-0"
          style={{ border: "1px solid white", borderRadius: "8px" }}
        />
      </div>
      <div className="flex flex-col w-full md:w-auto min-w-[200px]">
        <label className="mb-1 text-md font-semibold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
          Country
        </label>
        <Select
          name="country"
          options={options}
          value={options.find((opt) => opt.label === filters.country)}
          onChange={handleSelectChange}
          styles={colourStyles}
          placeholder="Select Country"
          isClearable
        />
      </div>

      <div className="flex flex-col w-full md:w-auto ">
        <label className="mb-1 text-md font-semibold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
          Status
        </label>
        <select
          style={{ border: "1px solid white", borderRadius: "8px" }}
          name="status"
          value={filters.status}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded bg-[#0a090d] text-white"
        >
          <option value="">Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <div className="flex flex-col w-full md:w-auto  ">
        <label className="mb-1 text-md font-semibold text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text">
          Email Verified
        </label>
        <select
          style={{ border: "1px solid white", borderRadius: "8px" }}
          name="emailVerified"
          value={filters.emailVerified}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded bg-[#0a090d] text-white"
        >
          <option value="">Select Verification Status</option>
          <option value={1}>Verified</option>
          <option value={0}>Not Verified</option>
        </select>
      </div>

      <div className="mt-4 md:mt-0 flex justify-center">
        <button
          onClick={handleSubmit}
          className="px-8 py-2 mt-6 bg-blue-600 text-white font-bold rounded-lg mx-2 bg-gradient-to-r from-newStart via-newMid to-newEnd"
        >
          Submit
        </button>
        <button
          onClick={handleReset}
          className="px-8 py-2 mt-6  bg-red-600 text-white fnt-bold rounded-lg mx-2 bg-gradient-to-r from-newStart via-newMid to-newEnd"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
