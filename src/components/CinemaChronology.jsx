import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData.js';

/**
 * CinemaChronology — Production Timeline & Experience Log
 * Styled like a mission chronology log with glowing chronological tracks,
 * institutional tags, and verified engineering responsibilities.
 */
export default function CinemaChronology() {
  return (
    <section id="chronology" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#05070D]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>SCENE 04 // PRODUCTION CHRONOLOGY</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">INDUSTRY & COMMUNITY TRAJECTORY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">CHRONOLOGY</span>
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A verified record of industry software development, engineering leadership, and institutional contributions.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#05070D] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,242,254,0.7)] transition-all duration-300" />

              {/* Mission Card */}
              <div className="p-6 rounded-2xl bg-[#090D18]/90 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-xl">
                
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <span>{item.type}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-400">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h3>
                  <div className="text-sm font-mono text-emerald-400 font-medium">
                    {item.organization}
                  </div>
                </div>

                <p className="font-sans text-slate-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlight banner */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-slate-300 mb-4">
                  <span className="text-cyan-400 font-semibold mr-1.5">KEY IMPACT:</span>
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
