import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import "./index.css";
import App from "./App";

// Create a root element using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your app inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
