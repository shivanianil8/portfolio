import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Eye, RefreshCw, Layers } from 'lucide-react';

/**
 * CinemaNeuralNexus — High-Tech 3D Data Manifold & Algorithmic Geometry Visualizer
 * A pure graphical interactive simulation representing high-dimensional data science,
 * topological clustering (t-SNE/UMAP), and neural logic graphs.
 */
export default function CinemaNeuralNexus() {
  const canvasRef = useRef(null);
  const [activeMetric, setActiveMetric] = useState('isotherm'); // 'isotherm', 'dbscan', 'logic'
  const [dataDensity, setDataDensity] = useState(120);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    const parentW = canvas.parentElement?.clientWidth || 460;
    const parentH = canvas.parentElement?.clientHeight || 0;
    let width = (canvas.width = parentW);
    let height = (canvas.height = parentH > 100 ? parentH : parentW);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const w = canvas.parentElement.clientWidth || 460;
      const h = canvas.parentElement.clientHeight || 0;
      width = canvas.width = w;
      height = canvas.height = h > 100 ? h : w;
    };
    window.addEventListener('resize', handleResize);

    // 3D Point Cloud on a Sphere/Manifold
    const points = [];
    const count = dataDensity;

    for (let i = 0; i < count; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      const r = 140 + (Math.random() - 0.5) * 40;

      // Color scheme based on metric
      let color;
      if (activeMetric === 'isotherm') {
        // Thermal spectrum (cyan -> yellow -> red)
        const t = Math.random();
        if (t < 0.4) color = 'rgba(0, 242, 254, 0.8)';
        else if (t < 0.75) color = 'rgba(245, 158, 11, 0.85)';
        else color = 'rgba(239, 68, 68, 0.9)';
      } else if (activeMetric === 'dbscan') {
        // Cluster labels (mint, violet, cyan)
        const cluster = Math.floor(Math.random() * 3);
        color = cluster === 0 ? 'rgba(0, 255, 163, 0.85)' : cluster === 1 ? 'rgba(99, 102, 241, 0.85)' : 'rgba(0, 242, 254, 0.85)';
      } else {
        // Logic tree (monochrome with cyan highlights)
        color = Math.random() > 0.8 ? 'rgba(0, 242, 254, 0.9)' : 'rgba(226, 232, 240, 0.7)';
      }

      points.push({
        origX: r * Math.sin(theta) * Math.cos(phi),
        origY: r * Math.sin(theta) * Math.sin(phi),
        origZ: r * Math.cos(theta),
        x: 0,
        y: 0,
        z: 0,
        color,
        size: Math.random() * 2 + 1.2,
      });
    }

    let rotX = 0.003;
    let rotY = 0.005;
    let angleX = 0;
    let angleY = 0;

    let mouseActive = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const onMouseDown = (e) => {
      mouseActive = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!mouseActive) return;
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      angleY += dx * 0.008;
      angleX += dy * 0.008;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const onMouseUp = () => {
      mouseActive = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    const render = () => {
      if (!mouseActive) {
        angleX += rotX;
        angleY += rotY;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = 320;

      // Rotate and project points
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      const projected = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotation around Y
        let x1 = p.origX * cosY - p.origZ * sinY;
        let z1 = p.origZ * cosY + p.origX * sinY;

        // Rotation around X
        let y2 = p.origY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.origY * sinX;

        // Perspective projection
        const scale = fov / (fov + z2 + 180);
        const x2d = cx + x1 * scale;
        const y2d = cy + y2 * scale;

        projected.push({
          x: x2d,
          y: y2d,
          z: z2,
          scale,
          color: p.color,
          size: p.size * scale,
        });
      }

      // Sort by depth
      projected.sort((a, b) => b.z - a.z);

      // Draw connection lines for close nodes
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < Math.min(i + 8, projected.length); j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 55) {
            const alpha = (1 - dist / 55) * 0.25 * p1.scale;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 242, 254, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw projected nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.size), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.scale > 0.8 ? 8 : 2;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw coordinate HUD rings around perimeter
      ctx.beginPath();
      ctx.arc(cx, cy, 185, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animId);
    };
  }, [activeMetric, dataDensity]);

  return (
    <div className="relative rounded-2xl bg-[#090D18]/90 border border-white/10 backdrop-blur-2xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
      {/* Top HUD Console */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-cyan-400 font-semibold tracking-wider">NEURAL MANIFOLD</span>
        </div>
        <div className="text-slate-400 text-[11px] font-mono hidden sm:block">
          3D TOPOLOGICAL T-SNE PROJECTION
        </div>
        <div className="text-emerald-400 text-[10px] sm:text-xs">
          {dataDensity} NODES · 60 FPS
        </div>
      </div>

      {/* Main Interactive Canvas */}
      <div className="relative w-full aspect-square min-h-[360px] sm:min-h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing">
        {/* Radar concentric sweep */}
        <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute inset-16 rounded-full border border-cyan-500/10 pointer-events-none" />
        <div className="absolute inset-28 rounded-full border border-dashed border-white/5 pointer-events-none" />

        {/* Canvas */}
        <canvas ref={canvasRef} className="w-full h-full" />

        {/* Corner HUD Reticles */}
        <div className="absolute top-2 left-2 text-[10px] font-mono text-cyan-400/60 pointer-events-none">
          SYS // DIM_128D
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-500 pointer-events-none">
          DRAG TO ROTATE 3D
        </div>
      </div>

      {/* Metric Selectors & Telemetry Controls */}
      <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1 text-[11px] font-mono">
          <button
            onClick={() => setActiveMetric('isotherm')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeMetric === 'isotherm'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            ISOTHERM
          </button>
          <button
            onClick={() => setActiveMetric('dbscan')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeMetric === 'dbscan'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            DBSCAN
          </button>
          <button
            onClick={() => setActiveMetric('logic')}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeMetric === 'logic'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            HORN LOGIC
          </button>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <span>DENSITY:</span>
          <button
            onClick={() => setDataDensity((d) => (d === 80 ? 120 : d === 120 ? 180 : 80))}
            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:border-cyan-400 text-cyan-300 transition-colors"
          >
            {dataDensity} PTS
          </button>
        </div>
      </div>
    </div>
  );
}
