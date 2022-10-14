import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  name: "numberReducers",
  initialState: { value: 1 },
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

export const { addiere1, subtrahiere1, multipliziereMitAction } =
  numberSlice.actions;
export default numberSlice.reducer;
