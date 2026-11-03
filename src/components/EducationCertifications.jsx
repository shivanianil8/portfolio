import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData.js';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section className="py-20 sm:py-28 bg-paper-warm border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-6 pb-6 border-b border-ink/10 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xxs font-mono text-vermilion uppercase tracking-widest mb-2 font-bold">
              <span>05 // ACADEMIA & ACCREDITATION</span>
              <span>·</span>
              <span>CREDENTIALS</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink tracking-tight">
              Academic Degree & <br />
              <span className="font-serif-italic text-vermilion">Verified Certifications</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-ink-muted max-w-sm leading-relaxed">
            Rigorous undergraduate theoretical curriculum combined with accredited professional skill development in data analysis and programming paradigms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Undergraduate Degree Card (7 Cols) */}
          <div className="lg:col-span-7 bg-paper border border-ink/15 rounded-sm p-6 sm:p-10 space-y-6 shadow-fine">
            <div className="flex items-center justify-between pb-4 border-b border-ink/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-paper-warm rounded border border-ink/10">
                  <GraduationCap className="w-5 h-5 text-vermilion" />
                </div>
                <div>
                  <span className="text-xxs font-mono text-vermilion font-bold uppercase tracking-widest block">
                    UNDERGRADUATE DEGREE
                  </span>
                  <span className="font-mono text-xs text-ink-muted">{EDUCATION.period}</span>
                </div>
              </div>

              <span className="px-2.5 py-1 bg-paper-warm text-ink text-xxs font-mono rounded border border-ink/10">
                {EDUCATION.status}
              </span>
            </div>

            <div>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight">
                {EDUCATION.degree}
              </h3>
              <div className="font-sans text-base font-semibold text-ink-soft mt-1">
                {EDUCATION.institution}
              </div>
              <div className="text-xs font-mono text-ink-muted mt-0.5">
                {EDUCATION.location}
              </div>
            </div>

            <p className="font-sans text-sm text-ink-muted leading-relaxed">
              {EDUCATION.details}
            </p>

            <div className="p-4 bg-paper-warm rounded border border-ink/10 font-mono text-xxs space-y-1">
              <div className="text-ink font-semibold">CORE COURSEWORK & DOMAINS:</div>
              <div className="text-ink-muted">
                Data Structures, Algorithms, Linear Algebra, Probability & Statistics, Machine Learning, Database Management Systems (MySQL), Object-Oriented Design.
              </div>
            </div>
          </div>

          {/* Right: Certified Credentials (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xxs font-mono text-ink-muted uppercase tracking-widest pb-1 border-b border-ink/10">
              PROFESSIONAL CERTIFICATIONS [03]
            </div>

            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="bg-paper border border-ink/15 rounded-sm p-5 space-y-2 hover:border-vermilion transition-colors shadow-fine"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xxs font-bold text-vermilion bg-vermilion/10 px-2 py-0.5 rounded">
                    CERT // 0{idx + 1}
                  </span>
                  <span className="font-mono text-xxs text-ink-muted">{cert.year}</span>
                </div>

                <div className="font-serif text-xl text-ink font-normal">
                  {cert.title}
                </div>

                <div className="text-xs font-mono font-semibold text-ink-soft">
                  Issuer: <span className="text-ink">{cert.issuer}</span>
                </div>

                <p className="text-xs font-sans text-ink-muted leading-relaxed">
                  {cert.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
