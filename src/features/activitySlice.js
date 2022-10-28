// Es ist notwendig, createSlice zu importieren, um einen Slice mittels des React Redux Toolkit zu erstellen. Diese Funktion simplifiziert die Slice-Erstellung erheblich.
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{ id: "Lernen1", name: "Lernen", spaßLevel: 10 }],
};

export const activitySlice = createSlice({
  // Solltest du auf Probleme stoßen, dass ein Slice und/oder ein State des Slices nicht erkannt wird, kann es sich lohnen, einmal die Groß- und Kleinschreibung des Werts für "name" zu überprüfen.
  name: "activityReducers",

  // Der initialState wurde oben deklariert und initialisiert. Der folgende Ausdruck ist identisch zu "initialState: initialState"
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
        // Es werden die aktuellen keys und values des Array-Elements (activity) kopiert, um dann spezifisch den Wert für spaßLevel anzupassen.
        ...activity,
        spaßLevel: +activity.spaßLevel + 1,
      });
    },
  },
});

// Bei jedem Slice ist es vonnöten, dass die jeweiligen Reducer exportiert werden wie hier:
export const { addActivity, changeActivity } = activitySlice.actions;

// Außerdem muss der Slice selbst exportiert werden:
export default activitySlice.reducer;
