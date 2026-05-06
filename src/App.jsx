import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Membership from './components/Membership';
import Trainers from './components/Trainers';
import Transformations from './components/Transformations';
import Testimonials from './components/Testimonials';
import Programs from './components/Programs';
import CTABanner from './components/CTABanner';
import AppPromo from './components/AppPromo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Programs />
        <Membership />
        <Transformations />
        <Trainers />
        <Testimonials />
        <AppPromo />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
