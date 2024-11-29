import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CartPage } from './pages/CartPage';
import { ProductsPage } from './pages/ProductsPage';
import { ContactPage } from './pages/ContactPage';
import { CartProvider } from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import { Footer } from './components/Footer';

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
          <Toaster position="bottom-right" />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;