import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { reducerMethod, initialState } from "./Utility/ReducerMethod.jsx";
import { DataProvider } from "./Components/DataProvider/DataProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider reducerMethod={reducerMethod} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
