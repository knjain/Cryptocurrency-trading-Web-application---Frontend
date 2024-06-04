import React from "react";
import { data } from "./aboutData.js";
function Modal(props) {
  let index = props.index;
  //console.log(index, data[index], props);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div
        className="fixed inset-0 bg-black opacity-60 cursor-pointer"
        onClick={props.closeModal}
      ></div>
      <div className="relative bg-white rounded-lg shadow-md w-full max-w-6xl max-h-[90%]">
        <div className="p-4 bg-gradient-to-r from-gradient-start to-gradient-end text-white rounded-t-lg flex justify-center">
          <h2 className="text-2xl font-bold">Introduction</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">{/* Removed instruction content */}</div>
          <div className="mt-4">
            {/* Added YouTube iframe */}
            <iframe
              width="100%"
              height="315"
              src={data[index]?.yt_src}
              title="YouTube Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <button
            className="mt-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600  flex
            justify-center"
            onClick={props.closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
