import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ name, role, content, rating }) => (
  <div className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative flex flex-col h-full group">
    <Quote className="absolute top-8 right-8 text-gray-100 group-hover:text-neon transition-colors" size={60} />
    <div className="flex gap-1 mb-6">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={16} fill="black" stroke="black" />
      ))}
    </div>
    <p className="text-gray-600 italic text-lg leading-relaxed mb-8 flex-grow">
      "{content}"
    </p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-black rounded-full" />
      <div>
        <h4 className="font-bebas text-xl uppercase tracking-wider">{name}</h4>
        <p className="text-gray-400 text-xs uppercase tracking-widest">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "David Chen",
      role: "Founder, TechScale",
      content: "EliteFit isn't just a gym; it's a productivity hack. The environment is so focused and high-energy that I leave feeling sharper for my business.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Professional Athlete",
      content: "The equipment here is better than what I use at the Olympic training center. Truly world-class facilities and the recovery lab is a game-changer.",
      rating: 5
    },
    {
      name: "Michael Ross",
      role: "Executive Director",
      content: "I've been a member of every luxury gym in the city, but none match the level of personalized attention and elite coaching found here.",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">The Community</span>
            <h2 className="heading-lg">What Our <span className="text-gray-300 italic">Elite</span> Members Say</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
