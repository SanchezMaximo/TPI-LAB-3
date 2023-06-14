import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import About from "./routes/About";
import Contact from "./routes/Contact";
import "./App.css";
import SigIn from "./components/SignIn/Signin";
import LogIn from "./components/Login/Login";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import ShoppingCartProvider from "./components/context/ShoppingCartProvider";

function App() {
  return (
    <div>
      <ShoppingCartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SigIn />} />
          <Route path="/cart" element={<ShoppingCart />}/>
        </Routes>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
