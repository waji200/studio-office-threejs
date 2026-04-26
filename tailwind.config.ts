import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'canvas-blue': '#5a90d8',
        'dark-blue': '#081026',
        'dark-blue-light': '#0d1b3a',
        'cyan-bright': '#60d5fb',
        'cyan-glow': '#3ecdfa',
        'orange-code': '#e78a4e',
        'light-panel': '#f8f9fb',
        'light-bg': '#fef7f0',
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
        20: '80px',
        32: '128px',
      },
      width: {
        '2/3': '66.666%',
        '1/3': '33.334%',
      },
      maxWidth: {
        'hero-content': '1200px',
      },
      opacity: {
        3: '0.03',
        4: '0.04',
        5: '0.05',
        6: '0.06',
        8: '0.08',
        15: '0.15',
      },
      backdropBlur: {
        xs: '4px',
        sm: '8px',
        md: '12px',
      },
      boxShadow: {
        'envelope': '0 24px 80px rgba(0, 0, 0, 0.25)',
        'envelope-hover': '0 24px 80px rgba(231, 138, 78, 0.15)',
        'canvas-overlay': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'canvas-overlay-hover': '0 12px 40px rgba(0, 0, 0, 0.3)',
        'article': '0 16px 48px rgba(0, 0, 0, 0.08)',
        'client': '0 16px 48px rgba(0, 0, 0, 0.08)',
      },
      zIndex: {
        0: '0',
        1: '1',
        10: '10',
        20: '20',
        100: '100',
      },
      animation: {
        'scroll-left': 'scroll-left 50s linear infinite',
        'scroll-right': 'scroll-right 50s linear infinite',
        'blink-cursor': 'blink-cursor 1s step-end infinite',
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
        'blink-cursor': {
          '50%': { opacity: '0' },
        },
      },
      borderColor: {
        DEFAULT: 'rgb(0 0 0 / 0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
