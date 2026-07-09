/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          950: '#06111f',
          900: '#0a2340',
          800: '#0d3766',
          700: '#0b4d91',
          600: '#0768c9',
          500: '#1686f7',
          400: '#4ca5ff',
          300: '#87c5ff',
          200: '#b9dcff',
          100: '#dceeff',
          50: '#f0f8ff',
        },
      },
      fontFamily: {
        sans: [
          'Geist Variable',
          'Geist',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
