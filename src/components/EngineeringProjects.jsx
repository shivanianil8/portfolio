import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Terminal, Cpu, Database, CheckCircle2 } from 'lucide-react';
import UrbanHeatVisual from './visuals/UrbanHeatVisual.jsx';
import FairQueueVisual from './visuals/FairQueueVisual.jsx';
import TrafficCvVisual from './visuals/TrafficCvVisual.jsx';
import VyorraMernVisual from './visuals/VyorraMernVisual.jsx';
import { PROJECTS } from '../data/portfolioData.js';

/**
 * EngineeringProjects — Interactive Developer & Data Science Systems Showcase
 * Presents verified research and full-stack systems with live simulations,
 * interactive thresholds, and source code repositories.
 */
export default function EngineeringProjects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const projects = [
    {
      ...PROJECTS[0], // Urban Heat Island
      visualComponent: <UrbanHeatVisual />,
      domainTag: 'Geospatial Analytics & Data Science',
    },
    {
      ...PROJECTS[1], // FairQueue
      visualComponent: <FairQueueVisual />,
      domainTag: 'First-Order Logic & Knowledge Representation',
    },
    {
      ...PROJECTS[2], // Traffic / Computer Vision
      visualComponent: <TrafficCvVisual />,
      domainTag: 'Computer Vision & Optical Filtering',
    },
    {
      ...PROJECTS[3], // Vyorra
      visualComponent: <VyorraMernVisual />,
      domainTag: 'Full-Stack MERN Architecture',
    },
  ];

  const currentProject = projects[activeProjectIndex];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>FEATURED SYSTEMS & RESEARCH</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Solutions</span>
          </h2>
          <p className="font-sans text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Interactive prototypes built with empirical rigor — explore geospatial isotherm sliders, Prolog inference traces, and full-stack REST API schemas.
          </p>
        </div>

        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-mono text-xs hover:border-blue-400/50 transition-all self-start md:self-auto"
        >
          <span>View All 5 Projects</span>
          <ArrowUpRight className="w-4 h-4 text-blue-400" />
        </Link>
      </div>

      {/* Project Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 font-mono text-xs scrollbar-none">
        {projects.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setActiveProjectIndex(idx)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl whitespace-nowrap transition-all duration-200 ${
              activeProjectIndex === idx
                ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20'
                : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>{p.title}</span>
          </button>
        ))}
      </div>

      {/* Main Interactive System Frame */}
      <div className="rounded-2xl bg-[#0F1420] border border-white/10 overflow-hidden shadow-2xl">
        
        {/* Frame Topbar */}
        <div className="px-6 py-3.5 bg-black/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-blue-400 font-semibold">{currentProject.domainTag}</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">{currentProject.year}</span>
          </div>

          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px]">
            {currentProject.status}
          </span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left: Interactive Sandbox Demo */}
          <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 bg-black/30 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0B0E14]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  {currentProject.visualComponent}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
              <span>Interactive Simulator</span>
              <span className="text-blue-400">Controls Active</span>
            </div>
          </div>

          {/* Right: Technical Specification & Findings */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <div className="text-xs font-mono text-blue-400 tracking-wider">
                  {currentProject.category}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  {currentProject.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {currentProject.subtitle}
                </p>
              </div>

              <p className="text-sm font-sans text-slate-300 leading-relaxed">
                {currentProject.summary}
              </p>

              {/* Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {currentProject.metrics.map((m) => (
                  <div key={m.label} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                    <div className="text-[10px] font-mono uppercase text-slate-500">{m.label}</div>
                    <div className="font-display text-base font-bold text-blue-300">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 font-mono text-xs">
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:border-blue-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-blue-400" />
                  <span>GitHub Repository</span>
                </a>
              )}

              <Link
                to={`/work/${currentProject.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-md shadow-blue-600/20"
              >
                <span>Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
