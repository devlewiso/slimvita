import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">SlimVita</h3>
            <p className="text-gray-400">
              Tu camino hacia una vida más saludable y equilibrada.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#benefits" className="text-gray-400 hover:text-emerald-400">Beneficios</a></li>
              <li><a href="#ingredients" className="text-gray-400 hover:text-emerald-400">Ingredientes</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-emerald-400">Testimonios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@slimvita.com</li>
              <li>Tel: +34 900 123 456</li>
              <li>Lunes a Viernes: 9:00 - 18:00</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SlimVita. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};