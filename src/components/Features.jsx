import React from 'react';
import { motion } from 'framer-motion';
import { User, Dumbbell, Zap, Apple, Users, Heart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-white p-10 border border-gray-100 hover:border-black transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 -mr-8 -mt-8 rounded-full transition-all group-hover:bg-neon group-hover:scale-150 duration-500" />
    
    <div className="relative z-10">
      <div className="w-16 h-16 bg-black flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
        <Icon className="text-white group-hover:text-black transition-colors" size={32} />
      </div>
      <h3 className="text-3xl font-bebas mb-4 group-hover:tracking-widest transition-all">{title}</h3>
      <p className="text-gray-500 leading-relaxed font-light">
        {description}
      </p>
    </div>
    
    <div className="absolute bottom-0 left-0 h-1 bg-black transition-all duration-500 w-0 group-hover:w-full" />
  </motion.div>
);

const Features = () => {
  const features = [
    {
      icon: User,
      title: "Personal Training",
      description: "Customized 1-on-1 sessions with world-class coaches to reach your specific goals faster than ever."
    },
    {
      icon: Dumbbell,
      title: "Strength Zone",
      description: "Premium Eleiko plates and Hammer Strength equipment in a spacious, meticulously maintained environment."
    },
    {
      icon: Zap,
      title: "Cardio Excellence",
      description: "State-of-the-art Technogym cardio machines with built-in entertainment and performance tracking."
    },
    {
      icon: Apple,
      title: "Nutrition Guidance",
      description: "Science-based meal planning and supplement advice tailored to your body composition goals."
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "High-energy sessions from HIIT to Yoga, led by motivational experts in sound-engineered studios."
    },
    {
      icon: Heart,
      title: "Recovery Lab",
      description: "Cryotherapy, infrared saunas, and compression therapy to ensure your body recovers as hard as it trains."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Our Expertise</span>
            <h2 className="heading-lg">Elevate Every <span className="text-gray-300 italic">Aspect</span> Of Your Training</h2>
          </div>
          <div className="pb-4">
            <button className="btn-outline">View All Facilities</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
