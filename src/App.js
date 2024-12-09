import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Delivery from './components/Delivery';
import Healthy from './components/Healthy';
import ProductSlider from './components/ProductSlider';
import Products from './components/Products';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Delivery />
      <Healthy />
      <ProductSlider />
      <Products />
      <Footer />
    </div>
  )
}