import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-red-600">LILL</span> PREMIUM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-red-500 transition-colors duration-300">
              Layanan
            </a>
            <a href="#testimonials" className="text-white hover:text-red-500 transition-colors duration-300">
              Testimoni
            </a>
            <a href="#contact" className="text-white hover:text-red-500 transition-colors duration-300">
              Kontak
            </a>
            <a 
              href="#contact" 
              className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
            >
              Hubungi Kami
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#services" 
                className="text-white hover:text-red-500 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Layanan
              </a>
              <a 
                href="#testimonials" 
                className="text-white hover:text-red-500 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimoni
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-red-500 transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                Kontak
              </a>
              <a 
                href="#contact" 
                className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition-colors duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Hubungi Kami
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;