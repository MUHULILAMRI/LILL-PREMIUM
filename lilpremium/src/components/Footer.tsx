import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-white">
              <span className="text-red-600">LILL</span> PREMIUM
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              langganan digital premium terpercaya
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">
              Layanan
            </a>
            <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
              Testimoni
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              Kontak
            </a>
          </nav>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LILL PREMIUM. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            Dibuat untuk pelanggan premium yang tentu  premium
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;