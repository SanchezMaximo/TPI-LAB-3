import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/context/authContext";
import { ThemeProvider } from "./components/context/ThemeContext";
import ShoppingCartProvider from "./components/context/ShoppingCartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <ShoppingCartProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  </AuthProvider>
);
