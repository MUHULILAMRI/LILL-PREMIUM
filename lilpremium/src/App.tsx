import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PurchaseMenu from './components/PurchaseMenu';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <PurchaseMenu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;