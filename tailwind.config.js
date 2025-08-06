/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-elevated': 'var(--color-surface-elevated)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        'muted-small': 'var(--color-muted-small)',
        subtle: 'var(--color-subtle)',
        line: 'var(--color-line)',
        border: 'var(--color-border)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
        'soft-white': 'var(--color-soft-white)',
        'terminal-bg': 'var(--color-terminal-bg)',
        'terminal-text': 'var(--color-terminal-text)',
        'terminal-prompt': 'var(--color-terminal-prompt)',
      },
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
