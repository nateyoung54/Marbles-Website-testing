import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand tokens
        bg: '#F6F3EE',
        ink: '#141414',
        charcoal: '#232323',
        line: '#E6E1DA',
        orange: '#F36D21'
      },
      fontFamily: {
        // Swap these with your chosen fonts (e.g., via next/font)
        headline: ['ui-serif', 'Georgia', 'serif'],
        body: ['ui-sans-serif', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        xl: '16px'
      }
    }
  },
  plugins: []
};

export default config;
