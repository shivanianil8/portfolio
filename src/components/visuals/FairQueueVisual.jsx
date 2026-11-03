import React, { useState } from 'react';

export default function FairQueueVisual() {
  const [starvationActive, setStarvationActive] = useState(true);
  const [activePerson, setActivePerson] = useState('P-103');

  const queueItems = [
    {
      id: 'P-101',
      name: 'Aditi V.',
      desk: 'SA',
      waitMinutes: 14,
      urgency: 'URGENT',
      priorityRank: 2,
      ruleApplied: 'rule_urgency_tier_1/3',
      hornClause: 'deduce_priority(P, 1) :- person(P, _, urgent, W), W < 45, !.',
      starved: false,
    },
    {
      id: 'P-102',
      name: 'Rahul K.',
      desk: 'CS',
      waitMinutes: 22,
      urgency: 'ROUTINE',
      priorityRank: 3,
      ruleApplied: 'rule_fifo_baseline/2',
      hornClause: 'deduce_priority(P, 3) :- person(P, _, routine, _), !.',
      starved: false,
    },
    {
      id: 'P-103',
      name: 'Kavitha M.',
      desk: 'DV',
      waitMinutes: 58,
      urgency: 'ROUTINE',
      priorityRank: starvationActive ? 1 : 4,
      ruleApplied: starvationActive ? 'rule_starvation_prevention/4 [OVERRIDE]' : 'naive_arithmetic_penalty',
      hornClause: starvationActive
        ? 'deduce_priority(P, 0) :- person(P, _, _, W), threshold(starvation, T), W >= T, !.'
        : 'score = urgency(1) * 5 + wait(58) * 0.1 [OPAQUE ARITHMETIC]',
      starved: starvationActive,
    },
    {
      id: 'P-104',
      name: 'Nikhil S.',
      desk: 'CS',
      waitMinutes: 5,
      urgency: 'URGENT',
      priorityRank: starvationActive ? 2 : 1,
      ruleApplied: 'rule_urgency_tier_1/3',
      hornClause: 'deduce_priority(P, 1) :- person(P, _, urgent, W), !.',
      starved: false,
    },
  ];

  const selectedRecord = queueItems.find((p) => p.id === activePerson) || queueItems[2];

  return (
    <div className="w-full min-w-0 bg-[#F3EFE9] border border-ink/15 rounded-sm p-3.5 sm:p-6 shadow-fine overflow-hidden">
      {/* Top Engine Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-ink/10 pb-3 mb-4 text-xxs font-mono text-ink-muted">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0"></span>
          <span className="font-semibold text-ink uppercase tracking-wider truncate">
            FIRST-ORDER LOGIC INFERENCE PIPELINE
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
          <span>11 HORN CLAUSES</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xxs font-semibold">
            DESKS: CS / DV / SA
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Queue Live State Machine (7 Cols) */}
        <div className="lg:col-span-7 min-w-0 w-full space-y-3">
          <div className="flex items-center justify-between text-xxs font-mono text-ink-muted px-1">
            <span>LIVE VISITOR DISPATCH QUEUE</span>
            <span className="text-ink font-semibold">STATE: EVALUATED</span>
          </div>

          <div className="space-y-2">
            {queueItems.map((item) => {
              const isSelected = item.id === activePerson;
              const isPromotedByProlog = item.id === 'P-103' && starvationActive;

              return (
                <div
                  key={item.id}
                  onClick={() => setActivePerson(item.id)}
                  className={`p-3 rounded border transition-all cursor-pointer flex items-center justify-between text-xs ${
                    isSelected
                      ? 'bg-paper border-ink shadow-fine ring-1 ring-ink/20'
                      : 'bg-paper/70 border-ink/10 hover:border-ink/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded flex items-center justify-center font-mono font-bold text-xs ${
                        isPromotedByProlog
                          ? 'bg-vermilion text-white'
                          : item.urgency === 'URGENT'
                          ? 'bg-blue-600 text-white'
                          : 'bg-paper-dark text-ink'
                      }`}
                    >
                      #{item.priorityRank}
                    </div>

                    <div>
                      <div className="font-medium text-ink flex items-center gap-2">
                        <span>{item.name}</span>
                        <span className="text-xxs font-mono px-1.5 py-0.2 bg-paper-subtle border border-ink/10 text-ink-muted">
                          {item.desk}
                        </span>
                        {isPromotedByProlog && (
                          <span className="text-xxs font-mono bg-vermilion/10 text-vermilion px-1.5 py-0.5 font-bold uppercase rounded">
                            Starvation Override
                          </span>
                        )}
                      </div>
                      <div className="text-xxs font-mono text-ink-muted">
                        WAIT: {item.waitMinutes}m · URGENCY: {item.urgency}
                      </div>
                    </div>
                  </div>

                  <div className="text-right font-mono text-xxs">
                    <div className="text-ink-muted">LOGIC CLAUSE</div>
                    <div className="font-semibold text-ink truncate max-w-[140px]">
                      {item.ruleApplied.split(' ')[0]}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Starvation Toggle */}
          <div className="mt-3 p-3 bg-paper border border-ink/10 rounded flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-ink">
                Prolog Starvation Clause Evaluation
              </div>
              <div className="text-xxs font-mono text-ink-muted">
                Rule: threshold(starvation, 45m). Overrides naive FIFO/urgency.
              </div>
            </div>
            <button
              onClick={() => setStarvationActive(!starvationActive)}
              className={`px-3 py-1.5 rounded font-mono text-xxs tracking-wider uppercase font-semibold transition-colors ${
                starvationActive
                  ? 'bg-vermilion text-white hover:bg-vermilion-hover'
                  : 'bg-ink text-paper hover:bg-ink-soft'
              }`}
            >
              {starvationActive ? 'Clause: ACTIVE' : 'Clause: DISABLED'}
            </button>
          </div>
        </div>

        {/* Right: Transparent Prolog Horn Clause Inspector (5 Cols) */}
        <div className="lg:col-span-5 min-w-0 w-full bg-paper rounded border border-ink/15 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xxs font-mono text-ink-muted pb-2 border-b border-ink/10 mb-3">
              <span className="text-blue-700 font-bold">HORN CLAUSE RESOLUTION</span>
              <span>{selectedRecord.id}</span>
            </div>

            <div className="font-mono text-xxs text-ink-muted mb-1">PROLOG FACT CONSULTATION:</div>
            <div className="p-2.5 bg-[#141413] text-[#FAF8F5] rounded font-mono text-xxs overflow-x-auto leading-relaxed border border-ink/30 mb-3">
              <span className="text-blue-400">person</span>(
              <span className="text-amber-300">{selectedRecord.id.toLowerCase()}</span>,{' '}
              <span className="text-emerald-300">{selectedRecord.desk.toLowerCase()}</span>,{' '}
              <span className="text-vermilion">{selectedRecord.urgency.toLowerCase()}</span>,{' '}
              <span className="text-purple-300">{selectedRecord.waitMinutes}</span>).
              <br />
              <span className="text-blue-400">threshold</span>(
              <span className="text-emerald-300">starvation</span>,{' '}
              <span className="text-purple-300">45</span>).
            </div>

            <div className="font-mono text-xxs text-ink-muted mb-1">EVALUATED HORN CLAUSE RULE:</div>
            <div className="p-2.5 bg-paper-warm border border-ink/10 rounded font-mono text-xxs text-ink leading-relaxed">
              {selectedRecord.hornClause}
            </div>

            <div className="mt-3 p-2 bg-blue-50 border border-blue-200 rounded text-xxs font-mono text-blue-900 leading-normal">
              <strong>Audit Guarantee:</strong> Priority deduction is 100% deterministic and inspectable via First-Order Logic relational unification. Zero arbitrary black-box weights.
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xxs font-mono text-ink-muted">
            <span>STATE: PURE HORN CLAUSES</span>
            <span className="text-ink font-semibold">SWI-PROLOG CLI / TAU</span>
          </div>
        </div>
      </div>
    </div>
  );
}
