import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Nikmati Layanan Premium dengan Harga <span className="text-red-600">Terjangkau</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            langganan digital premium dengan harga hemat, dijamin aman, dan terpercaya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#services" 
              className="bg-red-600 text-white font-medium px-8 py-3 rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Lihat Layanan
            </a>
            <a 
              href="#contact" 
              className="bg-transparent text-white border border-white font-medium px-8 py-3 rounded-md hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;