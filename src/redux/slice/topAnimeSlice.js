import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topAnime: [],
  selectedAnime: []
};

const topAnimeSlice = createSlice({
  name: "topAnime",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.topAnime = action.payload;
    },
    selectAnime: (state, action) => {
      state.selectedAnime = action.payload;
    },
  },
});

export const { addData,selectAnime } = topAnimeSlice.actions;

export default topAnimeSlice.reducer;
