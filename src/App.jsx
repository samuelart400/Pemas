// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Embroidery from './pages/Embroidery'; // Ensure this import is here
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/embroidery" element={<Embroidery />} /> {/* This line is vital */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;