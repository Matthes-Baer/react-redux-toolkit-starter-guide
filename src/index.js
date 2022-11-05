import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

// It is necessary to "wrap" our entire application with a provider for Redux. For this you need the provider import of react-redux.
import { Provider } from "react-redux";

// This provider expects a store as a specification, where you specify the store that you created in src/app/... (in this case src/app/store.js).
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
