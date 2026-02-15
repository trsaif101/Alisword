
import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <span className="text-3xl font-cinzel gold-gradient font-bold tracking-widest group-hover:scale-105 transition-transform">ALISWORD</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
          {['home', 'collection', 'forge'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`hover:text-gold transition-colors ${activeTab === tab ? 'text-gold' : 'text-gray-400'}`}
            >
              {tab === 'forge' ? 'The AI Forge' : tab}
            </button>
          ))}
        </div>

        <button className="bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold px-6 py-2 rounded-full text-sm font-bold transition-all">
          Enquire
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
