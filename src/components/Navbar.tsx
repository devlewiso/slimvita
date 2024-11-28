import React from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-emerald-600">SlimVita</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-700 hover:text-emerald-600">Beneficios</a>
            <a href="#ingredients" className="text-gray-700 hover:text-emerald-600">Ingredientes</a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600">Testimonios</a>
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700">
              Comprar Ahora
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Beneficios</a>
            <a href="#ingredients" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Ingredientes</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Testimonios</a>
            <button className="w-full text-center bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700">
              Comprar Ahora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};