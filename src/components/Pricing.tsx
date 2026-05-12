import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const tiers = [
    {
      name: "Essential",
      price: "$149",
      description: "Perfect for smaller residential pools.",
      features: ["Weekly chemical balancing", "Skimming & debris removal", "Filter inspection", "Water level check"],
      popular: false
    },
    {
      name: "Premium",
      price: "$199",
      description: "Our most popular full-service plan.",
      features: ["Everything in Essential", "Wall & floor brushing", "Vacuuming as needed", "Tile cleaning", "Priority scheduling"],
      popular: true
    },
    {
      name: "Elite",
      price: "$299",
      description: "Total peace of mind for luxury estates.",
      features: ["Everything in Premium", "Equipment automation check", "Salt cell cleaning", "Heater inspection", "24/7 Emergency support"],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Transparent Pricing</h2>
          <p className="text-white/60 max-w-xl mx-auto">No hidden fees. No long-term contracts. Just pristine water all year round.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl flex flex-col ${tier.popular ? 'bg-azure-500 shadow-2xl shadow-azure-500/20' : 'glass'}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-azure-500 text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="opacity-60">/mo</span>
                </div>
                <p className="mt-4 text-sm opacity-70">{tier.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className={`size-5 shrink-0 ${tier.popular ? 'text-white' : 'text-azure-500'}`} />
                    <span className="text-sm opacity-90">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-white text-azure-500 hover:bg-azure-50' : 'bg-azure-500 text-white hover:bg-azure-400'}`}>
                Choose {tier.name}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm mb-6 italic">Need a custom plan for a commercial pool or water feature?</p>
          <button className="text-azure-500 font-semibold hover:underline">Contact our commercial team →</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
