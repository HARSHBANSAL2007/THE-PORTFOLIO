/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#060913',
          pure: '#03050a',
          card: '#0c1222',
          elevated: '#111a33',
        },
        navy: {
          deep: '#070c1b',
          DEFAULT: '#1e3a8a',
          light: '#2563eb',
          electric: '#3b82f6',
          cyan: '#38bdf8',
        },
        blood: {
          // Re-mapped to cyber electric cobalt/navy for seamless UI transition
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          glow: 'rgba(37, 99, 235, 0.5)',
        },
        ember: {
          DEFAULT: '#38bdf8',
        },
        /* RB22-inspired accents: a navy car with sharp red and yellow.
           Used sparingly - navy carries the page, these punctuate it.
           `red.bright` and `yellow` are the on-dark text variants, chosen
           to clear 4.5:1 against the void background. */
        rb: {
          red: '#E10600',
          'red-deep': '#B30500',
          'red-bright': '#FF4D4D',
          yellow: '#FFC906',
          'yellow-deep': '#D9A400',
        },
        bone: {
          DEFAULT: '#f1f5f9',
          dim: '#cbd5e1',
        },
        steel: {
          DEFAULT: '#94a3b8',
          dim: '#64748b',
          bright: '#cbd5e1',
        },
        line: {
          DEFAULT: '#17223b',
          subtle: 'rgba(56, 189, 248, 0.08)',
          bright: '#24345c',
        }
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', 'Syne', 'Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', '"Playfair Display"', 'serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'navy-glow': '0 0 35px -5px rgba(37, 99, 235, 0.55)',
        'cyan-glow': '0 0 25px 0 rgba(56, 189, 248, 0.45)',
        'void-card': '0 8px 32px 0 rgba(3, 7, 18, 0.8)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}
