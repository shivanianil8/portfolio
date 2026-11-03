import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Terminal, Cpu, Database } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData.js';
import UrbanHeatVisual from '../components/visuals/UrbanHeatVisual.jsx';
import FairQueueVisual from '../components/visuals/FairQueueVisual.jsx';
import TrafficCvVisual from '../components/visuals/TrafficCvVisual.jsx';
import PollutionDbscanVisual from '../components/visuals/PollutionDbscanVisual.jsx';
import VyorraMernVisual from '../components/visuals/VyorraMernVisual.jsx';

/**
 * WorkPage — Clean Engineering Projects Gallery
 */
export default function WorkPage() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects (5)' },
    { id: 'data', label: 'Data Science & Geospatial' },
    { id: 'ai', label: 'AI & Logic' },
    { id: 'cv', label: 'Computer Vision' },
    { id: 'web', label: 'Full-Stack Web' },
  ];

  const matchesFilter = (project) => {
    if (filter === 'all') return true;
    if (filter === 'data') return project.id === 'urban-heat-island' || project.id === 'pollution-hotspot-detection';
    if (filter === 'ai') return project.id === 'fairqueue';
    if (filter === 'cv') return project.id === 'smart-traffic-violation';
    if (filter === 'web') return project.id === 'vyorra';
    return true;
  };

  const filteredProjects = PROJECTS.filter(matchesFilter);

  const renderVisual = (id) => {
    switch (id) {
      case 'urban-heat-island':
        return <UrbanHeatVisual />;
      case 'fairqueue':
        return <FairQueueVisual />;
      case 'smart-traffic-violation':
        return <TrafficCvVisual />;
      case 'pollution-hotspot-detection':
        return <PollutionDbscanVisual />;
      case 'vyorra':
        return <VyorraMernVisual />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16 bg-[#0B0E14] text-slate-100 min-h-screen engineering-grid">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>PORTFOLIO ARCHIVES</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">5 CURATED SYSTEMS</span>
        </div>

        <div className="max-w-3xl space-y-3">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Projects</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
            Every system below is fully operational, open-source, or documented with empirical research methodology.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/20'
                  : 'bg-white/[0.03] text-slate-400 border border-white/5 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className="rounded-2xl bg-[#0F1420] border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-200 shadow-xl"
          >
            {/* Header */}
            <div className="px-6 py-3.5 bg-black/40 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span className="text-blue-300 font-semibold">PROJECT 0{idx + 1}</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-400">{project.category}</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px]">
                {project.status}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Visual Demo */}
              <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 bg-black/30 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0B0E14]">
                  {renderVisual(project.id)}
                </div>
              </div>

              {/* Text / Stats */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-xs font-mono text-blue-400 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm font-sans text-slate-300 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                        <div className="text-[10px] font-mono uppercase text-slate-500">{m.label}</div>
                        <div className="font-display text-sm sm:text-base font-bold text-blue-300">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 font-mono text-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:border-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4 text-blue-400" />
                      <span>Repository</span>
                    </a>
                  )}

                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-md shadow-blue-600/20"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
