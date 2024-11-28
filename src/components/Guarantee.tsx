import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

export const Guarantee = () => {
  return (
    <section className="py-20 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-emerald-800 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 text-emerald-400 mr-4" />
                <h2 className="text-3xl font-bold">Garantía de Satisfacción</h2>
              </div>
              <p className="text-emerald-100 text-lg mb-8">
                Estamos tan seguros de la efectividad de SlimVita que ofrecemos una garantía
                de devolución del 100% de tu dinero si no estás completamente satisfecho
                en los primeros 30 días.
              </p>
              <ul className="space-y-4">
                {[
                  'Devolución sin preguntas',
                  'Garantía de 30 días',
                  'Soporte personalizado',
                  'Resultados garantizados'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-emerald-700 p-8 rounded-lg shadow-lg transform"
              >
                <div className="text-center">
                  <div className="text-6xl font-bold text-emerald-400 mb-2">30</div>
                  <div className="text-2xl font-semibold mb-4">Días de Garantía</div>
                  <p className="text-emerald-100">
                    Si no estás satisfecho, te devolvemos tu dinero sin hacer preguntas
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};