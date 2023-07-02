import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { AuthProvider } from "./components/context/authContext";
import { ThemeProvider } from "./components/context/ThemeContext";
import ShoppingCartProvider from "./components/context/ShoppingCartProvider";
import NavBar from "./components/Navbar/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <HashRouter>
      <ShoppingCartProvider>
        <ThemeProvider>
          <NavBar>
            <App />
          </NavBar>
        </ThemeProvider>
      </ShoppingCartProvider>
    </HashRouter>
  </AuthProvider>
);
