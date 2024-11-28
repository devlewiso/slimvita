import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforma tu vida con SlimVita
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Descubre el poder de los ingredientes naturales para alcanzar tu peso ideal de manera saludable y sostenible.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 flex items-center gap-2">
              Comienza Hoy
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80"
              alt="Producto SlimVita"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-emerald-600 font-bold">✨ 100% Natural</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};