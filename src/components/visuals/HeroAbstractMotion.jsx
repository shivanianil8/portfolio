import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroAbstractMotion() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-lg bg-gradient-to-b from-paper-warm to-paper border border-ink/10 flex items-center justify-center overflow-hidden shadow-paper select-none p-6"
    >
      {/* Delicate background grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-subtle-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#141413" strokeWidth="0.5" strokeDasharray="2,3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-subtle-grid)" />
        </svg>
      </div>

      {/* Ambient warm gradient lens */}
      <div className="absolute w-72 h-72 rounded-full bg-vermilion/5 blur-3xl pointer-events-none"></div>

      {/* Main Flowing Topographic & Data Contour Curves */}
      <motion.div
        animate={{
          x: mousePos.x * 0.5,
          y: mousePos.y * 0.5,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="relative w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 flex items-center justify-center"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-hidden">
          <defs>
            <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E63926" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#EA580C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#141413" stopOpacity="0.15" />
            </linearGradient>
            <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E63926" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#E63926" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Harmonic Contour Ring 1 */}
          <motion.path
            d="M 200,60 C 275,65 335,125 340,200 C 345,275 275,335 200,340 C 125,345 65,275 60,200 C 55,125 125,55 200,60 Z"
            fill="none"
            stroke="#141413"
            strokeWidth="0.8"
            strokeDasharray="4,4"
            opacity="0.3"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />

          {/* Harmonic Contour Ring 2 */}
          <motion.path
            d="M 200,90 C 255,95 295,135 300,200 C 305,260 260,300 200,305 C 140,310 95,260 90,200 C 85,140 140,85 200,90 Z"
            fill="none"
            stroke="#E63926"
            strokeWidth="1.2"
            opacity="0.5"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />

          {/* Flowing Organic Ribbon */}
          <path
            d="M 60,220 C 120,120 180,280 240,160 C 300,60 340,240 360,180"
            fill="none"
            stroke="url(#curve-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Secondary Delicate Flow */}
          <path
            d="M 50,180 C 130,260 190,140 250,220 C 310,300 350,140 370,210"
            fill="none"
            stroke="#141413"
            strokeWidth="0.75"
            opacity="0.25"
            strokeDasharray="3,3"
          />

          {/* Centerpiece Lens */}
          <circle cx="200" cy="200" r="44" fill="#FAF8F5" stroke="#141413" strokeWidth="1" />
          <circle cx="200" cy="200" r="32" fill="url(#node-glow)" />
          <circle cx="200" cy="200" r="6" fill="#E63926" />

          {/* Dynamic Nodes with Labels */}
          <g transform="translate(140, 150)">
            <circle cx="0" cy="0" r="4" fill="#141413" />
            <text x="8" y="3" fill="#141413" fontSize="9" fontFamily="JetBrains Mono" opacity="0.6">
              Data
            </text>
          </g>

          <g transform="translate(260, 160)">
            <circle cx="0" cy="0" r="4" fill="#E63926" />
            <text x="8" y="3" fill="#E63926" fontSize="9" fontFamily="JetBrains Mono" fontWeight="600">
              Logic
            </text>
          </g>

          <g transform="translate(240, 260)">
            <circle cx="0" cy="0" r="3.5" fill="#141413" />
            <text x="8" y="3" fill="#141413" fontSize="9" fontFamily="JetBrains Mono" opacity="0.6">
              Vision
            </text>
          </g>

          <g transform="translate(110, 240)">
            <circle cx="0" cy="0" r="3.5" fill="#141413" />
            <text x="8" y="3" fill="#141413" fontSize="9" fontFamily="JetBrains Mono" opacity="0.6">
              Systems
            </text>
          </g>
        </svg>
      </motion.div>

      {/* Minimal caption */}
      <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xxs font-mono text-ink-muted">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-vermilion"></span>
          <span>EMPIRICAL EXPLORATION</span>
        </span>
        <span className="hidden sm:inline">DATA · LOGIC · VISION · SYSTEMS</span>
      </div>
    </div>
  );
}
