
import React from 'react';
import { Product } from '../types.ts';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'The Obsidian Fang',
    category: 'Katana',
    price: 2499,
    description: 'A matte black blade forged from high-carbon volcanic steel. Exceptionally sharp.',
    imageUrl: 'https://picsum.photos/id/10/800/1000',
    specs: { material: 'High-Carbon T10 Steel', length: '103cm', weight: '1.2kg' }
  },
  {
    id: '2',
    name: 'Lionheart Broadsword',
    category: 'Longsword',
    price: 3100,
    description: 'Inspired by medieval kings. Features a weighted pommel and gold leaf hilt.',
    imageUrl: 'https://picsum.photos/id/12/800/1000',
    specs: { material: 'Damascus Spring Steel', length: '115cm', weight: '1.8kg' }
  },
  {
    id: '3',
    name: 'Crimson Whisper',
    category: 'Rapier',
    price: 1850,
    description: 'Lightweight, elegant, and deadly. Perfect for the modern duelist.',
    imageUrl: 'https://picsum.photos/id/15/800/1000',
    specs: { material: 'Folded Stainless Steel', length: '105cm', weight: '0.9kg' }
  },
  {
    id: '4',
    name: 'Ghost Blade',
    category: 'Dagger',
    price: 750,
    description: 'A concealed carry blade with an ivory handle and silver filigree.',
    imageUrl: 'https://picsum.photos/id/20/800/1000',
    specs: { material: 'S35VN Steel', length: '25cm', weight: '0.3kg' }
  }
];

const ProductGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-cinzel gold-gradient">The Alisword Vault</h2>
            <p className="text-gray-500 mt-2">Browse our current ready-to-ship masterpieces.</p>
          </div>
          <div className="hidden sm:block text-gold/60 text-sm italic font-light">Showing 4 of 24 results</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-4 bg-gray-900 border border-white/5 group-hover:border-gold/30 transition-all">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-black/80 text-gold text-xs px-3 py-1 border border-gold/30 rounded-full">
                  {product.category}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-3 font-bold text-sm tracking-widest hover:bg-gold transition-colors">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-cinzel text-white group-hover:text-gold transition-colors">{product.name}</h3>
              <div className="flex justify-between items-center mt-1">
                <p className="text-sm text-gray-500">{product.specs.material}</p>
                <p className="text-gold font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
