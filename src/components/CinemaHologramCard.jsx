import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Radio, Scan, Terminal, Activity } from 'lucide-react';

/**
 * CinemaHologramCard — High-Tech Cinematic Director Viewfinder & Hologram Dossier
 * Solves the photo integration by treating the portrait as a cinematic film frame
 * with live HUD telemetry, audio equalizer spectrum, coordinates, and 3D spring tilt.
 */
export default function CinemaHologramCard() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [filterMode, setFilterMode] = useState('cyber'); // 'cyber', 'noir', 'studio'
  const [timecode, setTimecode] = useState('00:00:00:00');

  // Real-time ticking cinema timecode (frames 00-24)
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame = (frame + 1) % 24;
      const d = new Date();
      const h = String(d.getHours()).padStart(2, '0');
      const m = String(d.getMinutes()).padStart(2, '0');
      const s = String(d.getSeconds()).padStart(2, '0');
      const f = String(frame).padStart(2, '0');
      setTimecode(`${h}:${m}:${s}:${f}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] mx-auto group select-none"
      style={{ perspective: 1200 }}
    >
      {/* Ambient Cinema Spotlight behind card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-indigo-500/15 to-emerald-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Main 3D Tilted Glass Frame */}
      <motion.div
        animate={{
          rotateY: mousePos.x,
          rotateX: -mousePos.y,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 180 }}
        className="relative rounded-2xl bg-[#090D18]/90 border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl p-5 sm:p-6"
      >
        {/* HUD Viewfinder Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 font-semibold tracking-wider">REC</span>
            <span className="text-slate-400 hidden sm:inline">[4K UHD · 24FPS]</span>
          </div>
          <div className="text-cyan-400 tracking-widest font-mono text-[11px] sm:text-xs">
            {timecode}
          </div>
          <div className="text-slate-500 text-[10px] sm:text-[11px] hidden sm:block">
            SHUTTER 1/48 · F/1.4
          </div>
        </div>

        {/* Viewfinder Lens Container */}
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#0F1628] via-[#0B0F1C] to-[#060912] border border-cyan-500/20 aspect-[4/5] flex items-end justify-center">
          {/* Subtle Grid & Laser Horizon */}
          <div className="absolute inset-0 cinema-grid opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent pointer-events-none" />

          {/* Corner Crosshair Brackets [ + ] */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/70 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/70 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400/70 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400/70 pointer-events-none" />

          {/* Center Optical Target */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-dashed border-cyan-500/15 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/5 pointer-events-none" />

          {/* Glowing Aura Behind Head */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-b from-cyan-400/25 via-indigo-500/20 to-transparent rounded-full blur-xl pointer-events-none" />

          {/* Portrait Image with Cinematic Grading */}
          <div className="relative z-10 w-full flex justify-center items-end">
            <img
              src="/images/shivani-portrait.png"
              alt="Shivani Anil"
              className={`w-[85%] max-w-[340px] object-cover object-top transition-all duration-500 ${
                filterMode === 'cyber'
                  ? 'brightness-95 contrast-110 drop-shadow-[0_10px_35px_rgba(0,242,254,0.3)]'
                  : filterMode === 'noir'
                  ? 'grayscale brightness-90 contrast-125 drop-shadow-[0_10px_30px_rgba(255,255,255,0.2)]'
                  : 'brightness-100 contrast-105 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]'
              }`}
            />
          </div>

          {/* Holographic Scanline Overlay */}
          <div className="absolute inset-0 hologram-scanline opacity-25 pointer-events-none" />

          {/* Bottom HUD Overlay Strip */}
          <div className="absolute bottom-2 left-2 right-2 z-20 px-3 py-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-white font-medium">SHIVANI ANIL</span>
            </div>
            <div className="text-cyan-400/90 text-[10px] hidden sm:block">
              10.057° N, 76.629° E
            </div>
            <div className="text-slate-400 text-[10px]">
              MACE '28
            </div>
          </div>
        </div>

        {/* Card Footer: Live Audio Equalizer & Mode Toggle */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
          {/* Audio Visualizer Waves */}
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <div className="flex items-end gap-1 h-5">
              <span className="w-1 bg-cyan-400 rounded-full animate-equalizer-1" />
              <span className="w-1 bg-cyan-300 rounded-full animate-equalizer-2" />
              <span className="w-1 bg-emerald-400 rounded-full animate-equalizer-3" />
              <span className="w-1 bg-cyan-400 rounded-full animate-equalizer-4" />
              <span className="w-1 bg-indigo-400 rounded-full animate-equalizer-5" />
            </div>
            <span className="text-[10px] font-mono text-slate-400 ml-1 hidden sm:inline">
              HUD TELEMETRY ACTIVE
            </span>
          </div>

          {/* Filter Mode Selector */}
          <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10 text-[10px] font-mono">
            <button
              onClick={() => setFilterMode('cyber')}
              className={`px-2 py-0.5 rounded transition-colors ${
                filterMode === 'cyber'
                  ? 'bg-cyan-500 text-black font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              CYBER
            </button>
            <button
              onClick={() => setFilterMode('noir')}
              className={`px-2 py-0.5 rounded transition-colors ${
                filterMode === 'noir'
                  ? 'bg-slate-200 text-black font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              NOIR
            </button>
            <button
              onClick={() => setFilterMode('studio')}
              className={`px-2 py-0.5 rounded transition-colors ${
                filterMode === 'studio'
                  ? 'bg-emerald-500 text-black font-semibold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              STUDIO
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
