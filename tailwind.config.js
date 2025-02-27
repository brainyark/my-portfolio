/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'gradient-slow': 'gradient 15s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
            opacity: 0.3,
          },
          '50%': {
            transform: 'translateY(-20px)',
            opacity: 0.8,
          }
        }
      },
    },
  },
  plugins: [],
};