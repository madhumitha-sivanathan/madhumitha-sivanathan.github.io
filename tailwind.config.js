/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#090C12',
          alt: '#0C111A',
          surface: '#10151F',
        },
        line: 'rgba(255,255,255,0.08)',
        'line-soft': 'rgba(255,255,255,0.05)',
        ink: {
          DEFAULT: '#E8EAF0',
          muted: '#8991A7',
          dim: '#5A6377',
        },
        accent: {
          indigo: '#6C7CF6',
          cyan: '#2DD4E8',
          violet: '#A78BFA',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(108,124,246,0.15), 0 8px 40px -12px rgba(108,124,246,0.25)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.35 },
        },
      },
      animation: {
        scan: 'scan 3s ease-in-out infinite',
        blink: 'blink 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
