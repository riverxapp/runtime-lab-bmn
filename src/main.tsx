import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, ScrollRestoration } from "react-router-dom";
import { App } from "./app/App";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollRestoration />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
