import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./photosReducer";

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export type ReturnState = ReturnType<typeof store.getState>;
