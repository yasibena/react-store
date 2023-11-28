import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/context";
import { ThemeProvider } from "./context/ThemContext";
// import './styles.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  <AppProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AppProvider>,

  // </React.StrictMode>
);
