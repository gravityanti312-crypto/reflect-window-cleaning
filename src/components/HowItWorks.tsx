import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Clock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Clock className="size-8" />,
      title: "Book Online",
      desc: "Select your plan and preferred service day in under 2 minutes."
    },
    {
      icon: <ShieldCheck className="size-8" />,
      title: "Expert Visit",
      desc: "Our certified technicians arrive and perform a 25-point inspection."
    },
    {
      icon: <Sparkles className="size-8" />,
      title: "Enjoy Your Pool",
      desc: "Receive a digital service report with photos and chemistry levels."
    }
  ];

  return (
    <section id="process" className="py-32 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Pristine Water in <br />
              <span className="text-azure-500">Three Simple Steps</span>
            </h2>
            <p className="text-white/60 text-lg mb-12">
              We've modernized pool care. No more guessing games or missed appointments.
              Just reliable, professional service that keeps your oasis ready for any occasion.
            </p>
            <button className="px-8 py-4 bg-azure-500 hover:bg-azure-400 text-white rounded-full font-bold transition-all">
              Start Your Service
            </button>
          </div>

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex gap-6 p-6 rounded-2xl glass"
              >
                <div className="w-16 h-16 rounded-xl bg-azure-500/20 flex items-center justify-center text-azure-500 shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/50">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
