import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sg w-1/3">{overview}</p>
      <div>
        <button className="bg-gray-500 text-black p-1 md:p-2 px-2 md:px-8 my-2 md:my-0 rounded-lg border">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-black p-2 px-8 bg-opacity-50 rounded-lg border">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
