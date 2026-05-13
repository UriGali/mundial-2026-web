/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          700: '#1e3360',
          800: '#152547',
          900: '#0d1b3e',
          950: '#060d1f',
        },
        gold: {
          DEFAULT: '#d4af37',
          light:   '#e8c84a',
          dark:    '#b89520',
          shine:   '#f5d97a',
          muted:   '#a8892b',
        },
      },
      fontFamily: {
        inter:  ['Inter',  'system-ui', 'sans-serif'],
        oswald: ['Oswald', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(160deg,#020617 0%,#0f172a 45%,#1e293b 75%,#020617 100%)',
        'gold-shine':   'linear-gradient(105deg,#b8922a 0%,#d4af37 30%,#f5d97a 50%,#d4af37 70%,#b8922a 100%)',
        'gold-vert':    'linear-gradient(180deg,#f5d97a 0%,#d4af37 50%,#b8922a 100%)',
        'card-glass':   'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0.02) 100%)',
      },
      animation: {
        'ticker': 'ticker 40s linear infinite',
        'glow':   'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%':   { 'text-shadow': '0 0 10px rgba(212,175,55,0.3)' },
          '100%': { 'text-shadow': '0 0 30px rgba(212,175,55,0.8), 0 0 60px rgba(212,175,55,0.3)' },
        },
      },
      boxShadow: {
        'gold':      '0 0 30px rgba(212,175,55,0.25), 0 0 60px rgba(212,175,55,0.08)',
        'gold-sm':   '0 0 12px rgba(212,175,55,0.2)',
        'gold-inset':'inset 0 1px 0 rgba(212,175,55,0.25)',
        'card':      '0 8px 32px rgba(0,0,0,0.5)',
        'card-hover':'0 16px 48px rgba(0,0,0,0.6), 0 0 24px rgba(212,175,55,0.1)',
      },
      dropShadow: {
        'gold': '0 0 12px rgba(212,175,55,0.6)',
      },
    },
  },
  plugins: [],
};
