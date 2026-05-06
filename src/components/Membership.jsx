import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

const PlanCard = ({ title, price, features, isPopular, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={cn(
      "relative p-12 border transition-all duration-500 flex flex-col h-full",
      isPopular ? "bg-black text-white border-black shadow-2xl scale-105 z-10" : "bg-white text-black border-gray-100 hover:border-black"
    )}
  >
    {isPopular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon text-black px-6 py-1 font-bebas tracking-widest text-sm uppercase">
        Most Popular
      </div>
    )}

    <div className="mb-10">
      <h3 className="text-4xl font-bebas mb-2 uppercase">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-bebas italic">${price}</span>
        <span className={cn("text-sm uppercase tracking-widest font-light", isPopular ? "text-white/50" : "text-black/50")}>/ Month</span>
      </div>
    </div>

    <ul className="space-y-4 mb-12 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3">
          <Check className={cn("w-5 h-5", isPopular ? "text-neon" : "text-black")} />
          <span className={cn("text-sm tracking-wide font-light", isPopular ? "text-white/80" : "text-black/70")}>{feature}</span>
        </li>
      ))}
    </ul>

    <button className={cn(
      "w-full py-4 font-bebas text-xl tracking-widest transition-all duration-300",
      isPopular ? "bg-white text-black hover:bg-neon" : "bg-black text-white hover:bg-neon hover:text-black"
    )}>
      Select {title}
    </button>
  </motion.div>
);

const Membership = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "99",
      features: [
        "24/7 Gym Access",
        "Standard Equipment",
        "Locker Room Access",
        "Free High-Speed Wi-Fi",
        "1 Free Fitness Assessment"
      ]
    },
    {
      title: "Pro Plan",
      price: "199",
      isPopular: true,
      features: [
        "All Basic Features",
        "Unlimited Group Classes",
        "Personal Trainer (4 sessions)",
        "Premium Recovery Lounge",
        "Supplement Discounts (10%)",
        "Guest Passes (2/month)"
      ]
    },
    {
      title: "Elite Plan",
      price: "349",
      features: [
        "All Pro Features",
        "Priority Training Sessions",
        "Daily Laundry Service",
        "Custom Nutrition Plan",
        "Massage Therapy (2/month)",
        "Valet Parking",
        "Global Elite Network Access"
      ]
    }
  ];

  return (
    <section id="memberships" className="section-padding bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Invest in yourself</span>
          <h2 className="heading-lg mb-6">Premium <span className="text-gray-300">Membership</span> Plans</h2>
          <p className="text-gray-500 font-light text-lg">
            Choose the membership that aligns with your ambition. No hidden fees, just pure performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 items-center">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
