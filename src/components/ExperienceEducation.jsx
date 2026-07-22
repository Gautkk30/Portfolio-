import React from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { soundFx } from './AudioEffects';

export default function ExperienceEducation() {
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'APJ Abdul Kalam Technological University (KTU)',
      period: '2024 – 2028',
      status: 'Current Student',
      highlights: [
        'Data Structures, Algorithms, Object-Oriented Programming (C++/Java/Python)',
        'Database Systems & Web Technology Specializations',
        'Symposium presenter & technical event participant',
      ],
    },
  ];

  const journey = [
    {
      title: 'Seeking Front-End & Software Engineering Internships',
      role: 'Internship Applicant',
      period: 'Present',
      description: 'Actively seeking 2026 internship roles in Front-End Engineering, UI Development, and Product Engineering.',
    },
    {
      title: 'Building Personal Products (Musi, Spendly)',
      role: 'Product Engineer',
      period: '2024 – Present',
      description: 'Architecting web applications with vanilla web standards, React, Web Audio visualizers, financial management dashboards, and custom design systems.',
    },
    {
      title: 'Open Source Exploration',
      role: 'Independent Developer',
      period: '2024 – Present',
      description: 'Mastering modern web optimizations, responsive grid mechanics, and accessibility standards.',
    },
  ];

  return (
    <section className="px-6 my-24 max-w-5xl mx-auto relative" id="experience">
      <div className="space-y-3 mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-medium uppercase tracking-wider">
          <span>Milestones</span>
        </div>
        <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
          Education & Journey
        </h2>
        <p className="font-body text-sm text-zinc-400 max-w-xl">
          Academic computer science foundation coupled with product engineering practice.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Education */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-headline text-base font-semibold">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span>Education</span>
          </div>

          {education.map((edu, idx) => (
            <div key={idx} onMouseEnter={() => soundFx.playHover()} className="product-card p-6 space-y-3">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h4 className="text-base font-headline font-bold text-white">{edu.degree}</h4>
                  <p className="text-xs font-label text-blue-400 mt-0.5">{edu.institution}</p>
                </div>
                <span className="text-[11px] font-label text-zinc-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                  {edu.period}
                </span>
              </div>

              <ul className="space-y-1.5 text-xs font-body text-zinc-400">
                {edu.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Journey */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-headline text-base font-semibold">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <span>Engineering Journey</span>
          </div>

          <div className="space-y-3">
            {journey.map((item, idx) => (
              <div key={idx} onMouseEnter={() => soundFx.playHover()} className="product-card p-5 space-y-1.5">
                <div className="flex justify-between items-start gap-2">
                  <h4 className="text-sm font-headline font-semibold text-white">{item.title}</h4>
                  <span className="text-[11px] font-label text-zinc-500">{item.period}</span>
                </div>
                <p className="text-xs font-label text-blue-400">{item.role}</p>
                <p className="text-xs font-body text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
