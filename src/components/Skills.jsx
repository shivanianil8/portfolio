import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData.js';
import { Code2, BrainCircuit, Globe, Terminal, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-4 h-4 text-vermilion" />;
      case 'data-ml':
        return <BrainCircuit className="w-4 h-4 text-vermilion" />;
      case 'web-systems':
        return <Globe className="w-4 h-4 text-vermilion" />;
      case 'tools':
        return <Terminal className="w-4 h-4 text-vermilion" />;
      default:
        return <Sparkles className="w-4 h-4 text-vermilion" />;
    }
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="repertoire" className="py-20 sm:py-28 bg-paper border-b border-ink/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 pb-6 border-b border-ink/10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xxs font-mono text-vermilion uppercase tracking-widest mb-2 font-bold">
              <span>04 // TECHNICAL REPERTOIRE</span>
              <span>·</span>
              <span>METHODS & CAPABILITIES</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink tracking-tight">
              Languages, Toolsets & <br />
              <span className="font-serif-italic text-vermilion">Empirical Methodologies</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-ink-muted max-w-sm leading-relaxed">
            Curated according to active development experience, academic coursework, and verified project implementations. No arbitrary progress bars.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-ink/10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded font-mono text-xxs uppercase tracking-wider transition-colors ${
              activeTab === 'all'
                ? 'bg-ink text-paper font-semibold'
                : 'bg-paper-warm text-ink-muted hover:text-ink border border-ink/10'
            }`}
          >
            All Disciplines [04]
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3 py-1.5 rounded font-mono text-xxs uppercase tracking-wider transition-colors ${
                activeTab === cat.id
                  ? 'bg-ink text-paper font-semibold'
                  : 'bg-paper-warm text-ink-muted hover:text-ink border border-ink/10'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Dossier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((group) => (
            <div
              key={group.id}
              className="bg-paper-warm border border-ink/15 rounded-sm p-6 sm:p-8 space-y-6 shadow-fine hover:border-vermilion/50 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-ink/10">
                <div className="flex items-center gap-2.5">
                  {getCategoryIcon(group.id)}
                  <h3 className="font-serif text-2xl text-ink font-normal">
                    {group.category}
                  </h3>
                </div>
                <span className="font-mono text-xxs text-vermilion font-bold tracking-widest">
                  CAT // {group.index}
                </span>
              </div>

              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                {group.description}
              </p>

              {/* Skill Tags Typographic Layout */}
              <div className="flex flex-wrap gap-2 pt-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 bg-paper border border-ink/15 rounded-sm text-xs font-mono text-ink tracking-tight hover:border-ink hover:text-vermilion transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Editorial Footer Tag */}
              <div className="pt-4 border-t border-ink/10 flex items-center justify-between font-mono text-xxs text-ink-faint">
                <span>VERIFIED PROFICIENCY</span>
                <span>RESUME GROUND TRUTH</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
