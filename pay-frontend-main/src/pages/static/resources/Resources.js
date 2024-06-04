import React, { useState } from "react";
import { motion as m } from "framer-motion";
import "./Resources.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import US from "/images/countries/unitedstates.png"

const Resources = () => {
  const languages = [
    // {
    //   id: 1,
    //   img: "/images/finalflags/Arabic.png",
    //   name: "Saudi Arabia",
    //   pdf: "https://oneozo.com/home/public/pdf/arabic.pdf",
    // },
    // {
    //   id: 2,
    //   img: "/images/finalflags/bangla.png",
    //   name: "Bangladesh",
    //   pdf: "https://oneozo.com/home/public/pdf/bangla.pdf",
    // },

    // {
    //   id: 4,
    //   img: "/images/finalflags/dutch.png",
    //   name: "Netherlands",
    //   pdf: "https://oneozo.com/home/public/pdf/dutch.pdf",
    // },
    // {
    //   id: 5,
    //   img: "/images/finalflags/filipino.png",
    //   name: "Philipines",
    //   pdf: "https://oneozo.com/home/public/pdf/filipino.pdf",
    // },
    // {
    //   id: 6,
    //   img: "/images/finalflags/French.png",
    //   name: "France",
    //   pdf: "https://oneozo.com/home/public/pdf/french.pdf",
    // },
    // {
    //   id: 7,
    //   img: "/images/finalflags/German.png",
    //   name: "Germany",
    //   pdf: "https://oneozo.com/home/public/pdf/german.pdf",
    // },
    // {
    //   id: 8,
    //   img: "/images/finalflags/Greek.png",
    //   name: "Greece",
    //   pdf: "https://oneozo.com/home/public/pdf/greek.pdf",
    // },
    // {
    //   id: 9,
    //   img: "/images/finalflags/indonesian.png",
    //   name: "Indonesia",
    //   pdf: "https://oneozo.com/home/public/pdf/indonesian.pdf",
    // },
    // {
    //   id: 10,
    //   img: "/images/finalflags/italiyan.png",
    //   name: "Italy",
    //   pdf: "https://oneozo.com/home/public/pdf/italiyan.pdf",
    // },

    // {
    //   id: 12,
    //   img: "/images/finalflags/Korean.png",
    //   name: "Korea",
    //   pdf: "https://oneozo.com/home/public/pdf/korean.pdf",
    // },
    // {
    //   id: 13,
    //   img: "/images/finalflags/malaysian.png",
    //   name: "Malaysia",
    //   pdf: "https://oneozo.com/home/public/pdf/malay.pdf",
    // },
    // {
    //   id: 14,
    //   img: "/images/finalflags/maltese.png",
    //   name: "Maltese",
    //   pdf: "https://oneozo.com/home/public/pdf/maltese.pdf",
    // },
    // {
    //   id: 15,
    //   img: "/images/finalflags/myanmar.png",
    //   name: "Myanmar",
    //   pdf: "https://oneozo.com/home/public/pdf/myanmar.pdf",
    // },
    // {
    //   id: 16,
    //   img: "/images/finalflags/Pakistan urdu.png",
    //   name: "Pakistan",
    //   pdf: "https://oneozo.com/home/public/pdf/urdu.pdf",
    // },
    // {
    //   id: 17,
    //   img: "/images/finalflags/romanian.png",
    //   name: "Romania",
    //   pdf: "https://oneozo.com/home/public/pdf/romanian.pdf",
    // },
    // {
    //   id: 18,
    //   img: "/images/finalflags/Russian.png",
    //   name: "Russia",
    //   pdf: "https://oneozo.com/home/public/pdf/russian.pdf",
    // },

    // {
    //   id: 20,
    //   img: "/images/finalflags/swahili.png",
    //   name: "Swahili",
    //   pdf: "https://oneozo.com/home/public/pdf/swahili.pdf",
    // },

    // {
    //   id: 22,
    //   img: "/images/finalflags/turkish.png",
    //   name: "Turkey",
    //   pdf: "https://oneozo.com/home/public/pdf/turkish.pdf",
    // },

    {
      id: 1,
      img: "/images/countries/unitedkingdom.png",
      name: "United Kingdom",
      pdf: "https://oneozo.com/home/public/pdf/Business%20Plan.pdf",
    },
    {
      id: 2,
      img: "/images/countries/unitedstates.png",
      name: "United States",
      pdf: "https://oneozo.com/home/public/pdf/Business%20Plan.pdf",
    },
    {
      id: 3,
      img: "/images/finalflags/Japanese.png",
      name: "Japan",
      pdf: "https://oneozo.com/home/public/pdf/japanese.pdf",
    },

    {
      id: 4,
      img: "/images/finalflags/India.png",
      name: "India",
      pdf: "https://oneozo.com/home/public/pdf/Hindi.pdf",
    },
    {
      id: 5,
      img: "/images/finalflags/vietnamese.png",
      name: "Vietnam",
      pdf: "https://oneozo.com/home/public/pdf/vietnamese.pdf",
    },
    {
      id: 6,
      img: "/images/finalflags/spanish.png",
      name: "Spain",
      pdf: "https://oneozo.com/home/public/pdf/spanish.pdf",
    },
    {
      id: 7,
      img: "/images/finalflags/chinese.png",
      name: "China",
      pdf: "https://oneozo.com/home/public/pdf/chinese.pdf",
    },
    {
      id: 8,
      img: "/images/finalflags/thai.png",
      name: "Thailand",
      pdf: "https://oneozo.com/home/public/pdf/thai.pdf",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter languages based on the search query
  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const navigate = useNavigate();
  return (
    <div className="w-full font-poppins mx-auto   ">
      <div className="w-full md:relative flex flex-col">
        <img
          alt="Signup Background"
          src="/images/resource.png"
          className="md:relative"
        />
        <div className="md:absolute top-28 right-4 w-full">
          <div className="w-full mx-auto max-w-[90%] lg:max-w-[800px]">
            <m.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  delay: 0.34,
                  ease: "anticipate",
                },
              }}
              className="text-4xl font-semibold text-center py-6"
            >
              Different Language Business Plan
            </m.h1>
          </div>
          <div className="w-full max-w-7xl md:relative  left-0 md:right-4 top-0  md:top-28 flex flex-col justify-between  mx-auto gap-12 ">
            <input
              type="text"
              placeholder="Search Country"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-white w-3/4 md:w-1/4 mx-auto md:absolute top-[-5rem] right-[6rem] bg-transparent rounded-lg py-2 pl-2 border  border-gray-400"
            />

            <div className="mx-auto px-6 md:px-16 py-12 max-w-[90%] lg:max-w-[800px] overflow-y-auto max-h-[70vh] lang_choice md:absolute right-4 top-[0rem]">
              {filteredLanguages.map((lang, index) => (
                <a
                  key={index}
                  href={lang.pdf}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#0a090d] shadow-lg shadow-black flex text-xl items-center font-semibold rounded-xl border-2 border-purple-800 px-6 py-4 my-4 cursor-pointer"
                >
                  <img
                    alt="Signup Background"
                    src={lang.img}
                    className="w-12"
                  />
                  <p className="pl-6 text-2xl">{lang.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
