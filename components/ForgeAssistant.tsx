
import React, { useState, useRef, useEffect } from 'react';
import { getSwordAdvice } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const ForgeAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to the Alisword Forge, traveler. I am Ali, the Grand Master Smith. What kind of blade does your soul seek?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getSwordAdvice(input);
      const modelMsg: ChatMessage = { role: 'model', text: response || '' };
      setMessages(prev => [...prev, modelMsg]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'The forge flared up unexpectedly. Try again, traveler.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 min-h-[80vh] bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
      <div className="max-w-4xl mx-auto border border-gold/20 rounded-lg overflow-hidden bg-black shadow-2xl">
        <div className="bg-gold/10 p-6 border-b border-gold/20 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-2xl">🔥</div>
          <div>
            <h2 className="text-xl font-cinzel gold-gradient">Grand Smith's AI Consult</h2>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Powered by Gemini Master Lore</p>
          </div>
        </div>

        <div className="h-[500px] overflow-y-auto p-6 flex flex-col gap-4 scrollbar-thin">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-4 rounded-lg text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-gold/20 border border-gold/30 text-white' 
                  : 'bg-white/5 border border-white/10 text-gray-300'
              }`}>
                <p className="font-bold text-[10px] mb-1 uppercase opacity-50">
                  {msg.role === 'user' ? 'Traveler' : 'Master Ali'}
                </p>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 p-4 rounded-lg text-xs italic text-gray-500">
                Ali is heating the forge...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="p-6 bg-white/5 border-t border-white/10 flex gap-4">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tell me about your quest, or ask for a sword recommendation..."
            className="flex-grow bg-black border border-white/10 rounded-sm px-4 py-3 text-sm focus:border-gold outline-none transition-colors text-white"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className="px-8 py-3 bg-gold text-black font-bold uppercase text-xs tracking-widest hover:bg-white transition-all disabled:opacity-50"
          >
            Forge
          </button>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-500 text-sm">
          Try asking: "What sword would best suit a rogue who value speed?" or "আমাকে একটি তলোয়ার সাজেস্ট করো"
        </p>
      </div>
    </section>
  );
};

export default ForgeAssistant;
