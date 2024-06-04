import React from "react";

let videoLinks = [
  "https://www.youtube.com/embed/AQubPlZe8_g?si=9EKl1mtFF309prNr",
  "https://www.youtube.com/embed/y7SlYwTyrOU",
  "https://www.youtube.com/embed/0e03g7HqXAc",
  "https://www.youtube.com/embed/LlsS0aLK7JE",
  "https://www.youtube.com/embed/5dgPYFOF1DA",
  "https://www.youtube.com/embed/RwbYDmjolL8",
  "https://www.youtube.com/embed/3ChIPaeLvjA",
  "https://www.youtube.com/embed/3BdqC6G3tLc", //shorts
  "https://www.youtube.com/embed/HK3PIbBjLNM",
  "https://www.youtube.com/embed/lBOrr_X4rjM",
  "https://www.youtube.com/embed/CoaZRoQRpkA",
  "https://www.youtube.com/embed/GSWI-MwD5UE",
  // "https://www.youtube.com/embed/8FkLRUJj-o0",
  // "https://www.youtube.com/embed/Dydmpfo68DA",
  // "https://www.youtube.com/embed/Fa4nbBSoQ1U",
  "https://www.youtube.com/embed/nH8UddUeIW8",
  "https://www.youtube.com/embed/-NxUhCSP-Hw",
  "https://youtube.com/embed/RH1ZWUO5ag0?si=iagcrGui5Wxa501y", //shorts
  "https://www.youtube.com/embed/F5dqXtfqWA4", //shorts
  "https://www.youtube.com/embed/FS5ie8XJEA8",
  "https://www.youtube.com/embed/6aTIdSW5UXo",
  "https://www.youtube.com/embed/b1_e_P-joDE",
  "https://www.youtube.com/embed/SUQ6fDHIwxg",
];

export const VideoCard = ({ videoLinks }) => {
  return (
    <div className="flex justify-center items-center gap-2 mb-5 flex-col md:flex-row">
      {videoLinks.map((link, index) => (
        <div key={index} className="bg-gray-200 p-2 rounded-lg">
          <iframe
            height="315"
            src={link}
            title={`YouTube Video ${index + 1}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export const Video = () => {
  const chunkSize = 4; // Number of videos to display in each row
  const videoChunks = [];

  // Split the videoLinks array into chunks of the specified size
  for (let i = 0; i < videoLinks.length; i += chunkSize) {
    videoChunks.push(videoLinks.slice(i, i + chunkSize));
  }

  return (
    <div className="flex flex-wrap items-center justify-center max-h-full mt-20">
      {videoChunks.map((chunk, index) => (
        <VideoCard key={index} videoLinks={chunk} />
      ))}
    </div>
  );
};
