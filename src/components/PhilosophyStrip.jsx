import React from 'react';

export default function PhilosophyStrip() {
  const benchmarks = [
    {
      num: "5,000+",
      label: "Geospatial Records",
      desc: "Surface temperature anomalies mapped with Python, Pandas & Folium.",
    },
    {
      num: "11",
      label: "Horn Clauses",
      desc: "Pure Prolog declarative rules preventing priority starvation in queues.",
    },
    {
      num: "100+",
      label: "Engineers Mentored",
      desc: "Workshop participants in Data Science & ML at IEEE Computer Society.",
    },
    {
      num: "MACE",
      label: "Academic Cradle",
      desc: "Mar Athanasius College of Engineering — Computer Science (Data Science).",
    },
  ];

  return (
    <div className="border-b border-ink/10 bg-paper-warm py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle Section Label */}
        <div className="flex items-center justify-between text-xxs font-mono text-ink-muted uppercase tracking-widest pb-6 border-b border-ink/10 mb-8">
          <span>EMPIRICAL BENCHMARKS & VERIFIED DELIVERABLES</span>
          <span>SOURCE: RESUME & ACTIVE CODEBASES</span>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benchmarks.map((item, idx) => (
            <div
              key={idx}
              className="relative border-l border-ink/15 pl-5 sm:pl-6 space-y-2 group hover:border-vermilion transition-colors"
            >
              <div className="font-mono text-xxs text-vermilion font-bold tracking-widest uppercase">
                INDEX // 0{idx + 1}
              </div>
              <div className="font-serif text-4xl sm:text-5xl text-ink font-normal tracking-tight group-hover:text-vermilion transition-colors">
                {item.num}
              </div>
              <div className="font-sans text-sm font-semibold text-ink uppercase tracking-wider">
                {item.label}
              </div>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
