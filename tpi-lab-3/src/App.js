import './App.css';

import {Routes, Route} from "react-router-dom";

import Home from './routes/Home';
import Products from './routes/Products';
import About from './routes/About';
import Contact from './routes/Contact';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
 