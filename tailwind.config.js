/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        header: ['Montserrat', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        oswald: ['Oswald', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
      },
      animation: {
        pulse: 'pulse 1s steps(2, start) infinite',
        'pulse-glow': 'pulseGlow 1s ease-in-out infinite',
        blink: 'blink 1s steps(2, start) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        pulseGlow: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.6',
          },
          '50%': {
            transform: 'scale(1.03)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};
