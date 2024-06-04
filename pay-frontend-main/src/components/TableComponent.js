import React, { useEffect, useState } from "react";

const getStatusBadge = (status) => {
  switch (status) {
    case "Open":
      return (
        <span className="bg-red-500 text-white px-3 py-1 rounded-full">
          Open
        </span>
      );
    case "Closed":
      return (
        <span className="bg-green-500 text-white px-3 py-1 rounded-full">
          Closed
        </span>
      );
    case "In Progress":
      return (
        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full">
          In Progress
        </span>
      );
    default:
      return status;
  }
};
const getStatusBadgeVerfied = (status) => {
  switch (status) {
    case 1:
      return (
        <span className="bg-green-500 text-white px-3 py-1 rounded-full">
          Verified
        </span>
      );
    case 0:
      return (
        <span className="bg-red-500 text-white px-3 py-1 rounded-full">
          Unverified
        </span>
      );
    default:
      return status;
  }
};

const TableComponent = ({ tableData, columns, title }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const extractValueFromKey = (object, key) => {
    return key.split(".").reduce((o, k) => (o || {})[k], object);
  };
  useEffect(() => {
    //console.log(Math.ceil(tableData.length / 10));
    setTotalPages(
      Math.ceil(tableData.length / 10) === 0
        ? 1
        : Math.ceil(tableData.length / 10)
    );
  }, [tableData]);
  const paginatedData = tableData.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );
  const renderCellContent = (colKey, rowData, col, rowIndex) => {
    const cellData = extractValueFromKey(rowData, colKey);
    if (col.formatter) {
      const formattedData = col.formatter(cellData);
      if (React.isValidElement(formattedData)) {
        return formattedData;
      }
      return String(formattedData);
    }
    if (colKey === "id") {
      return (currentPage - 1) * 10 + rowIndex + 1;
    }
    if (colKey === "charges") {
      const amount = rowData.amount; // Assuming the key for amount is "amount"
      const charges = cellData;
      const chargedAmount = (charges / 100) * amount;

      return (
        <>
          <div>{`$${chargedAmount}`}</div>
          <div>{`(${charges}%)`}</div>
        </>
      );
    }

    if (colKey === "status") {
      return getStatusBadge(cellData);
    }
    if (colKey === "userData.verified") {
      return getStatusBadgeVerfied(cellData);
    }

    if (colKey === "document" && cellData) {
      return (
        <a
          href={cellData}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Document
        </a>
      );
    }

    // Append the specified symbol if `append` property exists
    if (col?.append) {
      return `${cellData}${col?.append}`;
    }
    if (col?.descend) {
      return `${col?.descend}${cellData}`;
    }

    return cellData;
  };

  return (
    <div
      className="overflow-x-auto w-full p-4  "
      // style={{ border: "1px solid", borderRadius: "16px" }}
    >
      <h1 className="text-4xl my-8 font-semibold">{title}</h1>
      <table className="min-w-full rounded-2xl bg-black p-4 border-collapse border border-gray-700">
        <thead>
          <tr className="text-left border border-gray-700">
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="px-4 py-4 text-center border border-gray-700 text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData?.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-2 text-center">
                No data available
              </td>
            </tr>
          ) : (
            paginatedData?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-4 py-2 text-center text-gray-300 opacity-75 border border-gray-700 "
                  >
                    {renderCellContent(col.key, row, col, rowIndex)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <div
          className={`${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage((prev) => prev - 1);
            }
          }}
        >
          Previous
        </div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <div
          className={`${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage((prev) => prev + 1);
            }
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
