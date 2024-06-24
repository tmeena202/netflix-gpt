import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer({ movieId });

  return (
    <div>
      <iframe
        className="w-full aspect-video "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?controls=0&autoplay=1&mute=1&vq=hd1080"
        }
        title="youtube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
