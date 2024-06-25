import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-sg w-1/3">{overview}</p>
      <div>
        <button className="bg-gray-500 text-black p-2 px-8 rounded-lg border">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-500 text-black p-2 px-8 bg-opacity-50 rounded-lg border">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
