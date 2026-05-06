import React from 'react';
import { Dumbbell, Camera, Send, Play, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-black" />
              <span className="text-3xl font-bebas tracking-tighter text-black">
                ELITE<span className="text-neon">FIT</span>
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              The premier destination for luxury fitness and elite performance training. 
              Elevate your standards. Redefine your limits.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Camera size={18} /></a>
              <a href="#" className="w-10 h-10 border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Send size={18} /></a>
              <a href="#" className="w-10 h-10 border border-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-all"><Play size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bebas text-xl uppercase mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Programs', 'Memberships', 'Trainers', 'Success Stories'].map((item) => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-black transition-colors text-sm font-light uppercase tracking-widest">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-xl uppercase mb-8">Support</h4>
            <ul className="space-y-4">
              {['Contact Us', 'FAQs', 'Privacy Policy', 'Terms of Service', 'Membership Terms'].map((item) => (
                <li key={item}><a href="#" className="text-gray-400 hover:text-black transition-colors text-sm font-light uppercase tracking-widest">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bebas text-xl uppercase mb-8">Newsletter</h4>
            <p className="text-gray-400 text-sm font-light mb-6">Join our elite circle for training tips and exclusive updates.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-gray-50 border border-gray-100 p-4 font-bebas tracking-widest text-sm focus:border-black outline-none transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-black text-white hover:bg-neon hover:text-black transition-all">
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-50 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-300 text-xs tracking-widest uppercase font-light">
            © 2026 ELITEFIT GLOBAL. ALL RIGHTS RESERVED. DESIGNED FOR PERFORMANCE.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-xs font-bold tracking-widest uppercase hover:text-neon transition-colors"
          >
            Back to top 
            <span className="w-10 h-10 border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
