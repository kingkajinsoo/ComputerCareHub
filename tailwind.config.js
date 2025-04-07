/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a2540',
          light: '#1a3550',
          dark: '#051530',
        },
        secondary: {
          DEFAULT: '#3e3e3e',
          light: '#5e5e5e',
          dark: '#2e2e2e',
        },
        accent: {
          DEFAULT: '#0066ff',
          light: '#3385ff',
          dark: '#0055cc',
        },
      },
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
        },
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        'html': { 
          wordBreak: 'keep-all',
          overflowWrap: 'break-word' 
        },
      })
    },
  ],
}