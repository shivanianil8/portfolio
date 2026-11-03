import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Activity, Terminal, Shield, Sparkles, Cpu, Layers } from 'lucide-react';
import UrbanHeatVisual from './visuals/UrbanHeatVisual.jsx';
import FairQueueVisual from './visuals/FairQueueVisual.jsx';
import TrafficCvVisual from './visuals/TrafficCvVisual.jsx';
import VyorraMernVisual from './visuals/VyorraMernVisual.jsx';
import { PROJECTS } from '../data/portfolioData.js';

/**
 * CinemaProjectReels — Interactive Blockbuster Systems Showcase
 * Presents projects like feature cinematic reels with live visual simulations,
 * interactive controls, and verifiable technical data.
 */
export default function CinemaProjectReels() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);

  const reels = [
    {
      ...PROJECTS[0], // Urban Heat Island
      reelTag: 'REEL 01 // GEOSPATIAL INTELLIGENCE',
      visualComponent: <UrbanHeatVisual />,
      aspectRatio: '16:9 MASTER',
      filmGrade: 'THERMAL SPECTRUM',
    },
    {
      ...PROJECTS[1], // FairQueue
      reelTag: 'REEL 02 // FIRST-ORDER LOGIC KERNEL',
      visualComponent: <FairQueueVisual />,
      aspectRatio: '2.39:1 CINEMATIC',
      filmGrade: 'EXPLAINABLE PROLOG',
    },
    {
      ...PROJECTS[2], // Agrobot
      reelTag: 'REEL 03 // COMPUTER VISION SCANNER',
      visualComponent: <TrafficCvVisual />,
      aspectRatio: '16:9 MASTER',
      filmGrade: 'HSV OPENCV MESH',
    },
    {
      ...PROJECTS[3], // Vyorra
      reelTag: 'REEL 04 // MERN ARCHITECTURE',
      visualComponent: <VyorraMernVisual />,
      aspectRatio: '16:9 MASTER',
      filmGrade: 'DECOUPLED REST API',
    },
  ];

  const currentReel = reels[activeReelIndex];

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#05070D]">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>SCENE 02 // FEATURED REELS</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">INTERACTIVE COMPUTATIONAL SYSTEMS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              CINEMATIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">REELS</span>
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Every system is engineered from empirical principles — explore interactive heatmaps, Prolog resolution engines, and real-time computer vision scanners.
            </p>
          </div>

          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-mono text-xs hover:border-cyan-400/50 transition-all self-start md:self-auto"
          >
            <span>VIEW ALL 5 ARCHIVES</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

        {/* Film Reel Selector Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 font-mono text-xs scrollbar-none">
          {reels.map((reel, idx) => (
            <button
              key={reel.id}
              onClick={() => setActiveReelIndex(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-300 ${
                activeReelIndex === idx
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_20px_rgba(0,242,254,0.25)] font-semibold'
                  : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{reel.title}</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">({reel.category.split('&')[0]})</span>
            </button>
          ))}
        </div>

        {/* Active Cinema Console Frame */}
        <div className="relative rounded-2xl bg-[#090D18]/90 border border-white/15 backdrop-blur-2xl overflow-hidden shadow-2xl">
          
          {/* Cinema Console Viewfinder Topbar */}
          <div className="px-5 py-3.5 bg-black/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-semibold">{currentReel.reelTag}</span>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span className="text-slate-400 hidden sm:inline">{currentReel.aspectRatio}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px]">
                {currentReel.status}
              </span>
              <span className="text-slate-500 text-[11px] hidden md:inline">
                GRADE: {currentReel.filmGrade}
              </span>
            </div>
          </div>

          {/* Reel Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: Interactive Visual Simulation */}
            <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/20 flex flex-col justify-center">
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#05070D]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReel.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="w-full"
                  >
                    {currentReel.visualComponent}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <span>INTERACTIVE SIMULATION RUNNING</span>
                <span className="text-cyan-400">TOUCH / HOVER CONTROLS ACTIVE</span>
              </div>
            </div>

            {/* Right: Technical Telemetry & Deep Narrative */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-cyan-400 tracking-wider">
                    {currentReel.category}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {currentReel.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    {currentReel.subtitle}
                  </p>
                </div>

                <p className="text-sm font-sans text-slate-300 leading-relaxed">
                  {currentReel.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {currentReel.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2.5 pt-3">
                  {currentReel.metrics.map((m) => (
                    <div key={m.label} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] font-mono uppercase text-slate-500">{m.label}</div>
                      <div className="font-display text-base font-bold text-cyan-300">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 font-mono text-xs">
                {currentReel.github && (
                  <a
                    href={currentReel.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:border-cyan-400 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-cyan-400" />
                    <span>VERIFIED REPO</span>
                  </a>
                )}

                <Link
                  to={`/work/${currentReel.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-semibold hover:shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all"
                >
                  <span>FULL CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
