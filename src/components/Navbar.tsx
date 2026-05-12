import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-azure-500 rounded-full flex items-center justify-center shadow-lg shadow-azure-500/20">
            <Droplets className="text-white size-6" />
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight">Azure<span className="text-azure-500">Pools</span></span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Pricing', 'Process', 'Gallery'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium tracking-wide hover:text-azure-500 transition-colors">
              {item}
            </a>
          ))}
          <button className="px-6 py-2.5 bg-azure-500 hover:bg-azure-400 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-azure-500/20">
            Get a Quote
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Services', 'Pricing', 'Process', 'Gallery'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  {item}
                </a>
              ))}
              <button className="w-full py-4 bg-azure-500 text-white rounded-xl font-semibold">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
