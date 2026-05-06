import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const h = height / 100;
      const bmiValue = (weight / (h * h)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setMessage('Underweight - Consider our Muscle Building program.');
      else if (bmiValue < 25) setMessage('Healthy Weight - Maintain with our Athletic Flow.');
      else if (bmiValue < 30) setMessage('Overweight - Join our Metabolic Fire program.');
      else setMessage('Obese - Start your journey with Personal Training.');
    }
  };

  return (
    <section className="section-padding bg-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-neon font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Precision Training</span>
            <h2 className="heading-lg mb-8">Calculate Your <span className="text-white/30 italic">Metrics</span></h2>
            <p className="text-white/60 text-lg font-light mb-10 leading-relaxed">
              Knowledge is power. Understanding your BMI is the first step towards a targeted fitness strategy. 
              Use our precision tool to find where you stand and get a recommended program.
            </p>
            
            <form onSubmit={calculateBMI} className="space-y-6 max-w-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40">Height (cm)</label>
                  <input 
                    type="number" 
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="180" 
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-neon outline-none transition-all text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/40">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="75" 
                    className="w-full bg-white/5 border border-white/10 p-4 focus:border-neon outline-none transition-all text-white" 
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary w-full py-5">Calculate Now</button>
            </form>

            {bmi && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 p-8 border border-neon/30 bg-neon/5 flex items-center gap-8"
              >
                <div className="text-center">
                  <span className="text-xs uppercase tracking-widest text-neon mb-1 block">Your BMI</span>
                  <span className="text-6xl font-bebas text-white italic">{bmi}</span>
                </div>
                <div className="h-16 w-px bg-white/10 hidden md:block" />
                <div>
                  <h4 className="font-bebas text-2xl uppercase text-white mb-1">Status Report</h4>
                  <p className="text-white/60 text-sm italic">{message}</p>
                </div>
              </motion.div>
            )}
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Precision", icon: Activity },
                { label: "Analysis", icon: Activity },
                { label: "Target", icon: Activity },
                { label: "Results", icon: Activity },
              ].map((item, i) => (
                <div key={i} className="aspect-square glass-dark flex flex-col items-center justify-center gap-4 hover:border-neon transition-colors group">
                  <item.icon className="text-white/20 group-hover:text-neon transition-colors" size={48} />
                  <span className="font-bebas text-xl tracking-widest uppercase">{item.label}</span>
                </div>
              ))}
            </div>
            {/* Abstract Shape */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-4 border-b-4 border-neon/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
