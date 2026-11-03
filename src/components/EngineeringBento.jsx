import React from 'react';
import { BookOpen, Award, Users, Terminal, Code2, Compass, Shield, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData.js';

/**
 * EngineeringBento — Academic Pedigree & Technical Arsenal Bento Grid
 * Clean, structured overview of Shivani's engineering studies at MACE,
 * IEEE leadership, data science focus, and categorized technologies.
 */
export default function EngineeringBento() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono text-blue-400">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>ACADEMIC FOUNDATION & TECHNICAL SCOPE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Pillars</span>
        </h2>
        <p className="font-sans text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
          Bridging mathematical foundations, explainable logic systems, and full-stack software development.
        </p>
      </div>

      {/* 4-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Bento Card 1: Data Science & Logic Philosophy (7 cols) */}
        <div className="md:col-span-7 rounded-2xl bg-[#0F1420] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-semibold">CORE PERSPECTIVE</span>
              <span>EMPIRICAL DATA × LOGIC</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Data is not just numbers; it is the sensor footprint of reality.
            </h3>

            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Rather than treating machine learning as an opaque black box, I prioritize <span className="text-blue-400 font-medium">interpretability</span>, mathematical rigor, and explainable decision paths. From diagnosing heat islands across 5,000 spatial records to proving task dispatch correctness using first-order Horn clauses in Prolog, my aim is software whose reasoning is open to inspection.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Explainable AI & Mathematical Reasoning</span>
            </div>
            <span className="text-emerald-400 font-medium">Verifiable Logic</span>
          </div>
        </div>

        {/* Bento Card 2: Academic Pedigree (5 cols) */}
        <div className="md:col-span-5 rounded-2xl bg-[#0F1420] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-indigo-400 font-semibold">ACADEMIC ANCHOR</span>
              <span>2024 – 2028</span>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Mar Athanasius College of Engineering
              </h3>
              <p className="text-xs font-mono text-indigo-400 mt-1">
                B.Tech in Computer Science (Data Science)
              </p>
            </div>

            <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
              Pursuing foundational coursework in Discrete Mathematics, Data Structures, Relational Database Systems, Machine Learning, and Computer Organization at one of Kerala’s premier engineering institutions.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-indigo-400" />
              <span>Kothamangalam, Kerala</span>
            </div>
            <span className="text-white font-semibold">B.Tech '28</span>
          </div>
        </div>

        {/* Bento Card 3: Technical Community Leadership (5 cols) */}
        <div className="md:col-span-5 rounded-2xl bg-[#0F1420] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-semibold">LEADERSHIP POSTS</span>
              <span>ELECTED '26</span>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Vice Chair, IEEE Computer Society
              </h3>
              <p className="text-xs font-mono text-blue-400 mt-1">
                IEEE MACE Student Branch
              </p>
            </div>

            <p className="font-sans text-slate-300 text-xs sm:text-sm leading-relaxed">
              Leading student community technical workshops, peer hackathons, and research discussions in Data Science and Machine Learning. Serving concurrently as Documentation Lead for the Artificial Intelligence Students Association (AISA).
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-400" />
              <span>Student Community Leadership</span>
            </div>
            <span className="text-blue-400 font-semibold">ACTIVE EXCOM</span>
          </div>
        </div>

        {/* Bento Card 4: Technical Arsenal (7 cols) */}
        <div className="md:col-span-7 rounded-2xl bg-[#0F1420] border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-blue-400 font-semibold">TECHNICAL ARSENAL</span>
              <span>VERIFIED SKILLSET</span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Computational & Full-Stack Matrix
            </h3>

            {/* Categorized Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="text-xs font-mono text-blue-400 font-medium">
                    {cat.category}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
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
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>Python · SQL · Prolog · MERN · OpenCV · Folium</span>
            </div>
            <span className="text-blue-400">CORE ARSENAL</span>
          </div>
        </div>

      </div>

    </section>
  );
}
