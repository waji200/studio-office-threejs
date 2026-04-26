import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'interactive-blue': '#081026',
        'interactive-cyan': '#60d5fb',
        'code-orange': '#e78a4e',
      },
      fontFamily: {
        georgia: ['Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
      fontSize: {
        marquee: '72px',
      },
      spacing: {
        15: '60px',
        35: '140px',
      },
      opacity: {
        '3': '0.03',
        '3.5': '0.035',
        '4': '0.04',
        '5': '0.05',
        '6': '0.06',
      },
      zIndex: {
        100: '100',
      },
      animation: {
        'scroll-left': 'scroll-left 50s linear infinite',
        'scroll-right': 'scroll-right 50s linear infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
