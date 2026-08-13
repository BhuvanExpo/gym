import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={onClick}
      className="w-full py-8 flex items-center justify-between text-left group"
    >
      <span className="text-2xl font-bebas tracking-wider uppercase group-hover:text-neon transition-colors">
        {question}
      </span>
      <div className="w-10 h-10 border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-8 text-gray-500 font-light leading-relaxed max-w-3xl">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes ELITEFIT different from other luxury gyms?",
      answer: "We focus on a total performance ecosystem. Beyond premium equipment, we provide data-driven recovery labs, personalized nutrition science, and a restricted membership cap to ensure an exclusive, focused atmosphere without wait times."
    },
    {
      question: "Do you offer guest passes for members?",
      answer: "Yes, our Pro and Elite members receive complimentary guest passes every month. We believe in building a community of excellence."
    },
    {
      question: "Can I freeze my membership if I travel?",
      answer: "Elite members have the flexibility to pause their membership for up to 3 months per year. Pro members can pause for up to 1 month."
    },
    {
      question: "Are personal training sessions included?",
      answer: "All new members receive a comprehensive baseline assessment. Our Pro and Elite plans include monthly dedicated coaching sessions, with additional packages available for all members."
    },
    {
      question: "What is the policy for the Recovery Lab?",
      answer: "Our Recovery Lab is accessible 24/7. Some specialized treatments like Cryotherapy and Infrared Saunas require a 30-minute advance booking via our mobile app."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Curiosities</span>
          <h2 className="heading-lg">Frequently Asked <span className="text-gray-300 italic">Questions</span></h2>
        </div>

        <div className="border-t border-gray-100">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              {...faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
