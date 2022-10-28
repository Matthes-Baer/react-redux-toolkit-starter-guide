// Es ist notwendig, createSlice zu importieren, um einen Slice mittels des React Redux Toolkit zu erstellen. Diese Funktion simplifiziert die Slice-Erstellung erheblich.
import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  // Solltest du auf Probleme stoßen, dass ein Slice und/oder ein State des Slices nicht erkannt wird, kann es sich lohnen, einmal die Groß- und Kleinschreibung des Werts für "name" zu überprüfen.
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
      // action.payload nimmt den Wert an, der beim dispatch als Parameter für den Reducer angegeben worden ist.
      state.value *= action.payload;
    },
  },
});

// Bei jedem Slice ist es vonnöten, dass die jeweiligen Reducer exportiert werden wie hier:
export const { addiere1, subtrahiere1, multipliziereMitAction } =
  numberSlice.actions;

// Außerdem muss der Slice selbst exportiert werden:
export default numberSlice.reducer;
