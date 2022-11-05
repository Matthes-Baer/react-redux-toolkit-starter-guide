// This function comes from the React Redux Toolkit and simplifies the creation of the Redux Store.
import { configureStore } from "@reduxjs/toolkit";

// All slices that are to be deposited in the store must first be imported.
import { numberSlice } from "../features/numberSlice";
import { activitySlice } from "../features/activitySlice";

export const store = configureStore({
  reducer: {
    // Make sure that the respective key is identical to the specified value at "name" of the corresponding slice.
    numberReducers: numberSlice.reducer,
    activityReducers: activitySlice.reducer,
  },
});
