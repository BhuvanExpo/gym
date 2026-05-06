import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, ShieldCheck, BarChart } from 'lucide-react';

const AppPromo = () => {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Technology</span>
            <h2 className="heading-lg mb-8">The Elite <span className="text-gray-300 italic">Companion</span> App</h2>
            <p className="text-gray-500 text-lg font-light mb-10 leading-relaxed">
              Track your progress, book classes, and access personalized training plans anywhere in the world. 
              Our mobile app is designed to keep you disciplined and motivated 24/7.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: ShieldCheck, title: "Secure Entry", desc: "Digital membership card for contactless gym access." },
                { icon: BarChart, title: "Progress Analytics", desc: "Real-time data on your workouts and body composition." },
                { icon: Smartphone, title: "Live Booking", desc: "Reserve your spot in high-demand group classes instantly." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-12 h-12 bg-black flex-shrink-0 flex items-center justify-center text-white">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bebas text-xl uppercase">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="bg-black text-white px-8 py-4 flex items-center gap-3 hover:bg-neon hover:text-black transition-all font-bebas text-lg">
                <Download size={20} /> App Store
              </button>
              <button className="bg-black text-white px-8 py-4 flex items-center gap-3 hover:bg-neon hover:text-black transition-all font-bebas text-lg">
                <Download size={20} /> Play Store
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="absolute -inset-10 bg-neon/5 blur-[100px] rounded-full" />
            <img
              src="/mobile_app.png"
              alt="Mobile App"
              className="relative z-10 w-full max-w-[500px] h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPromo;
