import React, { useState } from 'react';

export default function TrafficCvVisual() {
  const [pipelineStep, setPipelineStep] = useState(3); // 0: Raw, 1: Grayscale, 2: Bilateral/Edges, 3: Contours/Detection, 4: MySQL Log

  const steps = [
    { id: 0, label: '01. Raw RGB Frame' },
    { id: 1, label: '02. Grayscale Conversion' },
    { id: 2, label: '03. Bilateral & Canny' },
    { id: 3, label: '04. Plate Contour ROI' },
    { id: 4, label: '05. MySQL Persistence' },
  ];

  return (
    <div className="w-full min-w-0 bg-[#0E0F12] border border-white/10 rounded-sm p-3.5 sm:p-6 text-white shadow-cinematic overflow-hidden">
      {/* Top CV Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4 text-xxs font-mono text-zinc-400">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-vermilion animate-ping shrink-0"></span>
          <span className="font-semibold text-white tracking-widest uppercase truncate">
            OPENCV VISION PIPELINE
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 shrink-0">
          <span>FPS: 30.0 FIXED</span>
          <span className="text-vermilion font-semibold">ALPR · MYSQL</span>
        </div>
      </div>

      {/* Main Vision Stage & HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Synthetic OpenCV Viewport (7 Cols) */}
        <div className="lg:col-span-7 min-w-0 w-full relative bg-[#060708] rounded border border-white/15 overflow-hidden h-64 sm:h-80 flex items-center justify-center">
          {/* Visual Canvas Representation */}
          <svg viewBox="0 0 380 260" className="w-full h-full">
            <defs>
              <linearGradient id="nightRoad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0B0C10" />
                <stop offset="100%" stopColor="#171920" />
              </linearGradient>
            </defs>

            {/* Night road backdrop */}
            <rect width="380" height="260" fill="url(#nightRoad)" />

            {/* Road Perspective lines */}
            <line x1="190" y1="40" x2="20" y2="260" stroke="#2D3139" strokeWidth="1.5" strokeDasharray="6,4" />
            <line x1="190" y1="40" x2="360" y2="260" stroke="#2D3139" strokeWidth="1.5" strokeDasharray="6,4" />
            <line x1="190" y1="40" x2="190" y2="260" stroke="#E63926" strokeWidth="1" strokeDasharray="8,6" opacity="0.4" />

            {/* Stylized Vehicle Silhouette */}
            <g transform="translate(110, 80)">
              {/* Car Body */}
              <rect
                x="30"
                y="50"
                width="100"
                height="45"
                rx="6"
                fill={pipelineStep === 1 ? "#374151" : pipelineStep === 2 ? "#111827" : "#1F2430"}
                stroke={pipelineStep === 2 ? "#FFFFFF" : "#4B5563"}
                strokeWidth={pipelineStep === 2 ? "1.5" : "1"}
              />
              {/* Roof Cabin */}
              <polygon
                points="45,50 60,20 100,20 115,50"
                fill={pipelineStep === 1 ? "#4B5563" : pipelineStep === 2 ? "#030712" : "#282E3E"}
                stroke={pipelineStep === 2 ? "#FFFFFF" : "#6B7280"}
                strokeWidth={pipelineStep === 2 ? "1.5" : "1"}
              />
              {/* Headlights / Taillights */}
              <circle cx="42" cy="78" r="4" fill="#EF4444" opacity="0.9" />
              <circle cx="118" cy="78" r="4" fill="#EF4444" opacity="0.9" />

              {/* License Plate Element */}
              <rect
                x="65"
                y="74"
                width="30"
                height="10"
                fill={pipelineStep === 2 ? "#FFFFFF" : "#FAF8F5"}
                stroke="#141413"
                strokeWidth="1"
              />
              <text x="68" y="82" fill="#000000" fontSize="5" fontFamily="JetBrains Mono" fontWeight="bold">
                KL-44-E
              </text>
            </g>

            {/* Computer Vision Detection HUD Bounding Overlays */}
            {(pipelineStep === 3 || pipelineStep === 4) && (
              <g>
                {/* Vehicle Outer Bounding Box */}
                <rect
                  x="130"
                  y="92"
                  width="120"
                  height="96"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.5"
                  strokeDasharray="4,2"
                />
                {/* Vehicle Tag */}
                <rect x="130" y="78" width="85" height="14" fill="#10B981" />
                <text x="134" y="88" fill="#064E3B" fontSize="8" fontFamily="JetBrains Mono" fontWeight="bold">
                  VEHICLE: 94.2%
                </text>

                {/* License Plate ROI Target Brackets */}
                <rect
                  x="172"
                  y="152"
                  width="36"
                  height="16"
                  fill="none"
                  stroke="#E63926"
                  strokeWidth="2"
                />
                <rect x="172" y="140" width="60" height="12" fill="#E63926" />
                <text x="175" y="149" fill="#FFFFFF" fontSize="7" fontFamily="JetBrains Mono" fontWeight="bold">
                  ROI: ALPR
                </text>

                {/* Crosshairs */}
                <line x1="190" y1="130" x2="190" y2="178" stroke="#E63926" strokeWidth="0.75" />
                <line x1="155" y1="160" x2="225" y2="160" stroke="#E63926" strokeWidth="0.75" />
              </g>
            )}

            {/* Edge Detection Lines in step 2 */}
            {pipelineStep === 2 && (
              <g stroke="#FFFFFF" strokeWidth="0.75" opacity="0.8">
                <path d="M 140 135 L 240 135 M 155 105 L 225 105" />
                <rect x="172" y="152" width="36" height="14" fill="none" />
              </g>
            )}

            {/* HUD Metadata Overlay */}
            <text x="15" y="25" fill="#10B981" fontSize="9" fontFamily="JetBrains Mono">
              REC: LIVE STREAM // CH-01
            </text>
            <text x="15" y="40" fill="#9CA3AF" fontSize="8" fontFamily="JetBrains Mono">
              ISO: AUTO · SHUTTER: 1/500s · RESOLUTION: 1920x1080
            </text>
            <text x="15" y="245" fill="#E63926" fontSize="8" fontFamily="JetBrains Mono">
              DETECTION_STATE: CONTOUR_MATCHED
            </text>
          </svg>

          {/* Step Badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 border border-white/20 px-2 py-1 text-xxs font-mono text-zinc-300">
            ACTIVE PIPELINE STAGE: <span className="text-vermilion font-bold">{steps[pipelineStep].label}</span>
          </div>
        </div>

        {/* Pipeline Controls & Technical Output (5 Cols) */}
        <div className="lg:col-span-5 min-w-0 w-full flex flex-col justify-between space-y-4">
          {/* Step Selector Buttons */}
          <div className="space-y-1.5">
            <div className="text-xxs font-mono text-zinc-400">INSPECT PIPELINE STAGES</div>
            <div className="grid grid-cols-1 gap-1">
              {steps.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setPipelineStep(s.id)}
                  className={`text-left px-2.5 py-1.5 rounded font-mono text-xxs transition-colors flex items-center justify-between border ${
                    pipelineStep === s.id
                      ? 'bg-vermilion text-white border-vermilion font-semibold'
                      : 'bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <span>{s.label}</span>
                  {pipelineStep === s.id && <span>● ACTIVE</span>}
                </button>
              ))}
            </div>
          </div>

          {/* MySQL Incident Storage Schema Preview */}
          <div className="bg-[#121418] p-3 rounded border border-white/10 font-mono text-xxs">
            <div className="text-zinc-400 pb-1.5 border-b border-white/10 mb-2 flex items-center justify-between">
              <span className="text-vermilion font-bold">MYSQL INCIDENT RECORD</span>
              <span className="text-zinc-500">TABLE: violations</span>
            </div>
            <div className="text-zinc-300 leading-relaxed overflow-x-auto space-y-1">
              <div><span className="text-zinc-500">record_id:</span> <span className="text-amber-300">0x8F92</span></div>
              <div><span className="text-zinc-500">plate_string:</span> <span className="text-emerald-400 font-bold">"KL-44-E-2914"</span></div>
              <div><span className="text-zinc-500">confidence_score:</span> <span className="text-blue-400">0.942</span></div>
              <div><span className="text-zinc-500">timestamp:</span> <span className="text-zinc-400">"2026-10-29 09:42:18 IST"</span></div>
              <div><span className="text-zinc-500">camera_node:</span> <span className="text-zinc-400">"MACE_GATE_NORTH"</span></div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="p-2 bg-white/5 border border-white/10 rounded text-xxs font-mono text-zinc-400 leading-normal">
            <strong className="text-zinc-200">Verified Academic Scope:</strong> OpenCV contour segmentation & relational MySQL storage. No public repository published.
          </div>
        </div>
      </div>
    </div>
  );
}
