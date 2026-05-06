import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/hero_bg.png"
          alt="Elite Gym Interior"
          className="h-full w-full object-cover opacity-60 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-start section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="text-neon font-bebas text-2xl tracking-[0.5em] uppercase mb-4 block">
            The Pinnacle of Performance
          </span>
          <h1 className="heading-xl text-white mb-6">
            Build Your <br />
            <span className="text-neon italic">Strongest</span> Self.
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-light max-w-2xl mb-10 leading-relaxed">
            Experience the most exclusive fitness destination. World-class equipment, 
            elite trainers, and a community built on discipline and luxury.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button className="btn-primary flex items-center gap-3 group">
              Start Your Journey <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="flex items-center gap-4 text-white font-bebas text-xl tracking-widest hover:text-neon transition-colors group">
              <span className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:border-neon group-hover:bg-neon/10 transition-all">
                <Play fill="white" className="ml-1" />
              </span>
              Take a Virtual Tour
            </button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-12 left-0 right-0 section-padding hidden lg:flex justify-between items-center w-full"
        >
          <div className="flex gap-24">
            <div className="flex flex-col">
              <span className="text-4xl font-bebas text-white">10k+</span>
              <span className="text-white/50 text-sm tracking-widest uppercase">Members</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bebas text-white">25+</span>
              <span className="text-white/50 text-sm tracking-widest uppercase">Elite Trainers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bebas text-white">24/7</span>
              <span className="text-white/50 text-sm tracking-widest uppercase">Access</span>
            </div>
          </div>
          
          <div className="glass p-6 border-l-4 border-l-neon max-w-xs">
            <p className="text-black text-sm font-medium italic">
              "The most advanced facility I've ever trained in. Absolutely elite."
            </p>
            <span className="text-black/60 text-xs mt-2 block">— James Wilson, Pro Athlete</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
