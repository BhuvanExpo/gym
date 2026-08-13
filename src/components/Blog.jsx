import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ date, title, category, image, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group cursor-pointer"
  >
    <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-gray-100 border border-gray-100">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
        {category}
      </div>
    </div>
    <div className="flex items-center gap-4 text-gray-400 text-xs tracking-widest uppercase mb-3">
      <span>{date}</span>
      <div className="w-8 h-px bg-gray-200" />
      <span>5 min read</span>
    </div>
    <h4 className="text-2xl font-bebas tracking-wide group-hover:text-neon transition-colors mb-4 leading-tight">
      {title}
    </h4>
    <div className="flex items-center gap-2 text-black font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
      Read More <ArrowRight size={14} />
    </div>
  </motion.div>
);

const Blog = () => {
  const posts = [
    {
      date: "May 12, 2026",
      title: "The Science of Hypertrophy: Maximizing Muscle Growth in Elite Athletes",
      category: "Performance",
      image: "/training_features.png"
    },
    {
      date: "May 08, 2026",
      title: "Biohacking Your Recovery: The Role of Infrared Saunas and Cold Plunge",
      category: "Recovery",
      image: "/hero_bg.png"
    },
    {
      date: "May 02, 2026",
      title: "Nutrition for High-Performers: Fueling the Executive Lifestyle",
      category: "Nutrition",
      image: "/mobile_app.png"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-black font-bebas text-xl tracking-[0.3em] uppercase mb-4 block">Knowledge</span>
            <h2 className="heading-lg">Performance <span className="text-gray-300 italic">Journal</span></h2>
          </div>
          <button className="btn-outline mb-4">View All Articles</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
