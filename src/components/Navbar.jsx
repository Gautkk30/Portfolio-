import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundFx } from './AudioEffects';

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = ['hero', 'about', 'skills', 'projects', 'github', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const state = soundFx.toggle();
    setAudioEnabled(state);
    if (state) soundFx.playClick();
  };

  const navLinks = [
    { name: 'Work', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Telemetry', href: '#github', id: 'github' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[1.5px] bg-blue-500 z-[100] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Vercel-Style Floating Navbar */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-5xl rounded-full border border-white/10 bg-zinc-950/70 backdrop-blur-xl shadow-2xl flex justify-between items-center px-6 py-2.5 z-50 transition-all duration-300">
        <a 
          href="#" 
          onMouseEnter={() => soundFx.playHover()}
          onClick={() => soundFx.playClick()}
          className="font-headline text-sm font-semibold text-white tracking-tight flex items-center gap-2 group"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_6px_#3b82f6]" />
          <span>Gautham K K</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={toggleAudio}
            onMouseEnter={() => soundFx.playHover()}
            title={audioEnabled ? "Mute UI sound feedback" : "Enable tactile sound feedback"}
            className="p-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle UI Sound"
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-blue-400" /> : <VolumeX className="w-3.5 h-3.5 opacity-60" />}
          </button>

          <a
            href="#contact"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="hidden sm:inline-flex btn-primary px-4 py-1.5 text-xs items-center gap-1 font-medium"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-full border border-white/10 bg-white/5 text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-6 md:hidden p-6 animate-in fade-in duration-200">
          <nav className="flex flex-col items-center gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                }}
                className="text-xl font-headline font-medium text-zinc-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="btn-primary px-6 py-2.5 text-sm items-center gap-2 mt-4"
            >
              Contact Me
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
