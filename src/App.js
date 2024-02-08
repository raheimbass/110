import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Catalog from './pages/catalog';
import About from "./pages/about";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Admin from "./pages/admin"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/catalog" element={<Catalog />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/cart" element={<Cart />} ></Route>
        <Route path="/admin" element={<Admin />} ></Route>        
      </Routes>

      <Footer/>

    </div>
    </BrowserRouter>
  );
}

export default App;
