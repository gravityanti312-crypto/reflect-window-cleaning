import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury pool at golden hour"
          className="w-full h-full object-cover brightness-[0.6]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505]" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-azure-500" />
              ))}
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase opacity-80">600+ Five-Star Reviews</span>
          </div>

          <h1 className="font-serif text-5xl md:text-8xl font-bold mb-8 leading-[1.1] text-balance">
            Award-Winning <br />
            <span className="text-azure-500 italic">Pool Care</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Experience crystal clear luxury with our premium maintenance services.
            We handle the chemistry, so you can handle the relaxation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-10 py-5 bg-azure-500 hover:bg-azure-400 text-white rounded-full text-lg font-bold transition-all flex items-center gap-3 shadow-2xl shadow-azure-500/40">
              Get Your Free Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 glass hover:bg-white/10 rounded-full text-lg font-semibold transition-all">
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-px h-12 bg-white/30 mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
