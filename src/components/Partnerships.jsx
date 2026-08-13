import React from 'react';
import { motion } from 'framer-motion';

const PartnershipCard = ({ brand, image, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative aspect-[4/5] overflow-hidden bg-gray-100"
  >
    <img 
      src={image} 
      alt={brand} 
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <h4 className="text-3xl font-bebas text-white mb-2 tracking-wider">{brand}</h4>
      <p className="text-white/70 text-xs uppercase tracking-[0.2em] font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Partnerships = () => {
  const partners = [
    { brand: "HYPERICE", image: "/training_features.png", desc: "Official Recovery Partner" },
    { brand: "WHOOP", image: "/mobile_app.png", desc: "Data & Analytics Integration" },
    { brand: "EQUINOX", image: "/hero_bg.png", desc: "Global Network Access" },
    { brand: "LUXURY CARS", image: "/trainers.png", desc: "Exclusive Member Concierge" }
  ];

  return (
    <section className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-neon font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Ecosystem</span>
          <h2 className="heading-lg">Elite <span className="text-white/30 italic">Partnerships</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto mt-6 font-light uppercase tracking-widest text-xs">
            We collaborate only with the world's most prestigious performance and lifestyle brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.map((partner, index) => (
            <PartnershipCard key={index} {...partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
