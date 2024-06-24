import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constanst";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await response.json();
    console.log(data);

    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData[0];
    console.log(filterData);
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
