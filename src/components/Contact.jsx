import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, ArrowUp, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.js';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-paper relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between text-xxs font-mono text-ink-muted uppercase tracking-widest pb-4 border-b border-ink/10 mb-12">
          <span>06 // DISPATCH & CORRESPONDENCE</span>
          <span>DIRECT CONTACT</span>
        </div>

        {/* Editorial Heading */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="font-mono text-xs text-vermilion uppercase tracking-widest font-semibold block">
            OPEN INQUIRY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-ink tracking-tight leading-tight">
            Have an interesting <br />
            <span className="font-serif-italic text-vermilion">problem in mind?</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-ink-muted leading-relaxed">
            I am always interested in discussing data science research, machine learning challenges, software internships, and collaborative engineering inquiries.
          </p>
        </div>

        {/* Direct Action Hub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Email Action Card */}
          <div className="bg-paper-warm border border-ink/15 rounded-sm p-6 sm:p-8 space-y-4 shadow-fine hover:border-vermilion transition-colors">
            <div className="flex items-center justify-between text-xxs font-mono text-ink-muted">
              <span className="text-vermilion font-bold uppercase">PRIMARY DISPATCH</span>
              <span>INBOX</span>
            </div>

            <div className="p-2.5 bg-paper rounded border border-ink/10 font-mono text-xs sm:text-sm text-ink truncate select-all">
              {PERSONAL_INFO.email}
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-ink text-paper rounded font-mono text-xs hover:bg-vermilion transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-3 py-2.5 border border-ink/20 hover:border-ink rounded font-mono text-xs text-ink transition-colors relative flex items-center justify-center"
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {copied && (
              <div className="text-xxs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded text-center animate-fade-in">
                ✓ Copied to clipboard: {PERSONAL_INFO.email}
              </div>
            )}
          </div>

          {/* LinkedIn Profile Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-paper-warm border border-ink/15 rounded-sm p-6 sm:p-8 space-y-4 shadow-fine hover:border-vermilion transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xxs font-mono text-ink-muted mb-4">
                <span className="font-bold uppercase">PROFESSIONAL NETWORK</span>
                <ArrowUpRight className="w-4 h-4 text-vermilion group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="font-serif text-2xl sm:text-3xl text-ink font-normal group-hover:text-vermilion transition-colors">
                LinkedIn
              </div>
              <p className="font-sans text-xs text-ink-muted mt-2">
                Connect for research collaborations, engineering updates, and professional correspondence.
              </p>
            </div>

            <div className="font-mono text-xxs text-ink-muted border-t border-ink/10 pt-3">
              linkedin.com/in/shivani-anil8
            </div>
          </a>

          {/* GitHub Repository Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-paper-warm border border-ink/15 rounded-sm p-6 sm:p-8 space-y-4 shadow-fine hover:border-vermilion transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xxs font-mono text-ink-muted mb-4">
                <span className="font-bold uppercase">CODEBASE & REPOSITORIES</span>
                <ArrowUpRight className="w-4 h-4 text-vermilion group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="font-serif text-2xl sm:text-3xl text-ink font-normal group-hover:text-vermilion transition-colors">
                GitHub
              </div>
              <p className="font-sans text-xs text-ink-muted mt-2">
                Explore open repositories including FairQueue, Urban Heat Island Explorer, and full-stack projects.
              </p>
            </div>

            <div className="font-mono text-xxs text-ink-muted border-t border-ink/10 pt-3">
              github.com/shivanianil8
            </div>
          </a>
        </div>

        {/* Monumental Typographic Sign-Off & Footer */}
        <div className="border-t border-ink/15 pt-12 sm:pt-16 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xxs text-ink-muted">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-vermilion"></span>
              <span className="font-bold text-ink">SHIVANI ANIL // 2026 PORTFOLIO</span>
            </div>
            <div>
              COORDINATES: {PERSONAL_INFO.coordinates} · {PERSONAL_INFO.location}
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors font-semibold uppercase tracking-wider"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-vermilion" />
            </button>
          </div>

          {/* Monumental Display Name */}
          <div className="text-center sm:text-left select-none overflow-hidden">
            <span className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tighter text-ink/90 block uppercase leading-none font-normal">
              Shivani Anil
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xxs font-mono text-ink-faint pt-4 border-t border-ink/10">
            <span>DESIGNED & ENGINEERED WITH REACT, VITE, TAILWIND CSS & FRAMER MOTION</span>
            <span>NO TEMPLATES · CURIOUS BY NATURE. ANALYTICAL BY DESIGN.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
