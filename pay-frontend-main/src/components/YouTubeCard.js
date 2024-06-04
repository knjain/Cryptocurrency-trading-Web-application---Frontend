import React from "react";
import { Link } from "react-router-dom";

const YouTubeCard = () => {
  return (
    <div className=" block w-full p-6 text-black">
      <div className=" flex-container max-w-full flex  flex-col md:flex-row  gap-0 md:gap-[-2rem] justify-center items-center space-x-4 p-12">
        {/* <article class="YT-card">
        <h2 className="mb-4 text-gray-600">Lorem ipsum</h2>
        <p>
          lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </article> */}
        <article class="YT-card">
          <Link
            to="https://youtu.be/9fWW3gVFWzw?si=vGTWIDxdEqMmdna5"
            target="_blank"
          >
            <img
              alt="Signup Background"
              // src="./images/yt1.jpg"
              src="./images/new/Thumb2.jpg"
              className="rounded-2xl cursor-pointer"
            />
          </Link>
          <h1 className="my-2">
            Meet Sophia Carter - One Ozo's Trade Strategist Extraordinaire.
          </h1>
        </article>
        {/* <article class="YT-card">
        <h2 className="mb-4 text-gray-600">Word of the day</h2>
        <h2 className="mb-4 text-2xl">Additionally Survillence Measure</h2>
        <p className="text-gray-500">
          rem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </article> */}
        <article class="YT-card">
          <Link
            to="https://youtu.be/NFufXFwYKSM?si=De6aT_l20SXGFPDE"
            target="_blank"
          >
            <img
              alt="Signup Background"
              // src="./images/yt1.jpg"
              src="./images/new/Thumb3.jpg"
              className="rounded-2xl cursor-pointer"
            />
          </Link>
          <h1 className="my-2">
            Meet Max Anderson: Leading Ozo's Technological Revolution.
          </h1>
        </article>
        <article class="YT-card">
          <Link
            to="https://youtu.be/AlEbb6cTZVc?si=08vx_iby9JR8zBdk"
            target="_blank"
          >
            <img
              alt="Signup Background"
              // src="./images/yt2.jpg"
              src="./images/new/Thumb4.jpg"
              className="rounded-2xl cursor-pointer"
            />
          </Link>
          <h1 className="my-2">
            Meet Olivia Foster: The Driving Force Behind One Ozo's Success Story
          </h1>
        </article>
        <article class="YT-card">
          <Link
            to="https://youtu.be/s_M7wPTOEyI?si=ET-gHmjTHQWwiIW_"
            target="_blank"
          >
            <img
              alt="Signup Background"
              // src="./images/yt1.jpg"
              src="./images/new/Thumb1.jpg"
              className="rounded-2xl cursor-pointer"
            />
          </Link>
          <h1 className="my-2">
            Meet Jonathan Evens: The Visionary CEO Behind Ozo's Financial
            Success.
          </h1>
        </article>
      </div>
    </div>
  );
};

export default YouTubeCard;
