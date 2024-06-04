import React, { useState, useEffect } from "react";

import { getButtonClass } from "../../../components/TabClass";

import Submit from "./Submit";
import { toast } from "react-hot-toast";

import { fetchTickets } from "../../../services/userService";
import TableComponent from "../../../components/TableComponent";
const Tickets = () => {
  const [tickets, setTickets] = useState("Submit");

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="px-3 w-full md:w-auto absolute top-24 md:top-44 flex justify-center items-center">
          <div className=" md:max-w-full md:mx-0 flex items-center flex-row justify-center w-full rounded-full border-2">
            <button
              onClick={() => setTickets("Submit")}
              className={`${getButtonClass({
                stateType: "Submit",
                state: tickets,
              })} w-1/2 sm:w-auto`}
            >
              Submit a Ticket
            </button>
            <button
              onClick={() => setTickets("list")}
              className={`${getButtonClass({
                stateType: "list",
                state: tickets,
              })} w-1/2 sm:w-auto`}
            >
              Ticket list
            </button>
          </div>
        </div>
        <div className="overflow-x-hidden min-h-[100vh] py-20 w-full bg-[#0a090d] md:px-12 md:mt-0">
          {tickets === "Submit" && <Submit />}
          {tickets === "list" && <List />}
        </div>
      </div>
    </>
  );
};
const columns = [
  { key: "id", label: "Ticket No" },
  { key: "department", label: "Department" },
  { key: "service", label: "Service" },
  { key: "subject", label: "Subject" },
  { key: "status", label: "Status" },
  { key: "updated_date", label: "Last Updated Date" },
  { key: "document", label: "Document" },
  { key: "reply", label: "Admin Response" },
];
const List = () => {
  // table data
  const [data, setData] = useState([]);
  // ticketListState
  const [totalTickets, setTotalTickets] = useState("0");
  const [openTickets, setOpenTickets] = useState("0");
  const [closedTickets, setClosedTickets] = useState("0");

  // percentages state
  const [totalTicketsPercent, setTotalTicketsPercent] = useState("0");
  const [openTicketsPercent, setOpenTicketsPercent] = useState("0");
  const [closedTicketsPercent, setClosedTicketsPercent] = useState("0");
  useEffect(() => {
    const getAllTickets = async () => {
      try {
        const response = await fetchTickets();
        if (response.data) {
          setData(response.data.data);
          calculateTicketPercentages(response.data.data);
        } else {
          toast.error("Something went wrong");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    getAllTickets();
  }, []);

  const calculateTicketPercentages = (tickets) => {
    const total = tickets.length;
    const open = tickets.filter((ticket) => ticket.status === "Open").length;
    const closed = tickets.filter(
      (ticket) => ticket.status === "Closed"
    ).length;

    setTotalTickets(total);
    setOpenTickets(open);
    setClosedTickets(closed);
    let totalPercentage;
    let openPercentage;
    let closedPercentage;
    if (total > 0) {
      totalPercentage = Math.round((total / tickets.length) * 100);
      openPercentage = Math.round((open / tickets.length) * 100);
      closedPercentage = Math.round((closed / tickets.length) * 100);
    } else {
      totalPercentage = 0;
      openPercentage = 0;
      closedPercentage = 0;
    }

    setTotalTicketsPercent(totalPercentage);
    setOpenTicketsPercent(openPercentage);
    setClosedTicketsPercent(closedPercentage);
  };
  return (
    <div className="max-w-6xl mx-auto w-full px-6 mt-6">
      <div className="flex md:flex-nowrap flex-wrap gap-3 rounded-2xl p-4 justify-between bg-gradient-to-r from-newStart via-newMid to-newEnd">
        <div className="w-full max-w-[350px] min-h-[180px] p-4 flex  flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white ">
          <h3 className="text-xl ">Tickets</h3>
          <div className="flex justify-between">
            <p className="text-2xl text-black ">{totalTickets}</p>{" "}
            {/* <span className="rounded-xl px-4 flex text-rose-700 bg-rose-300 font-semibold py-2">
              {totalTicketsPercent}%{" "}
              <img src="../images/icons/down.png" className="w-6  h-5" />
            </span> */}
          </div>
          <p className="text-xl">Total Tickets</p>
        </div>

        <div className="w-full max-w-[350px] min-h-[180px] p-4 flex flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white ">
          <h3 className="text-xl ">Open Tickets</h3>
          <div className="flex justify-between">
            <p className="text-2xl text-black ">{openTickets}</p>{" "}
            {/* <span className="rounded-xl px-4 text-green-600  flex font-semibold bg-green-200 py-2">
              {openTicketsPercent || 0}%{" "}
              <img src="../images/icons/up.png" className="w-6  h-5" />
            </span> */}
          </div>
          <p className="text-xl">In the order</p>
        </div>

        <div className="w-full max-w-[350px] min-h-[180px] p-4 flex flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white ">
          <h3 className="text-xl "> Closed Tickets</h3>
          <div className="flex justify-between">
            <p className="text-2xl text-black ">{closedTickets}</p>{" "}
            {/* <span className="rounded-xl px-4 text-green-600  flex font-semibold bg-green-200 py-2">
              {closedTicketsPercent}%{" "}
              <img src="../images/icons/up.png" className="w-6  h-5" />
            </span> */}
          </div>
          <p className="text-xl">Answered</p>
        </div>
      </div>

      <TableComponent tableData={data} columns={columns} title={"Tickets"} />
    </div>
  );
};
export default Tickets;
