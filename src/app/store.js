// Diese Funktion stammt vom React Redux Toolkit und vereinfacht die Erstellung des Redux Stores.
import { configureStore } from "@reduxjs/toolkit";

// All diejenigen Slices, die im Store hinterlegt werden sollen, müssen zunächst importiert werden.
import { numberSlice } from "../features/numberSlice";
import { activitySlice } from "../features/activitySlice";

export const store = configureStore({
  reducer: {
    // Achte darauf, dass hier der jeweilige key identisch zum angegebenen Wert bei "name" beim dazugehörigen Slice ist.
    numberReducers: numberSlice.reducer,
    activityReducers: activitySlice.reducer,
  },
});
