import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Send, User } from 'lucide-react';

const TrainerCard = ({ name, role, experience, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="group relative h-[500px] overflow-hidden bg-black"
  >
    {/* Placeholder for trainer image - I'll use a generic colored overlay with name for now if I don't have enough specific images, but I have trainers_transformation.png */}
    <img
      src="/trainers.png"
      alt={name}
      className="h-full w-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
    />
    
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    
    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
      <div className="mb-4">
        <span className="text-neon font-bebas text-sm tracking-widest uppercase mb-1 block">{role}</span>
        <h3 className="text-4xl font-bebas text-white uppercase tracking-tight">{name}</h3>
        <p className="text-white/60 text-sm mt-2 font-light italic">{experience} Experience</p>
      </div>
      
      <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <a href="#" className="p-2 bg-white/10 hover:bg-neon hover:text-black text-white rounded-full transition-colors">
          <Camera size={18} />
        </a>
        <a href="#" className="p-2 bg-white/10 hover:bg-neon hover:text-black text-white rounded-full transition-colors">
          <Send size={18} />
        </a>
        <a href="#" className="p-2 bg-white/10 hover:bg-neon hover:text-black text-white rounded-full transition-colors">
          <User size={18} />
        </a>
      </div>
    </div>
  </motion.div>
);

const Trainers = () => {
  const trainers = [
    { name: "Marcus Thorne", role: "Head Performance Coach", experience: "12 Years" },
    { name: "Elena Volkov", role: "Strength Specialist", experience: "8 Years" },
    { name: "Julian Vance", role: "Body Transformation Expert", experience: "10 Years" },
    { name: "Sophia Reed", role: "Functional Flow Coach", experience: "6 Years" }
  ];

  return (
    <section id="trainers" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">The Elite Team</span>
            <h2 className="heading-lg">Guided By <span className="text-gray-300 italic">Masters</span> Of The Craft</h2>
          </div>
          <div className="pb-4">
            <button className="btn-outline">Join Their Team</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainers.map((trainer, index) => (
            <TrainerCard key={index} {...trainer} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
