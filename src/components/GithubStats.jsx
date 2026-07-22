import React from 'react';
import { Github, GitCommit, Star, Flame, Code2, GitPullRequest } from 'lucide-react';
import { soundFx } from './AudioEffects';

export default function GithubStats() {
  const stats = [
    { label: 'Public Repositories', value: '12+', icon: Code2 },
    { label: 'Total Commits', value: '480+', icon: GitCommit },
    { label: 'Primary Language', value: 'JavaScript', icon: Star },
    { label: 'Contribution Streak', value: 'Active', icon: Flame },
  ];

  const languages = [
    { name: 'JavaScript / React', percentage: 45, color: 'bg-yellow-400' },
    { name: 'C++', percentage: 25, color: 'bg-blue-500' },
    { name: 'HTML & CSS', percentage: 18, color: 'bg-orange-500' },
    { name: 'Python', percentage: 12, color: 'bg-emerald-400' },
  ];

  // 12 weeks x 7 days = 84 activity squares for a perfectly proportioned heatmap
  const contributionGrid = Array.from({ length: 84 }).map((_, i) => {
    // Generate organic activity levels (0: none, 1: low, 2: mid, 3: high, 4: peak)
    const level = (i * 7 + (i % 3) * 11) % 5;
    return level;
  });

  const levelColors = [
    'bg-zinc-800/40 border-white/5',
    'bg-emerald-950/80 border-emerald-900/50',
    'bg-emerald-700/80 border-emerald-600/50',
    'bg-emerald-500 border-emerald-400/60',
    'bg-emerald-400 border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.5)]',
  ];

  return (
    <section className="px-6 my-24 max-w-5xl mx-auto relative" id="github">
      <div className="product-card p-6 sm:p-8 md:p-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-medium uppercase tracking-wider">
              <span>Telemetry</span>
            </div>
            <h2 className="text-2xl font-headline font-bold text-white tracking-tight">
              Open Source Activity & Contributions
            </h2>
          </div>

          <a
            href="https://github.com/gauthamkk"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="btn-secondary px-4 py-2 text-xs font-medium flex items-center gap-2 w-fit"
          >
            <Github className="w-4 h-4" />
            <span>@gauthamkk on GitHub</span>
          </a>
        </div>

        {/* Top 4 Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5 hover:border-white/15 transition-all">
                <div className="flex items-center justify-between text-xs text-zinc-500 font-label">
                  <span>{item.label}</span>
                  <Icon className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="text-xl font-headline font-bold text-white">{item.value}</div>
              </div>
            );
          })}
        </div>

        {/* Languages & GitHub Matrix Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Languages Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex justify-between items-center text-xs">
              <h3 className="font-headline font-semibold text-zinc-300 uppercase tracking-wider">Language Distribution</h3>
              <span className="text-zinc-500 font-label">2024–2026</span>
            </div>

            {/* Stacked Bar */}
            <div className="h-3 rounded-full bg-white/5 border border-white/10 overflow-hidden flex">
              {languages.map((lang, i) => (
                <div
                  key={i}
                  className={`h-full ${lang.color} transition-all duration-300`}
                  style={{ width: `${lang.percentage}%` }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>

            {/* Legend Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-body text-zinc-400 pt-1">
              {languages.map((lang, i) => (
                <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className={`w-2.5 h-2.5 rounded-full ${lang.color} shrink-0`} />
                  <span className="truncate">{lang.name} <span className="text-zinc-500">({lang.percentage}%)</span></span>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Heatmap Grid - Fixed Div Sizing with Arbitrary Grid Repeats */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center text-xs">
              <h3 className="font-headline font-semibold text-zinc-300 uppercase tracking-wider">Contribution Matrix</h3>
              <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-xs bg-zinc-800/40 border border-white/5" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-950 border border-emerald-900/50" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-700/80 border border-emerald-600/50" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500 border border-emerald-400/60" />
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-400 border border-emerald-300" />
                <span>More</span>
              </div>
            </div>

            {/* 84-Cell Grid: 12 columns x 7 rows representing 12 full weeks */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] gap-1.5">
                {contributionGrid.map((level, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-[3px] border ${levelColors[level]} transition-transform hover:scale-125 duration-150 cursor-pointer`}
                    title={`Day ${i + 1}: ${level * 4 + 1} contributions`}
                  />
                ))}
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 pt-1">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
