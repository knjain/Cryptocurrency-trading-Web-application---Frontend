import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import CountdownTimer from "./CountDownTimer";

const Navbar = ({ isLoggedIn }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [earningOpen, setEarningOpen] = useState(false);
  const [tradeOpen, setTradeOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  const handleEarningOpen = () => {
    setEarningOpen(!earningOpen);
  };
  const handleTradeOpen = () => {
    setTradeOpen(!tradeOpen);
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setEarningOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  return (
    <div className="w-full fixed top-0 left-0 z-10 position-fixed ">
      <div className="py-1 w-full  flex justify-center items-center bg-newStart text-white px-2 md:px-0">
        <text
          className="text-xs md:text-base blinking-point1 font-bold cursor-pointer text-[#D22B2B]"
          onClick={() => navigate("/login")}
        >
          Get $70 Free in Ozo Tokens! Share About One Ozo on Social Media for
          Easy Rewards! 🎉
        </text>
      </div>
      <div className="lg:flex bg-black text-opacity-100 text-white items-center justify-center md:py-4 lg:px-10 px-7">
        {/* <div className="flex items-center font-poppins justify-center">
          <Link to="/">
            <img
              className="max-h-10 min-w-10 pt-2 pl-2 cursor-pointer"
              src="./images/navlogo.png"
              alt="logo"
            />
          </Link>
        </div> */}
        <div
          onClick={handleNavToggle}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          {navOpen ? (
            <ion-icon name="close"></ion-icon>
          ) : (
            <ion-icon name="menu"></ion-icon>
          )}
        </div>

        <ul
          className={`lg:flex lg:items-center bg-black lg:pb-0 absolute lg:static lg:z-auto z-[-5] left-0 w-full lg-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            navOpen ? "top-15 opacity-100 " : "top-[-490px]"
          } lg:opacity-100 opacity-0 font-semibold font-poppins text-sm text-gray-400 font-heading justify-center `}
        >
          <li className="link  lg:my-0 my-7 hover:text-gray-100">
            <Link to="/">
              <img
                className="max-h-9 min-w-9 pt-2  cursor-pointer"
                src="./images/navlogo.png"
                alt="logo"
              />
            </Link>
          </li>
          <li className="link lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link
              className="text-sm"
              to="/"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              Home
            </Link>
          </li>

          <li className="link lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link
              className="text-sm"
              to="/aboutus"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              About
            </Link>
          </li>

          <li
            className={`link relative lg:ml-10 lg:my-0 my-7 hover:text-gray-100 cursor-pointer
            `}
          >
            <a
              className="text-sm flex items-center gap-3"
              onClick={handleTradeOpen}
            >
              Trade View
              {tradeOpen ? (
                <ion-icon name="caret-up-outline"></ion-icon>
              ) : (
                <ion-icon name="caret-down-outline"></ion-icon>
              )}
            </a>
            {tradeOpen && (
              <div
                ref={dropdownRef}
                className="z-10 absolute top-full left-0 mt-4 mb-2 w-40 bg-black rounded-lg shadow-lg"
                onMouseLeave={() => setTradeOpen(false)}
              >
                <Link
                  to="tradeview"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => {
                    setNavOpen(false);
                    setTradeOpen(false);
                  }}
                >
                  Trade View
                </Link>

                <Link
                  to="trade-report"
                  className="block px-4 py-2 text-white hover:bg-gray-700 "
                  onClick={() => {
                    setNavOpen(false);
                    setTradeOpen(false);
                  }}
                >
                  Ozo Trade
                </Link>
              </div>
            )}
          </li>
          <li
            className={`link relative lg:ml-10 lg:my-0 my-7 hover:text-gray-100 cursor-pointer
            `}
          >
            <a
              className="text-sm flex items-center gap-3"
              onClick={handleEarningOpen}
            >
              Earnings
              {earningOpen ? (
                <ion-icon name="caret-up-outline"></ion-icon>
              ) : (
                <ion-icon name="caret-down-outline"></ion-icon>
              )}
            </a>
            {earningOpen && (
              <div
                ref={dropdownRef}
                className="z-10 absolute top-full left-0 mt-4 mb-2 w-40 bg-black rounded-lg shadow-lg"
                onMouseLeave={() => setEarningOpen(false)}
              >
                <Link
                  to="earning"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => {
                    setNavOpen(false);
                    setEarningOpen(false);
                  }}
                >
                  Investment
                </Link>
                <Link
                  to="referral"
                  className="block px-4 py-2 text-white hover:bg-gray-700 "
                  onClick={() => {
                    setNavOpen(false);
                    setEarningOpen(false);
                  }}
                >
                  Referral and Binary
                </Link>
                <Link
                  to="extrabonus"
                  className="block px-4 py-2 text-white hover:bg-gray-700 "
                  onClick={() => {
                    setNavOpen(false);
                    setEarningOpen(false);
                  }}
                >
                  Extra bonus for referral
                </Link>
              </div>
            )}
          </li>
          <li
            className={`link relative lg:ml-10 lg:my-0 my-7 hover:text-gray-100 
              cursor-pointer
            }`}
          >
            <a
              className="text-sm flex items-center gap-3"
              onClick={() => setResourcesOpen((prev) => !prev)}
            >
              Resources
              {resourcesOpen ? (
                <ion-icon name="caret-up-outline"></ion-icon>
              ) : (
                <ion-icon name="caret-down-outline"></ion-icon>
              )}
            </a>
            {resourcesOpen && (
              <div
                className="z-10 absolute top-full left-0 mt-4 mb-2 w-40 bg-black rounded-lg shadow-lg"
                onMouseLeave={() => setResourcesOpen(false)}
              >
                <Link
                  to="photos"
                  className="block px-4 py-2 text-white hover:bg-gray-700"
                  onClick={() => {
                    setNavOpen(false);
                    setResourcesOpen(false);
                  }}
                >
                  Photos
                </Link>
                <Link
                  to="videos"
                  className="block px-4 py-2 text-white hover:bg-gray-700 "
                  onClick={() => {
                    setNavOpen(false);
                    setResourcesOpen(false);
                  }}
                >
                  Videos
                </Link>
                <Link
                  to="pdf"
                  className="block px-4 py-2 text-white hover:bg-gray-700 "
                  onClick={() => {
                    setNavOpen(false);
                    setResourcesOpen(false);
                  }}
                >
                  PDF
                </Link>
                <Link
                  to="banners"
                  className="block px-4 py-2 text-white hover:bg-gray-700 "
                  onClick={() => {
                    setNavOpen(false);
                    setResourcesOpen(false);
                  }}
                >
                  Banners
                </Link>
                <Link
                  to="team-photos"
                  className="block px-4 py-2 text-white hover:bg-gray-700 "
                  onClick={() => {
                    setNavOpen(false);
                    setResourcesOpen(false);
                  }}
                >
                  Team Photos
                </Link>
              </div>
            )}
          </li>

          <li className="link lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link
              className="text-sm"
              to="/legal"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              Legal
            </Link>
          </li>
          <li className="link lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link
              className="text-sm"
              to="/contact"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              Contact
            </Link>
          </li>
          <li className="link lg:ml-10 lg:my-0 my-7 hover:text-gray-100">
            <Link
              className="text-sm"
              to="/faq"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              FAQ
            </Link>
          </li>

          <li
            style={{ border: "1px solid #18D4A7" }}
            className="mr-2 lg:mr-0 w-23 text-center lg:ml-10 lg:my-0 my-7 py-2 rounded-xl px-4  pulse-shadow-effect"
          >
            <Link
              className="text-sm text-center text-white "
              to={localStorage.getItem("user_data") ? "/login" : "/login"}
              onClick={() => setNavOpen(false)}
            >
              &nbsp; {localStorage.getItem("user_data") ? "Dashboard" : "Login"}{" "}
              &nbsp;
            </Link>
          </li>
          <li
            // style={{ marginLeft: "1.5rem" }}
            className=" mr-2 lg:mr-0 ml-0 lg:ml-[1.5rem] w-23 text-center lg:my-0 my-7 py-2 rounded-xl px-4 bg-gradient-to-r from-newStart via-newMid to-newEnd"
          >
            <Link
              className="text-sm text-center text-black "
              to="/signup"
              onClick={() => {
                setNavOpen(false);
              }}
            >
              Register
            </Link>
          </li>
        </ul>
      </div>

      {/* <div className="flex align-center justify-center w-full">
        <CountdownTimer />
      </div> */}
    </div>
  );
};

export default Navbar;
