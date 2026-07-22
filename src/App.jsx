import React, { useState } from 'react';
import SpotlightBackground from './components/SpotlightBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubStats from './components/GithubStats';
import ExperienceEducation from './components/ExperienceEducation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import EasterEggTerminal from './components/EasterEggTerminal';

export default function App() {
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-body relative selection:bg-blue-500/30 selection:text-white">
      {/* Restrained Technical Grid & Cursor Spotlight */}
      <SpotlightBackground />

      {/* Tactile Desktop Cursor */}
      <CustomCursor />

      {/* Floating Product Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubStats />
        <ExperienceEducation />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenEasterEgg={() => setIsEasterEggOpen(true)} />

      {/* Developer Terminal Modal */}
      <EasterEggTerminal
        isOpen={isEasterEggOpen}
        onClose={(val) => setIsEasterEggOpen(val)}
      />
    </div>
  );
}
