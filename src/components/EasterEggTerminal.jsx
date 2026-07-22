import React, { useEffect, useState } from 'react';
import { Terminal, X, Shield, Sparkles, Command } from 'lucide-react';
import { soundFx } from './AudioEffects';

export default function EasterEggTerminal({ isOpen, onClose }) {
  const [konamiSequence, setKonamiSequence] = useState([]);
  const targetSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKonamiSequence((prev) => {
        const updated = [...prev, e.key.length === 1 ? e.key.toLowerCase() : e.key].slice(-10);
        if (JSON.stringify(updated.map(k => k.toLowerCase())) === JSON.stringify(targetSequence.map(k => k.toLowerCase()))) {
          soundFx.playClick();
          onClose(true); // Open modal
          return [];
        }
        return updated;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="w-full max-w-2xl bg-black border border-emerald-500/50 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.25)] font-mono">
        
        {/* Terminal Header */}
        <div className="bg-white/5 border-b border-emerald-500/30 px-4 py-3 flex justify-between items-center text-xs text-emerald-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>GAUTHAM_DEV_TERMINAL_v1.0.8 // ACCESS_GRANTED</span>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose(false);
            }}
            className="p-1 rounded hover:bg-white/10 text-emerald-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-4 text-xs text-emerald-400/90 leading-relaxed overflow-y-auto max-h-[70vh]">
          <div className="space-y-1">
            <p className="text-emerald-300 font-bold">[!] KONAMI CODE DETECTED: ↑ ↑ ↓ ↓ ← → ← → B A</p>
            <p className="text-white/60">&gt; Initializing developer secret sequence...</p>
            <p className="text-white/60">&gt; Accessing Gautham K K's core values...</p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span>Developer Easter Egg Message</span>
            </h4>
            <p className="text-emerald-200">
              "Hey there! If you unlocked this terminal, you possess exceptional curiosity—a trait I value deeply in software engineering. Every line of code in this portfolio was crafted with attention to performance, modern design tokens, and WebGL aesthetics."
            </p>
          </div>

          <div className="space-y-1 text-white/80">
            <p>&gt; <span className="text-yellow-400">Current Status:</span> Seeking 2026 Internship Opportunities</p>
            <p>&gt; <span className="text-yellow-400">Favorite Stack:</span> React, JavaScript, C++, WebGL, Tailwind CSS</p>
            <p>&gt; <span className="text-yellow-400">Location:</span> Kerala, India (IST)</p>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => {
                soundFx.playClick();
                onClose(false);
              }}
              className="px-4 py-2 rounded-lg bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors"
            >
              Exit Terminal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
