import React from 'react';
import { ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.js';

/**
 * EngineeringFooter — Clean Developer & Engineering Footer
 */
export default function EngineeringFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#080B10] font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="text-[10px] text-blue-400 tracking-wider uppercase mb-1">
              ENGINEER & RESEARCHER
            </div>
            <div className="text-white font-bold text-base font-display">
              Shivani Anil
            </div>
            <div className="text-slate-500 text-[11px] mt-0.5">
              B.Tech Computer Science (Data Science)
            </div>
          </div>

          <div>
            <div className="text-[10px] text-blue-400 tracking-wider uppercase mb-1">
              ALMA MATER
            </div>
            <div className="text-white font-medium">
              Mar Athanasius College of Engg.
            </div>
            <div className="text-slate-500 text-[11px] mt-0.5">
              Kothamangalam, Kerala, India
            </div>
          </div>

          <div>
            <div className="text-[10px] text-blue-400 tracking-wider uppercase mb-1">
              STUDENT LEADERSHIP
            </div>
            <div className="text-white font-medium">
              IEEE CS Vice Chair '26
            </div>
            <div className="text-slate-500 text-[11px] mt-0.5">
              AISA Documentation Lead
            </div>
          </div>

          <div>
            <div className="text-[10px] text-blue-400 tracking-wider uppercase mb-1">
              TECH STACK
            </div>
            <div className="text-white font-medium">
              Python · SQL · Prolog · MERN
            </div>
            <div className="text-slate-500 text-[11px] mt-0.5">
              OpenCV · Folium · Scikit-Learn
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-blue-400" />
            <span>© {new Date().getFullYear()} Shivani Anil · Built with React, Tailwind CSS & Framer Motion.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
