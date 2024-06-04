import React from "react";
import { Link } from "react-router-dom";
import "./Photos.css";
import { FaDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative my-28">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {/* Generate numbers from 1 to 29 and map over them */}
        {Array.from({ length: 21 }, (_, i) => i + 101).map((idx) => (
          <div key={idx} className="col-xl-3 col-md-6 mb-4">
            <div className="team-box">
              <div className="image relative">
                <Link to="/team">
                  <img
                    src={
                      idx === 25
                        ? `https://oneozo.com/home/public/photos/${idx}.jpeg`
                        : `https://oneozo.com/home/public/photos/${idx}.png`
                    }
                    alt="Cyfonii"
                    className="cursor-pointer"
                  />
                </Link>{" "}
                {/* Download icon button */}
                <a
                  href={
                    idx === 25
                      ? `https://oneozo.com/home/public/photos/${idx}.jpeg`
                      : `https://oneozo.com/home/public/photos/${idx}.png`
                  }
                  download
                  className="absolute bottom-6 right-6 h-12 w-12  p-2 rounded-full cursor-pointer"
                  style={{ width: "20px", height: "20px", zIndex: "10" }} // Absolute position with padding and rounded
                >
                  <FaDownload />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
