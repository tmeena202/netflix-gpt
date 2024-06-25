import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toogleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toogleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
