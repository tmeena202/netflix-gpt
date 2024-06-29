import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img
        className="rounded-lg "
        src={IMG_CDN_URL + posterPath}
        alt="movie card"
      />
    </div>
  );
};

export default MovieCard;
