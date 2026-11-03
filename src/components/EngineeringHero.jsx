import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, Database, Code2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.js';

/**
 * EngineeringHero — Clean, Elite Engineering & Data Science Hero
 * Grounded in computer science craft, academic rigor at MACE,
 * and a natural, beautifully framed engineering portrait.
 */
export default function EngineeringHero() {
  const [activeTab, setActiveTab] = useState('portrait'); // 'portrait' | 'code'

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Academic & Technical Positioning (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Institution & Role Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>MACE · KERALA</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300">B.TECH CS (DATA SCIENCE) '24–'28</span>
          </div>

          {/* Monumental Name & Thesis */}
          <div className="space-y-4">
            <h1 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-none">
              Shivani <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Anil</span>
            </h1>
            <p className="font-mono text-sm sm:text-base text-slate-300 tracking-wide uppercase">
              Computer Science & Data Science Undergrad · IEEE CS Vice Chair
            </p>
          </div>

          {/* Engineering Thesis */}
          <div className="border-l-2 border-blue-500/40 pl-5 space-y-3">
            <p className="font-display italic text-2xl sm:text-3xl text-slate-100 font-normal">
              “Curious by nature. <span className="text-blue-400 font-semibold not-italic">Analytical</span> by design.”
            </p>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Studying at <strong className="text-white font-medium">Mar Athanasius College of Engineering</strong>.
              I research empirical microclimates using spatial temperature data, build explainable first-order logic dispatchers in Prolog, and architect production-grade MERN web services.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs font-mono tracking-wider transition-all duration-200 shadow-lg shadow-blue-600/20"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium text-xs font-mono tracking-wider transition-all duration-200"
            >
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>GET IN TOUCH</span>
            </a>
          </div>

          {/* Verified Engineering Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-xl sm:text-2xl font-bold text-white">5</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Curated Systems</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-xl sm:text-2xl font-bold text-blue-400">5,000+</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Spatial Records</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-xl sm:text-2xl font-bold text-indigo-300">IEEE CS</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Vice Chair '26</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-xl sm:text-2xl font-bold text-emerald-400">MERN</div>
              <div className="text-[11px] font-mono text-slate-400 uppercase">Tech Intern</div>
            </div>
          </div>

        </div>

        {/* Right Column: Clean, High-End Engineering Profile Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center w-full">
          
          {/* Card Toggle Bar */}
          <div className="mb-3 inline-flex items-center p-1 rounded-xl bg-white/5 border border-white/10 font-mono text-xs">
            <button
              onClick={() => setActiveTab('portrait')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                activeTab === 'portrait'
                  ? 'bg-blue-600 text-white font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ENGINEERING PROFILE
            </button>
            <button
              onClick={() => setActiveTab('spec')}
              className={`px-3 py-1 rounded-lg transition-colors ${
                activeTab === 'spec'
                  ? 'bg-blue-600 text-white font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              TECHNICAL SPEC
            </button>
          </div>

          {activeTab === 'portrait' ? (
            /* Elegant, Realistic Portrait Card */
            <div className="w-full max-w-[420px] rounded-2xl bg-[#0F1420] border border-white/10 p-4 sm:p-5 shadow-2xl relative overflow-hidden group">
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-white font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  SHIVANI ANIL
                </span>
                <span className="text-slate-400">KERALA, INDIA</span>
              </div>

              {/* Natural Portrait Photo Frame */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-square sm:aspect-[4/5] bg-[#141A29]">
                <img
                  src="/images/shivani-portrait.jpg"
                  alt="Shivani Anil — Computer Science (Data Science) Undergraduate"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Card Footer Details */}
              <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-medium">B.Tech CS (Data Science)</span>
                  <span className="text-blue-400 font-semibold">MACE '28</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>IEEE CS Vice Chair</span>
                  </span>
                  <span className="text-slate-500">Mar Athanasius College of Engg.</span>
                </div>
              </div>
            </div>
          ) : (
            /* Technical System Specification Card */
            <div className="w-full max-w-[440px] rounded-2xl bg-[#0F1420] border border-white/10 p-6 shadow-2xl space-y-5 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-blue-400 font-semibold">ENGINEERING SPECIFICATION</span>
                <span className="text-slate-500">MACE // CSE-DS</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Core Discipline</div>
                  <div className="text-sm font-semibold text-white">Computer Science (Data Science)</div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Academic Institution</div>
                  <div className="text-sm text-slate-200">Mar Athanasius College of Engineering</div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Primary Computational Stack</div>
                  <div className="text-sm text-blue-300">Python · SQL · Prolog · MERN · OpenCV</div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Leadership Post</div>
                  <div className="text-sm text-emerald-400">Vice Chair, IEEE Computer Society</div>
                </div>

                <div>
                  <div className="text-[10px] text-slate-500 uppercase">Industry Experience</div>
                  <div className="text-sm text-slate-200">MERN Stack Intern, Limenzy Technologies</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center justify-between">
                <span>VERIFIED RECORD</span>
                <span className="text-emerald-400">● ACTIVE UNDERGRAD</span>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
