import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#07030F',
        abyss: '#0E071D',
        plum: '#160B2E',
        lavender: '#C084FC',
        violet: '#A855F7',
        magenta: '#E879F9',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'nova-radial':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(168,85,247,0.25), transparent), radial-gradient(ellipse 60% 40% at 90% 90%, rgba(232,121,249,0.12), transparent)',
        'nova-grid':
          'radial-gradient(rgba(192,132,252,0.35) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(168,85,247,0.15)',
        'glow-lg': '0 0 60px rgba(168,85,247,0.25)',
        'glow-magenta': '0 0 40px rgba(232,121,249,0.2)',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '70%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-14px) translateX(8px)' },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 18s linear infinite',
        'pulse-ring': 'pulse-ring 3s cubic-bezier(0.2,0.6,0.4,1) infinite',
        drift: 'drift 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
