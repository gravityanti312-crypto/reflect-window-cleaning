import React from 'react';
import { Star } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />

        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Star className="fill-current" /> TRUSTED
            </div>
            <div className="flex items-center gap-2 font-bold text-xl uppercase tracking-widest">
              Pool Council
            </div>
            <div className="flex items-center gap-2 font-bold text-xl italic">
              Luxury Living
            </div>
            <div className="flex items-center gap-2 font-bold text-xl">
              Desert Home
            </div>
          </div>
        </section>

        <Pricing />

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto glass p-12 rounded-[40px] text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-azure-500" />
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8">Ready for a crystal clear pool?</h2>
            <p className="text-white/60 mb-10 text-lg">Join 600+ happy homeowners who never worry about their pool chemistry again.</p>
            <button className="px-12 py-5 bg-azure-500 hover:bg-azure-400 text-white rounded-full text-xl font-bold transition-all shadow-xl shadow-azure-500/20">
              Get Your Free Quote
            </button>
          </div>
        </section>

        <HowItWorks />
        <Gallery />

        <section className="py-32 px-6 bg-azure-500 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-7xl font-bold mb-8 italic">Let&#39;s dive in.</h2>
            <p className="text-xl mb-12 opacity-90">Schedule your first service today and get 50% off your first month.</p>
            <button className="px-12 py-6 bg-white text-azure-500 rounded-full text-2xl font-black hover:scale-105 transition-transform shadow-2xl">
              CLAIM OFFER NOW
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
