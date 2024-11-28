import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplet, Sprout } from 'lucide-react';

const ingredients = [
  {
    name: 'Extracto de Té Verde',
    icon: <Leaf className="w-12 h-12 text-emerald-500" />,
    description: 'Potente antioxidante que acelera el metabolismo',
    benefits: ['Aumenta el metabolismo', 'Rico en antioxidantes', 'Mejora la energía']
  },
  {
    name: 'Garcinia Cambogia',
    icon: <Droplet className="w-12 h-12 text-emerald-500" />,
    description: 'Reduce el apetito y bloquea la producción de grasa',
    benefits: ['Control del apetito', 'Reduce grasa corporal', 'Mejora el estado de ánimo']
  },
  {
    name: 'Spirulina',
    icon: <Sprout className="w-12 h-12 text-emerald-500" />,
    description: 'Superalimento rico en nutrientes y proteínas',
    benefits: ['Alto en proteínas', 'Desintoxicante natural', 'Fortalece el sistema inmune']
  }
];

export const Ingredients = () => {
  return (
    <section id="ingredients" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ingredientes Naturales
          </h2>
          <p className="text-lg text-gray-600">
            Cada ingrediente es seleccionado cuidadosamente por sus propiedades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{ingredient.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{ingredient.name}</h3>
                <p className="text-gray-600 text-center mb-4">{ingredient.description}</p>
                <ul className="space-y-2">
                  {ingredient.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};