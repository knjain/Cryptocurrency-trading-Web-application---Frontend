import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { markStoryAsSeen } from "../../../services/userService";

const EarningCard = ({
  totalEarning,
  piedata,
  PieChart,
  story,
  is_story_seen,
}) => {
  const [ismodalOpen, setIsModalOpen] = useState(false);
  const [isSeen, setIsSeen] = useState(is_story_seen);
  const handleStorySeen = async () => {
    try {
      await markStoryAsSeen();
    } catch (err) {
      console.log(err);
    }
  };
  const videoRef = useRef(null);

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleStop = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <div
          className="relative rounded-xl max-w-[360px] max-h-[200px] w-full bg-[#0a090d] space-y-8 p-4"
          style={{
            backgroundImage:
              "url('https://oneozo.com/home/public/media/stories/1-STORY-1-1712123953791.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex w-full justify-between items-center px-8 ">
            <div className="text-xl font-semibold text-transparent bg-gradient-to-r from-newStart via-newMid to-newEnd bg-clip-text">
              Ozo Story
            </div>
            <div
              className="circleContainer mb-4  cursor-pointer"
              onClick={() => {
                console.log("object");
                setIsModalOpen(true);
                if (!isSeen) {
                  console.log("story is not seen");
                  handleStorySeen();
                  setIsSeen(true);
                }
              }}
            >
              <div
                className={`${!isSeen ? "outerProgress" : "storySeenCircle"}`}
              ></div>
              <div className="innerProgress"></div>
              <img
                alt="Signup Background"
                src={
                  story && story?.thumbnail
                    ? story?.thumbnail
                    : "/images/logo.png"
                }
                className="circleImage"
              />
            </div>
          </div>
        </div>
        <div
          className="px-6 py-4 md:max-w-[330px] md:w-full bg-neutral-950 rounded-xl md:h-full  text-center"
          style={{
            backgroundImage: "url('/images/dashboard/total-earning.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="font-medium text-xl text-center">
            Total earning
            <br />
            through one ozo
          </h2>
          <div className="bg-gradient-to-t from-neutral-950 via-gray-90 to-neutral-950 bg-opacity-70 rounded-xl my-6 md:max-w-[200px] w-full mx-auto py-4">
            <div
              className="bg-gradient-to-l from-#121212 via-#272425 to-#121212 "
              style={{
                height: "80px",
                borderWidth: "1px 0px 1px 0px",

                borderStyle: "solid",

                borderImageSource:
                  "linear-gradient(90.15deg, rgba(80, 80, 80, 0) 0.12%, #505050 50.57%, rgba(80, 80, 80, 0) 97.76%)",
                fontSize: "26px",
                fontWeight: "600",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "6px",
                padding: "8px",
              }}
            >
              <span>Total Earning</span>
              <p className="text-xl font-satoshi">${totalEarning || 0}</p>
            </div>
          </div>
          <div
            style={{ position: "relative", height: "300px", width: "300px" }}
          >
            <PieChart data={piedata} isDonut={true} />
            <div>
              <Link to="/">
                <img
                  className="absolute bottom-[38%] left-[34%] h-auto w-24  cursor-pointer"
                  src="/images/navlogo.png"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="w-full space-y-10">
            <div className="w-full flex flex-col">
              <div className="flex justify-center items-center gap-4 text-left">
                <li style={{ color: "#b7dac3" }}>
                  <span className="text-gray-500 font-medium">ROI</span>
                </li>
                <li style={{ color: "#83dba1" }}>
                  <span className="text-gray-500 font-medium">
                    Referral bonus
                  </span>
                </li>
              </div>
              <div className="flex justify-center items-center gap-4 text-left">
                <li style={{ color: "#40e278" }}>
                  <span className="text-gray-500 font-medium">Interest</span>
                </li>
                <li style={{ color: "#0be355" }}>
                  <span className="text-gray-500 font-medium">
                    Binary bonus
                  </span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      {ismodalOpen && (
        <div
          className=" w-full flex justify-center fixed top-0 left-0 bg-black bg-opacity-70 h-full  "
          style={{ zIndex: "1000" }}
        >
          <div className="max-w-[450px] rounded-2xl bg-[#0a090d] p-6 relative h-[90%]">
            <button
              onClick={() => {
                setIsModalOpen(false);
              }}
              className="rounded-full absolute -top-0 -right-4 w-10 p-3  bg-gradient-to-r text-white from-newStart via-newMid to-newEnd  "
            >
              <img
                alt="Signup Background"
                src="/images/icons/close.png"
                className="w-8"
              />
            </button>

            <div className="w-full flex justify-center">
              <div
                className="flex justify-center align-center w-[50%] py-1 px-6 border-solid border-white rounded-lg cursor-pointer"
                style={{ border: "1px solid #12E55A" }}
              >
                <a href={story?.story_doc} download>
                  Download
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center p-2">
              {story?.media_type === "image" && (
                <img className="w-full h-full" src={story?.story_doc} />
              )}
              {story?.media_type === "video" && (
                <div className="video-container">
                  <video
                    ref={videoRef}
                    autoPlay // Autoplay if isPlaying is true
                    loop
                    className="w-full h-[90%]"
                    onClick={handleVideoClick}
                  >
                    <source src={story?.story_doc} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EarningCard;
