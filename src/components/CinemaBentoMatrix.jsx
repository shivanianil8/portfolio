import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Terminal, Code2, Compass, Shield, CheckCircle2, ChevronRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData.js';

/**
 * CinemaBentoMatrix — Mission Directive & Architectural Bento
 * A high-tech HUD Bento grid detailing Shivani's academic pedigree at MACE,
 * IEEE CS leadership, empirical philosophy, and categorized technical arsenal.
 */
export default function CinemaBentoMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section id="directive" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#05070D]">
      {/* Ambient background lens flare */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>SCENE 03 // MISSION DIRECTIVE</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">ARCHITECTURAL FOUNDATION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">DIRECTIVE</span>
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Synthesizing theoretical computer science, explainable logic, and commercial software discipline into resilient intelligence.
          </p>
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: The Engineering Mindset (Col 7) */}
          <div className="md:col-span-7 rounded-2xl bg-[#090D18]/90 border border-white/10 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  PHILOSOPHY // 01
                </span>
                <span className="text-slate-500">EMPIRICAL DATA × LOGIC</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Data is not just numbers; it is the sensor footprint of reality.
              </h3>

              <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                Rather than treating machine learning as an opaque black box, I prioritize <span className="text-cyan-300 font-medium">interpretability</span>, mathematical rigor, and explainable decision paths. From diagnosing heat islands across 5,000 spatial records to proving task dispatch correctness using first-order Horn clauses, my aim is software whose reasoning is open to inspection.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>EXPLAINABLE DECISION LOGIC</span>
              </div>
              <span className="text-emerald-400">ZERO BLACK BOXES</span>
            </div>
          </div>

          {/* Bento Card 2: Academic Pedigree (Col 5) */}
          <div className="md:col-span-5 rounded-2xl bg-[#090D18]/90 border border-white/10 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                  ACADEMIC ANCHOR // 02
                </span>
                <span className="text-slate-500">2024 – 2028</span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Mar Athanasius College of Engineering
                </h3>
                <p className="text-xs font-mono text-emerald-400 mt-1">
                  B.Tech in Computer Science (Data Science)
                </p>
              </div>

              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                Pursuing rigorous foundational coursework in Discrete Mathematics, Data Structures, Relational Database Systems, Machine Learning, and Computer Organization at one of Kerala’s premier engineering institutions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>Kothamangalam, Kerala</span>
              </div>
              <span className="text-white font-semibold">B.Tech '28</span>
            </div>
          </div>

          {/* Bento Card 3: Executive Leadership (Col 5) */}
          <div className="md:col-span-5 rounded-2xl bg-[#090D18]/90 border border-white/10 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300">
                  LEADERSHIP // 03
                </span>
                <span className="text-slate-500">ELECTED '26</span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Vice Chair, IEEE Computer Society
                </h3>
                <p className="text-xs font-mono text-amber-400 mt-1">
                  IEEE MACE Student Branch
                </p>
              </div>

              <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
                Leading student community technical workshops, peer hackathons, and research discussions in Data Science and Machine Learning. Serving concurrently as Documentation Lead for the Artificial Intelligence Students Association (AISA).
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Student Engineering Leadership</span>
              </div>
              <span className="text-amber-400 font-semibold">ACTIVE EXCOM</span>
            </div>
          </div>

          {/* Bento Card 4: Technical Arsenal & Skill Repertoire (Col 7) */}
          <div className="md:col-span-7 rounded-2xl bg-[#090D18]/90 border border-white/10 backdrop-blur-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  TECHNICAL ARSENAL // 04
                </span>
                <span className="text-slate-500">VERIFIED SKILLSET</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Computational & Full-Stack Matrix
              </h3>

              {/* Categorized Skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="text-xs font-mono text-cyan-400 font-medium">
                      {cat.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Python · MERN · Prolog · OpenCV · Folium</span>
              </div>
              <span className="text-cyan-400">CORE ARSENAL</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
