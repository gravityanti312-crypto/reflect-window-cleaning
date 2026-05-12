import React from 'react';
import { motion } from 'motion/react';

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1562094144-206584061989?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1565039320828-e97535b882e0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4">The Azure Standard</h2>
            <p className="text-white/60">Real results from our weekly service routes.</p>
          </div>
          <button className="px-8 py-4 glass hover:bg-white/10 rounded-full font-bold transition-all">
            Follow on Instagram
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-2xl overflow-hidden glass"
            >
              <img
                src={img}
                alt="Pool project"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
