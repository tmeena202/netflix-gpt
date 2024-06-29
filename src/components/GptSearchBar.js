import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import { API_OPTIONS, GOOGLE_GEMINI_APIKEY } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  // It takes API key.
  const genAI = new GoogleGenerativeAI(GOOGLE_GEMINI_APIKEY);

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // console.log(genAI);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ".only give me names of movies,comma separated like example result given ahead.Example result:Gadar,Sholay,Godzilla,Pathaan,3 Idiots.";
    const result = await model.generateContent(prompt);
    const gptResults = await result.response;
    // console.log(gptResults);
    const gptMovies =
      gptResults.candidates?.[0]?.content?.parts?.[0]?.text.split(",");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    console.log("promiseArray: " + promiseArray);
    //[Promise,Promise,Promise,Promise,Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 bg-black grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          onClick={handleGptSearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
