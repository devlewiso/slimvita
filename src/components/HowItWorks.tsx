import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Trophy } from 'lucide-react';

const steps = [
  {
    icon: <Target className="w-12 h-12 text-emerald-500" />,
    title: 'Define tus Objetivos',
    description: 'Establece tus metas de pérdida de peso y bienestar'
  },
  {
    icon: <Zap className="w-12 h-12 text-emerald-500" />,
    title: 'Toma SlimVita',
    description: 'Consume SlimVita diariamente según las instrucciones'
  },
  {
    icon: <Trophy className="w-12 h-12 text-emerald-500" />,
    title: 'Alcanza tus Metas',
    description: 'Observa los resultados y celebra tus logros'
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p className="text-lg text-gray-600">
            Tres simples pasos para alcanzar tu peso ideal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 p-4 bg-emerald-50 rounded-full">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-emerald-200"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};