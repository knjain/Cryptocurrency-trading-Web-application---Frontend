import React, { useState, useEffect } from "react";

import { toast } from "react-hot-toast";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NotifyComponent from "../../components/NotifyComponent";
import { TickerTape } from "react-ts-tradingview-widgets";

const Dashboard = () => {
  const [OpenNotification, setOpenNotification] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user_data");
    toast.success("Logged Out Successfully");
    //console.log("handleLogout works");
    navigate("/");
  };
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };
  const [activeTab, setActiveTab] = useState("overview"); // default to 'overview'

  const tabs = [
    { label: "Overview", to: "", id: "overview" },
    { label: "Investment", to: "investment", id: "investment" },
    { label: "Genealogy", to: "genealogy", id: "genealogy" },
    { label: "Tickets", to: "tickets", id: "tickets" },
    { label: "Reports", to: "reports", id: "reports" },
    { label: "Profile", to: "profile", id: "profile" },
  ];

  const handleLinkClick = (tabId) => {
    setActiveTab(tabId);
    setNavOpen(false);
  };
  const [currentTime, setCurrentTime] = useState(getUKTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getUKTime());
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  function getUKTime() {
    const ukTime = new Date().toLocaleString("en-US", {
      timeZone: "Europe/London",
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    return `${ukTime} GMT`;
  }

  return (
    <>
      <div className=" xl:overflow-x-hidden w-full bg-[#0d0d0d] font-poppins">
        {/* notification modal */}
        {OpenNotification && (
          <NotifyComponent
            OpenNotification={OpenNotification}
            setOpenNotification={setOpenNotification}
          />
        )}
        <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
          <div className="py-1 w-full  flex justify-center items-center bg-newStart text-white px-2 md:px-0 mb-6">
            <text
              className="text-xs md:text-base blinking-point1 font-bold cursor-pointer text-[#D22B2B]"
              onClick={() => navigate("/login")}
            >
              Ozo's new Power, Gold, Prime: Earn up to 2.50% daily returns.
              Start investing today!
            </text>
          </div>
          <img
            // src="../images/dashboard/header.png"
            src="../images/new/dashboard_header.png"
            className="max-h-[200px] object-cover w-full relative "
          />
          <div className="w-full absolute mx-auto px-auto">
            <div
              className="w-fit mx-10 md:mx-0 mb-6 md:mb-0 absolute md:top-[-3.5rem] md:right-[16rem] m-2 bg-newblue  bg-gradient-to-r from-newStart via-newMid to-newEnd text-white px-4 py-2 rounded-lg"
              // style={{ width: "fit-content" }}
            >
              {currentTime}+1
            </div>
            {/* <div className="absolute top-[-3rem] right-[16rem] m-2 text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text "></div> */}
            <div className="md:flex justify-center lg:gap-4 items-center md:gap-3 gap-0">
              <div className="pt-12 md:pt-6 flex flex-row md:flex-col lg:flex-row py-6 items-center justify-center">
                <div className="w-full flex justfiy-center items-center mx-6 md:gap-0 gap-3">
                  <Link to="/">
                    <img
                      className="max-h-full min-w-12 pt-2 h-full w-12 mx-3 cursor-pointer"
                      src="../images/navlogo.png"
                      alt="logo"
                    />
                  </Link>
                  <h1 className="text-xl lg:text-2xl z-10 font-medium text-center text-white">
                    ONE OZO
                  </h1>
                </div>
                <div
                  onClick={handleNavToggle}
                  className="text-3xl cursor-pointer md:hidden mx-6"
                >
                  {navOpen ? (
                    <ion-icon name="close"></ion-icon>
                  ) : (
                    <ion-icon name="menu"></ion-icon>
                  )}
                </div>
              </div>
              <div
                className={`md:rounded-full bg-black flex md:flex-row flex-col md:items-center md:pb-0  md:static md:z-auto md:pl-0 absolute z-[5] md:max-w-fit w-full px-6 my-0 py-0 transition-all duration-500 ease-in ${
                  navOpen ? "top-15 opacity-100 " : "top-[-490px]"
                } md:opacity-100 opacity-0 font-semibold font-poppins text-sm text-gray-400 font-heading justify-center `}
              >
                <div className="w-full lg:px-12 pt-3 md:pt-0">
                  <ul className="md:px-3 w-full pt-2 md:pt-0 flex flex-col gap-4 md:flex-row text-[14px]  justify-start md:items-center font-medium md:gap-4">
                    {tabs.map(
                      (tab) =>
                        tab.label !== "Profile" && (
                          <li
                            key={tab.id}
                            className={
                              activeTab === tab.id
                                ? "bg-white text-gray-900 rounded-full px-2 py-1"
                                : "focus-within:bg-white focus-within:text-gray-900 rounded-full px-2 py-1"
                            }
                          >
                            <Link
                              onClick={() => handleLinkClick(tab.id)}
                              to={tab.to}
                            >
                              {tab.label}
                            </Link>
                          </li>
                        )
                    )}
                  </ul>
                </div>
                <div className="w-full my-4 flex md:gap-6 gap-3 h-full md:pb-0 pb-6 justify-start items-center">
                  {/* <div className="rounded-full flex justify-center items-center w-10 bg-black">
              <img src="../images/dashboard/search.png" className=" p-[10px]" />
            </div> */}
                  {/* <Link
                onClick={() => setOpenNotification((prev) => !prev)}
                className="rounded-full  flex justify-center items-center w-10 bg-black"
              >
                <img
                  src="../images/dashboard/notification.png"
                  className=" p-[10px]"
                />
              </Link> */}

                  <div
                    className={`rounded-full flex justify-center items-center w-10  bg-black `}
                    style={
                      activeTab === "profile"
                        ? { border: "2px solid white" }
                        : {}
                    }
                  >
                    <Link
                      to="profile"
                      onClick={() => {
                        setActiveTab("profile");
                      }}
                    >
                      <img
                        src="../images/dashboard/user.png"
                        className=" p-[10px]"
                        onClick={handleNavToggle}
                      />
                    </Link>
                  </div>

                  <div className="">
                    <button
                      onClick={handleLogout}
                      className="px-4 py-1 bg-red-600 rounded-md text-white"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* this is to be remoived */}
        {/* <div
          className=" px-8 md:px-8  pt-24 md:pt-4 py-4 max-w-full text-transparent bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text "
          style={{ backgroundColor: "gray" }}
        >
          Your path to investment success starts now! Our website is live.
          Starting October 29th, begin building your binary network by referring
          friends. On November 4th, dive into the world of One Ozo and watch
          your investments thrive.
        </div> */}
      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
