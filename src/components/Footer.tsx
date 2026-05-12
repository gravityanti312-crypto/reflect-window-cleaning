import React from 'react';
import { Droplets, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/5 pt-32 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-azure-500 rounded-full flex items-center justify-center">
                <Droplets className="text-white size-5" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight">Azure Pools</span>
            </div>
            <p className="text-white/50 max-w-sm mb-8">
              Providing luxury pool maintenance and repair services across the valley.
              Committed to excellence, reliability, and crystal clear water.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-azure-500 transition-colors">
                <Instagram className="size-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-azure-500 transition-colors">
                <Facebook className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#" className="hover:text-azure-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-azure-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-azure-500 transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-azure-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-azure-500" />
                (555) 123-4567
              </li>
              <li>service@azurepools.com</li>
              <li>123 Desert Oasis Way<br />Scottsdale, AZ 85251</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/30">
          <p>© 2026 Azure Pool Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
