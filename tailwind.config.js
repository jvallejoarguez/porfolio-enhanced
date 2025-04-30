/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      colors: {
        'primary': {
          900: '#312e81', // indigo-900
          800: '#3730a3', // indigo-800
          700: '#4338ca', // indigo-700
          600: '#4f46e5', // indigo-600
          500: '#6366f1', // indigo-500
          400: '#818cf8', // indigo-400
          300: '#a5b4fc', // indigo-300
          200: '#c7d2fe', // indigo-200
          100: '#e0e7ff', // indigo-100
          50: '#eef2ff',  // indigo-50
        },
        'dark': {
          950: '#0f172a', // slate-950
          900: '#1e293b', // slate-900
          800: '#334155', // slate-800
          700: '#475569', // slate-700
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 