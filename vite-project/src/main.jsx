import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";

ReactDOM.createRoot(document.getElementById("navbar-container")).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("welcome")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
