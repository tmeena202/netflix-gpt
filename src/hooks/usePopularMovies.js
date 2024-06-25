// import { useEffect } from "react";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { addNowPlayingMoveis } from "../utils/movieSlice";

// const usePopularMovies = () => {
//   const dispatch = useDispatch();

//   const getPopularMovie = async () => {
//     const data = await fetch(
//       "https://api.themoviedb.org/3/movie/now_playing?page=1",
//       API_OPTIONS
//     );
//     const json = await data.json();
//     // console.log(json.results);
//     dispatch(addNowPlayingMoveis(json.results));
//   };

//   useEffect(() => {
//     getPopularMovie();
//   }, []);
// };

// export default usePopularMovies;
