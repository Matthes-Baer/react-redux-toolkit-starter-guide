// It is necessary to import createSlice to create a slice using the React Redux Toolkit. This function simplifies the slice creation considerably.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{ id: "Lernen1", name: "Lernen", spaßLevel: 10 }],
};

export const activitySlice = createSlice({
  // If you encounter problems with a slice and/or a state of the slice not being recognised, it may be worthwhile to check the upper and lower case of the value for "name".
  name: "activityReducers",

  // The initialState was declared and initialised above. The following expression is identical to "initialState: initialState".
  initialState,

  // The following step creates all the reducers you want to set up for your application.
  // Note that thunks could also be incorporated within the slice, but this was only touched on very briefly at the end of the Udemy course.
  // action.payload corresponds to the value that was specified as a parameter for the reducer during dispatch.
  // state.value corresponds to the current associated state.
  reducers: {
    addActivity: (state, action) => {
      state.value.push(action.payload);
    },
    changeActivity: (state, action) => {
      const activityIndex = state.value.findIndex(
        (activity) => activity.id == action.payload
      );
      const activity = state.value.find(
        (activity) => activity.id == action.payload
      );
      state.value.splice(activityIndex, 1, {
        // The current keys and values of the array element (activity) are copied (spread operator) in order to then specifically adjust the value for funLevel.
        ...activity,
        spaßLevel: +activity.spaßLevel + 1,
      });
    },
  },
});

// For each slice, it is necessary to export the respective reducers as shown here:
export const { addActivity, changeActivity } = activitySlice.actions;

// In addition, the slice itself must be exported:
export default activitySlice.reducer;
