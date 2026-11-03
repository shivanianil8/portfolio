import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Layers, Terminal, Sparkles, AlertCircle } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData.js';
import UrbanHeatVisual from './visuals/UrbanHeatVisual.jsx';
import FairQueueVisual from './visuals/FairQueueVisual.jsx';
import TrafficCvVisual from './visuals/TrafficCvVisual.jsx';
import PollutionDbscanVisual from './visuals/PollutionDbscanVisual.jsx';
import VyorraMernVisual from './visuals/VyorraMernVisual.jsx';

export default function ProjectShowcase({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const uhiProject = PROJECTS.find((p) => p.id === 'urban-heat-island');
  const fairQueueProject = PROJECTS.find((p) => p.id === 'fairqueue');
  const trafficProject = PROJECTS.find((p) => p.id === 'smart-traffic-violation');
  const pollutionProject = PROJECTS.find((p) => p.id === 'pollution-hotspot-detection');
  const vyorraProject = PROJECTS.find((p) => p.id === 'vyorra-mern');

  return (
    <section id="works" className="relative scroll-mt-20">
      {/* Editorial Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 border-b border-ink/10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xxs font-mono text-vermilion uppercase tracking-widest mb-2 font-bold">
              <span>01 // ARCHITECTURAL SHOWCASE</span>
              <span>·</span>
              <span>CURATED WORKS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink tracking-tight">
              Selected Projects & <br className="hidden sm:inline" />
              <span className="font-serif-italic text-vermilion">Computational Inquiries</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-ink-muted max-w-md leading-relaxed">
            Each project is an investigation into real data, algorithmic structures, and system design — executed with empirical rigor and verified implementations.
          </p>
        </div>
      </div>

      {/* =========================================================================
          PLATE 01: URBAN HEAT ISLAND EXPLORER (LIGHT EDITORIAL SPLIT)
         ========================================================================= */}
      <div className="border-b border-ink/10 py-16 sm:py-24 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Narrative (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xxs font-bold text-vermilion bg-vermilion/10 px-2.5 py-1 rounded">
                  {uhiProject.plate}
                </span>
                <span className="font-mono text-xxs text-ink-muted uppercase tracking-wider">
                  {uhiProject.category} // {uhiProject.year}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
                {uhiProject.title}
              </h3>

              <p className="font-sans text-base text-ink-soft leading-relaxed">
                {uhiProject.summary}
              </p>

              <div className="p-4 bg-paper-warm border border-ink/10 rounded-sm font-mono text-xxs space-y-2">
                <div className="text-vermilion font-bold uppercase tracking-wider">VERIFIED RESUME ATTRIBUTION</div>
                <div className="text-ink-soft">
                  • Analyzed <strong>5,000+ geospatial records</strong> using Python (Pandas, NumPy).<br />
                  • Interactive heatmaps and spatial anomaly visualizations built with Matplotlib & Folium.
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {uhiProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-paper-warm border border-ink/15 rounded text-xxs font-mono text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectProject(uhiProject)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-ink text-paper rounded font-mono text-xs hover:bg-vermilion transition-colors group"
                >
                  <span>Inspect Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                {uhiProject.github && (
                  <a
                    href={uhiProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-ink/20 hover:border-ink rounded font-mono text-xs text-ink hover:bg-paper-warm transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Codebase</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Interactive Isotherm Visual Playground (7 Cols) */}
            <div className="lg:col-span-7">
              <UrbanHeatVisual />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PLATE 02: FAIRQUEUE (LIGHT EDITORIAL WIDE ENGINE)
         ========================================================================= */}
      <div className="border-b border-ink/10 py-16 sm:py-24 bg-paper-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xxs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded">
                {fairQueueProject.plate}
              </span>
              <span className="font-mono text-xxs text-ink-muted uppercase tracking-wider">
                {fairQueueProject.category} // {fairQueueProject.year}
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
              {fairQueueProject.title} —{' '}
              <span className="font-serif-italic text-blue-800">Queue Fairness Analyzer</span>
            </h3>

            <p className="font-sans text-base text-ink-soft leading-relaxed">
              {fairQueueProject.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onSelectProject(fairQueueProject)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-ink text-paper rounded font-mono text-xs hover:bg-blue-700 transition-colors group"
              >
                <span>Read Architectural Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={fairQueueProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-blue-700 text-white rounded font-mono text-xs hover:bg-blue-800 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Vercel Application</span>
              </a>

              <a
                href={fairQueueProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-ink/20 hover:border-ink rounded font-mono text-xs text-ink hover:bg-paper transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Interactive Prolog Inference Visual */}
          <FairQueueVisual />
        </div>
      </div>

      {/* =========================================================================
          DRAMATIC DARK CHAPTER: PLATES 03 & 04 (STUDIO CINEMATIC CONTRAST)
          Referencing the dark full-bleed contrast of Heat Bureau & zine exhibits!
         ========================================================================= */}
      <div className="bg-[#0A0B0D] text-white py-24 sm:py-36 border-b border-white/10 dark-section relative overflow-hidden">
        {/* Subtle radial lighting lenses */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-vermilion/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-[600px] h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Ambient Grid overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dark-grid-pat" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="3,3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dark-grid-pat)" />
          </svg>
        </div>

        {/* Watermark coordinate */}
        <div className="absolute top-10 right-10 text-white/[0.03] font-mono text-8xl lg:text-[14rem] font-bold select-none pointer-events-none">
          CV // ML
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 relative z-10">
          {/* Chapter Title Banner */}
          <div className="border-b border-white/10 pb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xxs font-mono text-vermilion uppercase tracking-widest mb-3 font-bold">
                <span className="w-2 h-2 rounded-full bg-vermilion animate-ping"></span>
                <span>CHAPTER II // DARK REPERTOIRE</span>
                <span>·</span>
                <span>MACHINE PERCEPTION & UNSUPERVISED LEARNING</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
                Computer Vision & <br />
                <span className="font-serif-italic text-vermilion">Spatial Density Geometries</span>
              </h2>
            </div>

            <div className="font-mono text-xs text-zinc-400 max-w-sm space-y-2 border-l border-white/10 pl-5">
              <div className="text-white font-semibold">EMPIRICAL SENSOR PLATFORMS</div>
              <p className="leading-relaxed">
                Cinematic visual frameworks designed for low-light sensor analysis, automated edge feature extraction, and non-spherical spatial clustering.
              </p>
            </div>
          </div>

          {/* PLATE 03: SMART TRAFFIC VIOLATION DETECTION */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xxs font-bold text-vermilion bg-vermilion/20 px-2.5 py-1 rounded">
                    {trafficProject.plate}
                  </span>
                  <span className="font-mono text-xxs text-zinc-400 uppercase tracking-wider">
                    {trafficProject.category} // {trafficProject.year}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
                  {trafficProject.title}
                </h3>

                <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                  {trafficProject.summary}
                </p>

                <div className="p-3 bg-white/5 border border-white/10 rounded text-xxs font-mono text-zinc-400 space-y-1.5">
                  <div className="text-vermilion font-bold">RESUME GROUND TRUTH:</div>
                  <div>• Automated vehicle detection and license plate recognition using OpenCV.</div>
                  <div>• Image preprocessing pipeline with MySQL database for structured violation indexing.</div>
                  <div className="text-zinc-500 italic">• Academic research prototype; no public repo claimed.</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectProject(trafficProject)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-vermilion text-white rounded font-mono text-xs hover:bg-vermilion-hover transition-colors group"
                  >
                    <span>Inspect Vision Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right: Computer Vision HUD */}
              <div className="lg:col-span-7">
                <TrafficCvVisual />
              </div>
            </div>
          </div>

          {/* PLATE 04: POLLUTION HOTSPOT DETECTION (DBSCAN) */}
          <div className="space-y-8 pt-12 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xxs font-bold text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-800">
                    {pollutionProject.plate}
                  </span>
                  <span className="font-mono text-xxs text-zinc-400 uppercase tracking-wider">
                    {pollutionProject.category} // {pollutionProject.year}
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
                  {pollutionProject.title} —{' '}
                  <span className="font-serif-italic text-emerald-400">DBSCAN Spatial Clustering</span>
                </h3>

                <p className="font-sans text-sm text-zinc-300 leading-relaxed">
                  {pollutionProject.summary}
                </p>

                <div className="p-3 bg-white/5 border border-white/10 rounded text-xxs font-mono text-zinc-400 space-y-1.5">
                  <div className="text-emerald-400 font-bold">VERIFIED SCIENTIFIC SCOPE:</div>
                  <div>• DBSCAN clustering algorithm implemented using Scikit-learn.</div>
                  <div>• Environmental data preprocessing, anomaly clustering, and spatial visualization.</div>
                  <div className="text-amber-400/90 italic">• Interactive previews clearly labeled as illustrative.</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectProject(pollutionProject)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded font-mono text-xs hover:bg-emerald-500 transition-colors group"
                  >
                    <span>Inspect Clustering Methodology</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right: DBSCAN Clustering Interactive Canvas */}
              <div className="lg:col-span-7">
                <PollutionDbscanVisual />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PLATE 05: VYORRA — MERN INTERNSHIP PROJECT (WARM EDITORIAL)
         ========================================================================= */}
      <div className="py-16 sm:py-24 bg-paper border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xxs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded">
                  {vyorraProject.plate}
                </span>
                <span className="font-mono text-xxs text-ink-muted uppercase tracking-wider">
                  {vyorraProject.category} // {vyorraProject.year}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
                {vyorraProject.title}
              </h3>

              <div className="text-xs font-mono text-amber-800 font-semibold bg-amber-50 px-3 py-1.5 rounded border border-amber-200">
                INDUSTRY INTERNSHIP: Limenzy Technologies, Kozhikode (Jun 2026)
              </div>

              <p className="font-sans text-base text-ink-soft leading-relaxed">
                {vyorraProject.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {vyorraProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-paper-warm border border-ink/15 rounded text-xxs font-mono text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <button
                  onClick={() => onSelectProject(vyorraProject)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-ink text-paper rounded font-mono text-xs hover:bg-vermilion transition-colors group"
                >
                  <span>Inspect MERN Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                {vyorraProject.github && (
                  <a
                    href={vyorraProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 border border-ink/20 hover:border-ink rounded font-mono text-xs text-ink hover:bg-paper-warm transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Frontend Repo</span>
                  </a>
                )}

                {vyorraProject.backendGithub && (
                  <a
                    href={vyorraProject.backendGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 border border-ink/20 hover:border-ink rounded font-mono text-xs text-ink hover:bg-paper-warm transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Backend Repo</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right: Full MERN Architecture Interactive */}
            <div className="lg:col-span-7">
              <VyorraMernVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
