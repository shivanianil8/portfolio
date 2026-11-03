import React from 'react';
import { ArrowUp, Film, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.js';

/**
 * CinemaFooter — Feature Film End Credits & Production Metadata
 * Styled like cinematic closing credits with technical specs and coordinate stamps.
 */
export default function CinemaFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#030408] font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Credits Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          <div>
            <div className="text-[10px] text-cyan-400 tracking-widest uppercase mb-2">
              LEAD ARCHITECT
            </div>
            <div className="text-white font-bold text-base font-display">
              SHIVANI ANIL
            </div>
            <div className="text-slate-500 text-[11px] mt-1">
              B.Tech Computer Science (Data Science)
            </div>
          </div>

          <div>
            <div className="text-[10px] text-cyan-400 tracking-widest uppercase mb-2">
              ACADEMIC BASE
            </div>
            <div className="text-white font-semibold">
              Mar Athanasius College of Engg.
            </div>
            <div className="text-slate-500 text-[11px] mt-1">
              Kothamangalam, Kerala, India
            </div>
          </div>

          <div>
            <div className="text-[10px] text-cyan-400 tracking-widest uppercase mb-2">
              EXECUTIVE ROLES
            </div>
            <div className="text-white font-semibold">
              IEEE CS Vice Chair
            </div>
            <div className="text-slate-500 text-[11px] mt-1">
              AISA Documentation Lead
            </div>
          </div>

          <div>
            <div className="text-[10px] text-cyan-400 tracking-widest uppercase mb-2">
              SYSTEM SPECS
            </div>
            <div className="text-white font-semibold">
              4K Cinema Master
            </div>
            <div className="text-slate-500 text-[11px] mt-1">
              React 18 · Framer Motion · Tailwind
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-3">
            <Film className="w-4 h-4 text-cyan-400" />
            <span>© {new Date().getFullYear()} SHIVANI ANIL. ASPECT RATIO 2.39:1 CINEMATIC MASTER.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GITHUB
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LINKEDIN
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
