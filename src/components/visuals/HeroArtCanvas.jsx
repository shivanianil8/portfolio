import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroArtCanvas() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeFrame, setActiveFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFrame((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 24;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 24;
    setMousePos({ x, y });
  };

  const frameQuotes = [
    { text: "Transforming messy empirical data into rigorous clarity.", tag: "SPATIAL ANOMALY" },
    { text: "Pure Horn clause logic without black-box arithmetic bias.", tag: "FIRST-ORDER LOGIC" },
    { text: "5,000+ geospatial records mapped across urban microclimates.", tag: "CLIMATE ANALYTICS" },
    { text: "Non-spherical clustering isolating density-reachable cores.", tag: "DBSCAN GEOMETRY" },
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] rounded-sm border border-ink/15 bg-paper-warm overflow-hidden shadow-paper select-none flex flex-col justify-between p-4 sm:p-6"
    >
      {/* Editorial Header / Docket Marking */}
      <div className="flex items-center justify-between text-xxs font-mono text-ink-muted uppercase tracking-widest border-b border-ink/10 pb-3 z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-vermilion inline-block animate-pulse"></span>
          <span className="font-semibold text-ink">SPEC. 00 // EMPIRICAL ISOTHERM COMPOSITION</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-ink-faint">
          <span>LAT 10.0553° N</span>
          <span>LON 76.6288° E</span>
          <span className="text-ink font-semibold">MACE · DS-28</span>
        </div>
      </div>

      {/* Centerpiece Layered Art Composition (No text clashes!) */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        {/* Subtle Background Coordinate Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="art-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#141413" strokeWidth="0.5" strokeDasharray="2,3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#art-grid)" />
          </svg>
        </div>

        {/* Dynamic Abstract Isotherm & Topographic Botanical Rose */}
        <motion.div
          animate={{
            x: mousePos.x * 0.4,
            y: mousePos.y * 0.4,
            rotate: [0, 0.8, 0, -0.8, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 pointer-events-none flex items-center justify-center"
        >
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <radialGradient id="thermal-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E63926" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#EA580C" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#141413" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="etch-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#141413" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E63926" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Layered Botanical / Topographic Petals (Reference 2 Tribute) */}
            <g stroke="#141413" strokeWidth="0.75" fill="none" opacity="0.35">
              {/* Petal Loop 1 */}
              <path d="M 200,200 C 170,120 120,90 200,50 C 280,90 230,120 200,200 Z" />
              {/* Petal Loop 2 */}
              <path d="M 200,200 C 280,170 310,120 350,200 C 310,280 280,230 200,200 Z" />
              {/* Petal Loop 3 */}
              <path d="M 200,200 C 230,280 280,310 200,350 C 120,310 170,280 200,200 Z" />
              {/* Petal Loop 4 */}
              <path d="M 200,200 C 120,230 90,280 50,200 C 90,120 120,170 200,200 Z" />
              {/* Diagonal Cross Petals */}
              <ellipse cx="200" cy="200" rx="140" ry="60" transform="rotate(45 200 200)" />
              <ellipse cx="200" cy="200" rx="140" ry="60" transform="rotate(-45 200 200)" />
            </g>

            {/* Organic Thermal Isotherm Rings */}
            <path
              d="M 200,60 C 280,65 340,120 345,200 C 350,280 285,340 200,345 C 120,350 55,285 55,200 C 55,120 120,55 200,60 Z"
              fill="none"
              stroke="#141413"
              strokeWidth="1"
              strokeDasharray="4,4"
              opacity="0.25"
            />
            <path
              d="M 200,95 C 260,100 305,145 305,200 C 305,255 260,305 200,305 C 140,305 95,255 95,200 C 95,145 140,90 200,95 Z"
              fill="none"
              stroke="#E63926"
              strokeWidth="1.2"
              opacity="0.45"
            />
            <circle cx="200" cy="200" r="70" fill="url(#thermal-core)" />

            {/* Core Lens Graphic (Reference 1 & 2 Punch-out) */}
            <circle cx="200" cy="200" r="32" fill="#FAF8F5" stroke="#141413" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="16" fill="#141413" />
            <circle cx="200" cy="200" r="6" fill="#E63926" />
            <circle cx="200" cy="200" r="2" fill="#FAF8F5" />

            {/* Scientific Coordinate Compass Crosshairs */}
            <line x1="200" y1="20" x2="200" y2="380" stroke="#141413" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.3" />
            <line x1="20" y1="200" x2="380" y2="200" stroke="#141413" strokeWidth="0.75" strokeDasharray="3,3" opacity="0.3" />
            <circle cx="200" cy="20" r="2" fill="#E63926" />
            <circle cx="380" cy="200" r="2" fill="#E63926" />
            <circle cx="200" cy="380" r="2" fill="#141413" />
            <circle cx="20" cy="200" r="2" fill="#141413" />
          </svg>
        </motion.div>

        {/* Plate A: Zine Vermilion Banner (Reference 1 Tribute) */}
        <motion.div
          animate={{ x: mousePos.x * -0.6, y: mousePos.y * -0.6 }}
          className="absolute top-2 left-2 sm:left-4 bg-vermilion text-white px-3 sm:px-4 py-1.5 font-mono text-xxs tracking-widest flex items-center gap-2 shadow-fine z-20 uppercase font-semibold"
        >
          <span>DATA_SYSTEM_SPEC</span>
          <span className="font-sans font-bold">→</span>
        </motion.div>

        {/* Plate B: Precision Metadata Callout (Cleanly positioned, non-overlapping) */}
        <div className="absolute top-3 right-2 sm:right-4 bg-paper/90 backdrop-blur border border-ink/15 p-2 font-mono text-xxs text-ink z-10 shadow-fine hidden sm:block">
          <div className="text-vermilion font-bold">ISOTHERM: ΔT +5.2°C</div>
          <div className="text-ink-muted">RECORDS: 5,000+ SAMPLES</div>
        </div>

        {/* Plate C: Studio Quote Card (Reference 2 Editorial Style) */}
        <motion.div
          animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
          className="absolute bottom-2 right-2 sm:right-4 bg-ink text-paper p-3.5 sm:p-4 rounded-sm border border-ink/40 w-52 sm:w-64 shadow-paper z-20"
        >
          <div className="flex items-center justify-between text-xxs font-mono text-ink-muted mb-1.5 pb-1 border-b border-white/10">
            <span className="text-vermilion font-bold uppercase tracking-wider">
              ● {frameQuotes[activeFrame].tag}
            </span>
            <span className="text-white/60">0{activeFrame + 1}/04</span>
          </div>
          <div className="font-serif italic text-sm sm:text-base leading-snug text-paper">
            "{frameQuotes[activeFrame].text}"
          </div>
          <div className="mt-2.5 flex items-center justify-between font-mono text-xxs text-white/50">
            <span>MACE · KERALA</span>
            <span className="text-vermilion font-semibold">2026</span>
          </div>
        </motion.div>
      </div>

      {/* Editorial Footer Strip */}
      <div className="border-t border-ink/10 pt-3 flex items-center justify-between text-xxs font-mono text-ink-muted z-10">
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-ink font-semibold">SYSTEM ARCHITECTURE</span>
          <span className="hidden sm:inline">PROLOG · PYTHON · OPENCV · MERN</span>
        </div>
        <div className="flex items-center gap-1.5 text-vermilion font-semibold">
          <span>EXPLORE WORKS</span>
          <span>↓</span>
        </div>
      </div>
    </div>
  );
}
