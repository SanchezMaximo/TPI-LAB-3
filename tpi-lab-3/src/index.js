import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/context/authContext";
import NavBar from "./components/Navbar/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <NavBar>
        <App />
      </NavBar>
    </BrowserRouter>
  </AuthProvider>
);
