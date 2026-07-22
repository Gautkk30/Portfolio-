import React, { useState } from 'react';
import { Mail, Linkedin, Github, FileText, Send, Check, Copy, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from './AudioEffects';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [downloadCount, setDownloadCount] = useState(42);

  const handleCopy = (text, field) => {
    soundFx.playClick();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleResumeDownload = () => {
    soundFx.playClick();
    setDownloadCount(prev => prev + 1);
    
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#3b82f6', '#ffffff']
    });

    const resumeText = `================================================
GAUTHAM K K - FRONT-END DEVELOPER & UI ENGINEER
Location: Kerala, India
Education: B.Tech Computer Science & Engineering (2024-2028)
Portfolio: https://gauthamkk.dev
GitHub: https://github.com/gauthamkk
================================================
SUMMARY:
Front-End Developer & UI Engineer specializing in building modern digital products with React, JavaScript, C++, HTML5/CSS3, and performance optimizations.

SKILLS:
- Languages: JavaScript, C, C++, Python, HTML, CSS
- Web & Tools: React, Tailwind CSS, Bootstrap, REST APIs, Git, GitHub
- Creative: Figma, Photoshop, Lightroom, DaVinci Resolve

CASE STUDIES:
- Musi: Audio Player Application & Visualizer
- Spendly: Personal Finance & Analytics Dashboard

SEEKING:
Front-End Development & Software Engineering Internship Opportunities.
================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Gautham_K_K_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playClick();
    setSubmitted(true);

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section className="px-6 my-24 max-w-5xl mx-auto relative" id="contact">
      <div className="product-card p-8 md:p-12 relative overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-medium uppercase tracking-wider">
                <span>Contact</span>
              </div>
              <h2 className="text-3xl font-headline font-bold text-white tracking-tight">
                Let's Build Together.
              </h2>
              <p className="font-body text-sm text-zinc-400 leading-relaxed">
                Currently open for 2026 internship roles in Front-End Engineering and UI Product Development.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-2.5">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="text-[10px] font-label text-zinc-500">Email</div>
                    <div className="text-xs font-semibold text-white font-mono">gauthamkk@example.com</div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('gauthamkk@example.com', 'email')}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                <Phone className="w-4 h-4 text-zinc-400" />
                <div>
                  <div className="text-[10px] font-label text-zinc-500">Location</div>
                  <div className="text-xs font-semibold text-white">Kerala, India • IST Timezone</div>
                </div>
              </div>
            </div>

            {/* Resume Button */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-white font-headline">Gautham K K Resume</span>
                <span className="text-zinc-500 font-label">{downloadCount} downloads</span>
              </div>
              <button
                onClick={handleResumeDownload}
                onMouseEnter={() => soundFx.playHover()}
                className="w-full btn-primary py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/gauthamkk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="btn-secondary px-4 py-2 text-xs font-medium flex items-center gap-2"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/gauthamkk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="btn-secondary px-4 py-2 text-xs font-medium flex items-center gap-2"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h3 className="text-lg font-headline font-semibold text-white">Send Direct Message</h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-headline font-bold text-white text-sm">Message Sent Successfully!</h4>
                  <p className="text-xs font-body text-zinc-400">
                    Thank you. Gautham will reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-label text-zinc-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/60 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 font-body text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-label text-zinc-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/60 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 font-body text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-label text-zinc-400 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Internship role or project inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/60 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 font-body text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full btn-primary py-2.5 text-xs font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
