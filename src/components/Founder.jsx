import React from 'react';
import { motion } from 'framer-motion';

const Founder = () => {
  return (
    <section className="section-padding bg-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neon/5 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-900 overflow-hidden border border-white/10 group">
              <img 
                src="/trainers.png" 
                alt="Founder" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-dark p-8 border-l-4 border-l-neon">
              <h4 className="text-3xl font-bebas text-white uppercase mb-1">Alex Volkov</h4>
              <p className="text-neon font-bebas tracking-widest text-sm uppercase">Founder & CEO</p>
            </div>
          </motion.div>

          <div>
            <span className="text-neon font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">The Visionary</span>
            <h2 className="heading-lg mb-8">Redefining <span className="text-white/30 italic">Human</span> Potential</h2>
            <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
              <p>
                "I started ELITEFIT with a simple realization: the traditional gym model was broken. It lacked the precision of science and the inspiration of luxury."
              </p>
              <p>
                "Our mission is to provide an environment where high-achievers can optimize their bodies with the same intensity they use to build their empires. We don't just provide equipment; we provide an ecosystem of excellence."
              </p>
              <p>
                "At ELITEFIT, we believe that your physical state is the foundation of your success. We are here to ensure that foundation is unbreakable."
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <span className="text-4xl font-bebas text-white block">15+</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">Years Exp.</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <span className="text-4xl font-bebas text-white block">500+</span>
                <span className="text-white/40 text-xs uppercase tracking-widest">Transformations</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <button className="btn-outline border-white text-white hover:bg-white hover:text-black">Founder's Story</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
