import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.js';
import { Compass, BookOpen, Cpu, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-paper border-b border-ink/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between text-xxs font-mono text-ink-muted uppercase tracking-widest pb-4 border-b border-ink/10 mb-12">
          <span>02 // PHILOSOPHY & PERSPECTIVE</span>
          <span>EMPIRICAL FOUNDATIONS</span>
        </div>

        {/* Editorial Heading */}
        <div className="max-w-4xl mb-14">
          <span className="font-mono text-xs text-vermilion uppercase tracking-widest font-semibold block mb-2">
            METHODOLOGICAL INQUIRY
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-ink tracking-tight leading-tight">
            A little about <br />
            <span className="font-serif-italic text-vermilion">how I think.</span>
          </h2>
        </div>

        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Big Statement & Philosophical Anchor (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-paper-warm border border-ink/15 rounded-sm space-y-4">
              <span className="text-xxs font-mono text-ink-muted uppercase tracking-widest block">
                THE ANALYTICAL PREMISE
              </span>
              <p className="font-serif italic text-2xl sm:text-3xl text-ink leading-snug">
                “Data is rarely clean, systems are rarely simple, and genuine insight requires both mathematical skepticism and creative empathy.”
              </p>
              <div className="pt-4 border-t border-ink/10 flex items-center justify-between font-mono text-xxs text-ink-muted">
                <span>SHIVANI ANIL</span>
                <span>MACE · KERALA</span>
              </div>
            </div>

            {/* Quick Fact Docket */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-ink/10">
                <span className="text-ink-muted">Discipline</span>
                <span className="font-medium text-ink">Computer Science (Data Science)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-ink/10">
                <span className="text-ink-muted">Alma Mater</span>
                <span className="font-medium text-ink">Mar Athanasius College of Engineering</span>
              </div>
              <div className="flex justify-between py-2 border-b border-ink/10">
                <span className="text-ink-muted">Key Paradigms</span>
                <span className="font-medium text-ink">EDA · DBSCAN · First-Order Logic · MERN</span>
              </div>
              <div className="flex justify-between py-2 border-b border-ink/10">
                <span className="text-ink-muted">Leadership</span>
                <span className="font-medium text-vermilion">IEEE Computer Society Vice Chair</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-ink-soft text-base sm:text-lg leading-relaxed font-sans">
            <p>
              I am an undergraduate student in <strong>Computer Science (Data Science)</strong> at{' '}
              <strong className="text-ink">Mar Athanasius College of Engineering</strong> in Kothamangalam, Kerala. My academic journey is built around the bridge between <em>empirical observation</em> and <em>intelligent computational systems</em>.
            </p>

            <p>
              Whether analyzing over <strong>5,000 geospatial temperature records</strong> to detect urban microclimates, modeling non-spherical environmental pollution clusters with <strong>DBSCAN</strong>, or replacing opaque arithmetic scoring algorithms with <strong>First-Order Logic (pure Prolog Horn clauses)</strong> in <em>FairQueue</em>, my focus is always on clarity, auditability, and verifiable impact.
            </p>

            <p>
              Beyond analytical modeling, I value full-stack software craftsmanship. During my internship at <strong>Limenzy Technologies</strong>, I engineered <em>Vyorra</em> using the complete MERN stack (MongoDB, Express.js, React, Node.js), strengthening my appreciation for end-to-end data contracts and production architectures.
            </p>

            <p>
              In leadership, as <strong>Vice Chair of the IEEE Computer Society</strong> at MACE and <strong>Documentation Lead for AISA</strong>, I organize workshops and mentor fellow students in Data Science and Machine Learning—translating abstract algorithmic principles into accessible, hands-on learning experiences for over 100+ participants.
            </p>

            {/* Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-paper-warm border border-ink/10 rounded">
                <div className="font-mono text-xxs font-bold text-vermilion uppercase mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>TRANSPARENT REASONING</span>
                </div>
                <div className="text-xs text-ink-muted">
                  Prioritizing explainable, rule-based systems and sound statistical hypotheses over black-box assumptions.
                </div>
              </div>

              <div className="p-4 bg-paper-warm border border-ink/10 rounded">
                <div className="font-mono text-xxs font-bold text-ink uppercase mb-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>FULL-SPECTRUM ENGINEERING</span>
                </div>
                <div className="text-xs text-ink-muted">
                  From low-level data wrangling and CV pipelines to responsive React frontends and RESTful APIs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
