import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, Linkedin, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.js';

/**
 * EngineeringContact — Clean Developer Contact Section
 * Features instant 1-click email copy, verified social profiles,
 * and a functional correspondence form.
 */
export default function EngineeringContact() {
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
    setSentStatus('sending');
    setTimeout(() => {
      setSentStatus('sent');
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=Collaboration Inquiry from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
      window.location.href = mailtoUrl;
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono text-blue-400">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>CONTACT & COLLABORATION</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Connect</span>
        </h2>
        <p className="font-sans text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          Open to software engineering internships, research collaborations, machine learning discussions, and student community initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Coordinates & Quick-Copy (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick-Copy Email Card */}
          <div className="p-6 rounded-2xl bg-[#0F1420] border border-white/10 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-blue-400 font-semibold">DIRECT EMAIL</span>
              <span className="text-emerald-400">AVAILABLE</span>
            </div>

            <div>
              <div className="text-xs font-mono text-slate-400">Primary Inbox:</div>
              <div className="font-mono text-base text-white font-semibold break-all mt-1">
                {PERSONAL_INFO.email}
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="p-6 rounded-2xl bg-[#0F1420] border border-white/10 space-y-3">
            <div className="text-xs font-mono text-slate-400">DEVELOPER PROFILES</div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-blue-400/30 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-slate-300 group-hover:text-blue-400" />
                <div>
                  <div className="text-xs font-mono text-white font-semibold">GitHub</div>
                  <div className="text-[11px] font-mono text-slate-400">shivanianil8</div>
                </div>
              </div>
              <span className="text-xs font-mono text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                View Profile →
              </span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-blue-400/30 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-blue-400" />
                <div>
                  <div className="text-xs font-mono text-white font-semibold">LinkedIn</div>
                  <div className="text-[11px] font-mono text-slate-400">in/shivani-anil8</div>
                </div>
              </div>
              <span className="text-xs font-mono text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Connect →
              </span>
            </a>
          </div>

          {/* College Location */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <span className="text-slate-500">MACE Campus</span>
          </div>

        </div>

        {/* Right Column: Contact Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1420] border border-white/10 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
              <span className="text-slate-200 font-semibold">SEND A MESSAGE</span>
              <span className="text-slate-500">Fast Response</span>
            </div>

            {sentStatus === 'sent' ? (
              <div className="py-12 text-center space-y-3 font-mono">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-base text-white font-bold">Message Drafted</div>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Your message has been formatted. Your mail client will finalize sending to {PERSONAL_INFO.email}.
                </p>
                <button
                  onClick={() => setSentStatus(null)}
                  className="mt-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 hover:text-white"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-slate-300 block">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-xs font-mono transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label className="text-slate-300 block">YOUR EMAIL</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-xs font-mono transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <label className="text-slate-300 block">MESSAGE</label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Hello Shivani, I'd like to discuss a project / research collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 text-xs font-mono transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sentStatus === 'sending'}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold font-mono text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-blue-600/20 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}
