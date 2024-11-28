import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Ingredients } from './components/Ingredients';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Ingredients />
      <Testimonials />
      <Guarantee />
      <Footer />
    </div>
  );
}

export default App;