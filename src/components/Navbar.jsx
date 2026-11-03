import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Terminal, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Navbar — Clean, Modern Developer & Engineering Navigation
 * Crisp typography, subtle blur backdrop, and direct routing.
 */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Projects', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0E14]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Code2 className="w-4 h-4" />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-lg text-white tracking-tight group-hover:text-blue-400 transition-colors">
                Shivani Anil
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400">
                CS · Data Science
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold transition-all shadow-md shadow-blue-600/20"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/contact"
              className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-mono"
            >
              Contact
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-white/10 bg-[#0B0E14]/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-2 font-mono text-sm"
          >
            <NavLink
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
            >
              Home
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
