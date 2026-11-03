import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData.js';

/**
 * EngineeringChronology — Verified Experience & Leadership Timeline
 * Clean, structured chronology of Shivani's software engineering internship,
 * IEEE leadership, and institutional responsibilities.
 */
export default function EngineeringChronology() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono text-blue-400">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>CAREER TRAJECTORY & LEADERSHIP</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Milestones</span>
        </h2>
        <p className="font-sans text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          Verified industry software development, engineering student leadership, and technical event documentation.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-white/15 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
        {EXPERIENCE.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0B0E14] border-2 border-blue-500 group-hover:bg-blue-500 transition-all duration-200" />

            {/* Experience Card */}
            <div className="p-6 rounded-2xl bg-[#0F1420] border border-white/10 hover:border-blue-500/30 transition-all duration-200">
              
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-blue-400 font-semibold">
                  <span>{item.type}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-300">{item.period}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="mb-3">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.role}
                </h3>
                <div className="text-sm font-mono text-indigo-400 font-medium">
                  {item.organization}
                </div>
              </div>

              <p className="font-sans text-slate-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Key Highlight */}
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-slate-300 mb-4">
                <span className="text-blue-400 font-semibold mr-1.5">KEY RESPONSIBILITY:</span>
                {item.highlight}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[11px] font-mono text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
