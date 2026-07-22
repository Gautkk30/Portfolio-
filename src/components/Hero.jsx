import React, { useEffect, useState } from 'react';
import { ArrowDown, Code2, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { soundFx } from './AudioEffects';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Front-End Developer & UI Engineer";
  const [time, setTime] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const clockInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(clockInterval);
    };
  }, []);

  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 pt-32 pb-20 relative overflow-hidden" id="hero">
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        {/* Status Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-medium backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Internships</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-medium backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            <span>Kerala, India</span>
            <span className="text-zinc-600">•</span>
            <Clock className="w-3.5 h-3.5 text-zinc-400" />
            <span>{time || 'IST'}</span>
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-headline font-bold text-white tracking-tight leading-[1.08]">
            Crafting high-performance <br />
            <span className="text-gradient">digital product interfaces.</span>
          </h1>

          <div className="h-10 flex items-center justify-center">
            <p className="text-xl sm:text-2xl font-headline font-medium text-zinc-400 tracking-tight">
              {typedText}
              <span className="animate-pulse text-blue-400 font-light">|</span>
            </p>
          </div>
        </div>

        {/* Subtitle Copy */}
        <p className="font-body text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Specialized in modern front-end engineering, pixel-perfect UI execution, responsive layout architecture, and low-latency interaction design.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
          <a
            href="#projects"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="btn-primary px-6 py-3 text-sm font-semibold flex items-center gap-2"
          >
            <span>View Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="btn-secondary px-6 py-3 text-sm font-medium flex items-center gap-2"
          >
            <span>Contact Developer</span>
          </a>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-zinc-500 text-xs font-medium pointer-events-none">
        <span>Scroll for engineering showcase</span>
        <ArrowDown className="w-3.5 h-3.5 text-blue-400 animate-bounce" />
      </div>
    </section>
  );
}
