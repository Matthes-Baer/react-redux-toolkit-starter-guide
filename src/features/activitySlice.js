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

  // Im folgenden Schritt werden alle Reducer erstellt, die du für deine Anwendung einrichten möchtest.
  // Beachte, dass innerhalb des Slices auch noch Thunks eingebaut werden könnten, was im Udemy-Kurs allerdings nur ganz kurz am Ende angeschnitten wurde.
  // action.payload entspricht jeweils dem Wert, der beim Dispatch als Parameter für den Reducer angegeben worden ist.
  // state.value entspricht dem derzeitigen dazugehörigen state.
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
        // Es werden die aktuellen keys und values des Array-Elements (activity) kopiert (spread operator), um dann spezifisch den Wert für spaßLevel anzupassen.
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
