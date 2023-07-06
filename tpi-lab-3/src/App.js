import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import About from "./routes/About";
import Contact from "./routes/Contact";
import "./App.css";
import NotFound from "./routes/NotFound";
import SigIn from "./components/SignIn/Signin";
import LogIn from "./components/Login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { ProtectedRouteAdmin } from "./components/ProtectedRoute/ProtectedRouteAdmin";
import { UserActive } from "./components/ProtectedRoute/UserActive";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./components/context/ThemeContext";
import PurchaseHistory from "./components/PurchaseHistory/PurchaseHistory";
import PagUsuario from "./components/UserList/PagUsuario";

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const body = document.body;
    body.classList.add(isDarkMode ? "appDark" : "appLight");

    return () => {
      body.classList.remove("appDark", "appLight");
    };
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "appDark" : "appLight"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/login"
          element={
            <UserActive>
              <LogIn />
            </UserActive>
          }
        />
        <Route
          path="/signup"
          element={
            <UserActive>
              <SigIn />
            </UserActive>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/purchases"
          element={
            <ProtectedRoute>
              <PurchaseHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <ShoppingCart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/userList"
          element={
            <ProtectedRouteAdmin>
              <PagUsuario />
            </ProtectedRouteAdmin>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
