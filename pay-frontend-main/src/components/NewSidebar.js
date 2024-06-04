import { Link, NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiLeftArrow, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { FaArrowLeft } from "react-icons/fa";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/aboutus",
    name: "About us",
  },
  {
    name: "Trade",
    subRoutes: [
      {
        path: "/tradeview",
        name: "Trade View ",
      },
      {
        path: "/trade-report",
        name: "Ozo Trade",
      },
    ],
  },
  {
    name: "Earnings",
    subRoutes: [
      {
        path: "/earning",
        name: "Investment",
      },
      {
        path: "/referral",
        name: "Referral and Binary",
      },
      {
        path: "/extrabonus",
        name: "Extra Bonus and Referral",
      },
    ],
  },
  {
    name: "Resources",
    subRoutes: [
      {
        path: "/photos",
        name: "Photos ",
      },
      {
        path: "/videos",
        name: "Videos ",
      },
      {
        path: "/pdf",
        name: "Pdf ",
      },
      {
        path: "/banners",
        name: "Banners ",
      },
    ],
  },
  {
    path: "/legal",
    name: "Legal",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/faq",
    name: "FAQ",
  },
];

const NewSideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const handleMouseEnter = () => {
  //   setIsOpen(true);
  // };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div
        className="flex"
        style={{ zIndex: "100" }}
        // onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          animate={{
            width: isOpen ? "230px" : "80px",
            transition: {
              duration: 0.5,
              // type: "spring",
              // damping: 10,
            },
          }}
          className={` bg-black h-[100vh] fixed overflow-y-scroll custom_sidebar`}
        >
          <div className="flex items-center justify-between px-[15px] py-[10px]">
            {isOpen && (
              <div className="text-[18px]" onClick={toggle}>
                <Link to="/">
                  <img
                    src="../images/3 3.png"
                    alt="logo"
                    className="cursor-pointer"
                  />
                </Link>
              </div>
            )}
            {!isOpen && (
              <div className="w-[30px] cursor-pointer px-[12px] pt-8">
                <FaBars onClick={toggle} className="w-15 text-[18px]" />
              </div>
            )}
          </div>
          {!isOpen && (
            <div className="flex flex-col items-center justify-center relative top-[180px]">
              <Link to="/">
                <img
                  src="../images/3 1.png"
                  alt="logo"
                  className="w-[100%] text-[18px] cursor-pointer"
                />
              </Link>
            </div>
          )}
          {isOpen && (
            <section className="mt-[0px] flex flex-col gap-[6px] px-[12px]">
              {routes.map((route, index) => {
                if (route.subRoutes) {
                  return (
                    <SidebarMenu
                      setIsOpen={setIsOpen}
                      route={route}
                      showAnimation={showAnimation}
                      isOpen={isOpen}
                    />
                  );
                }

                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="flex text-white px-[5px] py-[10px] "
                    activeClassName="active"
                  >
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="whitespace-no-wrap text-[15px] px-[4px] hover:border-b-[#00ff47] hover:border-solid hover:border-b-[2px]"
                        onClick={!route.subRoutes && toggle}
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </NavLink>
                );
              })}
            </section>
          )}
          {isOpen && (
            <div className="flex justify-between items-center gap-[40px] px-[40px] mt-[44px] font-[500] leading-[18.18px] text-[12px] cursor-pointer">
              <ul>
                <li>Info@oneozo.com </li>
                <li>+44 7492882694</li>
              </ul>
              <div className="py-[8px]" onClick={toggle}>
                <FaArrowLeft />
              </div>
            </div>
          )}
        </motion.div>

        <div style={{ marginLeft: "80px" }}>{children}</div>
      </div>
    </>
  );
};

export default NewSideBar;
