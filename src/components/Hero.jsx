import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import HeroArtCanvas from './visuals/HeroArtCanvas.jsx';
import { PERSONAL_INFO } from '../data/portfolioData.js';

export default function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 lg:pb-24 overflow-hidden border-b border-ink/10">
      {/* Top Editorial Indexing Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
        <div className="flex flex-wrap items-center justify-between text-xxs font-mono text-ink-muted uppercase tracking-widest border-b border-ink/10 pb-3 gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="bg-ink text-paper px-2 py-0.5 rounded font-bold">PORTFOLIO / 2026</span>
            <span className="hidden sm:inline">MAR ATHANASIUS COLLEGE OF ENGINEERING</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-vermilion font-bold">● AVAILABLE FOR ROLES</span>
            <span>KERALA, INDIA</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Monumental Headline Name Feature */}
        <div className="relative mb-8 sm:mb-12">
          {/* Subtle background coordinate line */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-ink/10 -translate-y-1/2 pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between font-mono text-xxs sm:text-xs text-vermilion uppercase tracking-widest font-semibold mb-1">
                <span>Computer Science · Data Science · Intelligent Systems</span>
                <span className="hidden md:inline text-ink-muted font-normal">EDITION // 2026</span>
              </div>

              {/* Monumental Editorial Name */}
              <div className="flex flex-wrap items-baseline justify-between">
                <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-ink uppercase leading-[0.88] select-none font-normal">
                  Shivani <span className="font-serif-italic font-normal text-vermilion tracking-normal">Anil</span>
                </h1>
                <div className="hidden lg:flex items-center gap-2 font-mono text-xxs text-ink-muted pb-4 border-b border-ink/10">
                  <span className="text-vermilion font-bold">[VOL. 01]</span>
                  <span>MACE ARCHIVAL RECORD</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Thesis & Supporting Narrative (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Core Thesis Block */}
            <div className="border-l-2 border-vermilion pl-4 sm:pl-6 space-y-2.5">
              <span className="text-xxs font-mono text-ink-muted tracking-widest uppercase block">
                CORE THESIS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
                “Curious by nature.<br />
                <span className="font-serif-italic text-vermilion">Analytical</span> by design.”
              </h2>
            </div>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg text-ink-muted leading-relaxed">
              I explore data, intelligent systems, and the ideas that turn complex problems into meaningful experiences.
            </p>

            {/* Academic & Geographic Metadata docket */}
            <div className="bg-paper-warm border border-ink/10 rounded-sm p-4 font-mono text-xs space-y-2">
              <div className="flex items-center justify-between text-ink-muted pb-1 border-b border-ink/5 text-xxs">
                <span>IDENTITY SPECIFICATION</span>
                <span>DOC // MACE-DS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Education:</span>
                <span className="font-semibold text-ink text-right">B.Tech Computer Science (Data Science)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Institution:</span>
                <span className="text-ink text-right">Mar Athanasius College of Engineering</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Location:</span>
                <span className="text-ink text-right">Kothamangalam, Kerala, India</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-muted">Focus Areas:</span>
                <span className="text-vermilion font-medium text-right">Spatial Analytics · Logic AI · CV · MERN</span>
              </div>
            </div>

            {/* Action Triggers */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-5 py-3 bg-ink text-paper rounded-sm hover:bg-vermilion transition-all duration-300 font-mono text-xs font-semibold tracking-wider group shadow-fine"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-ink/20 hover:border-ink rounded-sm font-mono text-xs text-ink hover:bg-paper-warm transition-all duration-300 font-semibold tracking-wider group"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-vermilion" />
              </a>
            </div>

            {/* Refined Scroll Indicator with Coordinates */}
            <div className="pt-2 flex items-center gap-3 text-xxs font-mono text-ink-muted">
              <div className="w-3.5 h-3.5 rounded-full border border-ink/20 flex items-center justify-center animate-bounce">
                <div className="w-1.5 h-1.5 rounded-full bg-vermilion"></div>
              </div>
              <span>SCROLL TO DISCOVER ARCHITECTURAL WORKS [ 01 / 05 ]</span>
            </div>
          </div>

          {/* Right Column: Custom Generative & Interactive Art Motif (7 Cols) */}
          <div className="lg:col-span-7">
            <HeroArtCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
