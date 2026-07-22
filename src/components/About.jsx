import React from 'react';
import { Code2, Zap, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { soundFx } from './AudioEffects';

export default function About() {
  const principles = [
    { title: 'UI Craftsmanship', desc: 'Obsessive attention to spacing systems, contrast ratios, and micro-interactions.', icon: Code2 },
    { title: 'Performance Optimization', desc: 'Sub-100ms render targets, 60 FPS spring physics, and minimal asset footprints.', icon: Zap },
    { title: 'Accessibility First', desc: 'Strict HTML semantics, screen reader readiness, ARIA standards, and reduced motion.', icon: ShieldCheck },
    { title: 'Clean Architecture', desc: 'Component encapsulation, maintainable code structures, and type-safe data flows.', icon: Layers },
  ];

  return (
    <section className="px-6 my-24 max-w-5xl mx-auto relative" id="about">
      <div className="product-card p-8 md:p-12 relative overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-medium uppercase tracking-wider">
              <span>Engineering Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-headline font-bold text-white tracking-tight leading-snug">
              Designed with restraint. <br />
              <span className="text-zinc-400">Engineered for performance.</span>
            </h2>

            <p className="font-body text-sm sm:text-base text-zinc-400 leading-relaxed">
              I am a Front-End Developer & UI Engineer pursuing a B.Tech in Computer Science & Engineering (2024–2028). I construct digital software interfaces with the design precision of Vercel and Linear.
            </p>

            <p className="font-body text-sm text-zinc-400/90 leading-relaxed">
              My work focuses on bridging design systems and technical implementation—ensuring that every interaction feels tactile, predictable, and exceptionally fast across desktop and mobile.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center sm:text-left">
              <div>
                <div className="text-2xl font-headline font-bold text-white">60 FPS</div>
                <div className="text-xs text-zinc-500 mt-0.5">Smooth Motion</div>
              </div>
              <div>
                <div className="text-2xl font-headline font-bold text-blue-400">100%</div>
                <div className="text-xs text-zinc-500 mt-0.5">Responsive</div>
              </div>
              <div>
                <div className="text-2xl font-headline font-bold text-zinc-300">2028</div>
                <div className="text-xs text-zinc-500 mt-0.5">B.Tech CS&E</div>
              </div>
            </div>
          </div>

          {/* Principles */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 hover:border-white/15 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-blue-400" />
                    <h3 className="font-headline text-sm font-semibold text-white">{p.title}</h3>
                  </div>
                  <p className="font-body text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
