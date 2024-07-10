import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import topAnimeReducer from "./slice/topAnimeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    topAnime: topAnimeReducer

  },
});

export default store;
