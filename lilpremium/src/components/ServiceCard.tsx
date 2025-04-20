import React, { useState } from 'react';
import { Service } from '../types';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-gray-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 transform scale-100"
          style={{transform: isHovered ? 'scale(1.05)' : 'scale(1)'}}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white">{service.name}</h3>
        </div>
      </div>
      
      <div className="p-5">
        <div className="mb-4">
          <p className="text-gray-400 text-sm mb-2">Harga Mulai</p>
          <p className="text-2xl font-bold text-white">
            {service.price}
            <span className="text-sm text-gray-400 font-normal ml-1">/{service.period}</span>
          </p>
        </div>
        
        <ul className="space-y-2 mb-5">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <span className="inline-block bg-red-600 rounded-full w-3 h-3 flex-shrink-0 mt-1 mr-3"></span>
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact" 
          className="inline-flex items-center group"
        >
          <span className="text-red-500 font-medium group-hover:text-red-400 transition-colors">Pesan Sekarang</span>
          <ArrowRight size={16} className="ml-2 text-red-500 group-hover:text-red-400 transition-colors transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;