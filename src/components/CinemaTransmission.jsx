import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, Send, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.js';

/**
 * CinemaTransmission — High-Tech Transmission Terminal & Contact Center
 * Features instant 1-click email copy, verified social telemetry coordinates,
 * and an interactive cinematic command terminal.
 */
export default function CinemaTransmission() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sentStatus, setSentStatus] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSentStatus('transmitting');
    setTimeout(() => {
      setSentStatus('transmitted');
      // Direct mailto fallback link for reliability
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Project Collaboration with ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
      window.location.href = mailtoUrl;
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#05070D]">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>SCENE 05 // INITIATE TRANSMISSION</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">SECURE COMMS BEAM</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">TRANSMISSION</span>
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Whether for technical collaborations, machine learning inquiries, research projects, or internships — my inbox is permanently open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Coordinates & One-Click Copy (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick-Copy Console */}
            <div className="p-6 rounded-2xl bg-[#090D18]/90 border border-white/10 backdrop-blur-2xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-cyan-400">DIRECT COMMS FREQUENCY</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  STANDBY
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400">PRIMARY DISPATCH:</div>
                <div className="font-mono text-base sm:text-lg text-white font-semibold break-all">
                  {PERSONAL_INFO.email}
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>FREQUENCY COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL FREQUENCY</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Coordinates */}
            <div className="p-6 rounded-2xl bg-[#090D18]/90 border border-white/10 backdrop-blur-2xl space-y-4">
              <div className="text-xs font-mono text-slate-400">EXTERNAL PROTOCOLS</div>

              <div className="space-y-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-400/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-300 group-hover:text-cyan-400" />
                    <div>
                      <div className="text-xs font-mono text-white font-semibold">GitHub</div>
                      <div className="text-[11px] font-mono text-slate-400">shivanianil8</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW ARCHIVES →
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-400/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-cyan-400" />
                    <div>
                      <div className="text-xs font-mono text-white font-semibold">LinkedIn</div>
                      <div className="text-[11px] font-mono text-slate-400">in/shivani-anil8</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    ESTABLISH LINK →
                  </span>
                </a>
              </div>
            </div>

            {/* Location Coordinates */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="text-slate-500">MACE CAMPUS</span>
            </div>

          </div>

          {/* Right Column: Transmission Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#090D18]/90 border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-slate-300 font-semibold">TRANSMISSION ENCODER</span>
                </div>
                <span className="text-cyan-400 text-[11px]">PORT: 5173 // SSL-TLS</span>
              </div>

              {sentStatus === 'transmitted' ? (
                <div className="py-12 text-center space-y-3 font-mono">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="text-lg text-white font-bold">TRANSMISSION RELAY DISPATCHED</div>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Your transmission payload has been composed. Your default client will finalize delivery to {PERSONAL_INFO.email}.
                  </p>
                  <button
                    onClick={() => setSentStatus(null)}
                    className="mt-4 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white"
                  >
                    RESET ENCODER
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 font-mono text-xs">
                      <label className="text-slate-300 block">SENDER IDENTITY (NAME)</label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Evelyn Reed / Tech Lead"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-xs font-mono transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5 font-mono text-xs">
                      <label className="text-slate-300 block">RETURN FREQUENCY (EMAIL)</label>
                      <input
                        type="email"
                        required
                        placeholder="evelyn@research.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-xs font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-slate-300 block">TRANSMISSION PAYLOAD (MESSAGE)</label>
                    <textarea
                      rows="5"
                      required
                      placeholder="Discussing geospatial anomaly models, machine learning internships, or project collaboration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 text-xs font-mono transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sentStatus === 'transmitting'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 text-black font-semibold font-mono text-xs tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all duration-300 disabled:opacity-50"
                  >
                    {sentStatus === 'transmitting' ? (
                      <>
                        <Sparkles className="w-4 h-4 animate-spin text-black" />
                        <span>ENCODING TRANSMISSION...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH TRANSMISSION</span>
                      </>
                    )}
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
