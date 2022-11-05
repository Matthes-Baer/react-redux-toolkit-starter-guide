// It is necessary to import createSlice to create a slice using the React Redux Toolkit. This function simplifies the slice creation considerably.
import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  // If you encounter problems with a slice and/or a state of the slice not being recognised, it may be worthwhile to check the upper and lower case of the value for "name".
  name: "numberReducers",
  initialState: { value: 1 },

  // The following step creates all the reducers you want to set up for your application.
  // Note that thunks could also be incorporated within the slice, but this was only touched on very briefly at the end of the Udemy course.
  // action.payload corresponds to the value that was specified as a parameter for the reducer during dispatch.
  // state.value corresponds to the current associated state.
  reducers: {
    addiere1: (state, action) => {
      state.value += 1;
    },
    subtrahiere1: (state, action) => {
      state.value -= 1;
    },
    multipliziereMitAction: (state, action) => {
      state.value *= action.payload;
    },
  },
});

// For each slice, it is necessary to export the respective reducers as shown here:
export const { addiere1, subtrahiere1, multipliziereMitAction } =
  numberSlice.actions;

// In addition, the slice itself must be exported:
export default numberSlice.reducer;
