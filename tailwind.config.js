/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9e0fe',
          300: '#7cc8fd',
          400: '#36aff9',
          500: '#0c96eb',
          600: '#0077c8',
          700: '#015fa3',
          800: '#065186',
          900: '#0b446f',
          950: '#072a49',
        },
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
        fadeIn: 'fadeIn 0.3s ease-out',
        scaleUp: 'scaleUp 0.3s ease-out',
      },
    },
  },
  plugins: [],
};