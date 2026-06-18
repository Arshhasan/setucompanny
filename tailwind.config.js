/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003055',
          dark: '#001f38',
          light: '#004a80',
        },
        blubrand: '#0077B5',
        accent: {
          DEFAULT: '#FFB300',
          bright: '#FFDD00',
          dark: '#e6a000',
        },
        body: '#292929',
        cream: '#E8E0D7',
        lightbg: '#F8F8F8',
      },
      fontFamily: {
        cairo: ["'Cairo'", 'sans-serif'],
      },
      letterSpacing: {
        nav: '2.74px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(3rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-3rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.5s both',
        'fade-in-down': 'fadeInDown 1.5s both',
        'slide-in-left': 'slideInLeft 1s both',
        'slide-in-right': 'slideInRight 1s both',
        'slide-in-up': 'slideInUp 1s both',
      },
    },
  },
  plugins: [],
}
