import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Get In Touch</span>
            <h2 className="heading-lg mb-8">Let's Discuss Your <span className="text-gray-300 italic">Goals</span></h2>
            <p className="text-gray-500 text-lg font-light mb-12">
              Ready to take the next step? Visit our facility or send us a message to schedule a tour or a free fitness assessment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                { icon: MapPin, title: "Location", content: "123 Elite Plaza, Luxury District, NY 10001" },
                { icon: Phone, title: "Phone", content: "+1 (800) 999-ELITE" },
                { icon: Mail, title: "Email", content: "membership@elitefit.com" },
                { icon: Clock, title: "Hours", content: "24/7 Access for Members" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 border border-black flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bebas text-lg uppercase">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 grayscale overflow-hidden border border-gray-100 group">
              <div className="w-full h-full flex items-center justify-center text-gray-400 font-bebas text-xl tracking-widest group-hover:text-black transition-colors">
                Interactive Map Loading...
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 shadow-2xl border border-gray-50"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold">First Name</label>
                  <input type="text" placeholder="John" className="w-full p-4 border border-gray-100 focus:border-black outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full p-4 border border-gray-100 focus:border-black outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full p-4 border border-gray-100 focus:border-black outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Interested Program</label>
                <select className="w-full p-4 border border-gray-100 focus:border-black outline-none transition-all appearance-none">
                  <option>Select a program</option>
                  <option>Personal Training</option>
                  <option>Membership Plans</option>
                  <option>Free Trial</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full p-4 border border-gray-100 focus:border-black outline-none transition-all"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-5">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
