import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '../data/services';

const PurchaseMenu = () => {
  return (
    <section id="services" className="py-16 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Menu <span className="text-red-600">Pembelian</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Daftar layanan digital premium yang tersedia untuk patungan, lengkap dengan harga, durasi langganan, dan opsi pembayaran.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-4">Fitur Tambahan</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block bg-green-500 rounded-full w-5 h-5 flex-shrink-0 mt-1 mr-3"></span>
                  <span>Garansi Penuh: Setiap pembelian dilindungi dengan garansi penuh.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block bg-blue-500 rounded-full w-5 h-5 flex-shrink-0 mt-1 mr-3"></span>
                  <span>Metode Pembayaran
                    
                    1. dompet digital: DANA, OVO, ShopeePay, dan GoPay.
                    2. Transper Bank : Bri, Seabank</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6 md:mt-0">
              <img src="https://durianpay.id/assets/img/newlandingpage/section-8-companies-mobile-alt.webp" alt="Payment Method" className="h-12 rounded-md object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseMenu;