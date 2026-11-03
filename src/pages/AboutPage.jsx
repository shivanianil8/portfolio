import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, Compass, Code2, BrainCircuit, Globe, Terminal, ShieldCheck, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData.js';

/**
 * AboutPage — Engineering Background & Academic Profile
 */
export default function AboutPage() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'data-ml':
        return <BrainCircuit className="w-4 h-4 text-emerald-400" />;
      case 'web-systems':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'tools':
        return <Terminal className="w-4 h-4 text-indigo-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 sm:space-y-28 bg-[#0B0E14] text-slate-100 min-h-screen engineering-grid">
      
      {/* Background & Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400">
          <span className="w-2 h-2 rounded-full bg-blue-400" />
          <span>ABOUT & BACKGROUND</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">MAR ATHANASIUS COLLEGE OF ENGINEERING</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Natural Portrait & Institutional Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-full rounded-2xl bg-[#0F1420] border border-white/10 p-4 sm:p-5 shadow-2xl overflow-hidden group">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2 text-white font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  SHIVANI ANIL
                </span>
                <span>KERALA, INDIA</span>
              </div>

              {/* Natural Portrait Photo Frame */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-square sm:aspect-[4/5] bg-[#141A29]">
                <img
                  src="/images/shivani-portrait.jpg"
                  alt="Shivani Anil"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-medium">B.Tech CS (Data Science)</span>
                  <span className="text-blue-400 font-semibold">MACE '28</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>IEEE CS Vice Chair</span>
                  </span>
                  <span className="text-slate-500">2024–2028</span>
                </div>
              </div>
            </div>

            {/* Academic Institution Card */}
            <div className="p-6 bg-[#0F1420] rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>Academic Institution</span>
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Mar Athanasius College of Engineering
              </h3>
              <p className="text-xs font-mono text-slate-400">
                B.Tech in Computer Science (Data Science)
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>2024 – 2028</span>
                <span>Kothamangalam, Kerala</span>
              </div>
            </div>
          </div>

          {/* Right Column: Intellectual Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                A Little About <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  How I Think.
                </span>
              </h1>

              <div className="border-l-2 border-blue-500 pl-4 py-1">
                <p className="font-display italic text-xl sm:text-2xl text-slate-200 font-normal">
                  “I explore data, intelligent systems, and the ideas that turn complex problems into meaningful experiences.”
                </p>
              </div>
            </div>

            <div className="space-y-5 text-sm sm:text-base font-sans text-slate-300 leading-relaxed">
              <p>
                I am an undergraduate engineering student specializing in <strong className="text-white font-semibold">Computer Science (Data Science)</strong> at Mar Athanasius College of Engineering in Kerala. My focus lies at the intersection of empirical data analysis, intelligent reasoning systems, and resilient full-stack software development.
              </p>

              <p>
                I believe computation is most powerful when it makes complex phenomena understandable. In my research project <span className="text-blue-300 font-mono">Urban Heat Island Explorer</span>, I analyzed over 5,000 spatial temperature records to uncover localized microclimates. In <span className="text-blue-300 font-mono">FairQueue</span>, I designed a First-Order Logic decision system using Prolog Horn clauses to replace opaque priority formulas with explainable, starvation-free rules.
              </p>

              <p>
                Beyond analytical modeling, I care deeply about building production-grade software. During my internship at <strong className="text-white font-semibold">Limenzy Technologies</strong>, I engineered <span className="text-indigo-300 font-mono">Vyorra</span> using the complete MERN stack (MongoDB, Express.js, React, Node.js), sharpening my skills in REST API design and modular architecture.
              </p>

              <p>
                In parallel with coursework and engineering, I actively contribute to technical communities as <strong className="text-blue-300 font-semibold">Vice Chair of the IEEE Computer Society</strong> at MACE and <strong className="text-indigo-300 font-semibold">Documentation Lead for AISA</strong>, organizing hands-on workshops in machine learning and data science.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-400 font-semibold transition-colors"
              >
                <span>View Experience Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Technical Repertoire */}
      <section className="border-t border-white/10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider">
              CAPABILITIES
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Technical Repertoire
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 max-w-xl">
              Organized by discipline based on active project development and academic coursework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#0F1420] border border-white/10 hover:border-blue-500/30 transition-all duration-200 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(cat.id)}
                    <h3 className="font-display text-xl font-bold text-white">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {cat.skills.length} Technologies
                  </span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Certifications */}
      <section className="border-t border-white/10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="p-6 rounded-2xl bg-[#0F1420] border border-white/10 space-y-3"
              >
                <div className="text-xs font-mono text-emerald-400 font-semibold">
                  {cert.issuer}
                </div>
                <h3 className="font-display text-lg font-bold text-white">
                  {cert.title}
                </h3>
                <p className="text-xs font-sans text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
                <div className="pt-2 text-[10px] font-mono text-slate-500">
                  Verified · {cert.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
