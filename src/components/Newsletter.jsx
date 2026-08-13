import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Newsletter</span>
            <h2 className="text-6xl md:text-7xl font-bebas leading-[0.9] mb-8 uppercase">
              Join the <br />
              <span className="text-gray-300">Elite</span> Circle
            </h2>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md">
              Receive exclusive fitness insights, early access to events, and performance science direct to your inbox. No spam. Only excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass p-12 border border-gray-100 shadow-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="ALEX VOLKOV" 
                    className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black transition-colors outline-none font-bebas text-2xl tracking-widest"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="ALEX@ELITEFIT.COM" 
                    className="w-full bg-transparent border-b border-gray-200 py-4 focus:border-black transition-colors outline-none font-bebas text-2xl tracking-widest"
                  />
                </div>
                <button className="w-full bg-black text-white py-6 font-bebas text-2xl tracking-[0.2em] hover:bg-neon hover:text-black transition-all duration-500 mt-8">
                  SUBSCRIBE NOW
                </button>
              </form>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-6 text-center">
                By subscribing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-neon/10 -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-black/5 -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
