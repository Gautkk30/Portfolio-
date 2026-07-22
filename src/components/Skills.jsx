import React, { useState } from 'react';
import { Code2, Layout, Database, Wrench, Palette, Cpu } from 'lucide-react';
import { soundFx } from './AudioEffects';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'tools', label: 'Tools & Versioning' },
    { id: 'creative', label: 'Creative Suite' },
  ];

  const skillsList = [
    { name: 'C', category: 'languages', level: 'Advanced', icon: Code2 },
    { name: 'C++', category: 'languages', level: 'Advanced', icon: Cpu },
    { name: 'Python', category: 'languages', level: 'Intermediate', icon: Code2 },
    { name: 'JavaScript', category: 'languages', level: 'Expert', icon: Code2 },
    
    { name: 'HTML5', category: 'frontend', level: 'Expert', icon: Layout },
    { name: 'CSS3', category: 'frontend', level: 'Expert', icon: Layout },
    { name: 'Tailwind CSS', category: 'frontend', level: 'Expert', icon: Layout },
    { name: 'Bootstrap', category: 'frontend', level: 'Intermediate', icon: Layout },
    { name: 'REST APIs', category: 'frontend', level: 'Advanced', icon: Wrench },

    { name: 'MongoDB', category: 'backend', level: 'Intermediate', icon: Database },

    { name: 'Git', category: 'tools', level: 'Advanced', icon: Wrench },
    { name: 'GitHub', category: 'tools', level: 'Advanced', icon: Wrench },

    { name: 'Figma', category: 'creative', level: 'Advanced', icon: Palette },
    { name: 'Photoshop', category: 'creative', level: 'Intermediate', icon: Palette },
    { name: 'Lightroom', category: 'creative', level: 'Intermediate', icon: Palette },
    { name: 'DaVinci Resolve', category: 'creative', level: 'Intermediate', icon: Palette },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsList 
    : skillsList.filter(s => s.category === activeCategory);

  return (
    <section className="px-6 my-24 max-w-5xl mx-auto relative" id="skills">
      <div className="space-y-3 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-medium uppercase tracking-wider">
          <span>Capabilities</span>
        </div>
        <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
          Technical Stack & Tools
        </h2>
        <p className="font-body text-sm text-zinc-400 max-w-xl">
          Core engineering stack honed through building software products, component systems, and digital visual assets.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              soundFx.playClick();
              setActiveCategory(cat.id);
            }}
            onMouseEnter={() => soundFx.playHover()}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-white text-zinc-950 font-semibold'
                : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {filteredSkills.map((skill, idx) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="product-card p-4 flex items-center gap-3 hover:border-blue-500/40 group"
            >
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-zinc-400 group-hover:text-blue-400 transition-colors">
                <IconComponent className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-headline text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-body text-zinc-500">
                  {skill.level}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
