import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'praxeti-white': '#F6F7ED',
        'midnight-mirage': '#001F3F',
        'mantis': '#74C365',
        'picture-book-green': '#00804C',
        'nuit-blanche': '#1E488F',
        'lime-accent': '#DBE64C',
        background: '#F6F7ED',
        foreground: '#001F3F',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        'noto-sans': ['var(--font-noto-sans)', 'system-ui', 'sans-serif'],
        'corinthia': ['var(--font-corinthia)', 'cursive'],
        'advent-pro': ['var(--font-advent-pro)', 'system-ui', 'sans-serif'],
        'birthstone-bounce': ['var(--font-birthstone-bounce)', 'cursive'],
        mono: ['monospace'],
      },
      animation: {
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.26s ease-out',
        'slide-up': 'slideUp 0.26s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }: { addUtilities: any }) {
      addUtilities({
        '.gradient-text-green': {
          background: 'linear-gradient(to right, #74C365, #00804C)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.gradient-text-blue': {
          background: 'linear-gradient(to right, #001F3F, #1E488F)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      })
    },
  ],
}

export default config
