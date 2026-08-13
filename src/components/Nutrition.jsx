import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Zap, Scale, Heart } from 'lucide-react';

const Nutrition = () => {
  const plans = [
    {
      icon: Zap,
      title: "Performance Fuel",
      desc: "High-calorie, nutrient-dense plans designed for explosive strength and recovery.",
      macros: "40% Carb | 30% Prot | 30% Fat"
    },
    {
      icon: Scale,
      title: "Metabolic Reset",
      desc: "Precision-calculated macros for lean muscle definition and fat optimization.",
      macros: "20% Carb | 50% Prot | 30% Fat"
    },
    {
      icon: Heart,
      title: "Longevity Focus",
      desc: "Antioxidant-rich, plant-forward protocols for sustained energy and heart health.",
      macros: "35% Carb | 25% Prot | 40% Fat"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Precision Fueling</span>
            <h2 className="heading-lg mb-8">Performance <span className="text-gray-300 italic">Nutrition</span></h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed mb-12">
              Training is only half the battle. Our elite nutritionists craft bespoke meal protocols based on your blood work, metabolic rate, and performance goals.
            </p>
            
            <div className="space-y-8">
              {plans.map((plan, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center shrink-0">
                    <plan.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bebas tracking-wide uppercase mb-2">{plan.title}</h4>
                    <p className="text-gray-400 text-sm font-light mb-2">{plan.desc}</p>
                    <span className="text-[10px] font-bold tracking-widest text-neon bg-black px-2 py-1 uppercase">{plan.macros}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-200 overflow-hidden border-[20px] border-white shadow-2xl">
              <img 
                src="/training_features.png" 
                alt="Nutrition" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-10 -left-10 bg-black text-white p-10 hidden md:block">
              <Utensils className="text-neon mb-4" size={32} />
              <h5 className="text-2xl font-bebas uppercase leading-tight mb-2">Meal Prep <br />Service</h5>
              <p className="text-xs text-white/40 uppercase tracking-widest">Included in Elite Plans</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
