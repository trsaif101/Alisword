
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-cinzel gold-gradient mb-6 tracking-widest">ALISWORD</h2>
          <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
            Dedicated to the ancient art of sword smithing. 
            We preserve the legacy of history's most iconic blades 
            while pushing the boundaries of modern steel mastery.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Forge</h4>
          <ul className="text-gray-500 space-y-3 text-sm">
            <li className="hover:text-gold cursor-pointer transition-colors">Our Process</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Custom Orders</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Blade Maintenance</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Steel Education</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Contact</h4>
          <ul className="text-gray-500 space-y-3 text-sm">
            <li>The Grand Citadel, West Wing</li>
            <li>forge@alisword.com</li>
            <li>+1 (800) LEGENDS</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <p>© 2024 Alisword Legendary Blades. All rights reserved.</p>
        <div className="flex gap-8">
          <span className="hover:text-gold cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gold cursor-pointer">Terms of Service</span>
          <span className="hover:text-gold cursor-pointer">Shipping Lore</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
