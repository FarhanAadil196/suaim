import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Product from "./Components/Product";
import Contact from "./Components/Contact";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Details from "./Components/Details";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Gallery from "./Components/Gallery";
import ScrollToTop from "./Components/ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
