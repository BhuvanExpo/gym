import React from 'react';
import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section className="section-padding bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neon/10 skew-x-[-20deg] translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-white/5 skew-x-[20deg] -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-white mb-8">
            Your Transformation <span className="text-neon">Starts Today</span>.
          </h2>
          <p className="text-white/60 text-xl font-light mb-12 max-w-2xl mx-auto uppercase tracking-widest">
            Don't wait for the perfect moment. Take the moment and make it perfect.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="btn-primary px-12">Start Membership</button>
            <button className="px-12 py-4 border-2 border-white text-white font-bebas text-xl tracking-widest hover:bg-white hover:text-black transition-all">Schedule Visit</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
