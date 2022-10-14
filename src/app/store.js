import { configureStore } from "@reduxjs/toolkit";
import { numberSlice } from "../features/numberSlice";
import { activitySlice } from "../features/activitySlice";

export const store = configureStore({
  reducer: {
    numberReducers: numberSlice.reducer,
    activityReducers: activitySlice.reducer,
  },
});
