import React from "react";
import { Link } from "react-router-dom";
import "./Photos.css";
import { FaDownload } from "react-icons/fa";

const TeamPhotos = () => {
  const numImages = 8; // Number of images you have
  const imageBasePath = "/images/team/"; // Base path to your images

  return (
    <section className="relative my-28">
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {Array.from({ length: numImages }, (_, idx) => (
          <div key={idx} className="col-xl-2 col-md-6 mb-4">
            <div className="team-box">
              <div className="image relative">
                <Link to="/team">
                  <img
                    src={`${imageBasePath}${idx + 1}.${
                      idx < 4 ? "jpeg" : idx < 8 ? "png" : "jpg"
                    }`}
                    alt={`Image ${idx + 1}`}
                    className="cursor-pointer"
                  />
                </Link>

                {/* Download icon button */}
                <a
                  href={`${imageBasePath}${idx + 1}.png`}
                  download
                  className="absolute bottom-6 right-6 h-12 w-12  p-2 rounded-full cursor-pointer"
                  style={{ width: "20px", height: "20px", zIndex: "10" }}
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

export default TeamPhotos;
