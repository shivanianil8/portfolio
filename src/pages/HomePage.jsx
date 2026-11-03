import React from 'react';
import EngineeringHero from '../components/EngineeringHero.jsx';
import EngineeringProjects from '../components/EngineeringProjects.jsx';
import EngineeringBento from '../components/EngineeringBento.jsx';
import EngineeringChronology from '../components/EngineeringChronology.jsx';
import EngineeringContact from '../components/EngineeringContact.jsx';

/**
 * HomePage — Clean Engineering & Data Science Portfolio
 * Grounded in computer science craft, academic rigor at MACE,
 * and interactive empirical software prototypes.
 */
export default function HomePage() {
  return (
    <div className="relative bg-[#0B0E14] text-slate-100 min-h-screen engineering-grid">
      {/* Subtle top ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero: Engineering Profile & Statement */}
      <EngineeringHero />

      {/* Featured Engineering Systems & Interactive Simulators */}
      <EngineeringProjects />

      {/* Academic Foundation & Technical Arsenal */}
      <EngineeringBento />

      {/* Experience & Leadership Chronology */}
      <EngineeringChronology />

      {/* Developer Contact & Collaboration */}
      <EngineeringContact />
    </div>
  );
}
