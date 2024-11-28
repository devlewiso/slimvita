import React from 'react';
import { Leaf, Battery, Heart, Clock } from 'lucide-react';

const benefits = [
  {
    icon: <Leaf className="w-8 h-8 text-emerald-600" />,
    title: 'Ingredientes Naturales',
    description: 'Fórmula única con extractos botánicos puros'
  },
  {
    icon: <Battery className="w-8 h-8 text-emerald-600" />,
    title: 'Más Energía',
    description: 'Aumenta tus niveles de energía naturalmente'
  },
  {
    icon: <Heart className="w-8 h-8 text-emerald-600" />,
    title: 'Salud Óptima',
    description: 'Mejora tu salud general y bienestar'
  },
  {
    icon: <Clock className="w-8 h-8 text-emerald-600" />,
    title: 'Resultados Rápidos',
    description: 'Ve cambios notables en pocas semanas'
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Beneficios de SlimVita
          </h2>
          <p className="text-lg text-gray-600">
            Descubre por qué miles de personas confían en nosotros
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};