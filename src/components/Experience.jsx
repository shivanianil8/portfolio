import React from 'react';
import { EXPERIENCE } from '../data/portfolioData.js';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-paper-warm border-b border-ink/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 pb-6 border-b border-ink/10 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xxs font-mono text-vermilion uppercase tracking-widest mb-2 font-bold">
              <span>03 // PROFESSIONAL TIMELINE</span>
              <span>·</span>
              <span>EXPERIENCE & LEADERSHIP</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink tracking-tight">
              Roles, Governance & <br />
              <span className="font-serif-italic text-vermilion">Institutional Contributions</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-ink-muted max-w-sm leading-relaxed">
            Hands-on software internship experience paired with sustained technical leadership, workshop mentorship, and institutional documentation across engineering communities.
          </p>
        </div>

        {/* Editorial Timeline / Docket Table */}
        <div className="space-y-4">
          {EXPERIENCE.map((item, idx) => (
            <div
              key={idx}
              className="bg-paper border border-ink/15 hover:border-vermilion transition-all duration-300 rounded-sm p-6 sm:p-8 shadow-fine group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Index & Period (3 Cols) */}
                <div className="lg:col-span-3 space-y-1">
                  <div className="font-mono text-xxs font-bold text-vermilion uppercase tracking-widest">
                    RECORD // 0{idx + 1}
                  </div>
                  <div className="font-mono text-sm font-semibold text-ink">
                    {item.period}
                  </div>
                  <div className="text-xxs font-mono text-ink-muted">
                    {item.type}
                  </div>
                </div>

                {/* Role & Organization (5 Cols) */}
                <div className="lg:col-span-5 space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal tracking-tight group-hover:text-vermilion transition-colors">
                    {item.role}
                  </h3>
                  <div className="font-sans text-sm font-semibold text-ink-soft flex items-center gap-2">
                    <span>{item.organization}</span>
                    <span className="text-ink-muted font-normal">· {item.location}</span>
                  </div>

                  <p className="font-sans text-sm text-ink-muted leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverable & Verified Scope (4 Cols) */}
                <div className="lg:col-span-4 lg:border-l lg:border-ink/10 lg:pl-6 space-y-3">
                  <div className="p-3 bg-paper-warm border border-ink/10 rounded font-mono text-xxs">
                    <span className="text-vermilion font-bold uppercase block mb-1">
                      DELIVERABLE HIGHLIGHT:
                    </span>
                    <span className="text-ink-soft leading-normal block">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Skills / Domain Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 bg-paper-subtle border border-ink/10 rounded text-xxs font-mono text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
