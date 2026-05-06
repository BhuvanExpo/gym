import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Memberships', href: '#memberships' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 section-padding py-6 flex items-center justify-between',
        isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="flex items-center gap-2">
        <Dumbbell className={cn("w-8 h-8 transition-colors duration-300", isScrolled ? "text-black" : "text-white")} />
        <span className={cn("text-3xl font-bebas tracking-tighter transition-colors duration-300", isScrolled ? "text-black" : "text-white")}>
          ELITE<span className="text-neon">FIT</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={cn(
              "font-bebas text-lg tracking-widest transition-all hover:text-neon hover:scale-110",
              isScrolled ? "text-black" : "text-white"
            )}
          >
            {link.name}
          </a>
        ))}
        <button className="btn-primary py-2 px-6 text-sm">Join Now</button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className={isScrolled ? "text-black" : "text-white"} />
        ) : (
          <Menu className={isScrolled ? "text-black" : "text-white"} />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-4xl font-bebas text-black tracking-widest hover:text-neon"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="btn-primary mt-4">Join Now</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
