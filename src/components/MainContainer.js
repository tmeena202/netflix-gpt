import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Early Return
  if (!movies || movies.length === 0) return null;

  // Select a random movie from the first 20 movies
  const randomIndex = Math.floor(Math.random() * Math.min(movies.length, 19));
  const mainMovie = movies[randomIndex];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[35%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
