import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
  const brands = [
    "FORBES", "VOGUE", "GQ", "MEN'S HEALTH", "WIRED", "BLOOMBERG"
  ];

  return (
    <section className="py-12 bg-gray-50/50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {brands.map((brand, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-2xl md:text-3xl font-bebas tracking-[0.2em] hover:text-black cursor-default transition-colors"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
