import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Github, ExternalLink, CheckCircle2, AlertCircle, Terminal, Database } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData.js';
import UrbanHeatVisual from '../components/visuals/UrbanHeatVisual.jsx';
import FairQueueVisual from '../components/visuals/FairQueueVisual.jsx';
import TrafficCvVisual from '../components/visuals/TrafficCvVisual.jsx';
import PollutionDbscanVisual from '../components/visuals/PollutionDbscanVisual.jsx';
import VyorraMernVisual from '../components/visuals/VyorraMernVisual.jsx';

/**
 * ProjectDetailPage — Detailed Engineering Case Study
 */
export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div className="pt-36 pb-24 max-w-4xl mx-auto px-4 text-center space-y-6 bg-[#0B0E14] text-slate-100 min-h-screen">
        <h1 className="font-display text-4xl text-white">Project Not Found</h1>
        <p className="text-slate-400">The requested case study does not exist or has been archived.</p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl font-mono text-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  const renderVisual = () => {
    switch (project.id) {
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
    <article className="pt-28 sm:pt-36 pb-24 space-y-16 bg-[#0B0E14] text-slate-100 min-h-screen engineering-grid">
      
      {/* Top Breadcrumb & Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-6 border-b border-white/10 font-mono text-xs">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <div className="flex items-center gap-2 text-slate-500">
            <span>PROJECT 0{projectIndex + 1} OF 0{PROJECTS.length}</span>
            <span>·</span>
            <span className="text-blue-400">{project.year}</span>
          </div>
        </div>
      </section>

      {/* Main Title & Overview Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>{project.category}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="font-mono text-base text-blue-300">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Badges & GitHub Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 font-mono text-xs">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:border-blue-400 transition-colors"
            >
              <Github className="w-4 h-4 text-blue-400" />
              <span>Inspect Repository</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </section>

      {/* Interactive Visual Sandbox Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0F1420] border border-white/10 p-4 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-white font-semibold">INTERACTIVE SYSTEM CONSOLE</span>
            </div>
            <span className="text-blue-400">Live Simulation</span>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0B0E14]">
            {renderVisual()}
          </div>
        </div>
      </section>

      {/* Deep Problem, Approach & Verified Methodology */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1420] border border-white/10 space-y-3">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
              01 // The Problem Space
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              Analytical Challenge
            </h3>
            <p className="text-sm font-sans text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Approach */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1420] border border-white/10 space-y-3">
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
              02 // Mathematical Approach
            </div>
            <h3 className="font-display text-xl font-bold text-white">
              System Architecture
            </h3>
            <p className="text-sm font-sans text-slate-300 leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1420] border border-white/10 space-y-6">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
            03 // Implementation Milestones
          </div>
          <h3 className="font-display text-2xl font-bold text-white">
            Technical Architecture
          </h3>
          <ul className="space-y-3 font-sans text-sm text-slate-300">
            {project.implementationDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Learnings */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0F1420] border border-white/10 space-y-3">
          <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
            04 // Engineering Takeaways
          </div>
          <h3 className="font-display text-xl font-bold text-white">
            Core Learnings & Synthesis
          </h3>
          <p className="text-sm font-sans text-slate-300 leading-relaxed">
            {project.learnings}
          </p>
        </div>

        {/* Next Project Footer Link */}
        <div className="pt-8 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <span className="text-slate-500">NEXT PROJECT:</span>
          <Link
            to={`/work/${nextProject.slug}`}
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold group"
          >
            <span>{nextProject.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </article>
  );
}
