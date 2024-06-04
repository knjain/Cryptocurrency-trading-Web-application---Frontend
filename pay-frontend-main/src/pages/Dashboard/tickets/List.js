import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { fetchTickets } from "../../../services/userService";

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
      <div className="flex md:flex-nowrap flex-wrap gap-3 rounded-2xl p-4 justify-between bg-gradient-to-tr from-indigo-400 to-fuchsia-600">
        <div className="w-full max-w-[350px] min-h-[180px] p-4 flex  flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white ">
          <h3 className="text-xl ">Tickets</h3>
          <div className="flex justify-between">
            <p className="text-2xl text-black ">{totalTickets}</p>{" "}
            <span className="rounded-xl px-4 flex text-rose-700 bg-rose-300 font-semibold py-2">
              {totalTicketsPercent}%{" "}
              <img src="../images/icons/down.png" className="w-6  h-5" />
            </span>
          </div>
          <p className="text-xl">Total Tickets</p>
        </div>

        <div className="w-full max-w-[350px] min-h-[180px] p-4 flex flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white ">
          <h3 className="text-xl ">Open Tickets</h3>
          <div className="flex justify-between">
            <p className="text-2xl text-black ">{openTickets}</p>{" "}
            <span className="rounded-xl px-4 text-green-600  flex font-semibold bg-green-200 py-2">
              {openTicketsPercent || 0}%{" "}
              <img src="../images/icons/up.png" className="w-6  h-5" />
            </span>
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

      <div className="overflow-x-auto w-full">
        <h1 className="text-4xl my-12 font-semibold">Tickets</h1>
        <table className="w-full">
          <thead className="bg-black w-full px-12 py-4 text-left flex ">
            <th className=" w-full max-w-[180px] ">Ticket No</th>
            <th className=" w-full max-w-[180px] ">Department</th>
            <th className=" w-full max-w-[180px] ml-12">Service</th>
            <th className=" w-full max-w-[180px] ml-12 ">Subject</th>
            <th className=" w-full max-w-[180px] ml-12 ">Status</th>
            <th className=" w-full max-w-[180px] ml-12 ">Last Updated Date</th>
          </thead>
          <tbody className="w-full">
            {data.length === 0 ? (
              <div></div>
            ) : (
              data.map((row, index) => (
                <div
                  key={index}
                  className="bg-black w-full px-12 py-4 justify-between flex"
                >
                  <div className=" w-full max-w-[180px] ml-12 ">{row.id}</div>
                  <div className=" w-full max-w-[180px] ml-12 ">
                    {row.department}
                  </div>
                  <div className=" w-full max-w-[180px] ml-12 ">
                    {row.service}
                  </div>
                  <div className=" w-full max-w-[180px] ml-12 ">
                    {row.subject}
                  </div>

                  <div className=" w-full max-w-[180px] ml-12 ">
                    {row.status}
                  </div>
                  <div className=" w-full max-w-[180px] ml-12 ">
                    {row.updated_date}
                  </div>
                </div>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
