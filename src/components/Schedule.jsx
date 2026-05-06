import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, User } from 'lucide-react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('Mon');

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const classes = {
    'Mon': [
      { time: '06:00 AM', name: 'Hypertrophy Elite', coach: 'Marcus Thorne', duration: '60 min' },
      { time: '09:00 AM', name: 'Metabolic Fire', coach: 'Elena Volkov', duration: '45 min' },
      { time: '05:00 PM', name: 'Primal Strength', coach: 'Julian Vance', duration: '90 min' },
      { time: '07:00 PM', name: 'Boxing Elite', coach: 'Sophia Reed', duration: '60 min' },
    ],
    'Tue': [
      { time: '07:00 AM', name: 'Athletic Flow', coach: 'Sophia Reed', duration: '60 min' },
      { time: '12:00 PM', name: 'Power Yoga', coach: 'Emma Stone', duration: '60 min' },
      { time: '06:00 PM', name: 'Hypertrophy Elite', coach: 'Marcus Thorne', duration: '60 min' },
    ],
    // For brevity, I'll repeat Mon/Tue patterns or leave some empty for the demo
    'Wed': [
      { time: '06:00 AM', name: 'Metabolic Fire', coach: 'Elena Volkov', duration: '45 min' },
      { time: '05:00 PM', name: 'Primal Strength', coach: 'Julian Vance', duration: '90 min' },
    ],
    'Thu': [
      { time: '07:00 AM', name: 'Athletic Flow', coach: 'Sophia Reed', duration: '60 min' },
      { time: '06:00 PM', name: 'Hypertrophy Elite', coach: 'Marcus Thorne', duration: '60 min' },
    ],
    'Fri': [
      { time: '06:00 AM', name: 'Hypertrophy Elite', coach: 'Marcus Thorne', duration: '60 min' },
      { time: '05:00 PM', name: 'Metabolic Fire', coach: 'Elena Volkov', duration: '45 min' },
    ],
    'Sat': [
      { time: '09:00 AM', name: 'Elite Performance', coach: 'All Coaches', duration: '120 min' },
    ],
    'Sun': [
      { time: '10:00 AM', name: 'Active Recovery', coach: 'Sophia Reed', duration: '60 min' },
    ],
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">The Schedule</span>
            <h2 className="heading-lg">Master Your <span className="text-gray-300 italic">Time</span></h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`w-14 h-14 font-bebas text-xl tracking-widest transition-all ${
                  activeDay === day 
                    ? 'bg-black text-neon' 
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-black'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode="wait">
            {classes[activeDay].map((item, index) => (
              <motion.div
                key={`${activeDay}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group flex flex-col md:flex-row items-center justify-between p-8 border border-gray-100 hover:border-black transition-all duration-500 bg-white hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row items-center gap-12 text-center md:text-left mb-6 md:mb-0">
                  <div className="w-32">
                    <span className="text-3xl font-bebas text-black">{item.time}</span>
                    <span className="text-gray-400 text-xs block uppercase tracking-widest mt-1">{item.duration}</span>
                  </div>
                  
                  <div className="h-12 w-px bg-gray-100 hidden md:block" />
                  
                  <div>
                    <h3 className="text-3xl font-bebas uppercase group-hover:text-neon transition-colors duration-500">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-1 text-gray-400 text-sm italic font-light">
                      <User size={14} className="text-black" />
                      with {item.coach}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="hidden lg:flex items-center gap-2 text-gray-300">
                    <Clock size={16} />
                    <span className="text-xs uppercase tracking-widest font-medium">Spots Available</span>
                  </div>
                  <button className="btn-primary py-3 px-8 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Book Slot
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
