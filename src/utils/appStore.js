import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import moviesReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
    movies: moviesReducer,
  },
});

export default appStore;
