import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Amenities from './components/Amenities';
import Partnerships from './components/Partnerships';
import ScrollProgress from './components/ScrollProgress';
import Membership from './components/Membership';
import Trainers from './components/Trainers';
import Transformations from './components/Transformations';
import Testimonials from './components/Testimonials';
import Founder from './components/Founder';
import Blog from './components/Blog';
import Programs from './components/Programs';
import Nutrition from './components/Nutrition';
import Schedule from './components/Schedule';
import BMICalculator from './components/BMICalculator';
import FAQ from './components/FAQ';
import SocialProof from './components/SocialProof';
import CTABanner from './components/CTABanner';
import AppPromo from './components/AppPromo';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Amenities />
        <Partnerships />
        <Programs />
        <Nutrition />
        <Schedule />
        <Membership />
        <BMICalculator />
        <Transformations />
        <Trainers />
        <Testimonials />
        <Founder />
        <Blog />
        <AppPromo />
        <CTABanner />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
