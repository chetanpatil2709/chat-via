import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.css";
import AppRouter from "./AppRouter";
import { RouterProvider } from "react-router-dom";
// import reportWebVitals from "./reportWebVitals.js";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
// reportWebVitals(console.log);
