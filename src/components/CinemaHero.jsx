import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Radio, Sparkles, Terminal, Activity, Layers, ShieldCheck, Compass } from 'lucide-react';
import CinemaNeuralNexus from './CinemaNeuralNexus.jsx';
import CinemaHologramCard from './CinemaHologramCard.jsx';

/**
 * CinemaHero — The Grand Cinematic Prologue Scene
 * Features widescreen typography, live telemetry, and an interactive dual-mode
 * graphical engine (3D Neural Nexus vs. Cinema Hologram Dossier).
 */
export default function CinemaHero() {
  const [activeVisualMode, setActiveVisualMode] = useState('nexus'); // 'nexus' | 'dossier'

  return (
    <section className="relative py-20 sm:py-28 lg:py-32 flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial lens flares */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Cinematic Typography & Telemetry */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top Scene Marker Pill */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 font-mono text-xs text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>SCENE 01 // PROLOGUE</span>
              </span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-slate-300">MACE · KERALA</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-emerald-400 font-medium">IEEE CS VICE CHAIR</span>
            </div>

            {/* Grand Cinema Display Headline */}
            <div className="space-y-3 mb-6">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95]">
                SHIVANI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">ANIL</span>
              </h1>
              <p className="font-mono text-sm sm:text-base text-cyan-300/90 tracking-widest uppercase">
                // DATA SCIENCE ARCHITECT × INTELLIGENT SYSTEMS
              </p>
            </div>

            {/* Punchy Narrative Quote */}
            <div className="relative pl-5 border-l-2 border-gradient mb-8 space-y-3">
              <div className="absolute -left-[3px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-transparent" />
              <p className="font-display italic text-2xl sm:text-3xl text-slate-100 font-light leading-snug">
                “Curious by nature. <span className="text-cyan-300 not-italic font-semibold">Analytical</span> by design.”
              </p>
              <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                B.Tech in Computer Science (Data Science) undergraduate at{' '}
                <span className="text-white font-medium">Mar Athanasius College of Engineering</span>.
                I build explainable first-order logic dispatchers, multi-tier geospatial thermal analytics, and commercial full-stack architectures.
              </p>
            </div>

            {/* Interactive Call to Action Bar */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-black font-semibold text-sm font-mono tracking-wide hover:shadow-[0_0_35px_rgba(0,242,254,0.4)] transition-all duration-300"
              >
                <span>EXPLORE FEATURE REELS</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-sm font-mono tracking-wide border border-white/15 hover:border-cyan-400/50 transition-all duration-300"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>INITIATE TRANSMISSION</span>
              </a>
            </div>

            {/* Live Verified Telemetry Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10">
              <div className="bg-white/[0.03] p-3 rounded-lg border border-white/5">
                <div className="font-display text-xl sm:text-2xl font-bold text-white">5</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Curated Systems</div>
              </div>
              <div className="bg-white/[0.03] p-3 rounded-lg border border-white/5">
                <div className="font-display text-xl sm:text-2xl font-bold text-cyan-400">5,000+</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Spatial Records</div>
              </div>
              <div className="bg-white/[0.03] p-3 rounded-lg border border-white/5">
                <div className="font-display text-xl sm:text-2xl font-bold text-emerald-400">IEEE CS</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Vice Chair '26</div>
              </div>
              <div className="bg-white/[0.03] p-3 rounded-lg border border-white/5">
                <div className="font-display text-xl sm:text-2xl font-bold text-amber-400">MERN</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Tech Intern</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cinema Visual Centerpiece */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            {/* Visualizer Mode Toggle Buttons */}
            <div className="mb-4 inline-flex items-center p-1 rounded-xl bg-black/60 border border-white/10 backdrop-blur-xl font-mono text-xs">
              <button
                onClick={() => setActiveVisualMode('nexus')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeVisualMode === 'nexus'
                    ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(0,242,254,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D NEURAL NEXUS</span>
              </button>

              <button
                onClick={() => setActiveVisualMode('dossier')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeVisualMode === 'dossier'
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-black font-semibold shadow-[0_0_15px_rgba(0,255,163,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Radio className="w-3.5 h-3.5" />
                <span>CINEMA DOSSIER</span>
              </button>
            </div>

            {/* Dynamic Visual Container */}
            <div className="w-full">
              <AnimatePresence mode="wait">
                {activeVisualMode === 'nexus' ? (
                  <motion.div
                    key="nexus"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CinemaNeuralNexus />
                  </motion.div>
                ) : (
                  <motion.div
                    key="dossier"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CinemaHologramCard />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sub-label coordinates */}
            <div className="mt-3 flex items-center justify-between w-full px-2 text-[10px] font-mono text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>INTERACTIVE CANVAS ENGINE</span>
              </div>
              <span>ASPECT 1:1 // 60FPS</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
