import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, GraduationCap, Award, Code2 } from 'lucide-react';

export default function HeroPortraitCard() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md mx-auto sm:max-w-lg lg:max-w-none select-none"
    >
      {/* Ambient backdrop glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-vermilion/15 via-paper-warm to-amber-200/20 rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none" />

      {/* Main Framer-style Portrait Stage */}
      <motion.div
        animate={{
          rotateY: mousePos.x * 0.6,
          rotateX: -mousePos.y * 0.6,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 120 }}
        style={{ perspective: 1000 }}
        className="relative rounded-[2rem] bg-gradient-to-b from-[#F5F1E8] via-[#ECE7DC] to-[#E3DDD0] border border-ink/10 shadow-paper overflow-hidden p-6 sm:p-8 flex flex-col items-center justify-end min-h-[460px] sm:min-h-[520px]"
      >
        {/* Subtle grid pattern in card background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern id="card-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#141413" strokeWidth="0.5" strokeDasharray="2,3" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#card-grid)" />
          </svg>
        </div>

        {/* Harmonic Orbital Rings Behind Portrait */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-30">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full rounded-full border border-dashed border-ink/30 flex items-center justify-center"
          >
            <div className="w-60 h-60 rounded-full border border-ink/20 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border border-vermilion/30" />
            </div>
          </motion.div>
        </div>

        {/* Portrait Image */}
        <div className="relative z-10 w-full flex justify-center items-end -mb-4">
          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <img
              src="/images/shivani-portrait.png"
              alt="Shivani Anil"
              className="h-[360px] sm:h-[420px] object-contain drop-shadow-[0_16px_30px_rgba(20,20,19,0.18)]"
              loading="eager"
            />
          </motion.div>
        </div>

        {/* Floating Chip 1: Open for Opportunities (Top Left) */}
        <motion.div
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-6 left-6 z-20 bg-paper/90 backdrop-blur-md border border-ink/15 rounded-full px-3.5 py-1.5 shadow-fine flex items-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xxs font-mono text-ink font-medium tracking-wide">
            Open for Collabs & Internships
          </span>
        </motion.div>

        {/* Floating Chip 2: IEEE Leadership (Top Right) */}
        <motion.div
          animate={{ y: [3, -3, 3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-6 right-6 z-20 bg-paper/90 backdrop-blur-md border border-ink/15 rounded-full px-3.5 py-1.5 shadow-fine flex items-center gap-1.5"
        >
          <Award className="w-3.5 h-3.5 text-vermilion" />
          <span className="text-xxs font-mono text-ink font-semibold tracking-wide">
            IEEE CS Vice Chair
          </span>
        </motion.div>

        {/* Floating Chip 3: Education Dossier (Bottom Left Overlay) */}
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          className="absolute bottom-6 left-6 z-20 bg-paper/95 backdrop-blur-md border border-ink/15 rounded-xl p-3 shadow-fine hidden sm:block max-w-[210px]"
        >
          <div className="flex items-center gap-1.5 text-xxs font-mono text-vermilion font-semibold uppercase tracking-wider mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>MACE · Kerala</span>
          </div>
          <div className="text-xs font-serif text-ink font-medium leading-tight">
            B.Tech Computer Science
          </div>
          <div className="text-xxs font-mono text-ink-muted">
            Data Science Spec. (2024–28)
          </div>
        </motion.div>

        {/* Floating Chip 4: Tech Signature (Bottom Right Overlay) */}
        <motion.div
          animate={{ y: [2, -2, 2] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-6 right-6 z-20 bg-ink/90 backdrop-blur-md text-paper border border-white/10 rounded-xl px-3 py-2 shadow-fine hidden sm:block"
        >
          <div className="flex items-center gap-1.5 text-xxs font-mono text-vermilion mb-0.5">
            <Code2 className="w-3 h-3" />
            <span className="uppercase tracking-wider">Focus</span>
          </div>
          <div className="text-xxs font-mono text-zinc-300">
            Python · MERN · AI Logic
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Sub-Caption */}
      <div className="mt-3 flex items-center justify-between text-xxs font-mono text-ink-muted px-2">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-vermilion"></span>
          <span>SHIVANI ANIL // PORTFOLIO '26</span>
        </span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-vermilion" />
          <span>KERALA, INDIA</span>
        </span>
      </div>
    </div>
  );
}
