import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const ProgramCard = ({ title, tag, image, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative h-[400px] overflow-hidden cursor-pointer"
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
    
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <span className="text-neon font-bebas text-sm tracking-widest uppercase mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{tag}</span>
      <h3 className="text-4xl font-bebas text-white uppercase mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{title}</h3>
      <div className="flex items-center gap-2 text-white font-bebas tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 transform translate-y-4 group-hover:translate-y-0">
        Explore Program <ChevronRight size={16} />
      </div>
    </div>

    {/* Hover Accent */}
    <div className="absolute top-0 left-0 w-1 h-full bg-neon transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
  </motion.div>
);

const Programs = () => {
  const programs = [
    { title: "Hypertrophy Elite", tag: "Muscle Building", image: "/training_features.png" },
    { title: "Metabolic Fire", tag: "Fat Loss", image: "/hero_bg.png" },
    { title: "Primal Strength", tag: "Powerlifting", image: "/training_features.png" },
    { title: "Athletic Flow", tag: "Mobility & Yoga", image: "/hero_bg.png" },
    { title: "Combat Ready", tag: "Boxing & MMA", image: "/training_features.png" }
  ];

  return (
    <section id="programs" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">The Blueprint</span>
          <h2 className="heading-lg">Specialized <span className="text-gray-300 italic">Workout</span> Programs</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
