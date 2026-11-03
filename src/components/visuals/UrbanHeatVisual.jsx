import React, { useState } from 'react';

export default function UrbanHeatVisual() {
  const [threshold, setThreshold] = useState(32);
  const [activeZone, setActiveZone] = useState('downtown');

  const zones = [
    {
      id: 'downtown',
      name: 'Central Urban Core',
      temp: 37.4,
      delta: '+5.2°C',
      canopy: '8.4%',
      impervious: '84.2%',
      coords: '10.057° N, 76.629° E',
      type: 'Severe Heat Island',
    },
    {
      id: 'industrial',
      name: 'Eastern Manufacturing Sector',
      temp: 36.1,
      delta: '+3.9°C',
      canopy: '11.0%',
      impervious: '78.5%',
      coords: '10.052° N, 76.638° E',
      type: 'Elevated Hotspot',
    },
    {
      id: 'periyarpark',
      name: 'Riverbank Green Canopy Buffer',
      temp: 28.5,
      delta: '-3.7°C',
      canopy: '64.5%',
      impervious: '14.2%',
      coords: '10.063° N, 76.619° E',
      type: 'Cooling Oasis',
    },
  ];

  const currentZone = zones.find((z) => z.id === activeZone) || zones[0];

  return (
    <div className="w-full min-w-0 bg-[#F5F2EB] border border-ink/15 rounded-sm p-3.5 sm:p-6 shadow-fine overflow-hidden">
      {/* Top Telemetry Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-ink/10 pb-3 mb-4 text-xxs font-mono text-ink-muted">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full bg-vermilion shrink-0"></span>
          <span className="font-semibold text-ink uppercase tracking-wider truncate">
            GEOSPATIAL ISOTHERM
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 shrink-0">
          <span>5,000+ SAMPLES</span>
          <span className="text-vermilion font-semibold">FOLIUM · MATPLOTLIB</span>
        </div>
      </div>

      {/* Main Interactive Map & Sensor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* SVG Isotherm Canvas (7 Cols) */}
        <div className="lg:col-span-7 min-w-0 w-full relative bg-paper rounded border border-ink/15 overflow-hidden h-64 sm:h-80 flex items-center justify-center">
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 opacity-15">
            <svg width="100%" height="100%">
              <pattern id="uhi-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#141413" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#uhi-grid)" />
            </svg>
          </div>

          {/* Isotherm SVG Heat Contours */}
          <svg viewBox="0 0 360 260" className="w-full h-full p-2">
            <defs>
              <radialGradient id="heat-core" cx="45%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#E63926" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#FBBF24" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient id="cool-oasis" cx="80%" cy="75%" r="35%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#34D399" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* River corridor (Periyar tributary) */}
            <path
              d="M 10 240 Q 90 200 160 220 T 350 200"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="12"
              opacity="0.35"
              strokeLinecap="round"
            />

            {/* Isotherm Heat Blob 01 (Outer) */}
            <path
              d="M 60,110 C 90,40 220,50 260,100 C 300,150 240,210 180,210 C 110,210 40,170 60,110 Z"
              fill="url(#heat-core)"
              stroke="#E63926"
              strokeWidth="1"
              strokeDasharray={threshold > 34 ? "none" : "3,3"}
              opacity={threshold > 30 ? 0.9 : 0.4}
              className="transition-all duration-500"
            />

            {/* Isotherm Heat Blob 02 (Mid High Temp) */}
            <path
              d="M 110,120 C 130,70 200,80 220,115 C 240,150 210,185 165,185 C 120,185 95,155 110,120 Z"
              fill="#E63926"
              fillOpacity={threshold >= 33 ? "0.45" : "0.15"}
              stroke="#E63926"
              strokeWidth="1.5"
              className="transition-all duration-500"
            />

            {/* Isotherm Core (Extreme >36C) */}
            {threshold <= 37 && (
              <path
                d="M 135,125 C 150,95 185,100 195,120 C 205,140 185,160 160,160 C 135,160 125,145 135,125 Z"
                fill="#B91C1C"
                fillOpacity="0.65"
                stroke="#991B1B"
                strokeWidth="1.5"
              />
            )}

            {/* Cool Park Oasis */}
            <ellipse
              cx="290"
              cy="185"
              rx="45"
              ry="32"
              fill="url(#cool-oasis)"
              stroke="#059669"
              strokeWidth="1"
              strokeDasharray="2,2"
            />

            {/* Interactive Hotspot Nodes */}
            <g
              onClick={() => setActiveZone('downtown')}
              className="cursor-pointer group"
            >
              <circle cx="160" cy="135" r="8" fill="#E63926" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="160" cy="135" r="14" fill="#E63926" opacity="0.25" className="animate-ping" />
              <text x="175" y="132" fill="#141413" fontSize="10" fontFamily="JetBrains Mono" fontWeight="600">
                CORE: 37.4°C
              </text>
              <text x="175" y="144" fill="#E63926" fontSize="8" fontFamily="JetBrains Mono">
                ΔT +5.2°C
              </text>
            </g>

            <g
              onClick={() => setActiveZone('industrial')}
              className="cursor-pointer group"
            >
              <circle cx="230" cy="110" r="7" fill="#EA580C" stroke="#FFFFFF" strokeWidth="2" />
              <text x="242" y="108" fill="#141413" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">
                IND: 36.1°C
              </text>
            </g>

            <g
              onClick={() => setActiveZone('periyarpark')}
              className="cursor-pointer group"
            >
              <circle cx="290" cy="185" r="7" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
              <text x="250" y="215" fill="#047857" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">
                BUFFER: 28.5°C
              </text>
            </g>

            {/* Geographic Scale Rule */}
            <line x1="20" y1="240" x2="80" y2="240" stroke="#141413" strokeWidth="1.5" />
            <line x1="20" y1="236" x2="20" y2="244" stroke="#141413" strokeWidth="1.5" />
            <line x1="80" y1="236" x2="80" y2="244" stroke="#141413" strokeWidth="1.5" />
            <text x="32" y="235" fill="#141413" fontSize="8" fontFamily="JetBrains Mono">
              1.5 KM
            </text>
          </svg>

          {/* Map Overlay Badge */}
          <div className="absolute top-2 left-2 bg-paper/95 border border-ink/15 px-2 py-1 text-xxs font-mono text-ink">
            ISOTHERM FILTER: <span className="font-bold text-vermilion">≥ {threshold}°C</span>
          </div>
        </div>

        {/* Control & Zone Telemetry Breakdown (5 Cols) */}
        <div className="lg:col-span-5 min-w-0 w-full flex flex-col justify-between space-y-4">
          {/* Temperature Scrubber */}
          <div className="bg-paper p-3 rounded border border-ink/10">
            <div className="flex items-center justify-between text-xxs font-mono text-ink-muted mb-1.5">
              <span className="font-medium text-ink">ISOTHERM THRESHOLD SLIDER</span>
              <span className="font-bold text-vermilion font-mono">{threshold}°C</span>
            </div>
            <input
              type="range"
              min="24"
              max="38"
              step="1"
              value={threshold}
              onChange={(e) => setThreshold(Number(e.target.value))}
              className="w-full accent-vermilion cursor-pointer"
            />
            <div className="flex justify-between text-xxs font-mono text-ink-faint mt-1">
              <span>24°C</span>
              <span>32°C (Mean)</span>
              <span>38°C</span>
            </div>
          </div>

          {/* Active Hotspot Zone Dossier */}
          <div className="bg-paper p-3.5 rounded border border-ink/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xxs font-mono text-ink-muted pb-1.5 border-b border-ink/10 mb-2">
              <span className="text-vermilion font-semibold">SELECTED ZONE INSPECTION</span>
              <span>{currentZone.coords}</span>
            </div>
            <div className="font-serif text-lg text-ink font-normal">{currentZone.name}</div>
            <div className="text-xxs font-mono text-ink-muted mb-3">{currentZone.type}</div>

            <div className="grid grid-cols-2 gap-2 text-xxs font-mono">
              <div className="p-2 bg-paper-warm border border-ink/10 rounded">
                <span className="text-ink-muted block">SURFACE TEMP</span>
                <span className="text-sm font-bold text-ink">{currentZone.temp}°C</span>
              </div>
              <div className="p-2 bg-paper-warm border border-ink/10 rounded">
                <span className="text-ink-muted block">RURAL DELTA (ΔT)</span>
                <span className={`text-sm font-bold ${currentZone.delta.startsWith('+') ? 'text-vermilion' : 'text-emerald-700'}`}>
                  {currentZone.delta}
                </span>
              </div>
              <div className="p-2 bg-paper-warm border border-ink/10 rounded">
                <span className="text-ink-muted block">CANOPY COVER</span>
                <span className="text-xs font-semibold text-ink">{currentZone.canopy}</span>
              </div>
              <div className="p-2 bg-paper-warm border border-ink/10 rounded">
                <span className="text-ink-muted block">IMPERVIOUS SURF.</span>
                <span className="text-xs font-semibold text-ink">{currentZone.impervious}</span>
              </div>
            </div>
          </div>

          {/* Zone Selector Buttons */}
          <div className="flex gap-1.5 pt-1">
            {zones.map((z) => (
              <button
                key={z.id}
                onClick={() => setActiveZone(z.id)}
                className={`flex-1 py-1.5 px-2 text-xxs font-mono uppercase tracking-wider rounded border transition-colors ${
                  activeZone === z.id
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper text-ink-muted border-ink/15 hover:border-ink/40'
                }`}
              >
                {z.id === 'downtown' ? 'Core' : z.id === 'industrial' ? 'Industrial' : 'Buffer'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Methodology Attribution */}
      <div className="mt-3 pt-2.5 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xxs font-mono text-ink-faint">
        <span>METHOD: INTERPOLATED KRIGING & SPATIAL ANOMALY FILTERING (IQR)</span>
        <span>ILLUSTRATIVE VISUALIZATION OF 5,000+ SAMPLES</span>
      </div>
    </div>
  );
}
