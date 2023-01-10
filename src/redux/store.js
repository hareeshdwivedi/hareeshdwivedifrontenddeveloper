import {configureStore} from "@reduxjs/toolkit";
import capsuleReducer from "./slices/capsule-slice"

export const store = configureStore({
  reducer: {
    capsules: capsuleReducer,
  }
});