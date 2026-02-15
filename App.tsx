
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProductGrid from './components/ProductGrid.tsx';
import ForgeAssistant from './components/ForgeAssistant.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'collection' | 'forge'>('home');

  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        {activeTab === 'home' && (
          <>
            <Hero onExplore={() => setActiveTab('collection')} />
            <section className="py-20 bg-[#0a0a0a]">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-cinzel mb-8 gold-gradient">Crafted for Eternity</h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                  At Alisword, we don't just forge steel; we forge legends. Each blade is a masterpiece of 
                  Damascan tradition combined with cutting-edge metallurgical precision.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                  <div className="p-8 border border-white/10 hover:border-gold/50 transition-colors bg-white/5 rounded-lg">
                    <div className="text-gold text-3xl mb-4">⚔️</div>
                    <h3 className="text-xl font-cinzel mb-2">Masterful Forging</h3>
                    <p className="text-sm text-gray-500 text-center">1000+ layers of folded high-carbon steel for unmatched durability.</p>
                  </div>
                  <div className="p-8 border border-white/10 hover:border-gold/50 transition-colors bg-white/5 rounded-lg">
                    <div className="text-gold text-3xl mb-4">💎</div>
                    <h3 className="text-xl font-cinzel mb-2">Artistic Hilt</h3>
                    <p className="text-sm text-gray-500 text-center">Custom engravings and rare gemstone encrustations available.</p>
                  </div>
                  <div className="p-8 border border-white/10 hover:border-gold/50 transition-colors bg-white/5 rounded-lg">
                    <div className="text-gold text-3xl mb-4">📜</div>
                    <h3 className="text-xl font-cinzel mb-2">Legacy Certified</h3>
                    <p className="text-sm text-gray-500 text-center">Every Alisword comes with a certificate of authenticity and lineage.</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'collection' && <ProductGrid />}
        {activeTab === 'forge' && <ForgeAssistant />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
