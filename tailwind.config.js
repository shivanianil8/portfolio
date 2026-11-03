/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinema: {
          void: '#05070D',
          dark: '#0A0E1A',
          surface: '#0F1626',
          card: '#141D32',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(0, 242, 254, 0.2)',
          cyan: '#00F2FE',
          emerald: '#00FFA3',
          amber: '#F59E0B',
          indigo: '#6366F1',
          muted: '#94A3B8',
        },
        paper: {
          DEFAULT: '#FAF8F5',
          warm: '#F4EFEA',
          subtle: '#EFECE6',
          dark: '#E5DFD5',
        },
        ink: {
          DEFAULT: '#141413',
          soft: '#242422',
          muted: '#62605B',
          faint: '#9E9C96',
          hairline: 'rgba(20, 20, 19, 0.12)',
        },
        vermilion: {
          DEFAULT: '#E63926',
          hover: '#CD2E1C',
          light: '#FCECE9',
          glow: 'rgba(230, 57, 38, 0.18)',
        },
      },
      fontFamily: {
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        editorial: '-0.015em',
        tracked: '0.15em',
        cinema: '0.22em',
        widest: '0.3em',
      },
      boxShadow: {
        'fine': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'paper': '0 8px 30px -10px rgba(0, 0, 0, 0.07)',
        'cinematic': '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        'cyan-glow': '0 0 35px -5px rgba(0, 242, 254, 0.35)',
        'emerald-glow': '0 0 35px -5px rgba(0, 255, 163, 0.35)',
      },
      fontSize: {
        'xxs': '0.65rem',
        'huge': 'clamp(3.5rem, 10vw, 9.5rem)',
        'massive': 'clamp(4.5rem, 14vw, 13rem)',
      },
      boxShadow: {
        'fine': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'paper': '0 8px 30px -10px rgba(0, 0, 0, 0.07)',
        'cinematic': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
