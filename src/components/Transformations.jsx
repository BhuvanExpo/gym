import React from 'react';
import { motion } from 'framer-motion';

const Transformations = () => {
  return (
    <section id="gallery" className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-neon font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Proven Results</span>
          <h2 className="heading-lg mb-6">Extreme <span className="text-white/30 italic">Transformations</span></h2>
          <p className="text-white/50 font-light text-lg max-w-2xl mx-auto">
            Witness the discipline and dedication of our members. Your journey to peak performance starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-neon/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src="/trainers_transformation.png"
              alt="Transformation Showcase"
              className="relative w-full h-auto border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-8 left-8 glass-dark p-6 max-w-xs">
              <h4 className="text-2xl font-bebas text-neon mb-1 uppercase">12 Weeks of Grit</h4>
              <p className="text-white/70 text-sm font-light">"The program was intense, but the community kept me going. I've never felt stronger."</p>
            </div>
          </motion.div>

          <div className="space-y-12">
            {[
              { label: "Fat Loss", value: "15%", sub: "Average in 8 weeks" },
              { label: "Muscle Gain", value: "4kg", sub: "Clean mass in 12 weeks" },
              { label: "Strength Boost", value: "30%", sub: "In compound lifts" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex items-center gap-8 border-b border-white/10 pb-8 hover:border-neon transition-colors group"
              >
                <span className="text-7xl font-bebas text-white/10 group-hover:text-neon/20 transition-colors">0{i+1}</span>
                <div>
                  <h3 className="text-4xl font-bebas uppercase group-hover:text-neon transition-colors">{stat.label}</h3>
                  <div className="flex items-baseline gap-4 mt-1">
                    <span className="text-3xl font-bebas italic text-neon">{stat.value}</span>
                    <span className="text-white/40 text-sm tracking-widest uppercase">{stat.sub}</span>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <button className="btn-primary w-full md:w-auto">Start Your Transformation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
