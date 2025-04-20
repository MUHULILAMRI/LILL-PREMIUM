import React from 'react';
import { MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            <div className="p-6 md:p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Hubungi <span className="text-red-600">Kami</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                  Punya pertanyaan atau ingin berlangganan? Hubungi kami melalui WhatsApp untuk layanan cepat dan responsif.
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 w-full">
                  <div className="bg-gray-900 rounded-xl p-6 md:p-8 flex items-center gap-6 transition-transform hover:scale-105 duration-300">
                    <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                      <MessageSquare size={32} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">WhatsApp</p>
                      <p className="text-xl font-medium">0882-0208-78741</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <a 
                    href="https://wa.me/6288202087874" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white rounded-xl p-6 md:p-8 block text-center hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-xl font-medium">Chat Sekarang</span>
                  </a>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-400">
                  Jam operasional: <span className="text-white">09.00 - 21.00 WIB</span>
                </p>
                <p className="text-gray-400 mt-2">
                  Respon cepat dalam waktu 5-30 menit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;