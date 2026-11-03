import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, ArrowUpRight, BookOpen } from 'lucide-react';
import UrbanHeatVisual from './visuals/UrbanHeatVisual.jsx';
import FairQueueVisual from './visuals/FairQueueVisual.jsx';
import TrafficCvVisual from './visuals/TrafficCvVisual.jsx';
import PollutionDbscanVisual from './visuals/PollutionDbscanVisual.jsx';
import VyorraMernVisual from './visuals/VyorraMernVisual.jsx';

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

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
      case 'vyorra-mern':
        return <VyorraMernVisual />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/75 backdrop-blur-md cursor-pointer"
        />

        {/* Modal / Slide-over Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 32, stiffness: 320 }}
          className="relative w-full max-w-4xl h-full bg-paper overflow-y-auto z-10 flex flex-col border-l border-ink/20 shadow-2xl"
        >
          {/* Header Bar */}
          <div className="sticky top-0 bg-paper/95 backdrop-blur border-b border-ink/15 px-6 py-4 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xxs font-bold text-vermilion tracking-widest bg-vermilion/10 px-2 py-0.5 rounded">
                {project.plate}
              </span>
              <span className="font-mono text-xxs text-ink-muted uppercase tracking-widest">
                ARCHITECTURAL DOSSIER // {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-ink/5 border border-transparent hover:border-ink/10 transition-colors text-ink"
              aria-label="Close dossier"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Dossier Body */}
          <div className="p-6 sm:p-10 space-y-10">
            {/* Title Section */}
            <div className="border-b border-ink/10 pb-8">
              <div className="text-xxs font-mono text-ink-muted uppercase tracking-widest mb-2 flex items-center gap-2">
                <span>{project.category}</span>
                <span>·</span>
                <span>STATUS: {project.status}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-ink tracking-tight leading-tight">
                {project.title}
              </h2>
              <p className="font-sans text-base sm:text-lg text-ink-muted mt-3 max-w-2xl">
                {project.subtitle}
              </p>

              {/* Status & Verification Badges */}
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xxs font-mono">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-paper-dark text-ink font-semibold rounded border border-ink/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-vermilion"></span>
                  {project.status}
                </span>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-ink text-paper rounded hover:bg-vermilion transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded">
                    <AlertCircle className="w-3 h-3" />
                    <span>Academic Research · No Public Repo</span>
                  </span>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-vermilion text-white rounded hover:bg-vermilion-hover transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch Live System</span>
                  </a>
                )}
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3.5 bg-paper-warm rounded border border-ink/10 font-mono text-xxs">
                  <div className="text-ink-muted uppercase">{m.label}</div>
                  <div className="text-sm sm:text-base font-bold text-ink mt-1">{m.value}</div>
                </div>
              ))}
            </div>

            {/* Embedded Visual Interactive Playground */}
            <div>
              <div className="flex items-center justify-between text-xxs font-mono text-ink-muted uppercase tracking-wider mb-2">
                <span>INTERACTIVE TECHNICAL VISUALIZATION</span>
                <span className="text-vermilion font-semibold">LIVE SPECIMEN</span>
              </div>
              {renderVisual()}
            </div>

            {/* Detailed Editorial Text Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-ink-soft leading-relaxed">
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-ink font-semibold border-b border-ink/10 pb-1">
                  The Problem & Scientific Motivation
                </h3>
                <p>{project.problem}</p>
                <p>{project.overview}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl text-ink font-semibold border-b border-ink/10 pb-1">
                  Methodology & Mathematical Approach
                </h3>
                <p>{project.approach}</p>
                <div className="p-3.5 bg-paper-warm rounded border border-ink/10 text-xs font-mono text-ink-muted">
                  <div className="text-vermilion font-bold uppercase mb-1">DATA INTEGRITY NOTE:</div>
                  <div>{project.verifiedNote}</div>
                </div>
              </div>
            </div>

            {/* Implementation Details */}
            <div className="space-y-4">
              <h3 className="font-serif text-xl text-ink font-semibold border-b border-ink/10 pb-1">
                Implementation Architecture
              </h3>
              <ul className="space-y-2.5">
                {project.implementationDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-ink-soft">
                    <span className="text-vermilion font-mono font-bold text-xs mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <h3 className="font-serif text-xl text-ink font-semibold border-b border-ink/10 pb-2 mb-3">
                Verified Technologies & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-paper-warm border border-ink/15 rounded text-xs font-mono text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering & Scientific Learnings */}
            <div className="p-5 bg-paper-warm border-l-2 border-vermilion rounded-r text-sm text-ink-soft">
              <div className="font-mono text-xxs font-bold text-vermilion uppercase tracking-widest mb-1">
                KEY LEARNINGS & TAKEAWAYS
              </div>
              <p className="italic font-serif text-base text-ink">{project.learnings}</p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-ink/15 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-ink/20 rounded font-mono text-xs uppercase tracking-wider hover:bg-ink/5 transition-colors"
              >
                Close Dossier
              </button>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-paper rounded font-mono text-xs hover:bg-vermilion transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Codebase</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-vermilion text-white rounded font-mono text-xs hover:bg-vermilion-hover transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch Live System</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
