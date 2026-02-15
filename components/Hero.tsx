
import React from 'react';

interface HeroProps {
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/433/1920/1080" 
          alt="Ancient Forge" 
          className="w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h3 className="text-gold uppercase tracking-[0.4em] text-sm mb-4 font-bold animate-pulse">Forged in Shadow, Tempered in Fire</h3>
        <h1 className="text-6xl md:text-8xl font-cinzel font-bold mb-6 gold-gradient">
          ALISWORD
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 leading-relaxed italic">
          "The finest steel is born from the hottest flame. Own a piece of history."
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onExplore}
            className="w-full sm:w-auto px-10 py-4 bg-gold text-black font-bold text-lg rounded-sm hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(191,149,63,0.3)]"
          >
            Explore Collection
          </button>
          <button 
            className="w-full sm:w-auto px-10 py-4 border border-gold/50 text-gold font-bold text-lg rounded-sm hover:bg-gold/10 transition-all"
          >
            Watch The Forge
          </button>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
