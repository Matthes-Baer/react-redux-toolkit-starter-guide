import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{ id: "Lernen1", name: "Lernen", spaßLevel: 10 }],
};

export const activitySlice = createSlice({
  name: "activityReducers",
  initialState,
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
        ...activity,
        spaßLevel: +activity.spaßLevel + 1,
      });
    },
  },
});

//! Bei jedem Slice ist es vonnöten, dass die jeweiligen Reducer exportiert werden wie hier:
export const { addActivity, changeActivity } = activitySlice.actions;

//! Außerdem muss der Slice selbst exportiert werden:
export default activitySlice.reducer;
