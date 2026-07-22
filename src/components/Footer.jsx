import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { soundFx } from './AudioEffects';

export default function Footer({ onOpenEasterEgg }) {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-background/80 backdrop-blur-xl relative z-10">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Branding */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-headline text-lg font-bold text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-electric-blue" />
            <span>Gautham K K</span>
          </div>
          <p className="text-xs font-label text-on-surface-variant">
            Front-End Developer & UI Engineer • Kerala, India
          </p>
        </div>

        {/* Center: Konami Code Easter Egg Hint & Quick Links */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-6 text-xs font-label text-on-surface-variant">
            <a href="#projects" className="hover:text-white transition-colors">Work</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onOpenEasterEgg();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-tertiary hover:bg-white/10 hover:text-white transition-all"
            title="Trigger Developer Hacker Terminal Easter Egg"
          >
            <Terminal className="w-3 h-3 text-electric-blue" />
            <span>Press '↑ ↑ ↓ ↓ ← → ← → B A' or Click Terminal</span>
          </button>
        </div>

        {/* Right: Copyright & Scroll to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs font-label text-on-surface-variant/80">
            © {new Date().getFullYear()} Gautham K K. Precision Crafted.
          </span>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => soundFx.playHover()}
            className="p-2.5 rounded-full glass-panel hover:bg-white/10 text-white border border-white/10 transition-transform hover:-translate-y-1"
            title="Scroll back to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
