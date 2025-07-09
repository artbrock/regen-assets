/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./src/_includes/**/*.{html,js,njk,md}",
    "./src/_layouts/**/*.{html,js,njk,md}"
  ],
  theme: {
    extend: {
      colors: {
        'aurora-purple': {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        'aurora-green': {
          400: '#6ee7b7',
          500: '#34d399',
          600: '#10b981',
        },
        'aurora-bg': '#181825',
        'aurora-surface': '#232336',
        'aurora-card': '#232336',
        'aurora-border': '#2e2e48',
        'aurora-text': '#fff',
        'aurora-muted': '#a1a1aa',
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #34d399 100%)',
        'aurora-gradient-2': 'linear-gradient(120deg, #a78bfa 0%, #34d399 100%)',
        'aurora-gradient-3': 'linear-gradient(120deg, #8b5cf6 0%, #6ee7b7 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 