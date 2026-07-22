import React, { useState } from 'react';
import { ExternalLink, Github, Play, Music, DollarSign, X, Check, Volume2, BarChart3, ArrowRight, Shield } from 'lucide-react';
import { soundFx } from './AudioEffects';

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);
  const [isPlayingDemoMusic, setIsPlayingDemoMusic] = useState(false);

  const projects = [
    {
      id: 'musi',
      title: 'Musi',
      subtitle: 'Audio Player Application & Web Visualizer',
      category: 'Case Study • Audio Application',
      problem: 'Existing web audio players are often bloated, lack fluid responsive visual feedback, and introduce heavy UI latency during playlist navigation.',
      solution: 'Engineered a lightweight, zero-dependency HTML5 audio player built with vanilla Web Audio API visualizers, dark glass aesthetics, and instant keyboard controls.',
      tech: ['JavaScript', 'HTML5 Audio', 'Web Audio API', 'CSS Grid', 'Tailwind CSS'],
      features: [
        'Real-time frequency visualizer via Web Audio API context',
        'Custom track queuing & dynamic playlist management',
        'Keyboard navigation shortcuts (Space, Arrow keys)',
        'Sub-50ms UI response time during audio state changes'
      ],
      github: 'https://github.com/gauthamkk/musi',
      demo: '#musi-demo',
      icon: Music,
    },
    {
      id: 'spendly',
      title: 'Spendly',
      subtitle: 'Personal Finance Dashboard & Analytics',
      category: 'Case Study • Fintech Dashboard',
      problem: 'Personal finance apps often overwhelm users with complex multi-tab navigation and delayed data visualization.',
      solution: 'Created a high-density financial management dashboard that simplifies income/expense tracking, budget goal visualization, and persistent spending reports.',
      tech: ['JavaScript', 'HTML5', 'CSS Grid/Flexbox', 'Analytics Charts', 'Local Storage'],
      features: [
        'Instant expense categorization & income logging',
        'Interactive spending distribution analytics',
        'Persistent offline local storage state synchronization',
        'High-contrast luxury layout designed for rapid data entry'
      ],
      github: 'https://github.com/gauthamkk/spendly',
      demo: '#spendly-demo',
      icon: DollarSign,
    },
  ];

  return (
    <section className="px-6 my-24 max-w-5xl mx-auto relative" id="projects">
      <div className="space-y-3 mb-12 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-medium uppercase tracking-wider">
          <span>Case Studies</span>
        </div>
        <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
          Featured Product Engineering
        </h2>
        <p className="font-body text-sm text-zinc-400 max-w-xl">
          Deep-dive case studies detailing technical architecture, product problems solved, and interactive demos.
        </p>
      </div>

      {/* Case Studies */}
      <div className="space-y-8">
        {projects.map((project, idx) => {
          const IconComponent = project.icon;
          return (
            <div
              key={project.id}
              onMouseEnter={() => soundFx.playHover()}
              className="product-card p-8 md:p-10 space-y-6 group border-white/10 hover:border-blue-500/40"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="space-y-1">
                  <span className="text-xs font-label text-blue-400 font-medium">{project.category}</span>
                  <h3 className="text-2xl font-headline font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-body">{project.subtitle}</p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white w-fit">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                </div>
              </div>

              {/* Case Study Grid: Problem vs Solution */}
              <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="space-y-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="font-headline font-semibold text-white uppercase text-[11px] tracking-wider text-zinc-400">
                    The Problem
                  </h4>
                  <p className="font-body text-zinc-400 leading-relaxed">{project.problem}</p>
                </div>

                <div className="space-y-2 p-4 rounded-xl bg-blue-500/[0.03] border border-blue-500/10">
                  <h4 className="font-headline font-semibold text-blue-400 uppercase text-[11px] tracking-wider">
                    The Engineering Solution
                  </h4>
                  <p className="font-body text-zinc-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Key Features List */}
              <div className="space-y-2">
                <h4 className="font-headline text-xs font-semibold text-white uppercase tracking-wider text-zinc-400">
                  Key Features & Performance Metrics
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 text-xs font-body text-zinc-400">
                  {project.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-label text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setActiveModal(project);
                  }}
                  className="btn-primary flex-1 py-2.5 px-4 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Case Sandbox</span>
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="View Source Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Study Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="product-card w-full max-w-2xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto border-white/20">
            <button
              onClick={() => {
                soundFx.playClick();
                setActiveModal(null);
                setIsPlayingDemoMusic(false);
              }}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-label text-blue-400 uppercase tracking-widest">{activeModal.category}</span>
              <h3 className="text-2xl font-headline font-bold text-white">{activeModal.title} — Interactive Sandbox</h3>
            </div>

            {activeModal.id === 'musi' ? (
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                      <Music className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-headline font-semibold text-white text-sm">Midnight Horizon</div>
                      <div className="text-xs text-zinc-400 font-body">Acoustic Lo-Fi Experience • Musi App</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setIsPlayingDemoMusic(!isPlayingDemoMusic);
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all ${
                      isPlayingDemoMusic ? 'bg-emerald-500 text-black' : 'btn-primary'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlayingDemoMusic ? 'Playing Audio' : 'Test Play Audio'}</span>
                  </button>
                </div>

                <div className="h-14 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center gap-1 px-4">
                  {[40, 75, 30, 90, 50, 80, 45, 60, 95, 35, 70, 85, 40, 65, 90, 50].map((h, i) => (
                    <div
                      key={i}
                      className="w-1.5 rounded-full bg-blue-400 transition-all duration-150"
                      style={{
                        height: isPlayingDemoMusic ? `${Math.max(15, (h + Math.random() * 20) % 100)}%` : '20%',
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-emerald-400" />
                    <span>Spendly Budget Health</span>
                  </span>
                  <span className="text-emerald-400">84% Efficiency</span>
                </div>
                <div className="space-y-2 text-xs font-body">
                  <div className="p-2.5 rounded-lg bg-white/5 flex justify-between">
                    <span className="text-zinc-300">Apple Music Subscription</span>
                    <span className="font-mono text-zinc-400">-$10.99</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 flex justify-between">
                    <span className="text-zinc-300">Freelance UI Contract</span>
                    <span className="font-mono text-emerald-400">+$450.00</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-2">
              <a
                href={activeModal.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="btn-primary flex-1 py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Explore GitHub Codebase</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
