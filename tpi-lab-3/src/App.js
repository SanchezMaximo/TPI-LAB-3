<<<<<<< HEAD
import './App.css';

import {Routes, Route} from "react-router-dom";

import Home from './routes/Home';
import Products from './routes/Products';
import About from './routes/About';
import Contact from './routes/Contact';

=======
import "./App.css";
import NavBar from "./components/NavBar";
>>>>>>> 323e25c5d0ebc3a840fdb8f5555762712627e1b2

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
=======
      <NavBar />
>>>>>>> 323e25c5d0ebc3a840fdb8f5555762712627e1b2
    </div>
  );
}

export default App;
 