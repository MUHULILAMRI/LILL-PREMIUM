import React, { useState } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-600">Testimoni</span> Pengguna
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Apa kata pengguna yang telah menggunakan layanan LILL PREMIUM?
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="testimonial-slider overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-900 rounded-xl p-6 md:p-8 relative">
                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              size={16}
                              fill={i < testimonial.rating ? "#ef4444" : "none"}
                              color={i < testimonial.rating ? "#ef4444" : "#6b7280"}
                            />
                          ))}
                        </div>
                        <div className="mb-4 italic text-gray-300">
                          "{testimonial.text}"
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                          <div>
                            <h4 className="font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-gray-400">{testimonial.date}</p>
                          </div>
                          <div className="px-3 py-1 rounded-full bg-gray-800 text-sm text-gray-300">
                            {testimonial.service}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-red-600 rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 bg-red-600 rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors duration-300 focus:outline-none z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-red-600' : 'bg-gray-700'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;