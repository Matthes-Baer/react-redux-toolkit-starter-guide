import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// Es ist notwendig, dass unsere gesamte Anwendung mit einem Provider für Redux "umwickelt" wird. Hierfür benötigst du den Provider-Import von react-redux.
import { Provider } from "react-redux";

// Dieser Provider erwartet einen Store als Angabe, wo du denjenigen Store angibst, den du in src/app/... erstellt hast (in diesem Fall src/app/store.js).
import { store } from "./app/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
