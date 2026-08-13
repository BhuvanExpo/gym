import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Shield, Car, Wind, Droplets, Tv } from 'lucide-react';

const AmenityCard = ({ icon: Icon, title, desc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group p-8 border border-gray-100 hover:border-neon transition-all duration-500 bg-white"
  >
    <div className="w-12 h-12 bg-black flex items-center justify-center mb-6 group-hover:bg-neon group-hover:scale-110 transition-all duration-500">
      <Icon className="text-white group-hover:text-black transition-colors" size={24} />
    </div>
    <h4 className="text-2xl font-bebas uppercase mb-3 tracking-wider">{title}</h4>
    <p className="text-gray-400 text-sm font-light leading-relaxed">{desc}</p>
  </motion.div>
);

const Amenities = () => {
  const amenities = [
    { icon: Car, title: "Valet Parking", desc: "Arrive in style. Our professional valet team handles your vehicle from the moment you pull up." },
    { icon: Coffee, title: "Private Lounge", desc: "A sanctuary for members to work, network, or relax with premium refreshments and high-speed Wi-Fi." },
    { icon: Wind, title: "Air Purification", desc: "Advanced medical-grade HEPA filtration systems ensuring the purest air quality for peak performance." },
    { icon: Droplets, title: "Luxury Spa", desc: "Indulge in our eucalyptus steam rooms, infrared saunas, and custom rain showers." },
    { icon: Shield, title: "Executive Lockers", desc: "Meticulously designed personal spaces with laundry service and premium grooming products." },
    { icon: Tv, title: "Virtual Hub", desc: "Private pods equipped for high-definition virtual training or important executive calls." }
  ];

  return (
    <section className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">The Extras</span>
            <h2 className="heading-lg">Luxury <span className="text-gray-300 italic">Amenities</span></h2>
          </div>
          <div className="pb-4">
            <p className="text-gray-400 font-light max-w-xs text-right hidden md:block uppercase tracking-widest text-xs">
              Every detail meticulously crafted for the modern high-performer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} {...amenity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
