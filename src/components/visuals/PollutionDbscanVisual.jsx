import React, { useState } from 'react';

export default function PollutionDbscanVisual() {
  const [epsilon, setEpsilon] = useState(28); // neighborhood radius
  const [minSamples, setMinSamples] = useState(4); // min points

  // Synthetic spatial dataset of pollution sensor readings
  const samplePoints = [
    // Cluster A (Urban Industrial Hotspot)
    { id: 1, x: 75, y: 80, cluster: 'A' },
    { id: 2, x: 88, y: 72, cluster: 'A' },
    { id: 3, x: 80, y: 95, cluster: 'A' },
    { id: 4, x: 65, y: 88, cluster: 'A' },
    { id: 5, x: 95, y: 92, cluster: 'A' },
    { id: 6, x: 105, y: 80, cluster: 'A' },
    { id: 7, x: 72, y: 110, cluster: 'A' },
    { id: 8, x: 85, y: 105, cluster: 'A' },

    // Cluster B (High-Density Traffic Intersection)
    { id: 9, x: 230, y: 140, cluster: 'B' },
    { id: 10, x: 245, y: 130, cluster: 'B' },
    { id: 11, x: 235, y: 155, cluster: 'B' },
    { id: 12, x: 250, y: 150, cluster: 'B' },
    { id: 13, x: 260, y: 135, cluster: 'B' },
    { id: 14, x: 220, y: 145, cluster: 'B' },
    { id: 15, x: 240, y: 165, cluster: 'B' },

    // Outlier / Acoustic Sensor Noise (Cluster -1)
    { id: 16, x: 40, y: 190, cluster: 'noise' },
    { id: 17, x: 160, y: 50, cluster: 'noise' },
    { id: 18, x: 310, y: 60, cluster: 'noise' },
    { id: 19, x: 180, y: 195, cluster: 'noise' },
    { id: 20, x: 310, y: 200, cluster: 'noise' },
  ];

  const [activePoint, setActivePoint] = useState(samplePoints[2]);

  return (
    <div className="w-full bg-[#0E0F12] border border-white/10 rounded-sm p-4 sm:p-6 text-white shadow-cinematic">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 mb-4 text-xxs font-mono text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold text-white tracking-widest uppercase">
            DBSCAN SPATIAL ANOMALY CLUSTERING
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span>SCIKIT-LEARN</span>
          <span className="text-emerald-400 font-semibold">NON-SPHERICAL GEOMETRIES</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Scatter Canvas (7 Cols) */}
        <div className="lg:col-span-7 relative bg-[#060708] rounded border border-white/15 overflow-hidden h-64 sm:h-80 flex items-center justify-center">
          {/* Subtle Grid */}
          <div className="absolute inset-0 opacity-15">
            <svg width="100%" height="100%">
              <pattern id="dbscan-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FFFFFF" strokeWidth="0.5" strokeDasharray="2,2" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dbscan-grid)" />
            </svg>
          </div>

          <svg viewBox="0 0 360 240" className="w-full h-full p-2">
            {/* Cluster A Density Envelope */}
            <path
              d="M 60,75 Q 85,55 110,70 T 115,100 T 80,120 T 55,95 Z"
              fill="#10B981"
              fillOpacity={epsilon > 25 ? "0.2" : "0.1"}
              stroke="#10B981"
              strokeWidth="1.2"
              strokeDasharray="4,3"
            />
            <text x="65" y="60" fill="#10B981" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">
              HOTSPOT A: PM2.5 = 142µg/m³
            </text>

            {/* Cluster B Density Envelope */}
            <path
              d="M 215,135 Q 240,115 270,130 T 270,165 T 235,175 T 210,150 Z"
              fill="#3B82F6"
              fillOpacity={epsilon > 25 ? "0.2" : "0.1"}
              stroke="#3B82F6"
              strokeWidth="1.2"
              strokeDasharray="4,3"
            />
            <text x="215" y="120" fill="#60A5FA" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">
              HOTSPOT B: TRAFFIC NO2
            </text>

            {/* Active Point Epsilon Neighborhood Circle */}
            {activePoint && (
              <circle
                cx={activePoint.x}
                cy={activePoint.y}
                r={epsilon}
                fill="#FFFFFF"
                fillOpacity="0.08"
                stroke="#E63926"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            )}

            {/* Scatter Points */}
            {samplePoints.map((pt) => {
              const isNoise = pt.cluster === 'noise';
              const isClusterA = pt.cluster === 'A';
              const isSelected = activePoint && activePoint.id === pt.id;

              return (
                <g
                  key={pt.id}
                  onClick={() => setActivePoint(pt)}
                  className="cursor-pointer group"
                >
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isSelected ? 6 : isNoise ? 3.5 : 4.5}
                    fill={isNoise ? "#EF4444" : isClusterA ? "#10B981" : "#3B82F6"}
                    stroke={isSelected ? "#FFFFFF" : isNoise ? "#7F1D1D" : "#064E3B"}
                    strokeWidth={isSelected ? 2 : 1}
                  />
                  {isSelected && (
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={9}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}

            {/* Legend inside canvas */}
            <g transform="translate(15, 215)">
              <circle cx="5" cy="5" r="4" fill="#10B981" />
              <text x="14" y="8" fill="#D1D5DB" fontSize="8" fontFamily="JetBrains Mono">Core (Cluster A)</text>

              <circle cx="105" cy="5" r="4" fill="#3B82F6" />
              <text x="114" y="8" fill="#D1D5DB" fontSize="8" fontFamily="JetBrains Mono">Core (Cluster B)</text>

              <circle cx="205" cy="5" r="3.5" fill="#EF4444" />
              <text x="214" y="8" fill="#F87171" fontSize="8" fontFamily="JetBrains Mono">Noise Point (-1)</text>
            </g>
          </svg>

          {/* Badge */}
          <div className="absolute top-2 left-2 bg-black/80 border border-white/20 px-2 py-1 text-xxs font-mono text-zinc-300">
            EPSILON (ε): <span className="text-emerald-400 font-bold">{epsilon}px</span> · MIN_SAMPLES: <span className="text-white font-bold">{minSamples}</span>
          </div>
        </div>

        {/* DBSCAN Controls & Point Inspection (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Sliders */}
          <div className="space-y-3 bg-[#13151A] p-3 rounded border border-white/10">
            <div>
              <div className="flex justify-between text-xxs font-mono text-zinc-400 mb-1">
                <span>NEIGHBORHOOD DISTANCE (ε)</span>
                <span className="text-emerald-400 font-bold">{epsilon}px</span>
              </div>
              <input
                type="range"
                min="15"
                max="45"
                value={epsilon}
                onChange={(e) => setEpsilon(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xxs font-mono text-zinc-400 mb-1">
                <span>MIN_SAMPLES DENSITY CORE</span>
                <span className="text-white font-bold">{minSamples} pts</span>
              </div>
              <input
                type="range"
                min="2"
                max="6"
                value={minSamples}
                onChange={(e) => setMinSamples(Number(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
            </div>
          </div>

          {/* Selected Point Telemetry */}
          <div className="bg-[#121418] p-3 rounded border border-white/10 font-mono text-xxs">
            <div className="text-zinc-400 pb-1.5 border-b border-white/10 mb-2 flex items-center justify-between">
              <span className="text-emerald-400 font-bold">INSPECTED POINT SENSOR</span>
              <span className="text-zinc-500">PT #{activePoint.id}</span>
            </div>
            <div className="space-y-1 text-zinc-300">
              <div><span className="text-zinc-500">cluster_label:</span> <span className={`font-bold ${activePoint.cluster === 'noise' ? 'text-red-400' : 'text-emerald-400'}`}>{activePoint.cluster === 'noise' ? '-1 (Noise Outlier)' : `Cluster ${activePoint.cluster}`}</span></div>
              <div><span className="text-zinc-500">spatial_coords:</span> [{activePoint.x}, {activePoint.y}]</div>
              <div><span className="text-zinc-500">density_state:</span> {activePoint.cluster === 'noise' ? 'Density-unreachable' : 'Core neighborhood verified'}</div>
            </div>
          </div>

          {/* Synthetic Labeling Attribution */}
          <div className="p-2 bg-white/5 border border-white/10 rounded text-xxs font-mono text-zinc-400 leading-normal">
            <span className="text-amber-400 font-bold">Scientific Note:</span> Illustrative synthetic visualization of DBSCAN density clustering methodology. No arbitrary spherical cluster assumptions.
          </div>
        </div>
      </div>
    </div>
  );
}
